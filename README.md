# Blockchain Academy

An interactive, visual course on blockchain technology built with React, Vite, and Tailwind CSS. Designed for learners at NovaSBE and beyond, covering the full journey from blockchain history to real-world applications.

## Course Structure

| # | Section | Topics |
|---|---------|--------|
| — | Learning Objectives | What you will know and be able to do |
| — | Course Summary | Roadmap and course overview |
| 00 | Prologue — History of Blockchain | Cypherpunk movement, birth of Bitcoin |
| 01 | Introduction to Blockchain Technology | DLT, hashing, Merkle trees, blocks, wallets, transactions, consensus |
| 02 | Bitcoin and Beyond | Deep dive into Bitcoin and its network |
| 03 | What's Next for Blockchain? | Web3, DeFi, ethics, and the future |

## Tech Stack

- **React 18** + **React Router 7**
- **Vite 6** (build tool)
- **Tailwind CSS 4** (styling)
- **shadcn/ui** + **Radix UI** (component library)
- **MUI** (supplemental components)
- **Recharts**, **Motion**, **Lucide React**

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── blockchain/     # Interactive blockchain visualizations
│   │   ├── navigation/     # Course and section navigation
│   │   ├── shared/         # Reusable shared components
│   │   ├── templates/      # Slide layout templates
│   │   └── ui/             # shadcn/ui base components
│   ├── pages/              # Route-level page components
│   ├── routes.ts           # React Router configuration
│   ├── Root.tsx            # App shell
│   └── App.tsx
├── styles/                 # Global CSS, theme, fonts
└── main.tsx
```

## Instructors

- **Helder Salvador** — Blockchain Engineer & Teacher, Blockchain Specialist @ NovaSBE
- **Shayan Eskandari** — Blockchain Engineer & Teacher
- **Leid Zejnilovnic** — Blockchain Engineer & Teacher

## Attributions

This project uses components from [shadcn/ui](https://ui.shadcn.com/) under the [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

Photos sourced from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license).

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for full details.
