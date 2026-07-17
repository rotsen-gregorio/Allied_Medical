const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const DOCUMENT_FILES = {
  catalog: 'catalog_comb.pdf',
  spfs: 'spfs_comb.pdf',
  annual: 'arep.pdf',
  ceu_schedule: 'ceu_schedule.pdf'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, __dirname),
  filename: (req, file, cb) => {
    const docType = req.body && req.body.docType;
    const filename = DOCUMENT_FILES[docType];
    if (!filename) return cb(new Error('Invalid document type'));
    cb(null, filename);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.originalname.toLowerCase().endsWith('.pdf')) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline');
    }
  }
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'amhsinc_modern_index.html'));
});

app.post('/admin/verify', (req, res) => {
  const pw = req.headers['x-admin-password'];
  if (!pw || pw !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }
  res.json({ success: true });
});

app.use('/admin/upload', (req, res, next) => {
  if (req.method !== 'POST') return next();
  const pw = req.headers['x-admin-password'];
  if (!pw || pw !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }
  next();
});

app.post('/admin/upload', (req, res) => {
  upload.single('pdf')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File exceeds 20MB limit' });
      }
      return res.status(400).json({ error: err.message });
    }
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    console.log(`[${new Date().toISOString()}] Updated: ${req.file.filename}`);
    res.json({ success: true, message: `${req.file.filename} updated successfully` });
  });
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Admin:  http://localhost:${PORT}/admin-upload.html`);
  console.log(`Password: set ADMIN_PASSWORD env var (default: amhs2024admin)`);
});
