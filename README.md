# ⚡ Fast X Nexus Services
### Lagos Okada Delivery Management System

---

## 🚀 Quick Start on Replit

1. Upload all files to your Replit project
2. Click **Run** — it installs dependencies and starts the server automatically
3. Visit your Replit URL to see the landing page!

---

## 📁 File Structure

```
fastxnexus/
├── server.js          ← Express backend (API + page routing)
├── package.json       ← Dependencies
├── .replit            ← Replit config (auto-starts server)
├── data/
│   └── db.js          ← In-memory DB + 10 seed orders
└── public/
    ├── index.html     ← 🏠 Landing page (Lagos vibe!)
    ├── order.html     ← 📦 Customer order form (3-step)
    ├── track.html     ← 🔍 Order tracking page
    └── admin.html     ← 📊 Admin dashboard
```

---

## 🔗 Pages

| Page | URL | Who |
|------|-----|-----|
| Landing Page | `/` | Everyone |
| Send Package | `/order` | Customers |
| Track Order | `/track` | Customers |
| Admin Dashboard | `/admin` | Admin only |

---

## 📡 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/services` | Get all service types + pricing |
| GET | `/api/orders` | Get all orders (admin) |
| GET | `/api/orders/:id` | Get single order by ID |
| POST | `/api/orders` | Create new order |
| PATCH | `/api/orders/:id/status` | Update order status (admin) |
| GET | `/api/stats` | Get dashboard stats |

---

## ✏️ Things to Customize

1. **WhatsApp number** — Replace `2348000000000` in `index.html`, `order.html`, and `track.html`
2. **Rider Google Form** — Replace `https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM` in `index.html`
3. **Service prices** — Edit `SERVICE_TYPES` array in `data/db.js`
4. **Admin URL** — Currently public at `/admin` — add a password check when ready

---

## 🧠 Notes

- **Data is in-memory** — restarting the server resets to seed data. For production, plug in PostgreSQL or MongoDB.
- **No auth yet** — Admin is open. Add basic auth before going live.
- **No image storage** — Images are previewed locally only (file input).
- **Order IDs** format: `FXN-XXXXXX` (e.g., `FXN-AB1C2D`)

---

## 🇳🇬 Made with 💚 for Lagos
