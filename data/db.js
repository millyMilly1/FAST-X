// data/db.js — In-memory database with seed data

// ─── Service Types ─────────────────────────────────────────────────────────────
const SERVICE_TYPES = [
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Steady and reliable',
    emoji: '📦',
    basePrice: 1200,
    pricePerKg: 150,
    estimatedTime: '3–6 hours',
    description: 'Cool and collected. Your parcel goes when it goes — no rush, all sure.',
  },
  {
    id: 'sharp-sharp',
    name: 'Sharp-Sharp',
    tagline: 'No time to waste, oga!',
    emoji: '⚡',
    basePrice: 2500,
    pricePerKg: 250,
    estimatedTime: '1–2 hours',
    description: 'When e must reach there before anything. We move sharp-sharp, no story.',
  },
  {
    id: 'same-day',
    name: 'Same-Day',
    tagline: 'Today today, before night!',
    emoji: '🚀',
    basePrice: 1800,
    pricePerKg: 200,
    estimatedTime: '4–8 hours',
    description: 'Order before 2pm, it reaches before end of day. Guaranteed, no dulling.',
  },
];

// ─── Statuses ─────────────────────────────────────────────────────────────────
const STATUSES = [
  'Pending',
  'Pickup Requested',
  'Picked Up',
  'In Transit',
  'Delivered',
  'Cancelled',
];

// ─── Seed Orders ──────────────────────────────────────────────────────────────
function makeOrderId() {
  return 'FXN-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function randomPast(hoursAgo) {
  return new Date(Date.now() - hoursAgo * 60 * 60 * 1000).toISOString();
}

const seedOrders = [
  {
    id: makeOrderId(),
    customerName: 'Chukwuemeka Obi',
    phone: '08031234567',
    pickupAddress: '14 Herbert Macaulay Way, Yaba, Lagos',
    dropoffAddress: '52 Admiralty Way, Lekki Phase 1, Lagos',
    itemDescription: 'Electronics — laptop charger and accessories',
    weight: '2',
    size: 'Medium',
    serviceType: 'sharp-sharp',
    price: 3000,
    estimatedTime: '1–2 hours',
    status: 'Delivered',
    createdAt: randomPast(26),
    updatedAt: randomPast(24),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Adaeze Nwosu',
    phone: '08057654321',
    pickupAddress: '3 Allen Avenue, Ikeja, Lagos',
    dropoffAddress: 'Surulere, Bode Thomas Street, Lagos',
    itemDescription: 'Clothing items — 2 dresses and shoes',
    weight: '3',
    size: 'Medium',
    serviceType: 'same-day',
    price: 2400,
    estimatedTime: '4–8 hours',
    status: 'In Transit',
    createdAt: randomPast(5),
    updatedAt: randomPast(2),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Babatunde Fashola',
    phone: '08099887766',
    pickupAddress: 'Ajah Bus Stop, Lekki-Epe Expressway, Lagos',
    dropoffAddress: '7 Adewale Crescent, Gbagada, Lagos',
    itemDescription: 'Food items — fresh tomatoes and vegetables',
    weight: '5',
    size: 'Large',
    serviceType: 'sharp-sharp',
    price: 3750,
    estimatedTime: '1–2 hours',
    status: 'Picked Up',
    createdAt: randomPast(2),
    updatedAt: randomPast(1),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Ngozi Eze',
    phone: '08145678901',
    pickupAddress: 'Maryland Mall, Ikeja, Lagos',
    dropoffAddress: 'Festac Town, 22 Road, Lagos',
    itemDescription: 'Documents — contract papers (handle with care)',
    weight: '1',
    size: 'Small',
    serviceType: 'standard',
    price: 1350,
    estimatedTime: '3–6 hours',
    status: 'Pending',
    createdAt: randomPast(0.5),
    updatedAt: randomPast(0.5),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Emeka Onyekachi',
    phone: '09021345678',
    pickupAddress: '10 Broad Street, Lagos Island, Lagos',
    dropoffAddress: 'Ikoyi, Alfred Rewane Road, Lagos',
    itemDescription: 'Birthday cake and balloons',
    weight: '2',
    size: 'Medium',
    serviceType: 'sharp-sharp',
    price: 3000,
    estimatedTime: '1–2 hours',
    status: 'Pickup Requested',
    createdAt: randomPast(1),
    updatedAt: randomPast(0.8),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Funke Akindele',
    phone: '07034567890',
    pickupAddress: 'Computer Village, Ikeja, Lagos',
    dropoffAddress: 'Victoria Island, Adeola Odeku Street, Lagos',
    itemDescription: 'Phones — 2 iPhones in original box',
    weight: '1',
    size: 'Small',
    serviceType: 'same-day',
    price: 2000,
    estimatedTime: '4–8 hours',
    status: 'Delivered',
    createdAt: randomPast(30),
    updatedAt: randomPast(22),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Kelechi Iheanacho',
    phone: '08076543210',
    pickupAddress: 'Ojota Bus Stop, Lagos',
    dropoffAddress: 'Oshodi Market, Lagos',
    itemDescription: 'Fabric rolls — ankara materials',
    weight: '8',
    size: 'Large',
    serviceType: 'standard',
    price: 2400,
    estimatedTime: '3–6 hours',
    status: 'In Transit',
    createdAt: randomPast(4),
    updatedAt: randomPast(2),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Amaka Obiechina',
    phone: '08123456789',
    pickupAddress: 'Ikate, Lekki, Lagos',
    dropoffAddress: 'Sangotedo, Ajah, Lagos',
    itemDescription: 'Baby items — diapers and milk tins',
    weight: '4',
    size: 'Medium',
    serviceType: 'sharp-sharp',
    price: 3200,
    estimatedTime: '1–2 hours',
    status: 'Pending',
    createdAt: randomPast(0.2),
    updatedAt: randomPast(0.2),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Tunde Badmus',
    phone: '07012345678',
    pickupAddress: 'Ketu, Lagos',
    dropoffAddress: 'Ikorodu Road, Palmgrove, Lagos',
    itemDescription: 'Office supplies — reams of paper and pens',
    weight: '6',
    size: 'Large',
    serviceType: 'standard',
    price: 2100,
    estimatedTime: '3–6 hours',
    status: 'Cancelled',
    createdAt: randomPast(48),
    updatedAt: randomPast(47),
    hasImage: false,
  },
  {
    id: makeOrderId(),
    customerName: 'Chiamaka Dike',
    phone: '09087654321',
    pickupAddress: 'Yaba Tech, Yaba, Lagos',
    dropoffAddress: 'Mushin, Agege Motor Road, Lagos',
    itemDescription: 'Books and stationery — school supplies',
    weight: '3',
    size: 'Medium',
    serviceType: 'same-day',
    price: 2200,
    estimatedTime: '4–8 hours',
    status: 'Pickup Requested',
    createdAt: randomPast(3),
    updatedAt: randomPast(2.5),
    hasImage: false,
  },
];

