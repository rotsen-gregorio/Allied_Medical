# AMHS Inc. Website Manual

**Allied Medical & Health Services, Inc.**
730 S Central Ave, Ste 208 | Glendale, CA 91204

---

## Table of Contents

1. [Site Overview](#site-overview)
2. [Page Structure (Every Page)](#page-structure-every-page)
3. [Pages](#pages)
4. [Admin Portal](#admin-portal)
5. [Footer Documents](#footer-documents)
6. [⚠️ Images — Action Required](#️-images--action-required)
7. [Contact Reference](#contact-reference)

---

## Site Overview

The website has **10 public-facing pages** and **2 admin pages**. It runs on a Node.js server and is hosted at the root of the AMHSINC folder. The server must be running for the site to work locally.

**To start the server locally:**
```
node server.js
```
Then open `http://localhost:3000` in a browser.

---

## Page Structure (Every Page)

Every page follows the same three-part layout:

```
┌─────────────────────────────────────┐
│  HEADER (Logo + Navigation)         │
├─────────────────────────────────────┤
│  HERO BANNER (Title + background    │
│  image)                             │
├─────────────────────────────────────┤
│  MAIN CONTENT (sections vary by     │
│  page)                              │
├─────────────────────────────────────┤
│  FOOTER (Address + PDF links)       │
└─────────────────────────────────────┘
```

### Header
- **Logo** (`amhs-logo.png`) — top left, links to home
- **School name and tagline** — "Glendale, California | Healthcare career training"
- **Navigation menu** — top right (see nav structure below)
- On mobile (screens under 760px wide): navigation collapses into a hamburger menu (☰)

### Navigation Menu
```
Home
Programs Offered ▾
    └── Vocational Nursing
    └── Phlebotomy Technician I
    └── Nursing Assistant
    └── CEU for CNA
Schedule
About Us
Contact Us
```

### Footer
Appears on every page. Contains:
- School name and copyright
- Address: 730 S Central Ave, Ste 208 | Glendale, CA 91204
- Office Hours: M/T/Th/F 9am–7pm, Saturday 9am–4pm
- Three PDF document links (see [Footer Documents](#footer-documents))
- A small, subtle **Admin Login** link (bottom right of the footer links row)

---

## Pages

### Home (`index.html`)
The main landing page.

| Section | Description |
|---|---|
| Hero Banner | Large banner with headline "Healthcare Career Training Programs in Glendale, CA" |
| Programs Offered | Four cards — Vocational Nursing, Phlebotomy Technician I, Nursing Assistant, CEU for CNA — each with an image, description, and a link to the program page |
| Schedule & Enrollment | Brief enrollment information with a link to the full schedule |
| Contact Block | Address, phone, email, office hours |

---

### Vocational Nursing (`vocational-nursing.html`)
Covers the LVN program (1,564 hours of training).

| Section | Description |
|---|---|
| Course Objective | Overview of what the program teaches |
| Program Overview | List of theory subjects covered |
| Schedule | Days and hours of the program |
| Clinical Facilities | Where students complete clinical hours |
| Admission Requirements | Documents and prerequisites |
| Job Opportunities | Career paths after graduation |
| State Licensing Requirements | BVNPT licensing and NCLEX information |

---

### Phlebotomy Technician I (`phlebotomy-technician.html`)
Covers the 98-hour phlebotomy program.

| Section | Description |
|---|---|
| Course Objective | What students will learn |
| Program Overview | 40 lecture hours + 58 lab/clinical hours |
| Training Schedule | Days and times |
| Admission Requirements | Prerequisites |
| Hands-On Training Requirements | 25 skin punctures + 50 venipunctures required |
| Job Opportunities | Career paths after certification |

---

### Nursing Assistant (`nursing-assistant.html`)
Covers the 152-hour CNA program.

| Section | Description |
|---|---|
| Course Objective | Program purpose and goals |
| Program Overview | Hours breakdown and evaluation process |
| Training Schedule | Weekend format (Sat/Sun) |
| Admission Requirements | Prerequisites |
| What You'll Learn | Six key skill areas |
| Job Opportunities | Career paths and career ladder (LVN/RN) |

---

### CEU for CNA (`ceu-for-cna.html`)
Continuing Education Units for certified nursing assistants.

| Section | Description |
|---|---|
| About CNA Continuing Education | California's 48-hour/2-year requirement explained |
| Program Schedule | Available Mon/Thu/Fri only |
| Why Choose Our CEU Program | Key selling points |
| Enrollment Process | How to sign up |

---

### Schedule (`schedule.html`)
Tuition and class schedule for all programs.

| Program | Tuition |
|---|---|
| Nursing Assistant | $2,000 |
| Home Health Aide | $350 |
| Phlebotomy Technician I | $1,500 |
| Vocational Nursing | $23,000 |

Payment is accepted by Cash, Check, or Money Order.

---

### About Us (`about-us.html`)
School background and accreditation.

| Section | Description |
|---|---|
| Mission | School mission statement |
| Philosophy | Educational philosophy |
| Accreditation & Compliance | BPPE approval information |
| Why Choose AMHS | Six reasons listed |
| Contact/Map | Address, map embed, BPPE contact details |

---

### Contact Us (`contact-us.html`)
Contact information and inquiry form.

| Section | Description |
|---|---|
| Contact Block | Address, phone, email, fax, Facebook |
| Contact Form | First Name, Last Name, Email, Phone, Company/School, Message |
| Program Coordinators | Cards for each program coordinator |
| Office Hours | Days and times |

---

### Program Coordinators (`program-coordinators.html`)
Direct contact cards for each coordinator.

| Coordinator | Email |
|---|---|
| Vocational Nursing (LVN) | lvn@amhsinc.com |
| Phlebotomy Technician | phlebotomy@amhsinc.com |
| Nursing Assistant (CNA) | cna@amhsinc.com |
| School Administration | admin@amhsinc.com |

---

## Admin Portal

The admin portal allows authorized staff to upload replacement PDF documents without touching any code.

### How to Log In

1. Go to `http://localhost:3000/login.html` (or click "Admin Login" in the footer — it is small and low-opacity by design)
2. Enter the admin password: **`amhs2024admin`**
   - This password can be changed by setting the `ADMIN_PASSWORD` environment variable on the server
3. On success, you are redirected to the Document Upload page

### How to Upload a Document

1. After logging in, you will see the **Document Upload** page
2. Select the document type from the dropdown:
   - **School Catalog** → replaces `catalog_comb.pdf`
   - **School Performance Fact Sheet** → replaces `spfs_comb.pdf`
   - **Annual Report** → replaces `arep.pdf`
   - **CEU Schedule** → replaces `ceu_schedule.pdf`
3. Drag and drop the PDF file into the upload zone, or click to browse
4. Click **Upload Document**
5. A success or error message will appear

**File requirements:** PDF only, maximum 20MB.

### Logging Out

Click the **Log Out** button in the top right of the admin page.

---

## Footer Documents

Three PDF documents are linked in the footer of every page:

| Link Label | File | Status |
|---|---|---|
| School Catalog | `catalog_comb.pdf` | ✅ Available |
| School Performance Fact Sheet | `spfs_comb.pdf` | ✅ Available |
| Annual Report | `arep.pdf` | ❌ Not yet uploaded |

If a PDF has not been uploaded, clicking the link will display a **"Document Temporarily Unavailable"** page rather than an error. Upload the file via the Admin Portal to make it available.

---

## ⚠️ Images — Action Required

> **All current hero and program images on the website were sourced from the internet and are likely copyrighted. These images must be replaced with licensed or original photos before the site is used publicly.**

Using copyrighted images without permission is a legal risk. The images that need to be replaced are:

| File | Used On |
|---|---|
| `Health.jpg` | Home page hero |
| `Student-grooming-training.jpg` | Vocational Nursing hero |
| `Blood-taking-venepuncture.jpg` | Phlebotomy Technician hero |
| `Nursing-students-training-simulation-lab.jpg` | Nursing Assistant hero |
| `Students-studying-at-ANMEC.jpg` | CEU for CNA hero |

**Recommended options:**
- **Take original photos** of the school, classrooms, and students (with signed photo releases)
- **Use a licensed stock photo service** such as Shutterstock, Adobe Stock, or Getty Images
- **Use royalty-free images** from sites like Unsplash (unsplash.com) or Pexels (pexels.com) — check each image's license before use

Once you have replacement images, place the new files in the `/AMHSINC` folder with the same filenames (or update the filenames in the HTML files), then restart the server.

---

## Contact Reference

| | |
|---|---|
| **Phone** | (818) 637-7871 |
| **Fax** | (818) 637-2104 |
| **Email** | info@amhsinc.com |
| **Address** | 730 S Central Ave, Ste 208, Glendale, CA 91204 |
| **Facebook** | AMHSinc |
| **Office Hours** | M/T/Th/F 9am–7pm, Saturday 9am–4pm |
