# Rastový audit Mercatores

Marketingová stránka pre **Rastový audit Mercatores** — praktickú diagnostiku
obchodu, dopytu, CRM a procesov pre firmy, ktoré už predávajú, ale rastú
chaoticky. Diagnostika vychádza z internej metodiky **Rastový Kompas**
(fázy rastu firmy 0–9).

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- React Router

## Vývoj

```bash
npm install
npm run dev        # vývojový server na http://localhost:8080
npm run build      # produkčný build
npm run preview    # náhľad produkčného buildu
npm run lint       # ESLint
npm run test       # unit testy (Vitest)
```

## Štruktúra

- `src/pages/Index.tsx` — landing page (Rastový audit)
- `src/components/audit/*` — sekcie landing page
- `src/components/Header.tsx`, `src/components/Footer.tsx` — spoločné prvky
- `src/components/ui/*` — shadcn/ui komponenty
- `src/index.css` — dizajnový systém (farby, typografia)
