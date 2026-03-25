# Birinci İplik Website - Change Log & Documentation

**Project Repository:** https://github.com/3NZ1I/Birinciiplik  
**Website URL:** https://3nz1i.github.io/Birinciiplik/  
**Last Updated:** March 25, 2026

---

## 📋 Project Overview

Birinci İplik is a premium thread manufacturer and exporter based in Gaziantep, Turkey, specializing in carpet and garment materials. The website is a static HTML/CSS/JavaScript site with multi-language support (English, Turkish, Arabic).

---

## 🗂️ Project Structure

```
/mnt/d/Gokhan wesite/
├── index.html              # Homepage
├── products.html           # Products page
├── about.html              # About Us page
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet (CSS variables for theming)
├── js/
│   ├── translations.js     # All translations (EN/TR/AR)
│   └── main.js             # JavaScript for language switcher, animations
├── images/                 # All image assets
└── fonts/                  # Custom fonts (Quest Bold for Arabic)
```

---

## 🌐 Language System

### How It Works
- Translations are stored in `js/translations.js`
- Each language has a code: `en`, `tr`, `ar`
- HTML elements use `data-i18n` attribute to reference translation keys
- Language is saved in `localStorage` for persistence
- Arabic uses RTL (right-to-left) layout

### Adding/Editing Translations
```javascript
// In js/translations.js
'en': {
    'my-key': 'English text here',
},
'tr': {
    'my-key': 'Türkçe metin buraya',
},
'ar': {
    'my-key': 'النص العربي هنا',
}
```

**Important:** Escape apostrophes in strings: `TÜRKİYE\'DE`

---

## 📝 Change Log - March 25, 2026

### 1. Product Catalog Updates

#### **Removed Products:**
- ❌ Fabric Threads
- ❌ Carpet Threads

#### **Current Products (in order):**
1. **Carpet Overlock Fabrics** (Halı Overlok Kumaşları)
   - Image: `images/halı overlok kumaşı.jpeg`
   - ID: `#carpet-overlock`

2. **Overlock Thread (Polyester Needle Thread)** (Overlok İpi)
   - Image: `images/polyester iplik.jpeg`
   - ID: `#overlock-thread`
   - Deniers: 900-2200

3. **Warp Thread (Topbaşı İpliği)**
   - Image: `images/topbaşı ipliği.jpeg`
   - ID: `#warp-thread`

4. **Specialty Threads** (Özel İplikler)
   - Image: `images/spet thrids.jpeg`
   - ID: `#specialty`

#### **Files Modified:**
- `products.html` - Product sections reordered
- `index.html` - Homepage products preview updated
- Footer navigation links updated in both files

---

### 2. Hero Section Translations

| Language | Title (Gold Text in `<span>`) | Subtitle |
|----------|-------------------------------|----------|
| **EN** | High-quality <span>fabrics and yarns</span> for custom carpets. | Gaziantep, Turkey is a leading supplier and exporter of carpet and garment materials. |
| **TR** | Özel halılar için kaliteli <span>kumaş ve iplikler</span> | GAZİANTEP, TÜRKİYE DE HALI KONFEKSİYON MALZEMELERİ KONUSUNDA ÖNDE GELEN TEDARİKÇİ VE İHRACATÇI |
| **AR** | أقمشة وخيوط عالية الجودة <span>للسجاد المصمم حسب الطلب</span>. | تُعد غازي عنتاب، تركيا، مورداً ومصدراً رائداً للسجاد ومواد الملابس. |

**CSS:** Gold color is applied via `.hero-title span { color: var(--secondary-color); }`

---

### 3. Features Section Updates

#### **Premium Quality:**
| Language | Description |
|----------|-------------|
| **EN** | Supply and production standards manufactured with state-of-the-art technology and subjected to strict quality control. |
| **TR** | Son teknoloji ile üretilen ve sıkı kalite kontrolünden geçen tedarik ve üretim standartı |
| **AR** | معايير التوريد والإنتاج: يتم تصنيعها باستخدام أحدث التقنيات وتخضع لرقابة صارمة على الجودة. |

#### **Trusted Partner:**
| Language | Title | Description |
|----------|-------|-------------|
| **EN** | A reliable partner | With expertise in every product and a commitment to customer satisfaction. |
| **TR** | Güvenilir ortak | Her üründe uzmanlık ve müşteri memnuniyetine bağlılık |
| **AR** | شريك موثوق | يتمتع بخبرة في كل منتج والتزام برضا العملاء. |

