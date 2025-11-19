# Way of Working

## Communication
- **Update Frequency:** Status updates provided after each major component or page migration.
- **Ambiguity:** Clarifying questions will be asked immediately if design intent or logic is unclear.
- **Language:** English (en).

## Development Practices
- **Framework:** Next.js 14+ (App Router).
- **Language:** TypeScript (Strict Mode).
- **Styling:** Tailwind CSS for layout/utility, CSS Modules for complex/legacy-matching styles.
- **Component Design:** Atomic design principles; reusable UI components (Buttons, Cards) vs. specific Page components.
- **Testing Strategy (TDD):**
    - **Test-First:** Write failing tests (Unit or Integration) before writing the implementation code.
    - **Tools:** Jest + React Testing Library.
    - **Process:** Red (Write Test) -> Green (Write Code) -> Refactor.

## Code Style & Conventions
- **Naming:** PascalCase for components (`Header.tsx`), camelCase for utilities/hooks (`useScroll.ts`), kebab-case for files/folders in routes (`why-prosper/page.tsx`).
- **Commits:** Conventional Commits format (e.g., `feat: add header component`, `fix: adjust mobile spacing`).
- **Linting:** ESLint and Prettier enabled; code must be clean before completion.

## Task Management
- **Tracking:** `projectRoadmap.md` is the source of truth for progress.
- **Context:** `currentTask.md` defines the immediate focus.
- **Review:** Use `attempt_completion` to present work for review against the `definitionOfDone.md`.