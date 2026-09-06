# Austin Aitken - Portfolio

Personal portfolio site showcasing software engineering experience, entrepreneurship, qualifications, and resources. Built as a single-page application with per-route code splitting, so the initial bundle stays small and each page loads its own chunk on demand.

## Tech Stack

- [React 19](https://react.dev/) with the [React Compiler](https://react.dev/learn/react-compiler) (enabled via `babel-plugin-react-compiler`)
- [TypeScript 5.9](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/) with [vite-imagetools](https://github.com/vcarl/imagetools) for on-demand WebP transcoding (`?format=webp` imports)
- [React Router 7](https://reactrouter.com/) - all 19 routes are lazy-loaded (`React.lazy` + `Suspense`)
- [react-pdf](https://react-pdf.org/) and [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter), isolated to the routes that use them
- [Vitest 5](https://vitest.dev/) + [Testing Library](https://testing-library.com/) for component and route tests
- [ESLint 9](https://eslint.dev/) (flat config, type-aware, `eslint-plugin-react-x`/`react-dom`) + [Prettier](https://prettier.io/)

## Requirements

Node.js **22** (pinned in `.nvmrc`; `nvm use` or `fnm use` picks it up automatically).

## Getting Started

```sh
nvm use        # Node 22
npm ci
npm run dev
```

## Scripts

| Script                 | Purpose                                               |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with HMR                    |
| `npm run build`        | Type-check (`tsc -b`) and build the production bundle |
| `npm run preview`      | Serve the production build locally                    |
| `npm run lint`         | ESLint over the whole repo (type-aware)               |
| `npm run typecheck`    | TypeScript project-reference build (`tsc -b`)         |
| `npm run test`         | Run the Vitest suite once (jsdom)                     |
| `npm run test:watch`   | Run Vitest in watch mode                              |
| `npm run format`       | Prettier over the whole repo (`--write`)              |
| `npm run format:check` | Prettier check only (used by CI)                      |

## Project Structure

```
src/
  common/            # Shared building blocks (components, context, hooks, constants)
    components/      #   AnimatedDrawing, ErrorBoundary, GraduationCard, PageLoader, pages/*
    context/         #   GlobalContext (mobile nav state)
    hooks/           #   usePageTitle
  routes/            # One folder per route, lazily imported from routes/routes.ts
    routes.ts        #   APP_ROUTES registry + nav/parent/child route helpers
    UnknownRoute/    #   Real 404 page for unmatched paths
  top-level/         # Header + mobile NavMenu shell
  App.tsx            # Router wiring: lazy routes, Suspense, ErrorBoundary, catch-all
```

Every route renders a `PageIntroduction` with an `aria-label`ed heading and sets `document.title` via `usePageTitle`. Images are imported through vite-imagetools (`?format=webp`) with explicit `width`/`height` attributes to avoid layout shift.

## Testing

The Vitest suite (jsdom) covers route registration and helpers, per-route rendering smoke tests for all 19 routes plus the 404, the PDF viewer's loading/error/retry/ready states (react-pdf is mocked), header and mobile-nav behavior, and shared components. Browser-only APIs (`ResizeObserver`, `scrollTo`, `scrollIntoView`) are stubbed in `src/test/setup.ts`.

## Deployment

- **CI** - `.github/workflows/ci.yml` runs lint, typecheck, tests, build, and format check on Node 22 for pushes to `main`/`dev` and all pull requests.
- **Hosting** - [AWS Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/hosting-frontend.html) using the build spec in `amplify.yml` (npm ci -> npm run build -> publish `dist/`). Amplify's built-in SPA rewrite serves `index.html` for unknown deep links; the app renders its own 404 for unmatched routes. Set the Node runtime to **22** in the Amplify console to match CI.
