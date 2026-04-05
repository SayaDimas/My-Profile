# Portfolio Website - React + TypeScript + Vite

Website profile profesional yang modern dan responsif untuk menampilkan skills dan portfolio Anda.

## 🚀 Quick Start

```bash
# Install dependencies (jika belum)
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigasi dengan hamburger menu
│   ├── Hero.tsx            # Bagian hero/welcome
│   ├── Skills.tsx          # Daftar skills dengan kategori
│   ├── Portfolio.tsx       # Gallery portfolio projects
│   ├── Contact.tsx         # Contact form & info
│   └── Footer.tsx          # Footer dengan links
├── styles/
│   ├── Navbar.css
│   ├── Hero.css
│   ├── Skills.css
│   ├── Portfolio.css
│   ├── Contact.css
│   └── Footer.css
├── App.tsx                 # Main component
├── main.tsx                # Entry point
├── App.css                 # Global styles
└── index.css               # Base styling
```

## 🎨 Color Scheme

- **Primary**: `#00d4ff` (Cyan)
- **Primary Dark**: `#0084ff` (Dark Blue)
- **Background**: `#1a1a2e` (Dark)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#c0c0c0` (Light Gray)

## 🛠️ Customization

### 1. Update Hero Section (`src/components/Hero.tsx`)
```jsx
<h1 className="hero-title">Hi, I'm Your Name</h1>
<p className="hero-subtitle">Your Title Here</p>
```

### 2. Update Skills (`src/components/Skills.tsx`)
Edit array `skills` dengan skills Anda:
```jsx
const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'HTML5', ...]
  },
  // Add more categories
];
```

### 3. Update Portfolio Projects (`src/components/Portfolio.tsx`)
Edit array `projects`:
```jsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    technologies: ['React', 'Node.js'],
    image: '🎨', // or image URL
    link: 'https://project-url.com',
    github: 'https://github.com/username/project'
  },
  // Add more projects
];
```

### 4. Update Contact Info (`src/components/Contact.tsx`)
- Update email, phone, dan lokasi
- Customize form submission logic

### 5. Update Navbar & Footer (`src/components/Navbar.tsx`, `Footer.tsx`)
- Update logo text
- Update social links
- Customize link sections

## 📱 Responsive Design

Website sudah fully responsive untuk:
- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## ✨ Features

- ✅ Smooth scrolling navigation
- ✅ Hamburger menu untuk mobile
- ✅ Modern hero section
- ✅ Skills showcase dengan kategori
- ✅ Portfolio gallery grid
- ✅ Contact form
- ✅ Responsive footer
- ✅ Smooth animations & hover effects
- ✅ Dark theme dengan gradient accents
- ✅ Performance optimized

## 🔧 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Styling dengan gradients & animations

## 📝 Notes

- Ganti contoh project dengan project Anda sendiri
- Update email dan social media links
- Customize color scheme di `:root` CSS variables
- Gunakan emoji atau gambar untuk portfolio cards

## 🚀 Deployment

Website siap di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- Any static host

```bash
# Build untuk production
npm run build

# Output akan ada di folder 'dist/'
```

## 📞 Support

Untuk pertanyaan atau modifikasi lebih lanjut, silakan customize sesuai kebutuhan Anda!

---

**Happy Coding! 🎉**
