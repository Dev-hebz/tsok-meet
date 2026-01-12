# 🚀 TSOK-Meet Deployment Guide

## Deployment Steps

### I. Prepare the Project

#### 1. Install Git (if not already installed)
```bash
# Check if installed
git --version

# If not installed, download from https://git-scm.com
```

#### 2. Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New Repository"
3. Repository name: `tsok-meet`
4. Visibility: Public or Private (recommended: Private)
5. Click "Create repository"

#### 3. Connect Local Project to GitHub

```bash
cd tsok-meet

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - TSOK-Meet Video Conference Platform"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/tsok-meet.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### II. Deploy to Vercel

#### Option A: Manual Deployment (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" (use GitHub account)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Select `tsok-meet` repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Environment Variables (Optional)**
   
   If you want to use Firebase:
   - Click "Environment Variables"
   - Add the following:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your_value
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_value
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_value
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_value
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_value
     NEXT_PUBLIC_FIREBASE_APP_ID=your_value
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - ✅ Done! Your site is live!

#### Option B: Vercel CLI Deployment

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

---

### III. Custom Domain (Optional)

#### Add Custom Domain

1. In Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add domain (example: `meet.tsok.org`)
5. Follow DNS configuration instructions

#### Update DNS Records

In your domain provider (GoDaddy, Namecheap, etc.):

**Type A Record:**
```
Type: A
Name: @ (or meet)
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

### IV. PWA Configuration

#### Verify PWA is Working

1. **Test Installation:**
   - Visit the deployed site
   - Look for install button in browser
   - Try to install on desktop/mobile

2. **Check Manifest:**
   - Go to `https://your-site.vercel.app/manifest.json`
   - Verify the contents

3. **Test Service Worker:**
   - Open DevTools (F12)
   - Go to "Application" tab
   - Check "Service Workers"
   - Verify "sw.js" is active

---

### V. Testing Checklist

After deployment, check the following:

#### ✅ Basic Functionality
- [ ] Home page loads correctly
- [ ] Logo and branding visible
- [ ] Create meeting works
- [ ] Join meeting works
- [ ] Meeting ID generation working

#### ✅ Meeting Room Features
- [ ] Video works
- [ ] Audio works
- [ ] Screen sharing works
- [ ] Chat works
- [ ] Meeting ID copy works
- [ ] Share link works

#### ✅ PWA Features
- [ ] Install prompt appears
- [ ] App installs on desktop
- [ ] App installs on mobile
- [ ] Icons display correctly
- [ ] App opens in standalone mode

#### ✅ Responsive Design
- [ ] Desktop view (1920x1080)
- [ ] Laptop view (1366x768)
- [ ] Tablet view (768x1024)
- [ ] Mobile view (375x667)

#### ✅ Browser Compatibility
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari
- [ ] Mobile Chrome

---

### VI. Post-Deployment Tasks

#### 1. Share the Link
```
Production URL: https://tsok-meet.vercel.app
or
Custom Domain: https://meet.tsok.org
```

#### 2. Create User Documentation
- Screenshot tutorial
- Video guide (optional)
- Quick reference card

#### 3. Monitor Performance
- Check Vercel Analytics
- Monitor error logs
- Review user feedback

#### 4. Setup Monitoring (Optional)
- Configure Sentry for error tracking
- Setup Google Analytics
- Enable Vercel Analytics

---

### VII. Common Issues and Solutions

#### Issue 1: Build Failed
```
Error: Build failed with exit code 1
```
**Solution:**
```bash
# Test locally first
npm run build

# Check for TypeScript errors
npm run lint

# Fix errors then push again
git add .
git commit -m "Fix build errors"
git push
```

#### Issue 2: Environment Variables not working
**Solution:**
- Go to Vercel Dashboard → Settings → Environment Variables
- Re-add all variables
- Redeploy the project

#### Issue 3: PWA not installing
**Solution:**
- Ensure HTTPS is enabled
- Check manifest.json is accessible
- Verify service worker is registered
- Clear browser cache

#### Issue 4: Meeting not loading
**Solution:**
- Check browser console for errors
- Verify Jitsi Meet is accessible
- Check internet connection
- Try different browser

---

### VIII. Automatic Deployment

Vercel automatically deploys every time you push to GitHub:

```bash
# After making changes
git add .
git commit -m "Update features"
git push

# Vercel will automatically:
# 1. Detect the push
# 2. Build the project
# 3. Deploy to production
# 4. Update the live site
```

---

### IX. Rollback (If there's a problem)

```bash
# In Vercel Dashboard
1. Go to "Deployments"
2. Find the last working deployment
3. Click "..." menu
4. Click "Promote to Production"
```

---

### X. Maintenance

#### Regular Tasks:
1. **Check Updates (Monthly)**
   ```bash
   npm outdated
   npm update
   ```

2. **Security Updates**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Monitor Performance**
   - Check Vercel Analytics
   - Review error logs
   - Monitor user feedback

---

## 🎉 Success!

If deployment is successful:
- ✅ Site is live
- ✅ PWA is installable
- ✅ All features working
- ✅ Users can create/join meetings

**Next Steps:**
1. Share the link with TSOK members
2. Conduct training session
3. Gather feedback
4. Plan improvements

---

## 📞 Support

If you have problems:
- Check Vercel Deployment Logs
- Review Console Errors
- Contact Godmisoft for support

---

**Developed with ❤️ by Godmisoft for TSOK**
