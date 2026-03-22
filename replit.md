# Fast X Nexus Services

A Lagos-based delivery management system for motorcycle (okada) logistics.

## Overview

- **Landing page**: Service introduction with Standard, Sharp-Sharp, and Same-Day options
- **Order system**: 3-step customer order form for pickup and drop-off details
- **Tracking**: Order status tracking using IDs like `FXN-XXXXXX`
- **Admin dashboard**: Order management with status updates and stats

## Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML/CSS/JavaScript (served as static files via Express)
- **Database**: In-memory store (`data/db.js`) — resets on server restart

## Project Structure

```
server.js         # Express server + API routes (entry point)
data/
  db.js           # In-memory database and seed data
public/
  index.html      # Landing page
  order.html      # Customer order form
  track.html      # Order tracking page
  admin.html      # Admin dashboard
  images/         # Static image assets
package.json
```

## Running the App

```bash
node server.js
```

Server listens on `0.0.0.0:5000`.

## API Endpoints

- `GET /api/services` — list service types
- `GET /api/orders` — list all orders (admin)
- `GET /api/stats` — dashboard stats
- `GET /api/orders/:id` — get single order by ID (tracking)
- `POST /api/orders` — create new order
- `PATCH /api/orders/:id/status` — update order status (admin)

## Notes

- Data is in-memory and resets on server restart. Use a persistent database (e.g., PostgreSQL) for production data durability.
- Deployment uses `vm` target to preserve in-memory state.
