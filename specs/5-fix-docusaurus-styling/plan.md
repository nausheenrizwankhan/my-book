# Implementation Plan: Fix Docusaurus Styling

**Feature Branch**: `5-fix-docusaurus-styling`  
**Created**: 2025-12-26  
**Status**: In Progress  

## 1. Technical Context

The `my-book` Docusaurus project is experiencing a critical styling issue where the top navigation bar and the documentation sidebar are visually merging or conflicting. This behavior degrades the user experience and makes the documentation difficult to navigate.

The likely causes for this issue are, in order of suspicion:
1.  **Global CSS Overrides**: Custom styles in `src/css/custom.css` or other imported CSS files are incorrectly targeting and altering the layout of core theme components.
2.  **Theme Component Overrides (Swizzling)**: Key layout components (like `Navbar`, `Sidebar`, `Layout`) have been "swizzled" and contain custom logic or styling that is causing the issue.
3.  **Docusaurus Configuration**: The `docusaurus.config.ts` file may contain incorrect theme configuration options.

The objective is to diagnose the precise root cause and implement a non-destructive fix that restores the default, stable Docusaurus "classic" theme behavior.

## 2. Constitution Check & Gates

- [x] **Spec Alignment**: The plan directly addresses the requirements and success criteria outlined in `spec.md`.
- [x] **Principle of Least Disruption**: The plan prioritizes identifying the specific cause and making minimal, targeted changes rather than broad, sweeping ones.
- [x] **Security/Privacy Gate**: Passed. This change involves only frontend styling and presentation logic; no user data or security mechanisms are affected.
- [x] **Data/API Gate**: Passed. No data models or API contracts are being introduced or modified.

## 3. Phase 0: Outline & Research

The primary goal of this phase is to move from "the styling is broken" to "the styling is broken because of *this specific line of code/configuration*".

The research findings will be documented in `research.md`.

**Key Research Tasks**:
1.  **Analyze `docusaurus.config.ts`**: Review the `themeConfig` and `presets` sections for any configurations that could influence the navbar or sidebar layout.
2.  **Inspect Custom CSS**: Thoroughly examine `src/css/custom.css` and any other custom stylesheets for overly broad selectors or styles targeting Docusaurus's internal class names (e.g., `.navbar`, `.sidebar`).
3.  **Check for Swizzled Components**: Investigate the `src/theme/` directory. The presence of `Navbar/`, `Sidebar/`, or `Layout/` subdirectories would be a strong indicator of the likely source of the problem.
4.  **Use Browser DevTools**: Actively use the browser's inspector on the running dev server to trace the CSS rules causing the visual conflict, identifying their source files and specificity.

## 4. Phase 1: Design

The "design" for this feature will be the specific, code-level solution to the problem identified in the research phase. As there is no new architecture, the primary design artifacts will be the `research.md` (documenting the "what and why") and the `quickstart.md` (documenting the "how").

- **Data Model**: Not applicable.
- **API Contracts**: Not applicable.
- **Quickstart Guide**: A `quickstart.md` will be created to provide clear, step-by-step instructions for another developer to replicate the issue and apply the fix.

## 5. Phase 2: Implementation & Validation

This phase will be detailed in the `tasks.md` file after the plan is approved. It will involve creating tasks for:
1.  Implementing the fix identified in the research phase.
2.  Verifying the fix against all acceptance criteria in the spec.
3.  Running a full production build to ensure no new errors are introduced.
