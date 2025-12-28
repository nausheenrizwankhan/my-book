# Research: Diagnosing Docusaurus Styling Issues

**Feature Branch**: `5-fix-docusaurus-styling`  
**Created**: 2025-12-26  
**Status**: Pending

## 1. Research Objective

The primary objective is to identify the specific root cause of the visual conflict between the Docusaurus navbar and sidebar in the `my-book` project. The outcome of this research will be a clear, actionable path to fixing the styling without causing collateral damage to other parts of the site.

## 2. Research Tasks

### Task 1: Analyze `docusaurus.config.ts`
- **Action**: Open `my-book/docusaurus.config.ts` and carefully review the `themeConfig.navbar` and `themeConfig.sidebar` sections. Look for any unusual items or configurations. Check for a `customCss` field in the `presets` section.
- **What to look for**:
  - Custom `type` for navbar items that might be causing layout issues.
  - Incorrectly structured `items` array.
  - Paths in `customCss` that point to potentially problematic stylesheets.

### Task 2: Inspect Custom CSS (`src/css/custom.css`)
- **Action**: Open `my-book/src/css/custom.css` and search for selectors that could impact the entire layout.
- **What to look for**:
  - Broad element selectors like `nav`, `div`, `aside`.
  - Overrides for Docusaurus-specific CSS variables (e.g., `--ifm-navbar-height`).
  - Styles targeting Docusaurus's internal class names, such as `.navbar`, `.main-wrapper`, `.docSidebarContainer`. High-impact properties like `position`, `display`, `margin`, `padding` are key suspects.

### Task 3: Check for Swizzled Components
- **Action**: List the contents of the `my-book/src/theme/` directory.
- **What to look for**:
  - The existence of subdirectories like `Navbar`, `Sidebar`, `Layout`, or `Root`. If these exist, their code takes precedence over the default theme components and they are the most likely source of the issue.

### Task 4: Use Browser DevTools for Live Inspection
- **Action**:
  1. Run the local development server (`npm start` in the `my-book` directory).
  2. Open the site in a browser and right-click on the broken navbar/sidebar area, then select "Inspect".
  3. Use the inspector to select the navbar and sidebar elements and examine the "Styles" panel.
- **What to look for**:
  - Identify the CSS rules that are causing the layout to break.
  - Note the source file and line number for the problematic rules.
  - Look for unexpected CSS inheritance or specificity wars where a custom style is overriding a default theme style.

## 3. Findings

*(This section is to be filled out upon completion of the research tasks.)*

- **Root Cause**: [e.g., A global style in `custom.css` was setting `nav` to `display: block`, causing the navbar to conflict with the sidebar.]
- **Affected Files**: [e.g., `my-book/src/css/custom.css`]
- **Proposed Solution**: [e.g., Remove or scope the conflicting CSS rule.]