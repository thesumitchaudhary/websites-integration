# 🎓 College Event Registration Portal

A modern web application built to manage college events — from student registrations to certificate generation — with an intuitive admin panel and blog system.

## 🚀 Features

- 📅 Event listing and details view
- 📝 Student registration with validation
- 🧑‍💼 Admin dashboard to manage events and registrations
- 🪪 Auto-generated event participation certificates (PDF download)
- 📰 Blog system for event updates and news
- 🔐 Authentication (user & admin roles)

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, ShadCN UI
- **Backend:** Supabase (PostgreSQL, Auth, Storage, RLS)
- **PDF Generator:** `pdf-lib` (for certificate download)

## 📦 Getting Started

### Prerequisites

- Node.js ≥ 18.x
- Supabase account/project set up
- Git

### Installation

```bash
git clone https://github.com/yourusername/college-event-registration-portal.git
cd college-event-registration-portal
npm install
Configuration
Create a .env file in the root:

## Create a .env file in the root
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key

Make sure Supabase tables and RLS policies are correctly set (Events, Users, Registrations, Certificates, Blogs).

npm run dev
Visit: http://localhost:5173
