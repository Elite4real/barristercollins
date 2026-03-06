# Collins Law Firm — Next.js Website

A professional, multi-page law firm website for **Bar. James Scott Collins**, Houston Assistant Attorney, District of Houston.

## Pages
- `/` — **Home**: Hero, intro, practice areas preview, stats, testimonials, CTA
- `/about` — **About**: Attorney profile, values, career timeline
- `/services` — **Services**: Full detail on all 6 practice areas
- `/contact` — **Contact**: Form, contact info, WhatsApp CTA, FAQ

## Tech Stack
- **Next.js 14** (Pages Router)
- **CSS Modules** (per-page scoped styles)
- **Google Fonts** — Playfair Display, Cormorant Garamond, Montserrat
- No external UI libraries — fully custom design

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build
npm start
```

## Customization Checklist
Before going live, update the following:

1. **WhatsApp number** — Search & replace `17130000000` with Bar. Collins' real number
2. **Phone number** — Replace `+1 (713) 000-0000` with real phone
3. **Email** — Replace `james@collinslaw-houston.com` with real email
4. **Address** — Update office address in Footer and Contact page
5. **Attorney photo** — Add a real photo to `/public/attorney.jpg` and update the avatar placeholders
6. **Form backend** — Connect the contact form to an email service (e.g., Resend, Formspree, or Nodemailer)

## Deployment
Deploy instantly to [Vercel](https://vercel.com) — just push to GitHub and connect the repo.

```bash
npm install -g vercel
vercel
```

## Design System
- **Primary**: Navy `#0d1b2a`
- **Accent**: Gold `#c9a84c`
- **Background**: Cream `#f8f4ed`
- **Typography**: Playfair Display (headings), Cormorant Garamond (body serif), Montserrat (UI)


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SolomonElijah/barristercollins.git
git push -u origin main