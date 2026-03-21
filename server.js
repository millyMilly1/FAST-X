// server.js — Fast X Nexus Services Backend

const express = require('express');
const path = require('path');
const db = require('./data/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ─── API Routes ───────────────────────────────────────────────────────────────

// GET service types
app.get('/api/services', (req, res) => {
  res.json({ success: true, data: db.getServiceTypes() });
});

// GET all orders (admin)
app.get('/api/orders', (req, res) => {
  res.json({ success: true, data: db.getOrders() });
});

// GET stats (admin dashboard)
app.get('/api/stats', (req, res) => {
  res.json({ success: true, data: db.getStats() });
});

// GET single order by ID (tracking)
app.get('/api/orders/:id', (req, res) => {
  const order = db.getOrderById(req.params.id.toUpperCase());
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found. Check your order ID, oga!' });
  }
  res.json({ success: true, data: order });
});

// POST create new order
app.post('/api/orders', (req, res) => {
  const { phone, pickupAddress, dropoffAddress, itemDescription, serviceType } = req.body;
  if (!phone || !pickupAddress || !dropoffAddress || !itemDescription || !serviceType) {
    return res.status(400).json({ success: false, message: 'Abeg fill all the required fields!' });
  }
  const order = db.createOrder(req.body);
  res.status(201).json({ success: true, data: order, message: 'Order placed! Your okada dey come!' });
});

// PATCH update order status (admin)
app.patch('/api/orders/:id/status', (req, res) => {
  const { status } = req.body;
  const validStatuses = db.getStatuses();
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status, oga admin!' });
  }
  const order = db.updateStatus(req.params.id.toUpperCase(), status);
  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found!' });
  }
  res.json({ success: true, data: order, message: 'Status updated sharp-sharp!' });
});

// ─── Page Routes ──────────────────────────────────────────────────────────────
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/order', (req, res) => res.sendFile(path.join(__dirname, 'public', 'order.html')));
app.get('/track', (req, res) => res.sendFile(path.join(__dirname, 'public', 'track.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'public', 'admin.html')));

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════╗
║   🚀 FAST X NEXUS SERVICES — Server Running!    ║
║   Port: ${PORT}                                      ║
║   Lagos logistics, sharp-sharp! 💚              ║
╚══════════════════════════════════════════════════╝
  `);
});
