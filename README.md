# Education Career Empowerment

A modern web application built with [Vite](https://vitejs.dev/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS v4](https://tailwindcss.com/). The project incorporates `shadcn/ui` components and React Router for routing.

##  Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

1. Install the project dependencies:
```bash
npm install
```

### Local Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080/`.

**Note:** The application uses `cross-env` to ensure environment variables in npm scripts work flawlessly across different operating systems (including Windows).

### Building for Production

To create a production build of the application:
```bash
npm run build
```
The compiled files will be output to the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

##  Recent Corrections & Setup

This project has been configured for true local development and platform compatibility:

1. **Windows Compatibility Fix:** Added `cross-env` to the npm run scripts to ensure environment variables like `VITE_ENABLE_ROUTE_MESSAGING=true` are evaluated correctly on native Windows environments (e.g., Command Prompt, PowerShell).
2. **Local Font Hosting:** The application uses locally hosted fonts (`@fontsource/plus-jakarta-sans` and `@fontsource/jetbrains-mono`) instead of relying on external network requests to Google Fonts. This guarantees stability in local development environments without an internet connection and improves load performance.
3. **Tailwind CSS v4 Integration:** Tailwind CSS is set up cleanly using the new v4 format without the need for deprecated config directives, utilizing the `@theme` definitions directly in `src/index.css`.

##  Project Structure highlights

- `src/` - Contains the React components, styling (`index.css`), and main application logic.
- `vite.config.ts` - Contains the Vite configuration, including the custom `cdn-prefix-images` plugin and path aliases.
- `package.json` - Defines project dependencies and custom cross-platform run scripts.
- `tsconfig.json` & `tsconfig.app.json` - TypeScript compiler configurations for optimal application building.

##  Contributing
Follow the standard modular framework when adding new UI components from `shadcn/ui` and ensure robust typing using TypeScript.
