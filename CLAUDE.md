# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — Start dev server (Next.js Turbopack, http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint (flat config, `eslint.config.mjs`)

## Tech Stack

- **Next.js 16.2.1** with App Router (no `src/` directory — app code lives in `app/`)
- **React 19**, **TypeScript 5** (strict mode)
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **Geist** font family (sans + mono) loaded via `next/font/google`

## Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`).

## Architecture

Fresh `create-next-app` scaffold. Single route at `app/page.tsx` with root layout in `app/layout.tsx`. No API routes, middleware, or additional pages yet.
