# TSOK-Meet Video Conference Platform

![TSOK Logo](public/logo.png)

**Professional video conferencing platform para sa TSOK (Teachers Specialists Organization Kuwait)**

Ang TSOK-Meet usa ka libre, secure, ug user-friendly video conferencing platform nga gidesinyo para sa officers meetings, general meetings, ug online reviews.

---

## 🌟 Features / Mga Hiyas

### ✅ Core Features
- **Unlimited Participants** - 100+ members pwede mosulod
- **No Time Limits** - Walay limit sa kadugayon sa meeting
- **Screen Sharing** - Ipakita ang imong screen sa tanan
- **Live Chat** - Real-time messaging during meetings
- **HD Quality** - Klaro kaayo ang video ug audio
- **Recording** - Pwede mo-record ang meeting
- **PWA Support** - Install sa desktop o mobile
- **Bilingual Interface** - English ug Cebuano support

### 🔐 Security Features
- End-to-end encrypted
- Secure meeting IDs
- No registration required
- Private ug secure

### 📱 Platform Support
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Mobile (Android, iOS)
- ✅ Tablet
- ✅ All modern browsers

---

## 🚀 Quick Start Guide

### Para sa Users

#### 1. Maghimo og Meeting (Create Meeting)
1. Bisitaha ang TSOK-Meet website
2. Puno-a ang imong ngalan
3. I-click ang "Maghimo / Create Meeting"
4. I-share ang Meeting ID sa uban

#### 2. Mosulod sa Meeting (Join Meeting)
1. Bisitaha ang TSOK-Meet website
2. Puno-a ang imong ngalan
3. Puno-a ang Meeting ID nga gi-share nimo
4. I-click ang "Mosulod / Join Meeting"

---

## 💻 Para sa Developers - Installation & Deployment

### Prerequisites
- Node.js 18+ installed
- Git installed
- Vercel account (para sa deployment)
- GitHub account

### Local Development

#### 1. Clone ang Repository
```bash
git clone https://github.com/YOUR_USERNAME/tsok-meet.git
cd tsok-meet
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Run Development Server
```bash
npm run dev
```

Ablihi ang browser ug bisitaha: `http://localhost:3000`

### Deployment sa Vercel

#### Option 1: Gikan sa GitHub (Recommended)

1. **Push sa GitHub**
```bash
git init
git add .
git commit -m "Initial commit - TSOK-Meet"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tsok-meet.git
git push -u origin main
```

2. **Deploy sa Vercel**
   - Bisitaha [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import ang imong GitHub repository
   - Configure:
     - Framework Preset: **Next.js**
     - Root Directory: `./`
     - Build Command: `next build`
     - Output Directory: `.next`
   - Click "Deploy"

#### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Firebase Configuration (Optional)

Kung gusto nimo gamiton ang Firebase para sa meeting logs:

1. Create Firebase project sa [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Copy ang configuration
4. Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

5. Puno-a ang values sa `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

6. Sa Vercel, i-add ang environment variables sa Settings > Environment Variables

**Note:** Ang app mo-work gihapon bisan walay Firebase!

---

## 📱 PWA Installation

### Desktop Installation

**Chrome / Edge / Brave:**
1. Bisitaha ang TSOK-Meet website
2. Look for the install icon sa address bar
3. Click "Install TSOK-Meet"

**Firefox:**
1. Bisitaha ang TSOK-Meet website
2. Click sa menu (☰)
3. Click "Install TSOK-Meet"

### Mobile Installation

**Android:**
1. Open sa Chrome browser
2. Bisitaha ang TSOK-Meet website
3. Tap ang menu (⋮)
4. Select "Add to Home screen"
5. Tap "Install"

**iOS:**
1. Open sa Safari browser
2. Bisitaha ang TSOK-Meet website
3. Tap ang share button
4. Select "Add to Home Screen"
5. Tap "Add"

---

## 🛠 Technology Stack

- **Frontend Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Video Platform:** Jitsi Meet
- **Real-time:** WebRTC
- **Database:** Firebase Firestore (optional)
- **Deployment:** Vercel
- **PWA:** Service Workers

---

## 📋 Project Structure

```
tsok-meet/
├── app/
│   ├── layout.tsx          # Root layout with PWA config
│   ├── page.tsx            # Home page (create/join meeting)
│   ├── globals.css         # Global styles
│   └── room/
│       └── [roomId]/
│           └── page.tsx    # Meeting room page
├── components/
│   └── RegisterServiceWorker.tsx
├── lib/
│   └── firebase.ts         # Firebase configuration
├── public/
│   ├── logo.png
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   ├── favicon.ico
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── vercel.json
└── README.md
```

---

## 🎯 Use Cases

### 1. Officers Meetings
- Monthly planning meetings
- Emergency meetings
- Committee discussions

### 2. General Meetings
- Annual general assemblies
- Quarterly updates
- Town halls

### 3. Online Reviews
- LET review sessions
- Training seminars
- Webinars

---

## 🔧 Customization

### Changing Branding

1. **Replace Logo:**
   - Update `public/logo.png`
   - Update `public/icon-512x512.png`
   - Update `public/icon-192x192.png`

2. **Update Colors:** Edit `app/page.tsx` and `app/room/[roomId]/page.tsx`

3. **Update Text:** Edit language strings sa `app/page.tsx`

### Adding Features

Ang platform naka-base sa Jitsi Meet. Para sa additional features:

1. Check [Jitsi Meet API Documentation](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-ljm-api/)
2. Modify ang Jitsi URL configuration sa `app/room/[roomId]/page.tsx`

---

## 🐛 Troubleshooting

### Issue: Service Worker dili mo-register
**Solution:** Check kung HTTPS ang site. Service workers require HTTPS.

### Issue: PWA install button wala mu-appear
**Solution:** 
- Ensure manifest.json is accessible
- Check browser console for errors
- Verify HTTPS connection

### Issue: Video/Audio dili mo-work
**Solution:**
- Check browser permissions
- Ensure microphone/camera access is granted
- Check Jitsi Meet status

---

## 📞 Support

Para sa questions o issues:
- Create issue sa GitHub
- Email: [your-email@example.com]
- Contact TSOK administrators

---

## 👨‍💻 Credits

**Developed by:** Godmisoft  
**For:** Teachers Specialists Organization Kuwait (TSOK 2014)  
**License:** MIT

**Powered by:**
- Next.js
- Jitsi Meet
- Vercel

---

## 📄 License

MIT License - Free to use and modify

---

## 🙏 Acknowledgments

Salamat sa:
- TSOK Officers ug Members
- Filipino Teachers Community sa Kuwait
- Jitsi Community
- Next.js Team
- Vercel Team

---

**Mabuhay ang TSOK! Deo Et Patria!** 🇵🇭

---

## 🔄 Version History

### v1.0.0 (2024)
- Initial release
- Core video conferencing features
- PWA support
- Bilingual interface (English/Cebuano)
- Firebase integration (optional)
- Unlimited participants
- No time limits
- Screen sharing
- Live chat support