---

### 4. Stats Section Updates

**Homepage stats changed from 6 items to 3 items:**

| Stat | Old Value | New Value |
|------|-----------|-----------|
| Years Experience | 15+ | **10+** |
| Countries Served | 50+ | ❌ Removed |
| Happy Clients | 1000+ | ✅ Kept |
| Monthly Capacity | 5000+ tons | ❌ Removed |
| Expert Employees | 100+ | ❌ Removed |
| Quality Guarantee | 100% | ✅ Kept |

---

### 5. Footer Description Updates

| Language | Description |
|----------|-------------|
| **EN** | Premium thread best exporter and partner based in Gaziantep, Turkey. |
| **TR** | Gaziantep, Türkiye merkezli premium iplik en iyi ihracatçısı ve iş ortağınız. |
| **AR** | أفضل شركة تصدير خيوط ممتازة وشريكك الموثوق مقرها غازي عنتاب، تركيا. |

---

### 6. Contact Form

**Formspree Integration:**
- Endpoint: `https://formspree.io/f/mgolbazo`
- Located in `contact.html`
- Fields: Name, Email, Company, Phone, Subject, Message

---

## 🎨 Theme Colors

Defined in `css/style.css`:

```css
:root {
    --primary-color: #1a365d;      /* Navy blue */
    --primary-light: #2c5282;
    --secondary-color: #c5a065;    /* Gold - used for accents */
    --secondary-light: #d4b075;
    --text-dark: #1a202c;
    --text-light: #718096;
}
```

---

## 🚀 Deployment Process

### Deploy to GitHub Pages:

```bash
cd "/mnt/d/Gokhan wesite"

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Description of changes"

# Push to main branch
git push origin main
```

**Auto-deployment:** GitHub Pages automatically deploys within 1-2 minutes after pushing to `main`.

**Website URL:** https://3nz1i.github.io/Birinciiplik/

---

## 🐛 Known Issues & Fixes

### Language Switcher Crashes
**Cause:** Unescaped apostrophes in translation strings (e.g., `TÜRKİYE'DE`)  
**Fix:** Escape apostrophes: `TÜRKİYE\'DE`  
**Verify:** Run `node -c js/translations.js` before committing

---

## 📞 Contact Information

**Company:** Birinci İplik San.Tic.  
**Address:** 3. Organize San. Böl., Şehitkamil / Gaziantep, Turkey  
**Phone:** +90 533 627 47 61  
**Email:** sales@birinciiplik.com  
**WhatsApp:** +90 533 627 47 61  
**Instagram:** https://www.instagram.com/birinciiplik/

---

## 🔧 Quick Reference

### Common Tasks:

#### Add New Product:
1. Add product section in `products.html`
2. Add product card in `index.html` (products preview)
3. Add translations in `js/translations.js` (all 3 languages)
4. Update footer navigation links
5. Commit and push

#### Edit Translation:
1. Open `js/translations.js`
2. Find the key (search for the text)
3. Update EN, TR, and AR values
4. Run `node -c js/translations.js` to verify syntax
5. Commit and push

#### Change Image:
1. Upload new image to `images/` folder
2. Update `src` attribute in HTML
3. Commit and push

---

## 📊 Git Commit History (March 25, 2026)

| Commit | Description |
|--------|-------------|
| `a468243` | Add new products: Overlock Thread, Carpet Overlock Fabrics, Warp Thread |
| `4beffa3` | Remove Fabric Threads and Carpet Threads products |
| `09c8579` | Reorganize products order |
| `b43218e` | Fix Turkish translation syntax error (apostrophe escape) |
| `1d3e077` | Update Turkish hero translations |
| `6487176` | Update Turkish feature-partner translation |
| `ce378e0` | Update hero title for all languages with gold accent |
| `ecea600` | Update hero title translations (EN/AR) |
| `8604954` | Update hero subtitle translations (EN/TR/AR) |
| `a22c325` | Update feature-quality-desc translations |
| `0df13fe` | Update feature-partner translations |
| `413166d` | Update stats section on homepage |
| `8f3b967` | Update footer description translations |

---

**Developer:** CodeB (https://bessar.work/)  
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript  
**Hosting:** GitHub Pages  
**Font:** Chillax (Google Fonts), Quest Bold (Arabic)