// ─── In-memory store ──────────────────────────────────────────────────────────
let orders = [...seedOrders];

// ─── DB helpers ───────────────────────────────────────────────────────────────
const db = {
  getOrders() {
    return [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },
  getOrderById(id) {
    return orders.find((o) => o.id === id) || null;
  },
  createOrder(data) {
    const serviceInfo = SERVICE_TYPES.find((s) => s.id === data.serviceType);
    const weight = parseFloat(data.weight) || 1;
    const price = serviceInfo
      ? serviceInfo.basePrice + serviceInfo.pricePerKg * weight
      : 1500;
    const order = {
      id: makeOrderId(),
      customerName: data.customerName || 'Anonymous',
      phone: data.phone,
      pickupAddress: data.pickupAddress,
      dropoffAddress: data.dropoffAddress,
      itemDescription: data.itemDescription,
      weight: data.weight,
      size: data.size || 'Medium',
      serviceType: data.serviceType,
      price,
      estimatedTime: serviceInfo ? serviceInfo.estimatedTime : '3–6 hours',
      status: 'Pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      hasImage: data.hasImage || false,
    };
    orders.unshift(order);
    return order;
  },
  updateStatus(id, status) {
    const idx = orders.findIndex((o) => o.id === id);
    if (idx === -1) return null;
    orders[idx] = { ...orders[idx], status, updatedAt: new Date().toISOString() };
    return orders[idx];
  },
  getStats() {
    const today = new Date().toDateString();
    const todayOrders = orders.filter(
      (o) => new Date(o.createdAt).toDateString() === today
    );
    return {
      total: orders.length,
      today: todayOrders.length,
      pending: orders.filter((o) => o.status === 'Pending').length,
      inTransit: orders.filter((o) => o.status === 'In Transit').length,
      delivered: orders.filter((o) => o.status === 'Delivered').length,
      todayRevenue: todayOrders.reduce((s, o) => s + o.price, 0),
    };
  },
  getServiceTypes() {
    return SERVICE_TYPES;
  },
  getStatuses() {
    return STATUSES;
  },
};

module.exports = db;
