# Wovenest International & LuxeLume

Official web portal for **Wovenest International** (Global B2B Textile Export House) and **LuxeLume** (Flagship Quiet Luxury Menswear Label).

---

## 🏛️ Architecture & Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Custom Frosted Glassmorphism
- **Animations & Smooth Scroll**: Framer Motion + Lenis Smooth Scroll
- **Database / Backend**: Firebase Cloud Firestore (`inquiries`, `newsletter_subscribers`)
- **Icons**: Lucide React

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/wovenest-international.git
cd wovenest-international
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your Firebase project configuration:
```bash
cp .env.example .env
```

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 🌐 One-Click Hosting Options

### Option A: Vercel
1. Import this repository in [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Add your `VITE_FIREBASE_*` environment variables in the Vercel dashboard.

### Option B: Netlify
1. Import this repository in [Netlify](https://netlify.com).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.
4. Add environment variables under **Site configuration > Environment variables**.

### Option C: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting # public directory: dist, single-page app: Yes
npm run build
firebase deploy --only hosting
```

---

## 📄 License
Private commercial license &copy; Wovenest International. All rights reserved.
