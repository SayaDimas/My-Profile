# 📸 Cara Menggunakan Foto Profile

Panduan lengkap untuk menambahkan foto profile Anda pada Hero section.

## 🚀 Cara 1: Menggunakan File Lokal

### Langkah-langkah:

1. **Siapkan foto Anda**
   - Format yang didukung: JPG, PNG, WEBP
   - Ukuran rekomendasi: 400x400 px atau lebih (square ratio)
   - Ukuran file: max 500KB untuk performa optimal

2. **Copy foto ke folder**
   ```
   Letakkan foto di: public/images/profile.jpg
   ```

3. **Update Hero.tsx**
   
   Edit file `src/components/Hero.tsx` dan ubah baris ini:
   
   ```jsx
   const profileImageUrl = 'https://via.placeholder.com/400x400?text=Your+Photo';
   ```
   
   Menjadi:
   
   ```jsx
   const profileImageUrl = '/images/profile.jpg';
   ```

4. **Selesai!** 
   Foto Anda akan muncul di profile section.

---

## 🌐 Cara 2: Menggunakan URL Foto dari Internet

Jika Anda sudah memiliki foto di cloud atau platform lain (seperti imgur, cloudinary, etc):

1. Copy URL foto Anda (pastikan accessible dan public)

2. Edit `src/components/Hero.tsx`:
   ```jsx
   const profileImageUrl = 'https://your-hosting/profile.jpg';
   ```

3. Ganti URL dengan URL foto Anda yang sebenarnya.

---

## 📁 Struktur Folder

```
public/
├── images/
│   └── profile.jpg    ← Letakkan foto di sini
```

---

## ✅ Tips & Trik

### **Kompresi Foto**
Gunakan tools berikut untuk mengompresi foto tanpa kehilangan kualitas:
- [Tinify](https://tinypng.com/)
- [Compressor.io](https://compressor.io/)
- [ImageOptim](https://imageoptim.com/)

### **Foto Harus Square**
Foto Anda akan di-crop menjadi square (300x300px). Supaya terlihat bagus:
- Gunakan foto dengan aspect ratio 1:1 (square)
- Atau crop foto Anda terlebih dahulu sebelum upload

### **Alternatif Tools untuk Edit Foto**
- Libre Office: Buat foto square
- Canva: Resize dan edit foto
- Photoshop/GIMP: Edit profesional

---

## 🎨 Styling Foto

Styling saat ini:
- **Ukuran**: 300x300px
- **Border**: Cyan (#00d4ff) 3px
- **Border Radius**: 20px (slightly rounded)
- **Shadow**: Glow effect cyan
- **Hover**: Zoom in sedikit (scale 1.05)

Kalau ingin ubah styling, edit `src/styles/Hero.css` bagian `.profile-placeholder` dan `.profile-image`.

---

## ❓ Troubleshooting

### **Foto tidak muncul?**
1. Pastikan path benar: `/images/profile.jpg`
2. Pastikan file ada di folder `public/images/`
3. Coba refresh browser (Ctrl + F5 atau Cmd + Shift + R)
4. Cek console error di browser (F12)

### **Foto terlihat miring/jelek?**
- Pastikan foto asli Anda bukan portrait (gunakan landscape atau square)
- Resize foto menjadi square sebelum upload

### **Foto loading lambat?**
- Kompresi ukuran file
- Gunakan format WEBP (lebih kecil)
- Atau gunakan URL dari CDN yang cepat

---

## 🔄 Cara Mengganti Foto Kemudian

Cukup:
1. Ganti file di `public/images/profile.jpg` dengan foto baru
2. Refresh browser
3. Done!

---

**Butuh bantuan lebih lanjut? Tanyakan saja!** 🚀
