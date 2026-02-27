# CLAUDE.md

## Project Overview

Personal portfolio website for Mark Spicer, deployed to markspicer.me via Netlify. A React single-page application featuring an interactive generative art canvas (p5.js) on the homepage and a resume page.

## Tech Stack

- **React 18** with Create React App (react-scripts 5.0.1)
- **React Router v7** for client-side routing
- **Material-UI (MUI) v6** for UI components
- **Emotion** for CSS-in-JS styling (via MUI)
- **p5.js** for generative/interactive art on the homepage
- **Bun v1.3.9** as the package manager and runtime (see `.bun-version`)

## Commands

```bash
bun start      # Dev server on port 3000
bun run build  # Production build to /build
bun test       # Bun native test runner (with happy-dom for DOM support)
```

There is no separate lint command; ESLint runs through `react-scripts` (config in `package.json` under `eslintConfig`, extends `react-app` and `react-app/jest`). No Prettier or pre-commit hooks are configured.

## Directory Structure

```
src/
  index.js           # Entry point: ThemeProvider + CssBaseline + App
  App.js             # Router: / -> Home, /resume -> ResumePage
  theme.js           # MUI theme (Cutive Mono font, dark blue background)
  colors.js          # Shared color constants
  index.css          # Global body styles
  header/Header.js   # Fixed AppBar with nav links (GitHub, LinkedIn, Resume)
  generative/Generative.js  # p5.js animated wavy lines canvas
  resume/Resume.js   # Full resume with Section/Company/Role components
public/
  _redirects         # Netlify SPA redirect rule
  index.html         # HTML shell (includes Heap Analytics)
  sitemap.xml        # SEO sitemap
```

## Architecture

- **Two routes**: `/` (Home with generative art) and `/resume` (Resume page)
- **No state management library** - simple component state with `useRef`/`useEffect`
- **No API calls** - fully static content
- Each feature lives in its own directory under `src/` with a single component file

## Coding Conventions

### Components
- Function components only (no class components)
- One component per file, default export
- Each component directory contains a single `.js` file (no TypeScript)
- MUI components are imported individually: `import Box from '@mui/material/Box'`

### Styling
- Use MUI's `sx` prop for component-level styles
- Reusable style objects are defined as `const` at the top of component files (e.g., `sectionHeaderSx`, `bulletSx` in Resume.js)
- Colors come from `src/colors.js` - always use `colors.teal`, `colors.darkBlue`, `colors.black` instead of hardcoding hex values
- The theme (`src/theme.js`) sets the global font to **Cutive Mono** monospace

### Color Palette
- Dark Blue: `#00203F` (backgrounds)
- Teal: `#A9FBD7` (text, accents, borders)
- Black: `#000000`

### Routing
- Uses `react-router-dom` with `BrowserRouter`, `Routes`, `Route`
- Internal links use MUI's `component={RouterLink}` pattern
- External links use `href` with `target="_blank" rel="noopener"`

## Deployment

- **Platform**: Netlify
- **SPA routing**: `public/_redirects` with `/* /index.html 200`
- **Build output**: `/build` directory
- No CI/CD pipeline config files in the repo; builds are handled by Netlify

## Testing

- **Framework**: Bun's native test runner (`bun test`)
- **DOM**: happy-dom via `happydom.js` preload (configured in `bunfig.toml`)
- **Libraries**: React Testing Library (`@testing-library/react`)
- **Test files**: Co-located with source (`App.test.js`)
- **Mocking**: Use `mock.module()` from `bun:test` (no `__mocks__` directory)
