# Implementation Plan: Production-Grade Portfolio Refactor

Repository: /Users/austinaitken/Job/repos/portfolio

## Overview

This plan refactors the Vite 7 + React 19 + TypeScript portfolio into a production-grade application:

- Fixes all 19 ESLint issues (18 errors + 1 warning) so `npm run lint` exits with 0 errors / 0 warnings. Exact baseline (verified via `npm run lint`):
  - `@typescript-eslint/no-misused-promises` x 11 (HomePage x6, PersonalityPage x2, EntrepreneurshipPage x2, ExperiencePage x1)
  - `react-hooks/set-state-in-effect` x 3 (Header, NavMenu, Home2/Mdium - the Home2 one is resolved by deleting Home2)
  - `@typescript-eslint/no-floating-promises` x 1 (Header `navigate('/contact-me')`)
  - `@typescript-eslint/no-empty-object-type` x 2 (IconButton:3, interfaces.tsx:1 - resolved by deletion)
  - `no-empty-pattern` x 1 (IconButton - resolved by deletion)
  - `react-x/no-array-index-key` x 1 warning (AnimatedDrawing)
- Removes ~3,000 lines of dead code: the entire Home2/ single-page route design (34 files, 2,431 lines), unused stub components (Template, IconButton), the unused `Demo` interface (interfaces/), template leftovers (src/index.css - dead, imported nowhere; public/vite.svg), ~500 lines of commented-out JSX, 31 unused image assets (~10 MB), and the unused navigation.ts constant file.
- Fixes real UX bugs: the catch-all route renders the Home page instead of the unused UnknownRoute 404; Contact CTAs on non-Contact pages silently fail (scrollIntoView targets a #contact that only exists on the Contact page); no-op buttons whose real destination already exists are wired to it (13 Contact Me no-ops + 4 scrollToContact handlers + View Transcript + View Exam); stubs awaiting links are kept as-is (user-confirmed); the LinkedIn button (no handler; URL documented in code) becomes a proper anchor.
- Adds route-level code splitting (React.lazy for all 19 routes + Suspense + ErrorBoundary), isolating react-pdf v10 and react-syntax-highlighter v16 from the initial bundle.
- Optimizes images: vite-imagetools (pinned ^10 for Vite 7 compatibility) WebP output + a shared OptimizedImage component (lazy by default, intrinsic dimensions).
- Adds per-page document.title (usePageTitle in all 19 routes + the 404 page), SEO/OG meta tags in index.html, and a proper 404 page.
- Simplifies GlobalContext to isNavOpen/toggleNav/closeNav only (7 refs + 7 scroll callbacks + setNavOpen + openNav deleted; verified via grep that only App/Header/NavMenu consume the context and only with the 3 surviving fields).
- Consolidates navigation config: deletes src/common/constants/navigation.ts (NAV_ITEMS used only by HomePage; NAV_KEYS unused); HomePage uses literal paths; routes.ts is the single source of truth.
- Normalizes the router package: react-router-dom (deprecated v7 shim) is replaced by react-router (the 7 importing files update their import specifier).
- Sets up testing (Vitest 5 + Testing Library + jsdom), CI (GitHub Actions), and AWS Amplify Hosting deployment (amplify.yml).
- Rewrites the boilerplate Vite README.

Scope decisions confirmed with the user: full production hardening; delete all unused code (relocating GraduationCard first); wire buttons only when a correct destination already exists, otherwise keep stubs; deployment target is AWS Amplify.

---

## Types

### 1. src/common/context/useGlobalContext.ts (modify)

```
export interface GlobalContextProps {
    isNavOpen: boolean
    toggleNav: () => void
    closeNav: () => void
}
```

Removed fields: setNavOpen, openNav, introRef, experienceRef, entrepreneurshipRef, qualificationsRef, personalityRef, contactRef, resourcesRef, scrollToIntro, scrollToExperience, scrollToEntrepreneurship, scrollToQualifications, scrollToPersonality, scrollToContact, scrollToResources. (Verified via grep: live consumers are App [isNavOpen], Header [isNavOpen, toggleNav, closeNav], NavMenu [closeNav, isNavOpen]; the only other consumer is Home2/Resources [resourcesRef], which is deleted. `--header-scroll-offset` is already defined in settings.css and used by generic.css, so the dead GlobalContext scroll helpers lose nothing.)

GlobalContext.tsx: provider keeps useState + toggleNav/closeNav useCallbacks; delete openNav/setNavOpen, all 7 useRef, scrollToSection + the 7 scrollTo* callbacks; value/deps shrink accordingly.

### 2. src/routes/routes.ts (modify)

```
import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export type AppRoute = {
    path: string
    label: string
    component: LazyExoticComponent<ComponentType>
    showInNav: boolean
}
```

All 19 route entries switch from eager imports to `component: lazy(() => import('...'))`. The commented-out /architecture route entry is deleted. The dead special-case `path === '/contact-me'` in getChildRoutes is removed (behavior-neutral: no route path starts with '/contact-me/'). Helpers getRouteByPath, getChildRoutes, getParentRoutePath keep their signatures (internal implementation may use module-scope Maps).

Full route list (19, for reference and tests):

1. `/` (Overview, nav)
2. `/experience` (Experience, nav)
3. `/entrepreneurship` (Entrepreneurship, nav)
4. `/experience/real-time-fraud-analysis`
5. `/experience/big-data-pipeline`
6. `/experience/supervisorship`
7. `/experience/hackathon-winner`
8. `/entrepreneurship/phauna`
9. `/entrepreneurship/phauna/evidence-collection`
10. `/entrepreneurship/phauna/virtual-exams`
11. `/entrepreneurship/phauna/clinical-decision-support`
12. `/entrepreneurship/phauna/clinical-data`
13. `/entrepreneurship/mdium`
14. `/qualifications` (nav)
15. `/personality` (nav)
16. `/personality/amello`
17. `/personality/dmv-simulator`
18. `/resources` (nav)
19. `/contact-me`

Facts for tests: showInNav = 6 (items 1, 2, 3, 14, 15, 18). getChildRoutes: /experience -> 4, /entrepreneurship -> 2 (phauna, mdium), /entrepreneurship/phauna -> 4, /personality -> 2, leaves -> []. getParentRoutePath: null for all top-level routes (including '/'), '/experience' for /experience/*, '/entrepreneurship/phauna' for /entrepreneurship/phauna/*. getRouteByPath: a route for each of the 19 paths, null for unknown.

### 3. src/common/components/pages/PageSection/PageSection.tsx (convert to types-only, rename to PageSection.ts)

```
import type { ComponentType, ReactNode } from 'react'
import type { AnimatedDrawingData } from '@/common/components/AnimatedDrawing/AnimatedDrawing'

export interface PageSubSectionProps {
    title: string
    description: string
    content?: ComponentType
}

export interface PageSectionProps {
    description: string
    content?: ReactNode
    subSections?: PageSubSectionProps[]
    titleStart: string
    titleEnd: string
    titleEndDrawing: AnimatedDrawingData
    buttonLabel?: string
    buttonAction?: () => void
}
```

The PageSection and PageSubSection components are dead (verified: every live import is `import type { PageSectionProps }`; the only JSX usages are in commented-out blocks and Home2) and are deleted. The file becomes an extension-less-resolvable .ts types module so the 9 live type-import sites (@/.../PageSection/PageSection) need no changes. PageSubSection/ (component + module.css) is deleted; its type moves into PageSection.ts. PageSection.module.css is deleted.

### 4. src/common/constants/animated-drawings.ts (modify)

Keep only problemSolverPhraseDrawing (the single live-used drawing, verified by grep). Delete professionalWordDrawing, flameWordDrawing, firstNameWordDrawing, lastNameWordDrawing, darkWordDrawing, todayWordDrawing, resourcesWordDrawing (all used only in commented-out code).

### 5. src/common/components/AnimatedDrawing/AnimatedDrawing.tsx (modify)

AnimatedDrawingPath unchanged. The `key={index}` on statically ordered SVG paths gets a justified disable comment: `eslint-disable-next-line react-x/no-array-index-key` (static, order-dependent SVG paths).

### 6. src/common/constants/contact.ts (new)

```
export const CONTACT_INFO = {
    phone: '+17097703770',
    phoneDisplay: '+1 (709) 770-3770',
    email: 'austinlaitken@gmail.com',
    linkedin: 'https://www.linkedin.com/in/austin-aitken',
}
```

Values are the exact strings already shown/handled in ContactMePage today (tel:+17097703770, sms:+17097703770, mailto:austinlaitken@gmail.com, display '+1 (709) 770-3770' / 'austinlaitken@gmail.com', linkedin.com/in/austin-aitken). Used by ContactMePage (replaces hardcoded values; no behavior change).

### 7. src/common/hooks/usePageTitle.ts (new)

```
export function usePageTitle(title: string): void
```

useEffect sets `document.title` to `${title} - Austin Aitken` and restores the base title on cleanup. Called in ALL 19 route components with that route's label (sub-pages get their own titles, e.g. 'Virtual Exams - Austin Aitken') plus UnknownRoute ('Page Not Available') so the 404 page never shows the previous page's title. Base title: 'Austin Aitken - Software Developer & Founder' (also the index.html <title>).

### 8. src/common/components/OptimizedImage/OptimizedImage.tsx (new)

```
import type { ImgHTMLAttributes } from 'react'

export interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    width: number
    height: number
}

const OptimizedImage = ({ width, height, loading = 'lazy', decoding = 'async', ...rest }: OptimizedImageProps) => (
    <img width={width} height={height} loading={loading} decoding={decoding} {...rest} />
)

export default OptimizedImage
```

No explicit return-type annotation: @types/react 19 has no global JSX namespace (verified: no `declare global` in its .d.ts), and the codebase convention omits component return annotations. On CLS: the global `img, svg { width: 100%; height: 100% }` rule (elements.css) makes images fill their CSS-sized containers, so layout is container-driven exactly as with today's raw imgs; the explicit width/height attributes preserve the intrinsic aspect ratio in any context where the container does not pin the box.

### 9. src/vite-env.d.ts (new - REQUIRED for `?webp` imports)

The repo has no vite-env.d.ts today; tsconfig.app.json uses `"types": ["vite/client"]`, which declares plain asset modules (`*.png`) and a few built-in queries (`*?raw`, `*?url`, `*?inline`) but NOT `*.png?webp`. Without this file, `tsc -b` fails with TS2307 and typed ESLint fails on every `?webp` import:

```
/// <reference types="vite/client" />

declare module '*.png?webp' {
    const src: string
    export default src
}

declare module '*.jpeg?webp' {
    const src: string
    export default src
}

declare module '*.jpg?webp' {
    const src: string
    export default src
}
```

### 10. src/top-level/MainContent/MainContent.tsx (modify)

- Remove the direct `import HomePage` (only used by the catch-all); the 'react-router' import stays (its specifier was switched from 'react-router-dom' in step 2).
- `const UnknownRoute = lazy(() => import('@/routes/UnknownRoute/UnknownRoute'))` (module scope).
- Wrap `<Routes>` in `<Suspense fallback={<PageLoader />}>`; catch-all becomes `<Route path="*" element={<UnknownRoute />} />`.
- Keeps the scroll-to-top useEffect (legitimate external side effect; lint-clean).

### 11. src/routes/ResourcesPage/components/PdfDocument/PdfDocument.tsx (modify)

react-pdf is v10 here (API: `import { pdfjs, Document, Page } from 'react-pdf'`; `pdfjs.GlobalWorkerOptions.workerSrc` already set at module scope - keep it). New local state: `const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading')` plus a `docKey` counter. `Document onLoadError` -> 'error' + inline message + a Retry button that bumps `docKey` (passed as `key` to `<Document>` to force re-fetch); `onLoadSuccess` -> 'ready'. 'loading' renders a centered spinner (role=status). Last Page / Next Page buttons get aria-labels. No prop/type changes.

---

## Files

### New

| Path | Purpose |
|---|---|
| implementation_plan.md | This document, saved at repo root |
| amplify.yml | Amplify Hosting build config (exact YAML in Deployment section) |
| .github/workflows/ci.yml | CI: checkout, setup-node 22 + npm cache, npm ci, then lint, typecheck, test, build, format:check |
| vitest.config.ts | jsdom env, @ alias, setup file, react + imageTools plugins (see Testing) |
| src/test/setup.ts | jest-dom matchers, auto cleanup, window.scrollTo/ResizeObserver/Element.prototype.scrollIntoView stubs (matchMedia mock added only if a test needs it - verified zero matchMedia usage in the codebase and no test requires it) |
| src/common/components/ErrorBoundary/ErrorBoundary.tsx + .module.css | Class-based boundary with friendly fallback + Back to Overview link |
| src/common/components/PageLoader/PageLoader.tsx + .module.css | Suspense fallback (spinner, role=status) |
| src/common/components/OptimizedImage/OptimizedImage.tsx | Lazy, dimensioned img wrapper |
| src/common/hooks/usePageTitle.ts | Per-page document.title |
| src/common/constants/contact.ts | Phone/email/LinkedIn single source of truth |
| src/vite-env.d.ts | vite/client reference + *.png?webp / *.jpeg?webp / *.jpg?webp module declarations |
| src/common/components/GraduationCard/GraduationCard.tsx + .module.css | Relocated from Home2/ (used by 4 live pages) |
| src/routes/__tests__/routes.test.ts | Route helper + data-shape tests |
| src/routes/__tests__/app-routes.test.tsx | Smoke render of all 19 routes via MemoryRouter |
| src/top-level/__tests__/NavMenu.test.tsx | Nav links + sub-route expand/collapse |
| src/top-level/__tests__/Header.test.tsx | Nav toggle, Contact Me navigation, sub-route expand |
| src/common/components/__tests__/AnimatedDrawing.test.tsx | SVG path rendering |
| src/common/components/__tests__/ErrorBoundary.test.tsx | Fallback on thrown error |
| src/common/components/__tests__/OptimizedImage.test.tsx | Attribute pass-through |
| src/common/hooks/__tests__/usePageTitle.test.ts | Title set/restore |

### Modified

| Path | Changes |
|---|---|
| package.json | dependencies: remove react-router-dom, add react-router ^7.11 (v7 canonical package; -dom is a deprecated re-export shim that depends on the same react-router version - both resolve to 7.13.1 in the current lockfile; stay on v7 - react-router's latest is now v8.x and a major upgrade is out of scope; step 2 installs the explicit ^7.11 range so npm cannot pull v8). devDependencies: vitest ^5.0.0 (peer vite ^6.4 || ^7 || ^8, engines node ^22.12 || ^24 || >=26 - verified), jsdom ^30, @testing-library/react ^16.3.3, @testing-library/dom ^10.4.1 (required peer of RTL v16 - must be explicit), @testing-library/jest-dom ^7.0.1, @testing-library/user-event ^14.6.7, vite-imagetools ^10.0.1 (v10 peer is vite >=7; v11/v12 require Vite 8 - do NOT upgrade Vite in this work). scripts: add test (vitest run), test:watch (vitest), typecheck (tsc -b) |
| vite.config.ts | Add imageTools() from vite-imagetools (no options needed for on-demand ?webp imports); keep the optimizeDeps warning workaround (re-verify after the lazy split; remove if the dev server is clean) |
| tsconfig.node.json | include: add vitest.config.ts alongside vite.config.ts (typed ESLint requires every linted file to be covered by parserOptions.project, which lists exactly these two tsconfigs) |
| eslint.config.js | Add override block: files ['**/__tests__/**/*.{ts,tsx}'], rules: react-refresh/only-export-components off (error-level in the vite preset, allowConstantExport; keeps the 0-error gate while allowing test helper exports) |
| index.html | title 'Austin Aitken - Software Developer & Founder'; meta description; Open Graph + Twitter card tags (og:title/og:description only - og:image omitted until a canonical domain is confirmed); theme-color; keep public/logo.svg favicon |
| src/main.tsx | Import BrowserRouter from 'react-router' (not react-router-dom); replace getElementById('root')! with a null guard that throws a clear error (strict-mode-safe) |
| src/top-level/App/App.tsx | Wrap <MainContent /> in <ErrorBoundary key={pathname}> (header/footer/nav survive page crashes; boundary fallback includes a Back to Overview link; App imports useLocation from 'react-router' and keys the boundary by pathname so a route change remounts it and clears the error state - without this, after a page crashes the user is stuck on the fallback even though Header nav still works, because a class boundary's error state persists across route changes) |
| src/routes/routes.ts | Lazy route components + type change (see Types 2); delete commented-out route |
| src/routes/HomePage/HomePage.tsx | 6x buttonAction: () => void navigate('<literal path>') - navigation.ts is deleted, NAV_ITEMS replaced with literal paths; module-level scrollToContact (scrollIntoView) replaced with a buttonAction that navigates to /contact-me; delete commented-out intro block; relative imports (../ResourcesPage/..., ../ContactMePage/...) -> @/ aliases; usePageTitle('Overview') |
| src/routes/ExperiencePage/ExperiencePage.tsx | Delete ~250 lines of commented JSX/imports; 1x () => void navigate(preview.routePath) (line 257); scrollToContact -> navigate /contact-me; usePageTitle('Experience'); import from 'react-router' |
| src/routes/EntrepreneurshipPage/EntrepreneurshipPage.tsx | 2x () => void navigate(...); scrollToContact -> navigate; delete commented blocks (STAR_PATH, IntersectionObserver, TrioAppScreenshots); usePageTitle('Entrepreneurship'); import from 'react-router' |
| src/routes/QualificationsPage/QualificationsPage.tsx | Contact Me -> /contact-me wired; View Transcript -> /resources wired; View Award kept as stub; the commented-out Engineering Graduate preview (which contains the only View Program button) is DELETED with its comment block - View Program therefore disappears, it is not kept; delete remaining comments; usePageTitle('Qualifications'); GraduationCard import updated in the relocate step |
| src/routes/PersonalityPage/PersonalityPage.tsx | 2x () => void navigate(...); intro View Personality button kept as stub; the screenshotItems array gains App_Screenshot dimensions for the TrioAppScreenshots change (Images step 12); delete comments; usePageTitle('Personality'); import from 'react-router' |
| src/routes/ExperiencePage/sub-pages/{SupervisorPage,HackathonWinnerPage,RealtimePaymentFraudPage,BigDataPipelinePage}/*.tsx | Contact Me no-op buttonAction: () => {} -> () => void navigate('/contact-me') (add useNavigate import); delete comments |
| src/routes/EntrepreneurshipPage/sub-pages/PhaunaPage/sub-pages/{VirtualExamPage,EvidenceCollectionPage,ClinicalDecisionSupportPage,ClinicalDataPage}/*.tsx | Contact Me no-op buttonAction: () => {} -> /contact-me (all four sub-pages have one) |
| src/routes/EntrepreneurshipPage/sub-pages/PhaunaPage/PhaunaPage.tsx | View Exam -> /entrepreneurship/phauna/virtual-exams wired; intro Contact Me -> /contact-me wired; View Data Design / View System / View Automation and the single live 'Learn More' no-op (the 'The Veterinarian' preview) kept as stubs (no target yet - Learn More is a candidate for /entrepreneurship/phauna/virtual-exams if the user later wants it wired); the screenshotItems array gains App_Screenshot width/height for the TrioAppScreenshots change (Images step 12); ~78 comment lines removed (including the commented featuredContent + mainContentContainer blocks); usePageTitle('Phauna Technologies Inc.') |
| src/routes/EntrepreneurshipPage/sub-pages/MdiumPage/MdiumPage.tsx | Intro Contact Me no-op buttonAction: () => {} -> /contact-me wired; featuredContent 'View on NTV News' button kept as stub (no link yet); the 'View Article' preview is already wired (window.open to a saltwire.com article) - no change, and it is not a stub; the 3 inline App_Screenshot <img>s (the Step 1/2/3 showcase) migrate to OptimizedImage with the App_Screenshot dimensions (Images step 12); commented blocks removed; usePageTitle('Mdium Inc.') |
| src/routes/PersonalityPage/sub-pages/AmelloPage/AmelloPage.tsx | (NOTE: path is PersonalityPage, not QualificationsPage) Intro Contact Me no-op -> /contact-me wired; featuredContent 'Watch Demo' button kept as stub; commented blocks removed; usePageTitle('Amello'); GraduationCard import updated in the relocate step |
| src/routes/PersonalityPage/sub-pages/DmvSimulatorPage/DmvSimulatorPage.tsx | Contact Me -> /contact-me wired; Watch Demo preview kept as stub; delete comments; usePageTitle('DMV Simulator'); GraduationCard import updated in the relocate step |
| src/routes/ResourcesPage/ResourcesPage.tsx | scrollToContact -> navigate /contact-me; tech-stack chips (VPC, Database, User Auth, Kinesis Video Streams Plugin) kept as stub buttons (no links yet); commented lines removed; usePageTitle('Resources') |
| src/routes/ContactMePage/ContactMePage.tsx | Invalid HTML fixed: buttons wrapping <p> -> <span> (button only allows phrasing content); Call/Message/Email become real <a> anchors (href tel:/sms:/mailto:) and the handlerless LinkedIn button becomes <a href={CONTACT_INFO.linkedin} target='_blank' rel='noreferrer'> (noreferrer implies noopener); all values sourced from CONTACT_INFO; only the four contact <button>s (Call/Message/Email/LinkedIn) become anchors; handlers: handlePhoneCall STAYS (the 'Call Me' PageIntroduction CTA still calls it) but handleEmail and handlePhoneMessage are DELETED - their only live use was the contact buttons that become anchors (the copy/icon buttons that also referenced them sit in the commented block removed here), so keeping them would trip noUnusedLocals and fail tsc -b; commented-out code (the addressButtonContainer block with its commented handlePhoneCopy/handleEmailCopy handlers, the commented <p> lines, the commented title block) removed; usePageTitle('Contact Me') |
| src/routes/UnknownRoute/UnknownRoute.tsx | Add a Back to Overview Link to /; usePageTitle('Page Not Available') |
| src/top-level/Header/Header.tsx | Replace the useEffect (react-hooks/set-state-in-effect) with the state-during-render pattern: const [prevPathname, setPrevPathname] = useState(pathname); if (prevPathname !== pathname) { setPrevPathname(pathname); if (expandedPath !== null and pathname !== expandedPath and !pathname.startsWith(expandedPath + '/')) setExpandedPath(null) } - behavior identical to the current effect (verified against the original predicate); void navigate('/contact-me') in navigateToContact; styles[fadeOrder${index+1}] dynamic key -> typed FADE_ORDERS const array (fadeOrder0..fadeOrder7 all verified present in Header.module.css; logo uses index 0, route groups index+1, nav button index 7); delete commented-out scrollToContact block; delete the unused Marck Script/Schoolbell @import (verified: no font-family reference remains) and the duplicate Roboto @import (Roboto is already imported by elements.css, Footer.module.css, NavMenu.module.css) |
| src/top-level/NavMenu/NavMenu.tsx | Replace the useEffect (react-hooks/set-state-in-effect) with the state-during-render pattern: track prevIsNavOpen; when it becomes false, setExpandedPath(null) |
| src/common/context/GlobalContext.tsx | Provider slimmed to isNavOpen/toggleNav/closeNav; refs + scroll callbacks + openNav/setNavOpen deleted; useMemo value/deps reduced |
| src/common/context/useGlobalContext.ts | Interface slimmed (see Types 1) |
| src/common/components/AnimatedDrawing/AnimatedDrawing.tsx | Justified index-key disable (see Types 5) |
| src/common/components/TrioAppScreenshots/TrioAppScreenshots.tsx | Screenshot item shape extends to { src, alt, width, height }; its <img> becomes OptimizedImage (this component is the live render site for the 6 App_Screenshot imports feeding its 3 instances: PersonalityPage x2, PhaunaPage x1); the per-page arrays/inline imgs are updated in the same step (PersonalityPage + PhaunaPage screenshotItems, MdiumPage's 3 inline imgs) |
| src/common/components/pages/PageSection/PageSection.tsx -> .ts | Types-only (see Types 3) |
| src/common/constants/animated-drawings.ts | Only problemSolverPhraseDrawing kept (see Types 4) |
| src/common/constants/navigation.ts | DELETED (see Files > Deleted) |
| README.md | Rewrite: project description, stack (React 19, TS, Vite 7, react-router v7, React Compiler), script table (dev/build/lint/test/test:watch/typecheck/format/format:check/preview), structure overview, deployment note (AWS Amplify Hosting via amplify.yml) |

### Deleted (each grep-verified as unreferenced by live code immediately before deletion)

- src/routes/Home2/ (entire tree: 34 files, 2,431 lines - contains 1 of the 18 lint errors, so lint is only fully clean after this step; the 4 live GraduationCard imports are relocated first)
- src/common/components/Template/ (dead stub)
- src/common/components/IconButton/ (dead stub; holds 2 lint errors: no-empty-object-type + no-empty-pattern)
- src/common/interfaces/ (empty Demo interface; holds 1 lint error; zero imports)
- src/common/components/pages/PageSubSection/ (component + module.css; type moved into PageSection.ts)
- src/common/components/pages/PageSection/PageSection.module.css (component deleted)
- src/index.css (dead: zero imports repo-wide; main.tsx imports common/styles/main.css which @imports the six ITCSS layer files; its :root block is a duplicate of settings.css and its body/a/button rules are Vite template boilerplate that never shipped - so the file is simply deleted, nothing is inlined)
- src/common/constants/navigation.ts (NAV_ITEMS -> literal paths in HomePage; NAV_KEYS has zero usages)
- public/vite.svg (not referenced; index.html uses /logo.svg)
- Unused images (~10 MB total, grep-verified per file): logo.jpg; profile_pic_1080.png + .webp; HL7_FHIR_Logo.png + .webp; github-icon.webp ONLY (github-icon.svg stays - live in ResourcePreviewGraphic); Portfolio_Logo_Small.png; university/MUN_Logo.png; verafin/Gold_Medal.png (Gold_Medal_Only.png stays - live in 8 pages); 7 mdium assets: Mdium_App_On_Devices.png, Mdium_Logo_Beach.png, Mdium_Logo_Right_Text.png, Mdium_Newspaper.png, Mdium_Newspaper.jpg, Mdium_Newspaper 2.jpg, Mdium_Newspaper 3.jpg (Mdium_Logo.png and Mdium_Newspaper_Headshot.png stay - live); 3 phauna dead assets: database-arch.svg (only database-arch-dark.svg is imported), Phauna_Logo_Right_Text.png, Phauna_Logo_Right_Text_Cropped.png (Home2-only); Home2-only verafin assets: NDAQ.svg, AustinPaymentSender.png, blank_iphone.png, Scala_logo.svg, Apache_Spark_logo.png, superheroBody.png, SideKickBody.png; unused Nasdaq_Verafin_Logo family (Nasdaq_Verafin_Logo.png, _Lateral, _Lateral2, _Stacked, _Text_Only); stray .DS_Store files (already gitignored) |

---

## Code Splitting + Routing

- routes.ts: all 19 components via React.lazy (Types 2). NAV_ROUTES consumers (Header, NavMenu) import only the route data + lazy handles - no route component code loads eagerly.
- MainContent: Suspense + PageLoader around Routes; UnknownRoute catch-all (Types 10).
- App: ErrorBoundary around MainContent (class component; getDerivedStateFromError; fallback = centered message + Link to / + a 'Reload' button calling window.location.reload(); no enums/namespaces so erasableSyntaxOnly stays satisfied; componentDidCatch logs the error + component stack via console.error - the only crash signal a static site gets). App keys the boundary by pathname (useLocation -> <ErrorBoundary key={pathname}>): without this, once a page crashes the boundary stays in its error state across route changes and Header navigation shows the fallback forever (only Reload recovers).
- Expected effect on the build: initial chunk drops to react + react-dom + react-router + shell; react-pdf (ResourcesPage) and react-syntax-highlighter (ClinicalDataPage) move into their own route chunks; WebP assets shrink initial transfer.

## Titles + SEO

- usePageTitle called in all 19 route components with the exact route label (Types 7) plus UnknownRoute ('Page Not Available').
- index.html: real title, meta description, OG/Twitter tags (no og:image until domain confirmed), theme-color (Types/index.html row).

## Image Optimization

1. Add vite-imagetools ^10.0.1 (Vite 7 compatible; v11+/v12 peer-require Vite 8 - out of scope to upgrade Vite).
2. vite.config.ts: import imageTools from 'vite-imagetools'; add imageTools() to plugins.
3. Create src/vite-env.d.ts (Types 9) so ?webp imports type-check.
4. Convert the heaviest live imports to ?webp and migrate their img sites to OptimizedImage with the intrinsic dimensions tabulated after item 6 (sips-verified - use these exact values at every call site):
   - university/Work_Term_Award.png (8.6 MB) - QualificationsPage
   - university/Austin_Aitken_Graduation_Trading_Card.png (4.0 MB) - GraduationCard (front + back faces, same asset)
   - App_Screenshot.jpeg (1.5 MB) - 7 live import sites: PersonalityPage x3, PhaunaPage x3, MdiumPage x1 (single asset, deduped by the bundler)
   - phauna/Winnie_Teeth_Screenshot.png (1.15 MB) - VirtualExamGraphic (PhaunaPage /virtual-exams)
   - AustinBeard.png (1.1 MB) - HomePage, PersonalityPage
   - ProfilePicNoBackground.png (808 KB) - HomePage
   - verafin/Gold_Medal_Only.png (524 KB) - 8 pages: ExperiencePage, SupervisorPage, HackathonWinnerPage, RealtimePaymentFraudPage, BigDataPipelinePage, DmvSimulatorPage, AmelloPage, PhaunaPage
   - Optional (already modest): Mdium_Logo.png (276 KB), Mdium_Newspaper_Headshot.png (176 KB)
5. Smaller assets (logos <100 KB, SVGs) stay as-is; public/ untouched.
6. LCP: the above-the-fold HomePage headshot (PageIntroduction content) passes loading='eager'; every other OptimizedImage keeps the lazy default.

Intrinsic dimensions (sips-verified against the source files - use these exact values at every OptimizedImage call site):

| Asset | width | height |
|---|---|---|
| university/Work_Term_Award.png | 2434 | 3521 |
| university/Austin_Aitken_Graduation_Trading_Card.png | 1235 | 1733 |
| App_Screenshot.jpeg | 1170 | 2532 |
| phauna/Winnie_Teeth_Screenshot.png | 1030 | 917 |
| AustinBeard.png | 1489 | 1364 |
| ProfilePicNoBackground.png | 1080 | 1032 |
| verafin/Gold_Medal_Only.png | 555 | 555 |

## PdfDocument Loading/Error Handling

Per Types 11 (loading spinner, error message + retry, button aria-labels). The module-scope workerSrc assignment stays. No changes to react-pdf usage beyond Document onLoadError handling.

---

## Testing

### Framework

Vitest ^5 (5.0.0: peer vite ^6.4 || ^7 || ^8, engines node ^22.12 || ^24 || >=26 - verified against the registry) + Testing Library (react ^16.3.3 with explicit @testing-library/dom ^10.4.1 peer, jest-dom ^7.0.1, user-event ^14.6.7) + jsdom ^30.

- vitest.config.ts (root): defineConfig from 'vitest/config'; test: { environment: 'jsdom', setupFiles: './src/test/setup.ts' }; resolve.alias '@' -> ./src (same as vite.config); plugins: react() configured the same way as vite.config (babel: plugins: ['babel-plugin-react-compiler']) so tests exercise the compiled components, plus imageTools() from vite-imagetools (included when the file is created in step 3 - vite-imagetools is installed in step 2, and the first ?webp imports arrive with the test files in step 14) - without it the `?webp` query is unknown to the vitest transform pipeline and the route smoke tests fail to resolve the converted imports.
- tsconfig.node.json: add vitest.config.ts to include (required: ESLint runs typed rules with parserOptions.project = [tsconfig.node.json, tsconfig.app.json], and an uncovered root .ts file is a parse error that fails npm run lint).
- eslint.config.js: override for **/__tests__/**/*.{ts,tsx} disabling react-refresh/only-export-components (error-level in the vite preset, allowConstantExport; keeps the 0-error gate while allowing test helper exports).
- src/test/setup.ts: import '@testing-library/jest-dom/vitest' (v7.0.1's package exports include ./vitest - verified in the registry); RTL auto-cleanup is on by default; stubs: window.scrollTo = vi.fn(); a minimal ResizeObserver class mock (PdfDocument constructs one in an effect; jsdom has none); Element.prototype.scrollIntoView = vi.fn(); matchMedia mock only if a test needs it.
- npm run test (vitest run) + npm run test:watch (vitest).

### Test plan (8 files; there is intentionally NO PageSection test - after the refactor PageSection is a types-only module with nothing to render; PagePreview behavior is covered by the route smoke tests)

1. src/routes/__tests__/routes.test.ts (unit, no DOM):
   - getRouteByPath returns a route for all 19 paths; null for unknown paths.
   - Path uniqueness across APP_ROUTES.
   - showInNav routes are exactly the 6 nav entries (/, /experience, /entrepreneurship, /qualifications, /personality, /resources).
   - getParentRoutePath -> null for every top-level route ('/', /experience, /resources, ...), '/experience' for /experience/supervisorship, '/entrepreneurship/phauna' for /entrepreneurship/phauna/virtual-exams.
   - getChildRoutes -> 4 for /experience, 2 for /entrepreneurship, 4 for /entrepreneurship/phauna, 2 for /personality, [] for leaves; /contact-me is never treated as a parent.
2. src/routes/__tests__/app-routes.test.tsx (integration): vi.mock '@/routes/ResourcesPage/components/PdfDocument/PdfDocument' with a default-export placeholder component (ResourcesPage uses a default import; jsdom cannot run the pdf.js engine/worker, and the mock also keeps the smoke test fast and hermetic). Render <App /> inside MemoryRouter(initialEntries=[path]) + GlobalProvider + Suspense for each of the 19 route paths; await screen.findByRole('heading') asserts a real page rendered (all 19 routes render a PageIntroduction with an h1 - verified - so the assertion is valid per route) and document.title equals '<route label> - Austin Aitken' (19 unique titles). Catch-all regression: an unknown path (/definitely-not-a-page) must render the 404 heading 'Page Not Available' with document.title 'Page Not Available - Austin Aitken', not Home.
3. src/top-level/__tests__/NavMenu.test.tsx: 6 nav items + Contact Me render; clicking Experience expands to a synthetic 'Overview' link (to /experience) followed by its 4 sub-routes (Real-Time Fraud Analysis, Big Data Pipeline, Supervisorship, Hackathon Winner) - 5 links total, navigation prevented on expand; closing the nav resets the expansion (state-during-render regression).
4. src/top-level/__tests__/Header.test.tsx: hamburger toggles isNavOpen (aria-expanded flips); Contact Me button navigates to /contact-me and closes the nav; a route with sub-routes (Experience) expands on first click without navigating (preventDefault), collapses on second.
5. src/common/components/__tests__/AnimatedDrawing.test.tsx: renders an svg with exactly drawing.paths.length <path> children for problemSolverPhraseDrawing; aria-hidden passthrough.
6. src/common/components/__tests__/ErrorBoundary.test.tsx: child throwing during render shows the fallback with a Back to Overview link; non-throwing child renders normally. (Wrap renders in MemoryRouter - the fallback renders a Link. Suppress the expected console.error in the throw case.)
7. src/common/hooks/__tests__/usePageTitle.test.ts: hook sets document.title to 'X - Austin Aitken'; unmount/cleanup restores the base title.
8. src/common/components/__tests__/OptimizedImage.test.tsx: passes width/height/loading/decoding through; defaults are lazy/async; src/alt/className spread correctly.

Notes: tests import describe/it/expect/vi from 'vitest' explicitly (globals are not enabled); tests await every async action (userEvent), so no floating promises appear; test components stay non-exported where possible to keep react-refresh quiet (the override covers the rest).

---

## Deployment

### amplify.yml (Amplify Hosting build spec)

```
version: 1
app:
  build:
    install: npm ci
    build: npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  caches:
    paths:
      - node_modules/**
```

Caveats (docs for the current schema could not be re-verified at plan time - the Amplify docs URLs 404'd during review):
- Verify the key names AND nesting (app.build.install/build, and whether artifacts/caches sit under app or under app.build - the shape above is the expected v1 placement) against the Amplify console build template when creating the project. If the app is provisioned under legacy Amplify Console, use the frontend.phases schema instead (preBuild: npm ci, build: npm run build, cache paths node_modules/**/*).
- SPA deep links: Amplify Hosting serves /index.html for unknown paths for static SPA projects (built-in rewrite). Verify on first deploy that a hard refresh on /experience/supervisorship works. Note: unknown deep links are served with HTTP 200 (the index.html fallback) even though the app then renders the 404 page - a standard SPA trade-off, acceptable for this site. The in-app UnknownRoute 404 covers client-side unmatched paths.
- .DS_Store and dist are not published: artifacts files '**/*' is relative to baseDirectory (dist), so only build output is served.
- amplify.yml does not pin the Node runtime: set the project's Node version to 22 in the Amplify console to match CI (build parity with the local toolchain).

### .github/workflows/ci.yml

Single job on ubuntu-latest: checkout -> actions/setup-node node-version 22 with cache npm (vitest 5 requires Node >= 22.12; node-version 22 resolves to the latest 22.x) -> npm ci -> npm run lint -> npm run typecheck -> npm run test -> npm run build -> npm run format:check. (package-lock.json exists, so npm ci is safe.)

Optional: .nvmrc containing 22 for local toolchain alignment.

---

## Verification gates (all must pass before done)

- npm run lint -> 0 errors, 0 warnings. (Note: this is only achievable AFTER the dead-code step, because 4 of the 18 errors live in files that are deleted: Home2/Mdium.tsx x1, IconButton x2, interfaces.tsx x1.)
- npm run typecheck (tsc -b) -> clean (covers src via tsconfig.app.json and both root config files via tsconfig.node.json).
- npm run test -> all green.
- npm run build -> success; dist/assets report shows the initial chunk substantially smaller (target < ~350 KB gz) with react-pdf and react-syntax-highlighter isolated into route-specific chunks; no chunk > 1 MB unsplit.
- npm run dev smoke: nav expansion/collapse (Header + NavMenu), all 19 routes reachable, sub-page navigation, Contact Me actions (tel/sms/mailto/LinkedIn anchors) work, PDF renders on /resources, 404 page on a garbage URL, deep-link hard refresh works, page title changes per route.
- npx prettier --check . clean (or npm run format then re-run lint + typecheck).
- Post-deploy: Amplify project builds green with amplify.yml; deep-link hard refresh works (SPA rewrite confirmed).
- Final git status contains only intended changes (no node_modules, dist, or editor cruft).

---

## Implementation Order

1. Save this plan to /Users/austinaitken/Job/repos/portfolio/implementation_plan.md.
2. Dependency swap + installs (PIN to the dependency table below - an unpinned `npm install react-router` pulls v8.x and an unpinned vite-imagetools pulls v12.x which requires Vite 8; both would contradict the rest of the plan): npm uninstall react-router-dom && npm install react-router@^7.11; npm install -D vitest@^5 jsdom@^30 @testing-library/react@^16.3.3 @testing-library/dom@^10.4.1 @testing-library/jest-dom@^7 @testing-library/user-event@^14.6.7 vite-imagetools@^10.0.1; add package.json scripts (test, test:watch, typecheck). Immediately rewrite the import specifier in all 7 react-router-dom importers (main.tsx, MainContent, Header, HomePage, ExperiencePage, PersonalityPage, EntrepreneurshipPage: 'react-router-dom' -> 'react-router', same named exports) so the swap is atomic and the tree type-checks right after this step (the Header/NavMenu logic fixes in step 6 are unaffected). Verify @testing-library/jest-dom/vitest subpath and vite-imagetools API after install.
3. Tooling config: vitest.config.ts; tsconfig.node.json include += vitest.config.ts; eslint.config.js __tests__ override. (Test files themselves land in step 14 - the config must exist first so later edits stay lint-clean.)
4. Component-level lint/type fixes: AnimatedDrawing disable comment; PageSection.tsx -> types-only .ts; delete PageSubSection/ and PageSection.module.css.
5. GlobalContext/useGlobalContext slim-down.
6. Shell fixes: Header (state-during-render, void navigate, FADE_ORDERS, font-import cleanup) + NavMenu (state-during-render); main.tsx root null guard (its BrowserRouter import was already switched to 'react-router' in step 2).
7. Relocate GraduationCard (+ module.css) to src/common/components/GraduationCard/ and update the 4 live imports (HomePage, QualificationsPage, AmelloPage, DmvSimulatorPage) in the same step (atomic - no broken intermediate state).
8. Page-level fixes: HomePage (incl. navigation.ts deletion - done here since it is HomePage's only consumer), ExperiencePage, EntrepreneurshipPage, QualificationsPage, PersonalityPage, all 12 sub-pages (the 4 Experience sub-pages, PhaunaPage + its 4 sub-pages, MdiumPage, AmelloPage, DmvSimulatorPage - wire no-ops that have a real destination; keep stubs unchanged per the policy), ResourcesPage, ContactMePage (anchors + CONTACT_INFO), UnknownRoute (home link). Remove commented-out code in all touched files.
9. Dead-code deletion batch (grep-verified per item, Home2 last): Template/, IconButton/, interfaces/, Home2/, src/index.css, public/vite.svg, the 31 unused images listed under Files > Deleted. After this step, npm run lint is expected to be clean for the first time.
10. Code splitting + routing: routes.ts lazy components; MainContent Suspense + PageLoader + UnknownRoute catch-all; ErrorBoundary wired into App.
11. Titles + SEO: usePageTitle hook + calls in all 19 routes and UnknownRoute; index.html meta/OG/title.
12. Images: imageTools() in vite.config.ts (vitest.config.ts already includes it from step 3); create src/vite-env.d.ts; convert the 7 heavy live assets to ?webp and migrate their img sites to OptimizedImage with the intrinsic dimensions tabulated in the Image Optimization section (above-the-fold HomePage headshot uses loading='eager'; the rest keep the lazy default). Where the imgs actually live: ProfilePicNoBackground/AustinBeard/Gold_Medal_Only/Work_Term_Award are inline <img>s in the page files; Graduation_Trading_Card is inside GraduationCard (front + back, same asset); Winnie_Teeth is inside VirtualExamGraphic; App_Screenshot (1170x2532) renders two ways - through the shared TrioAppScreenshots component from per-page screenshotItems arrays (PersonalityPage: 2 trio instances; PhaunaPage: 1) and as 3 inline <img>s in MdiumPage - so TrioAppScreenshots extends its item shape to { src, alt, width, height } and renders OptimizedImage, the PersonalityPage + PhaunaPage screenshotItems arrays gain the dimensions, and MdiumPage's 3 imgs become OptimizedImage directly.
13. PdfDocument loading/error/retry states + aria-labels.
14. Tests: src/test/setup.ts + the 8 test files; run until green.
15. Deployment + docs: amplify.yml, .github/workflows/ci.yml, README rewrite, optional .nvmrc.
16. Verification pass: lint, typecheck, test, build + chunk-size review, dev smoke test, prettier --write then --check + re-lint, final git status check.

---

## Button Stub Policy (user-confirmed; every entry below was grep-verified against the code)

Stubs without a link yet are kept as-is (no behavior change):

- QualificationsPage: View Award
- PersonalityPage: View Personality (intro CTA)
- DmvSimulatorPage: Watch Demo (preview)
- AmelloPage: Watch Demo (featured)
- MdiumPage: View on NTV News (featured; the 'View Article' preview is NOT a stub - it already window.opens a real article URL)
- PhaunaPage: View Data Design, View System, View Automation, Learn More (the single live 'The Veterinarian' preview - candidate for /entrepreneurship/phauna/virtual-exams if the user later wants it wired)
- ResourcesPage: tech chips (VPC, Database, User Auth, Kinesis Video Streams Plugin)

(Removed from the earlier draft: QualificationsPage 'View Program' - it exists only inside a commented-out preview that this plan deletes; ContactMePage 'LinkedIn Message' - also comment-only. Neither is live UI.)

Buttons whose correct destination already exists are wired to it:

- Contact Me no-ops -> /contact-me (13 pages): QualificationsPage, AmelloPage, DmvSimulatorPage, PhaunaPage, MdiumPage, SupervisorPage, HackathonWinnerPage, RealtimePaymentFraudPage, BigDataPipelinePage, VirtualExamPage, EvidenceCollectionPage, ClinicalDecisionSupportPage, ClinicalDataPage
- scrollToContact scrollIntoView handlers (dead on a multi-page app: #contact exists only on /contact-me) -> () => void navigate('/contact-me'): HomePage, ExperiencePage, EntrepreneurshipPage, ResourcesPage
- QualificationsPage View Transcript -> /resources (the transcript PDF is served at /pdfs/Austin_Aitken_Transcript.pdf and embedded on the Resources page)
- PhaunaPage View Exam -> /entrepreneurship/phauna/virtual-exams
- ContactMePage LinkedIn button -> real anchor to https://www.linkedin.com/in/austin-aitken with target=_blank rel='noreferrer' (URL already documented in the file)
- ContactMePage Call/Message/Email -> real <a> anchors (tel:/sms:/mailto:) - same behavior, valid semantics + keyboard/screen-reader friendly
- HomePage's 6 PagePreview CTAs already navigate correctly - they only need the void fix for no-misused-promises
- Import note: only HomePage, ExperiencePage, EntrepreneurshipPage, PersonalityPage (and Header) import useNavigate today (all from react-router-dom; their specifier is rewritten to 'react-router' in step 2); every other page that gains a wired CTA (QualificationsPage, the 4 Experience sub-pages, the 4 Phauna sub-pages, PhaunaPage, MdiumPage, AmelloPage, DmvSimulatorPage, ResourcesPage) adds `import { useNavigate } from 'react-router'`.

---

## Open Assumptions

1. Node 22 in CI (vitest 5 requires >= 22.12; Vite 7 requires >= 20.19; node-version 22 resolves to the latest 22.x).
2. WebP only via vite-imagetools ^10 (broad support, Vite 7 compatible); AVIF added later if desired.
3. react-pdf v10 + react-syntax-highlighter v16 stay as-is (only isolated via lazy routes, not replaced).
4. Amplify Hosting build spec uses the app.build.install/build schema with artifacts/caches at the app level; SPA rewrite (index.html fallback, HTTP 200 for unknown deep links) is built in. Both verified against the console on first deploy (docs URLs were unreachable at review time).
5. No og:image until a canonical production domain is confirmed.
6. The react-router-dom -> react-router swap is safe on v7 (react-router-dom@7 is an official re-export shim that depends on the same react-router version - both resolve to 7.13.1 in the current lockfile; NavMenu already imports from react-router today).

---

## v2 Review Change Log (adversarial review fixes)

- CONTACT_INFO corrected to the real values from ContactMePage (phone +1 (709) 770-3770, email austinlaitken@gmail.com) - the draft had fabricated values.
- Route count corrected 18 -> 19 everywhere; test assertions corrected (showInNav 6 not 7; getChildRoutes 4/2/4/2 not 2/2/3/1; getParentRoutePath null for top-level not '/'; NavMenu expands to 4 sub-routes not 2).
- vite-imagetools pinned ^10.0.1 (latest v12 requires Vite 8; v10 is the newest line with peer vite >=7); Vitest pinned ^5 (peer vite ^7 verified) instead of ^3; jsdom ^30; @testing-library/dom added (RTL v16 peer); jest-dom ^7.
- Added src/vite-env.d.ts with ?webp module declarations (repo has none; vite/client does not cover ?webp) - without it tsc -b and typed ESLint fail.
- Added vitest.config.ts to tsconfig.node.json include (typed ESLint parserOptions.project coverage).
- Added eslint __tests__ override (react-refresh/only-export-components) to protect the 0-warning gate.
- Added react-router-dom -> react-router dependency swap to package.json + all 7 importing files.
- Contact Me wiring list completed: AmelloPage + MdiumPage intros added (both are no-ops); ClinicalDataPage added to the files table; View Program and LinkedIn Message removed from the stub list (comment-only, deleted with comment blocks).
- AmelloPage path corrected (PersonalityPage/sub-pages, not QualificationsPage/sub-pages).
- QualificationsPage: View Program is inside a commented-out block - it is deleted, not kept.
- Dead-asset list corrected: github-icon.svg is LIVE (keep .svg, delete .webp only); 7 mdium dead assets (not 5); added Portfolio_Logo_Small.png, MUN_Logo.png, Gold_Medal.png (Gold_Medal_Only.png is live), 7 Home2-only verafin assets, 5 unused Nasdaq_Verafin_Logo files (~9 MB total, not ~4 MB).
- Image optimization: App_Screenshot is 1 asset / 7 live import sites; Gold_Medal_Only.png (524 KB x8 pages) added as a conversion target; imageTools() has no formats option (draft had imagetools({ formats: ['webp'] })).
- PageSection.test.tsx removed (PageSection becomes types-only - verified all live imports are type-only); 8 test files remain.
- app-routes smoke test: vi.mock PdfDocument (jsdom lacks ResizeObserver-safe pdf.js worker path; setup.ts also stubs ResizeObserver/scrollTo).
- src/index.css: it is dead and imported NOWHERE (main.tsx imports common/styles/main.css) - delete only, no inlining, no main.tsx import removal (its :root vars duplicate settings.css).
- ContactMePage: the 'to attribute' claim was a misread - the actual HTML issue is buttons wrapping <p>; Call/Message/Email converted to anchors; rel='noreferrer' on the LinkedIn anchor.
- usePageTitle: called in all 19 routes with their own labels (draft said 18 top-level, sub-pages inherit).
- Removed JSX.Element annotations from OptimizedImage/ErrorBoundary snippets (React 19 types have no global JSX namespace).
- CI gains a format:check step; dev smoke wording fixed (no contact form exists - contact actions are anchors); react-pdf referenced as v10 (pdfjs API).
- Amplify: exact YAML pinned + explicit verification caveats (schema + SPA rewrite) since docs were unreachable.
- Lint baseline made exact (rule names + counts + which errors are resolved by deletion) and noted that lint is only fully clean after the dead-code step.
- navigation.ts consolidation added (NAV_ITEMS -> literal paths; NAV_KEYS unused; routes.ts single source of truth).
- Header font-import claims verified (Marck Script/Schoolbell unused; Roboto duplicated) - kept.
- Implementation order: step 3 (test tooling config) moved before test files; GraduationCard relocation explicitly atomic; react-router swap in step 2; vite-env.d.ts created in step 12 with its first ?webp import.

---

## v3 Review Change Log (second adversarial pass)

- vitest.config.ts now includes imageTools() alongside react() - the previous version would have failed: after step 12 converts imports to `?webp`, the step-14 route smoke tests (which lazy-load all 19 routes) cannot resolve `?webp` without the plugin in the vitest pipeline.
- Lint baseline corrected: no-empty-object-type is x2 (IconButton:3, interfaces.tsx:1), not x3; all 19 issue locations re-verified exactly via `eslint --format json` (no-misused-promises x11 at the exact files/lines, set-state-in-effect x3, no-floating-promises x1 Header:32, no-empty-pattern x1, no-array-index-key x1 AnimatedDrawing:82).
- react-refresh/only-export-components is ERROR-level in the vite preset (allowConstantExport), not warning-level - override rationale corrected (the override is required to protect the 0-error gate).
- Dead-asset list completed: added phauna/database-arch.svg (364 KB; only database-arch-dark.svg is imported), phauna/Phauna_Logo_Right_Text.png, phauna/Phauna_Logo_Right_Text_Cropped.png (Home2-only). Total 31 files / ~10 MB. Confirmed live (not deleted): page-blank-svgrepo-com.svg, LinkedIn_icon.svg, github-icon.svg.
- Image conversion list completed: added phauna/Winnie_Teeth_Screenshot.png (1.15 MB, live in VirtualExamGraphic) - it exceeded the 1.1 MB AustinBeard that was already in the list. App_Screenshot re-verified as 7 live sites in 3 files (the ExperiencePage match is a commented import); Gold_Medal_Only.png re-verified at exactly 8 pages; Graduation_Trading_Card live via GraduationCard (front + back, 2 use sites).
- useNavigate import note made explicit: only 4 pages import it today; 11 more files need the import added when their CTAs are wired.
- MdiumPage 'View Article' documented as already wired (window.open to a saltwire.com article) - not a stub, no change.
- ContactMePage precision: the handle* handlers stay (the copy + icon buttons still use them); only the four contact buttons become anchors.
- react-router pin rationale added: latest react-router is now v8.x; the plan stays on ^7.11 to match react-router-dom 7.11 (no major upgrade).
- vitest 5.0.0 engines recorded (node ^22.12 || ^24 || >=26); jest-dom v7 ./vitest subpath verified via package exports (hedge removed).
- OptimizedImage CLS wording corrected against the actual elements.css rule (`img, svg { width: 100%; height: 100% }` - layout is container-driven; attributes preserve the intrinsic ratio where the container does not pin the box).
- ErrorBoundary spec adds componentDidCatch logging; its test wraps renders in MemoryRouter (fallback renders a Link).
- Smoke test strengthened: per-route document.title assertion (19 unique titles) + note that all 19 routes render a PageIntroduction h1 (verified).
- Home2 size corrected to 34 files / 2,431 lines; total dead-code estimate corrected to ~3,000 lines.
- LCP guidance added: above-the-fold HomePage headshot uses loading='eager' (OptimizedImage defaults to lazy).
- Amplify caveat added: set Node 22 in the Amplify console (amplify.yml does not pin the runtime).
- Tests import from 'vitest' explicitly (globals are not enabled).
- Baselines re-verified this pass: `tsc -b` exits 0 before any changes (typecheck gate has a clean starting point); 7 react-router-dom importing files; public/pdfs/ contains both PDFs (ResourcesPage serves the transcript at /pdfs/Austin_Aitken_Transcript.pdf); the 13-page Contact Me no-op list; the 11 no-misused-promises sites; all routes-helper facts (showInNav 6, child counts 4/2/4/2, getParentRoutePath nulls); context consumers (only App/Header/NavMenu use the 3 surviving fields); NDAQ/HL7/profile_pic_1080/MUN_Logo/Portfolio_Logo_Small/logo.jpg/Gold_Medal.png all have zero live imports.

## v4 Review Change Log (third adversarial pass)

- Step 2 now pins every install to the dependency table (react-router@^7.11, vite-imagetools@^10.0.1, vitest@^5, jsdom@^30, Testing Library ranges) - unpinned `npm install react-router` would pull v8.x and unpinned vite-imagetools v12.x requires Vite 8, both contradicting the plan; the 7-file react-router-dom -> react-router import rewrite moves into step 2 so the dependency swap is atomic and the tree type-checks (no broken state across steps 3-5).
- ContactMePage: handleEmail + handlePhoneMessage are deleted (their only live use was the buttons that become anchors; the copy/icon buttons referencing them are inside the commented block the same step removes - keeping them would fail tsc -b via noUnusedLocals); handlePhoneCall stays for the 'Call Me' CTA. This supersedes v3 item 8, whose stated reason was wrong.
- ErrorBoundary is keyed by pathname in App so the error state clears on route change (previously a crash left the user stuck on the fallback even though Header nav still worked).
- App_Screenshot migration mechanics made explicit: the 7 live imports render through shared TrioAppScreenshots (PersonalityPage x2, PhaunaPage x1 instances) plus 3 inline imgs in MdiumPage; TrioAppScreenshots added to Files>Modified (item shape gains width/height, renders OptimizedImage); MdiumPage + PersonalityPage rows note their inline/array updates.
- Intrinsic-dimensions table added for all 7 converted assets (sips-verified) so OptimizedImage call sites are unambiguous.
- PhaunaPage stub count corrected: exactly one live 'Learn More' no-op (the 'The Veterinarian' preview), not two.
- Step 8 sub-page count corrected: 12 sub-pages touched (was 'all 10 sub-pages').
- NavMenu test corrected: the expanded list is the synthetic 'Overview' link + 4 sub-routes (5 links), matching the actual NavMenu render.
- app-routes smoke test: the PdfDocument vi.mock is specified (default export, placeholder).
- react-router version wording corrected: react-router-dom@^7.11.0 resolves to 7.13.1 in the lockfile; react-router@^7.11 matches it.
- Types 10 + import-note wording updated: MainContent/Header/page router import specifiers are switched in step 2, not later.

## v5 Review Change Log (fourth adversarial pass)

- Fourth full re-verification of every high-risk claim against the live repo: routes.ts 19-entry count + helper semantics; MainContent/App/main.tsx structure; Header/NavMenu local expandedPath state + exact effect predicates (state-during-render translations are behavior-identical); GlobalContext field inventory; PageIntroduction h1 present in all 19 pages; AnimatedDrawing data/prop shape; TrioAppScreenshots { src, alt } shape; PdfDocument v10 API + default export; ContactMePage handler usage (handlePhoneCall still used by the 'Call Me' CTA); the exact 7-file react-router-dom importer set; navigation.ts consumer set (HomePage only); GraduationCard's 4 importers; tsconfig/eslint/vite config compatibility with the planned additions; NDAQ.svg has zero live imports outside Home2.
- New-files/Testing consistency: setup.ts stub list no longer claims a matchMedia stub (verified zero matchMedia usage in the codebase and no test requires it; the 'only if a test needs it' note stands).
- imageTools() sequencing: vitest.config.ts includes imageTools() when created in step 3 (vite-imagetools is installed in step 2); step 12 now adds it to vite.config.ts only.
- Amplify YAML restructured to the expected v1 shape: artifacts/caches at the app level (siblings of build), caches plural; caveat now covers key names AND nesting; added the SPA-fallback HTTP-200 note (unknown deep links return 200 with index.html while the app renders the 404 page - standard trade-off, no action); open assumption 4 updated to match.
- usePageTitle now also called in UnknownRoute ('Page Not Available') so the 404 page does not keep the previous page's document.title; overview, Titles + SEO bullet, Types 7, Files table, smoke-test catch-all assertion, and step 11 all updated.
- useNavigate import note corrected: Header also imports useNavigate today (4 pages + Header, all from react-router-dom).
