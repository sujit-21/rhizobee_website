# Rhizobee Innovations Website (MERN Stack)

Full-stack web application for [rhizobee.com](https://rhizobee.com/) built using the **MERN** technology stack: **React (Vite)**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 🚀 Architecture Overview

- **Frontend**: React 18 with Vite, React Router v6, Lucide Icons, and Vanilla CSS with design tokens.
  - Matches the exact visual identity, colors (`#0a1a3a` Ink, `#1656d6` Royal Blue, `#d9a441` Gold, `#3fa9f5` Sky), typography (`Space Grotesk`, `Inter`, `IBM Plex Mono`), lattice radial pattern, glowing accents, and official partner logos.
  - Includes all main pages:
    - **Home** (`/`): Hero, Live Partner Marquee ticker, Zoompe Retailer Portal showcase, Product portfolio, Infrastructure metrics, Client testimonials, FAQ accordion.
    - **About Us** (`/about`): Mission, vision, core principles ("Compliance first", "Financial inclusion", "Partnership not vendorship", "Reliability at the counter").
    - **Services** (`/services`): Payment Gateway, QR Code, Soundbox, POS Terminals, PPI Wallets, Brand Gift Vouchers, Switch engine, 4-step deployment journey.
    - **Solutions** (`/solutions`): In-Store Counter, Digital Checkout, Retailer Network, Corporate Rewards & PPI Wallets.
    - **Industries** (`/industries`): Small Business Owners, SMEs, MSMEs, Enterprises, Corporates.
    - **Careers** (`/careers`): Culture values, current job openings (Enterprise Sales Manager, Reception cum HR, BD Corporate MICE) with live interactive application modal.
    - **Contact** (`/contact`): Official corporate office details, phone, CIN, and interactive business inquiry submission form.
    - **Admin Portal** (`/admin`): Live database dashboard to view and manage inquiries and job applications stored in MongoDB.
- **Backend**: Node.js & Express.js REST API (`http://localhost:5000/api`)
  - Endpoints for inquiries (`/api/inquiries`), careers (`/api/careers/apply`), newsletter (`/api/newsletter/subscribe`), leads, and system stats.
  - Generates tracking codes (`RHZ-XXXXXX`, `APP-XXXXXX`).
- **Database**: MongoDB (running on `mongodb://127.0.0.1:27017/rhizobee_db`)
  - Collections: `ContactInquiry`, `JobApplication`, `Lead`, `Newsletter`.

---

## 🛠️ How to Run Locally

### 1. Start MongoDB
Ensure MongoDB is running locally on port 27017 (or configure `MONGODB_URI` in `backend/.env`).

### 2. Start Backend
```bash
cd backend
npm install
npm start
# Server starts on http://localhost:5000
```

### 3. Start Frontend
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:3000
```

---

## 📸 Key Features
- **Official Brand Assets**: Includes high-resolution logos, hero mark, Zoompe identity, and partner logos (PayU, Zaakpay, JioPay, Getepay, Easebuzz, PayPoint, ArthPay, Airpay, Razorpay, PhonePe, Finacus).
- **Interactive Marquee**: Continuous infinite logo ticker with smooth CSS animation.
- **Live MongoDB Integration**: Forms submit and save directly to MongoDB with instant validation and tracking IDs.
- **Admin Verification View**: Accessible at `/admin` to review submissions in real time.
