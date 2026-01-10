# IIT Jodhpur Tech Park

Official website for IIT Jodhpur Tech Park - A premier innovation hub fostering entrepreneurship, research, and technological advancement in Rajasthan.

## 🚀 Overview

This project is built with [Next.js](https://nextjs.org) (App Router), leveraging the latest web technologies to provide a high-performance, accessible, and visually engaging experience. The website serves as a digital gateway to the Tech Park's ecosystem, showcasing initiatives, startups, and opportunities for collaboration.

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** Geist & Geist Mono (via `next/font`)
- **Linting:** ESLint

## ✨ Features

- **Modern UI/UX:** Responsive design with geometric backgrounds and smooth animations.
- **SEO Optimized:**
  - **Metadata:** deeply integrated in layouts.
  - **Sitemap & Robots:** Dynamically generated via `sitemap.ts` and `robots.ts`.
  - **Structured Data:** JSON-LD for rich search results.
- **PWA Ready:** Includes `manifest.ts` for progressive web app capabilities.

## 📂 Project Structure

```bash
src/
├── app/                  # App Router pages and layouts
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── ecosystem/        # Ecosystem details
│   ├── initiatives/      # Projects and initiatives
│   ├── news/             # News and updates
│   ├── layout.tsx        # Root layout with Metadata
│   └── page.tsx          # Homepage
├── components/           # Reusable React components
│   ├── common/           # Shared components (Navbar, Footer, etc.)
│   ├── home/             # Homepage-specific components
│   └── about/            # About page components
└── public/               # Static assets
```

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd iitjtechpark
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Then start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 📜 Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for code quality issues.

## ⚠️ Configuration Note

Before deployment, please ensure you update the default domain `https://iitjtechpark.com` in the following files:
- `src/app/layout.tsx`
- `src/app/sitemap.ts`

## 🤝 Contribution

Contributions are welcome! Please feel free to refer to the issues tab or open a PR.

## 📄 License

[MIT](LICENSE)
