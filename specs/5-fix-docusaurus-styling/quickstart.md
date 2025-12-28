# Quickstart: Fixing Docusaurus Styling

**Feature Branch**: `5-fix-docusaurus-styling`  
**Created**: 2025-12-26  

This guide provides the steps to set up the development environment, observe the styling bug, apply the fix, and verify the solution.

## 1. Prerequisites

- Node.js and npm installed.
- Access to the project repository.

## 2. Setup

1.  **Clone the repository** and navigate to the project root.
2.  **Change into the book's directory**:
    ```bash
    cd my-book
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```

## 3. Observe the Bug

1.  **Start the development server**:
    ```bash
    npm run start
    ```
2.  Open your web browser and navigate to `http://localhost:3000`.
3.  **Observe**: You should see the broken styling where the top navbar and the sidebar are merged, misplaced, or visually conflicting.

## 4. Apply the Fix

*(This section contains the specific steps to fix the issue, as determined by the research phase.)*

**Note**: The following is a placeholder for the actual fix. The real steps will be determined after completing the tasks in `research.md`.

**Example Fix**:

1.  Open the file `src/css/custom.css`.
2.  Locate the following CSS rule:
    ```css
    /* Example of a problematic rule */
    nav {
      display: block;
      position: absolute;
    }
    ```
3.  **Delete or comment out** this rule.
4.  Save the file. The development server should automatically reload with the fix.

## 5. Verify the Solution

1.  **Return to your browser**.
2.  **Verify**:
    - The top navbar should now be correctly rendered as a distinct horizontal bar at the top of the page.
    - The sidebar on documentation pages should be a distinct vertical column, separate from the navbar.
    - The overall layout, spacing, and typography should match the standard Docusaurus theme.
3.  **Build the project** to ensure no new errors are introduced:
    ```bash
    npm run build
    ```
4.  The build should complete successfully.
