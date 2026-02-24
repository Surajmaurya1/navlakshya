---

##  Tech Stack

This project uses the following technologies:

* Vite
* TypeScript
* React
* shadcn/ui
* Tailwind CSS

---

##  Development Workflow

1. Based on user requirements, adjust the theme and styles in `src/index.css` and `tailwind.config.ts`.
2. Identify and define the pages that need to be implemented according to the requirements.
3. For each page, list the required features, then create a corresponding folder under `pages` with an entry file named `Index.tsx`.
4. Configure routing in `App.tsx` and import each page entry file (`Index.tsx`).
5. If the page logic is simple, implement the entire page directly inside `Index.tsx`.
6. If the page logic is complex, split it into multiple parts using the following structure:

   * `Index.tsx` – page entry
   * `/components` – UI components
   * `/hooks` – custom hooks
   * `/stores` – use Zustand for state management when complex cross-component communication is required
7. After completing development:

   * Install dependencies using `pnpm i`
   * Run `npm run lint`
   * Run `npx tsc --noEmit -p tsconfig.app.json --strict`
   * Fix any reported issues

---

##  Backend / API Integration

* When adding new APIs or working with Supabase:

  * Create a corresponding API file under `src/api`
  * Export the related data types
  * Refer to `src/demo.ts` as an example
  * If using Supabase, ensure the full implementation is provided
* When integrating the frontend with Supabase:

  * Always follow the defined data types strictly
  * Avoid modifying established data types whenever possible
  * If a data type must be changed, review and update **all files** that reference it

---
