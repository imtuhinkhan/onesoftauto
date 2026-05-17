# Onesoftauto

Premium full-stack software agency website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **MongoDB**, **Framer Motion**, and **ShadCN UI**.

## Features

- Premium marketing site (Home, Services, Case Studies, About, Contact, Blog)
- Framer Motion animations, glassmorphism, gradient UI
- MongoDB + Mongoose CMS data layer with seed fallback
- NextAuth v5 admin authentication
- Contact form with Zod validation + Resend email
- Calendly embed support
- SEO (metadata, sitemap, robots)
- Dark / light mode
- Admin dashboard (leads, blogs, case studies, services)

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `NEXTAUTH_SECRET` | Random secret (`openssl rand -base64 32`) |
| `NEXTAUTH_URL` | `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL |
| `RESEND_API_KEY` | Optional — contact email |
| `CONTACT_EMAIL` | Inbox for form submissions |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional Calendly embed URL |

### 3. Seed database (optional)

With MongoDB running:

```bash
npm run seed
```

Default admin: `admin@onesoftauto.com` / `ChangeMe123!`

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Admin: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

> **Note:** The site works without MongoDB using built-in seed data. Connect MongoDB for dynamic CMS and lead storage.

## Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

Use [MongoDB Atlas](https://www.mongodb.com/atlas) for production database.

## Project Structure

```
app/              # Next.js App Router pages
components/       # UI, layout, home sections, admin
lib/              # DB, data fetching, utils
models/           # Mongoose schemas
actions/          # Server actions
auth.ts           # NextAuth config
scripts/seed.ts   # Database seeder
types/            # TypeScript types
```

## Tech Stack

- Next.js 16 (App Router, Server Actions)
- TypeScript
- Tailwind CSS v4
- MongoDB + Mongoose
- NextAuth v5 (Credentials)
- Framer Motion
- ShadCN-style UI (Radix)
- React Hook Form + Zod
- Resend (email)
- Lucide icons

## License

MIT
