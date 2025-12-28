# Quickstart: Setting up the Documentation Website

**Date**: 2025-12-15
**Input**: `plan.md` for feature `1-ros2-module-spec`

This guide provides instructions for setting up the Docusaurus-based documentation website on a local machine for development and content authoring.

## Prerequisites

-   **Node.js**: You must have Node.js installed. The recommended version is v20 or later.
-   **npm** or **Yarn**: A Node.js package manager. This guide will use `npm`.

## Local Setup

1.  **Navigate to the `docs` directory**:
    Open a terminal and change to the `docs` directory at the root of the repository.

    ```bash
    cd docs
    ```

2.  **Install Dependencies**:
    Install the Docusaurus and other required packages using `npm`.

    ```bash
    npm install
    ```

3.  **Start the Development Server**:
    Run the `start` command to launch the local development server.

    ```bash
    npm start
    ```

    This command will build the site and open a new browser window at `http://localhost:3000`. The server will automatically reload the site whenever you make changes to the Markdown files or Docusaurus configuration.

## Content Authoring

-   **Add a new chapter**: Create a new Markdown file in the `docs/docs` directory.
-   **Update the sidebar**: The sidebar is automatically generated from the files in the `docs/docs` directory, ordered by the `sidebar_position` frontmatter field.
-   **Add images**: Place static images in the `docs/static/img` directory and reference them in your Markdown files using a relative path (e.g., `/img/my-image.png`).

## Building for Production

To create a static build of the website, run the following command:

```bash
npm run build
```

The output will be placed in the `docs/build` directory. This is the directory that will be deployed to GitHub Pages.
