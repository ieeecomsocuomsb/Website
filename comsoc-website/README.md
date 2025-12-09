# IEEE ComSoc UOM SB — Website

Modern website built with Vite, React, TypeScript, and Tailwind CSS for the IEEE Communications Society (University of Moratuwa Student Branch).

## Features
- Fast dev/build with `vite`
- React + TypeScript components
- Tailwind CSS styling
- Organized pages and layouts

## Prerequisites
- Node.js 18+ (recommend 20+)
- npm 9+

## Getting Started
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure
```
comsoc-website/
	public/                # Static assets served as-is
	src/
		assets/              # Images and media
		components/          # Reusable UI components (e.g., Button, Carousel)
		Layouts/             # Layout components (e.g., Navbar)
		Pages/               # Route-level pages (Home, Events, About, etc.)
		App.tsx              # App shell
		main.tsx             # React entry point
		index.css            # Global styles
		App.css              # App-scoped styles
	index.html             # Vite HTML template
	tailwind.config.js     # Tailwind configuration
	vite.config.ts         # Vite configuration
	tsconfig*.json         # TypeScript configs
	eslint.config.js       # ESLint configuration
	package.json           # Scripts and dependencies
```

## Available Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Build production assets
- `npm run preview`: Preview the built app

## Styling
- Tailwind CSS is enabled via `index.css` and `tailwind.config.js`.
- Use utility-first classes in components and pages.

## Development Notes
- Prefer TypeScript components (`.tsx`). A legacy `Carousel.jsx` exists; consider migrating to `Carousel.tsx`.
- Keep components small and reusable under `src/components/`.
- Pages under `src/Pages/` should focus on content and composition.

## Contributing
1. Create a feature branch from `main`.
2. Run `npm run dev` and ensure changes build with `npm run build`.
3. Commit with clear messages and open a PR.

## Deployment
The `npm run build` command outputs to `dist/`. Host the contents of `dist/` on any static hosting (Netlify, Vercel, GitHub Pages, or a custom server).

## License
Copyright © IEEE ComSoc UOM SB. All rights reserved.

