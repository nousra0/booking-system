## Overview

This project is a **Next.js booking system prototype** that demonstrates how a single codebase can support different booking experiences for multiple niches, starting with:

- **Restaurant reservations** – a warm, atmosphere-first flow for booking tables.
- **Doctor appointments** – a calm, clinical flow for scheduling medical visits.

The focus is on **UX, UI, and flow design**, not on backend persistence or real payments.

## Features

- **Dual-niche home page**
  - Landing page that explains the concept and lets you choose between the restaurant and doctor flows.

- **Restaurant flow**
  - Restaurant landing page with hero imagery, featured dishes, and testimonials.
  - Booking form for name, phone, number of guests, date, time, and special requests.
  - Validation for required fields and restaurant opening hours.
  - Confirmation page that summarizes the reservation details.

- **Doctor flow**
  - Doctor listing page with cards for each doctor (image, specialty, rating, patients).
  - Booking form for patient name, phone, doctor selection, date, time, and reason for visit.
  - Simple validation on required fields.
  - Confirmation page that summarizes the appointment details and allows editing via query params.

- **Shared UI components**
  - `Card`, `Button`, `Input`, `Modal`, `DatePicker`, and `TimePicker` components shared across flows.
  - Consistent, mobile-first layouts and gradients tailored per niche.

## Tech Stack

- **Framework**: Next.js App Router (TypeScript)
- **Styling**: Tailwind-style utility classes via global CSS
- **UI**: Custom React components for cards, forms, and layout

## Getting Started

First, install dependencies (if you haven’t already):

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to explore:

- `/` – home page explaining the dual booking prototype.
- `/restaurant` – restaurant experience.
- `/restaurant/booking` – restaurant booking form.
- `/doctor` – doctor listing and entry point.
- `/doctor/booking` – doctor booking form.

## Notes & Next Steps

This is currently a **front-end prototype**:

- Data is static and stored in components (no database).
- Bookings are passed via URL query parameters between steps.

Possible next steps:

- Add a backend (API routes or external service) to persist bookings.
- Add authentication so users can manage their reservations.
- Generalize the flows to support more niches beyond restaurants and healthcare.
