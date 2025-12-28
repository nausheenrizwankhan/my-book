---
description: "Task list for fixing Docusaurus styling"
---

# Tasks: Fix Docusaurus Styling

**Input**: Design documents from `/specs/5-fix-docusaurus-styling/`
**Prerequisites**: plan.md, spec.md, research.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)
- Include exact file paths in descriptions

## Phase 1: Setup

**Purpose**: Ensure the local development environment is ready.

- [x] T001 Ensure all dependencies are installed by running `npm install` in the `my-book` directory.

---

## Phase 2: Diagnosis (Foundational)

**Purpose**: Identify the root cause of the styling conflict. This is a blocking prerequisite for the implementation.

**⚠️ CRITICAL**: The implementation task (Phase 4) cannot begin until this phase is complete and the findings are documented.

- [x] T002 [P] Analyze `my-book/docusaurus.config.ts` for any theme, preset, or custom CSS configurations that could affect the layout.
- [x] T003 [P] Inspect `my-book/src/css/custom.css` for overly broad selectors or styles targeting `.navbar`, `.sidebar`, or other core layout classes.
- [x] T004 [P] Check the `my-book/src/theme/` directory for any "swizzled" components (e.g., `Navbar`, `Sidebar`, `Layout`) that might be overriding default styles.
- [x] T005 [P] Use browser DevTools on the running local server (`npm run start`) to inspect the live DOM and identify the exact CSS rules and source files causing the visual conflict.

---

## Phase 3: Document Findings

**Purpose**: Record the results of the diagnosis to inform the implementation.

- [x] T006 Document the identified root cause, a list of affected files, and the proposed solution in the 'Findings' section of `specs/5-fix-docusaurus-styling/research.md`.

---

## Phase 4: User Story 1 - Restore Correct Visual Layout 🎯 MVP

**Goal**: Restore the default, stable Docusaurus styling so the navbar and sidebar render correctly.

**Independent Test**: The site can be visually inspected after the fix to confirm the navbar is a distinct top bar, the sidebar is a distinct side column on doc pages, and the overall layout is clean and consistent.

### Implementation & Verification for User Story 1

- [x] T007 [US1] Apply the corrective action as documented in `research.md`. For example, this might involve removing or modifying specific CSS rules in `my-book/src/css/custom.css`.
- [x] T008 [US1] Run the local development server (`npm run start` in `my-book`) and visually confirm that the navbar and sidebar render correctly as separate, non-conflicting components.
- [x] T009 [US1] Navigate through several pages (homepage, doc pages) to verify that the overall styling (layout, fonts, colors) is restored and consistent.
- [x] T010 [US1] Run a full production build (`npm run build` in `my-book`) and ensure it completes with zero new styling-related errors or warnings.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must be completed first.
- **Diagnosis (Phase 2)**: Depends on Setup. The tasks within this phase can run in parallel.
- **Document Findings (Phase 3)**: Depends on the completion of all tasks in the Diagnosis phase.
- **User Story 1 (Phase 4)**: Depends on the completion of the Document Findings phase.

### Implementation Strategy

This is a sequential bug-fixing process:
1.  Complete Phase 1 (Setup).
2.  Complete all tasks in Phase 2 (Diagnosis) to understand the problem.
3.  Complete Phase 3 to document the clear path forward.
4.  Complete Phase 4 to implement the fix and verify it against all success criteria.
5.  **STOP and VALIDATE**: After T010, the feature is considered complete and ready for review.