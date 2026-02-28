# Birinci İplik Website - Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying to GitHub Pages, make sure to:

1. **Update Contact Information**
   - Replace placeholder phone numbers (`+90 342 000 00 00`)
   - Update email addresses (`info@birinciiplik.com`)
   - Add your actual address in Gaziantep

2. **Add Real Images** (Optional)
   - Replace image placeholders with actual photos of your facility/products
   - Add images to the `images/` folder

3. **Update Social Media Links**
   - Add your actual social media profile URLs in the footer

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Account
If you don't have one, visit https://github.com and create a free account.

### Step 2: Create a New Repository

1. Go to https://github.com/new
2. Repository name: `birinci-iplik-website`
3. Description: "Official website of Birinci İplik - Premium thread manufacturer"
4. Make it **Public**
5. **Do NOT** initialize with README (we already have one)
6. Click "Create repository"

### Step 3: Push Your Code

Run these commands in your terminal:

```bash
cd "/mnt/d/Gokhan wesite"  # Or wherever you want to clone

# Clone the repository (replace YOUR_USERNAME with your GitHub username)
git clone https://github.com/YOUR_USERNAME/birinci-iplik-website.git

# Copy all website files to the cloned folder
# Then:
cd birinci-iplik-website
git add .
git commit -m "Add website files"
git push origin main
```

**OR** if you want to use the existing Git repo we created:

```bash
cd /home/bashar/birinci-iplik-website

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/birinci-iplik-website.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Click on **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** 
   - Folder: **/ (root)**
5. Click **Save**

### Step 5: Access Your Website

After 1-2 minutes, your website will be live at:
```
https://YOUR_USERNAME.github.io/birinci-iplik-website/
```

You can also:
- Use a custom domain by configuring it in the Pages settings
- Share the link with customers worldwide!

## 🔧 Custom Domain (Optional)

If you want to use a custom domain like `www.birinciiplik.com`:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain name
4. Click "Save"
5. Configure DNS settings at your domain registrar:
   - Create a CNAME record pointing to `YOUR_USERNAME.github.io`

## 📧 Contact Form Setup

The contact form currently shows a success message but doesn't send emails. To make it functional:

### Option 1: Use Formspree (Free & Easy)

1. Go to https://formspree.io/
2. Create a free account
3. Create a new form and get your endpoint URL
4. Update the form in `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Use EmailJS (JavaScript-based)

1. Go to https://www.emailjs.com/
2. Create a free account
3. Follow their integration guide

### Option 3: Backend Solution

For a custom backend solution, you can use:
- Netlify Forms (if hosting on Netlify)
- A PHP backend script
- A serverless function (AWS Lambda, Vercel, etc.)

## 📊 Add Google Analytics (Optional)

To track website visitors:

1. Go to https://analytics.google.com/
2. Create a property for your website
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add the tracking code to all HTML pages before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## ✅ Verify Your Website

After deployment, check:

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Mobile responsive design works
- [ ] All links are functional
- [ ] Contact form works (if configured)
- [ ] Images load (if added)

## 🎉 You're Done!

Your professional website for Birinci İplik is now live and ready to showcase your products to the world!

---

**Need Help?**
- GitHub Pages Documentation: https://pages.github.com/
- GitHub Support: https://support.github.com/
