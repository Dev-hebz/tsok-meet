# TSOK-Meet Video Conference Platform

![TSOK Logo](public/logo.png)

**Professional video conferencing platform for TSOK (Teachers Specialists Organization Kuwait)**

TSOK-Meet is a free, secure, and user-friendly video conferencing platform designed specifically for officers meetings, general meetings, and online reviews.

---

## 🌟 Features

### ✅ Core Features
- **Unlimited Participants** - Support for 100+ members
- **No Time Limits** - Meetings can run as long as needed
- **Screen Sharing** - Present your screen to all participants
- **Live Chat** - Real-time messaging during meetings
- **HD Quality** - Crystal clear video and audio
- **Recording** - Record important meetings
- **PWA Support** - Install on desktop or mobile devices
- **Professional Interface** - Clean and intuitive design

### 🔐 Security Features
- End-to-end encrypted communications
- Secure meeting IDs
- No registration required
- Private and secure

### 📱 Platform Support
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Mobile (Android, iOS)
- ✅ Tablet devices
- ✅ All modern browsers

---

## 🚀 Quick Start Guide

### For Users

#### 1. Create a Meeting
1. Visit the TSOK-Meet website
2. Enter your name
3. Click "Create Meeting"
4. Share the Meeting ID with participants

#### 2. Join a Meeting
1. Visit the TSOK-Meet website
2. Enter your name
3. Enter the Meeting ID shared with you
4. Click "Join Meeting"

---

## 💻 For Developers - Installation & Deployment

### Prerequisites
- Node.js 18+ installed
- Git installed
- Vercel account (for deployment)
- GitHub account

### Local Development

#### 1. Clone the Repository
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

Open your browser and visit: `http://localhost:3000`

### Deployment to Vercel

#### Option 1: From GitHub (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - TSOK-Meet"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tsok-meet.git
git push -u origin main
```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
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

If you want to use Firebase for meeting logs:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Copy the configuration
4. Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

5. Fill in the values in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

6. In Vercel, add the environment variables in Settings > Environment Variables

**Note:** The app works perfectly without Firebase!

---

## 📱 PWA Installation

### Desktop Installation

**Chrome / Edge / Brave:**
1. Visit the TSOK-Meet website
2. Look for the install icon in the address bar
3. Click "Install TSOK-Meet"

**Firefox:**
1. Visit the TSOK-Meet website
2. Click the menu (☰)
3. Click "Install TSOK-Meet"

### Mobile Installation

**Android:**
1. Open in Chrome browser
2. Visit the TSOK-Meet website
3. Tap the menu (⋮)
4. Select "Add to Home screen"
5. Tap "Install"

**iOS:**
1. Open in Safari browser
2. Visit the TSOK-Meet website
3. Tap the share button
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

3. **Update Text:** Edit text strings in `app/page.tsx`

### Adding Features

The platform is based on Jitsi Meet. For additional features:

1. Check [Jitsi Meet API Documentation](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-ljm-api/)
2. Modify the Jitsi URL configuration in `app/room/[roomId]/page.tsx`

---

## 🐛 Troubleshooting

### Issue: Service Worker not registering
**Solution:** Check if the site is using HTTPS. Service workers require HTTPS.

### Issue: PWA install button not appearing
**Solution:** 
- Ensure manifest.json is accessible
- Check browser console for errors
- Verify HTTPS connection

### Issue: Video/Audio not working
**Solution:**
- Check browser permissions
- Ensure microphone/camera access is granted
- Check Jitsi Meet status

---

## 📞 Support

For questions or issues:
- Create an issue on GitHub
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

Thanks to:
- TSOK Officers and Members
- Filipino Teachers Community in Kuwait
- Jitsi Community
- Next.js Team
- Vercel Team

---

**Excellence in Education! Deo Et Patria!** 🇵🇭

---

## 🔄 Version History

### v1.0.0 (2024)
- Initial release
- Core video conferencing features
- PWA support
- Professional interface
- Firebase integration (optional)
- Unlimited participants
- No time limits
- Screen sharing
- Live chat support
