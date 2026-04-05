# 📧 Setup Formspree untuk Contact Form

Panduan lengkap untuk mengintegrasikan Formspree dengan contact form Anda.

## 🚀 Apa itu Formspree?

Formspree adalah layanan pihak ketiga yang memungkinkan Anda mengirim form submissions langsung ke email tanpa perlu backend server. 

**Keuntungan:**
- ✅ Gratis untuk akun dasar
- ✅ Tidak perlu backend
- ✅ Pengirim tidak perlu login
- ✅ Spam protection built-in
- ✅ Email notifications otomatis

---

## 📝 Cara Setup Formspree

### Step 1: Buat Akun di Formspree

1. Buka [ https://formspree.io/](https://formspree.io/)
2. Klik **"Sign Up"** atau **"Get Started"**
3. Pilih cara login (Google, GitHub, atau email)
4. Verifikasi email Anda

### Step 2: Buat Form Baru

1. Di dashboard Formspree, klik **"Create"** atau **"New Form"**
2. Berikan nama form (contoh: "Portfolio Contact")
3. Klik **Create Form**

### Step 3: Dapatkan Form ID

Setelah form dibuat, Anda akan melihat Form ID di halaman form.

**Contoh Form ID:** `meeppnky` (ini adalah contoh)

Di halaman form, Anda akan melihat sesuatu seperti:
```
Form ID: meeppnky
```

**Salin Form ID ini!**

### Step 4: Update Contact Component

Edit file `src/components/Contact.tsx` dan ganti `"meeppnky"` dengan Form ID Anda:

```jsx
const [state, handleSubmit] = useForm("YOUR_FORM_ID_HERE");
```

**Contoh:**
```jsx
const [state, handleSubmit] = useForm("your123456");
```

### Step 5: Install Package (Jika belum)

Package `@formspree/react` sudah ditambahkan ke `package.json`.

Jalankan:
```bash
npm install
```

### Step 6: Test Form Anda

1. Jalankan dev server: `npm run dev`
2. Buka halaman contact
3. Isi form dan kirim pesan
4. Cek email Anda untuk verifikasi (hanya saat pertama kali)
5. Pesan akan masuk ke email Anda!

---

## ✉️ Menerima Email Notifikasi

### Aktivasi Email Notifications

1. Di Formspree dashboard, buka form Anda
2. Buka **"Settings"** → **"Email Notifications"**
3. Pastikan email Anda terverifikasi
4. Setiap submission akan langsung ke email

### Customize Email

Di Formspree, Anda bisa:
- Mengatur reply-to email
- Custom message template
- Forward ke multiple email
- Redirect setelah submit

---

## 🔒 Security & Privacy

Formspree menyediakan:
- **CAPTCHA protection** - Anti spam
- **Rate limiting** - Cegah abuse
- **GDPR compliant** - Privacy-friendly
- **Data encryption** - Transmisi aman

---

## 💬 Field Khusus dalam Form

Form contact Anda memiliki field:

| Field | Tujuan |
|-------|--------|
| `name` | Nama pengirim |
| `email` | Email pengirim (untuk reply) |
| `message` | Isi pesan |

**Catatan:** Formspree otomatis menangani validasi email dan required fields.

---

## 🆓 Harga & Paket Gratis

**Paket Gratis Formspree:**
- ✅ 50 form submissions per bulan
- ✅ 1 form
- ✅ Email notifications
- ✅ Basic support

**Upgrade ke paid untuk:**
- Unlimited submissions
- Multiple forms
- Priority support
- Custom integrations

---

## 🐛 Troubleshooting

### Email tidak masuk?

1. **Cek spam folder** - Email bisa masuk ke spam
2. **Verifikasi email** - Formspree akan kirim email verifikasi pertama kali
3. **Check settings** - Buka Formspree dashboard dan verify configuration
4. **Test submission** - Kirim test message dari form

### Form error "Invalid Form ID"?

- Pastikan Form ID benar (copy-paste dari Formspree)
- Refresh halaman browser (Ctrl + F5)
- Cek console browser untuk error (F12)

### Button loading tapi form tidak terkirim?

- Pastikan email field valid (correct format)
- Cek internet connection
- Buka browser console (F12) dan lihat error

---

## 🔄 Integrasi Lanjutan

### Webhook (Premium)

Formspree premium mendukung webhook untuk:
- Send data ke database
- Trigger automation
- Custom backend processing

### Redirect Custom

Jika ingin redirect ke halaman lain setelah submit:

```jsx
// Dalam Contact.tsx
const redirectUrl = "/thank-you"; // atau URL external

// Di Formspree settings, set redirect URL
```

---

## 📚 Dokumentasi Lengkap

Untuk info lebih lengkap, baca:
- [Formspree Documentation](https://formspree.io/docs)
- [@formspree/react GitHub](https://github.com/formspree/react)

---

## ✅ Checklist

- [ ] Buat akun Formspree
- [ ] Buat form baru di Formspree
- [ ] Copy Form ID
- [ ] Paste Form ID di Contact.tsx
- [ ] Jalankan `npm install`
- [ ] Test form dengan mengirim pesan
- [ ] Verifikasi email notification
- [ ] Done! 🎉

---

**Butuh bantuan?** Hubungi Formspree support di [help.formspree.io](https://help.formspree.io)
