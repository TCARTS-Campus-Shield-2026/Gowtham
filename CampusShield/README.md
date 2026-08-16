# Campus Shield

**Project Title:** Anti-Ragging & Anti-Drug Awareness and Reporting System

## Technology

React + TypeScript + Vite + Tailwind CSS + Supabase

- **React** — UI library
- **TypeScript** — static typing
- **Vite** — build tool / dev server
- **Tailwind CSS** — styling
- **React Router** — client-side routing
- **Lucide React** — icon set
- **Supabase** — backend (auth, database, storage) — *Auth + profiles integrated as of Step 2*

## Project Status

Step 1 (UI foundation) and Step 2 (Supabase auth + student profiles) are
complete. Registration, login, logout, and protected student routes are
wired to a real Supabase project. Remaining modules (reporting, awareness
content, admin dashboard, etc.) will be added step-by-step in following
stages.

## Project Modules

1. Student Authentication
2. Student Dashboard
3. Anti-Ragging Awareness
4. Anti-Drug Awareness
5. Incident Reporting
6. Anonymous Reporting
7. Evidence Upload
8. Complaint Tracking
9. Emergency Help
10. Notifications
11. Admin Authentication
12. Admin Dashboard
13. Complaint Management
14. Student Management
15. Awareness Content Management
16. Emergency Contact Management
17. Analytics

## Folder Structure

```
campus-shield/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── student/
│   │   └── admin/
│   │
│   ├── layouts/
│   │   ├── StudentLayout.tsx
│   │   └── AdminLayout.tsx
│   │
│   ├── pages/
│   │   ├── auth/
│   │   ├── student/
│   │   └── admin/
│   │
│   ├── routes/
│   ├── services/
│   ├── hooks/
│   ├── context/
│   ├── types/
│   ├── utils/
│   ├── lib/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── supabase/
│   ├── migrations/
│   └── seed/
│
├── docs/
│   ├── project-report/
│   ├── diagrams/
│   └── screenshots/
│
├── .env.example
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com).
2. In your project dashboard, go to **Settings → API** and find the
   **Project URL**.
3. On the same page, find the **anon / public** key (never use the
   `service_role` key in frontend code).
4. Copy `.env.example` to `.env.local` and paste in the two values:
   ```bash
   cp .env.example .env.local
   ```
   ```
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
5. Run `npm install`.
6. Run `npm run dev`.
7. In the Supabase SQL editor, run the migration in
   `supabase/migrations/0001_create_profiles.sql` to create the `profiles`
   table, the auto-provisioning trigger, and its Row Level Security
   policies.
8. If your project requires email confirmation (Supabase's default), new
   students will see a "check your email" message after registering and
   won't get a session until they confirm.

If `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` are left blank, the app
still runs — auth screens show a friendly "not configured" message instead
of crashing.

## Next Steps

Remaining modules (reporting, awareness content, admin dashboard, etc.)
will be built incrementally in the steps that follow.

