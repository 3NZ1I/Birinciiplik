# Birinci İplik - Company Website

A professional, responsive website for Birinci İplik, a premium thread manufacturer and exporter based in Gaziantep, Turkey.

## 🌐 Live Demo

Once deployed to GitHub Pages, the website will be available at:
`https://yourusername.github.io/birinci-iplik-website/`

## 📁 Project Structure

```
birinci-iplik-website/
├── index.html          # Home page
├── products.html       # Products page
├── about.html          # About Us page
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets (to be added)
└── README.md           # This file
```

## 🚀 Deploying to GitHub Pages

### Option 1: Using GitHub CLI

```bash
# Install GitHub CLI if not already installed
# https://cli.github.com/

# Authenticate with GitHub
gh auth login

# Create a new repository
gh repo create birinci-iplik-website --public --source=. --remote=origin --push

# Enable GitHub Pages
gh api -X POST /repos/{username}/birinci-iplik-website/pages \
  -H "Accept: application/vnd.github.v3+json" \
  -f source='{"branch":"master","path":"/"}'
```

### Option 2: Manual Deployment

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `birinci-iplik-website`
   - Make it Public
   - Click "Create repository"

2. **Push your code**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/birinci-iplik-website.git
   git push -f origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click "Save"

4. **Access your website**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/birinci-iplik-website/`
   - It may take a few minutes for the site to be deployed

## 🎨 Customization

### Update Contact Information

Edit the following files with actual contact details:

- **index.html**, **contact.html**, **about.html**, **products.html** - Update:
  - Phone numbers: `+90 342 000 00 00`
  - Email: `info@birinciiplik.com`
  - Address: Add your actual address in Gaziantep

### Add Images

1. Add your images to the `images/` folder
2. Update the image placeholders in HTML files:
   ```html
   <!-- Replace this placeholder -->
   <div class="image-placeholder">...</div>
   
   <!-- With actual image -->
   <img src="images/your-photo.jpg" alt="Description">
   ```

### Modify Colors

Edit `css/style.css` CSS variables:

```css
:root {
    --primary-color: #1a365d;      /* Navy blue */
    --secondary-color: #c5a065;    /* Gold */
    /* ... other colors */
}
```

### Add Social Media Links

Update social media links in the footer of each page:

```html
<div class="social-links">
    <a href="YOUR_FACEBOOK_URL" aria-label="Facebook">📘</a>
    <a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">📷</a>
    <a href="YOUR_LINKEDIN_URL" aria-label="LinkedIn">💼</a>
    <a href="YOUR_WHATSAPP_URL" aria-label="WhatsApp">📱</a>
</div>
```

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, professional UI
- ✅ Fast loading speed
- ✅ SEO optimized
- ✅ Contact form with validation
- ✅ Smooth animations
- ✅ Language switcher ready (EN/TR)
- ✅ GitHub Pages ready

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (no frameworks required)
- Google Fonts (Playfair Display & Roboto)

## 📝 License

This project is created for Birinci İplik. All rights reserved.

## 📞 Support

For questions or modifications, contact the development team.

---

**Birinci İplik** - Quality Threads for Exceptional Textiles 🧵
