# Data Model: Documentation Content

**Date**: 2025-12-15
**Input**: `plan.md` for feature `1-ros2-module-spec`

This document defines the data model for the content of the ROS 2 Module website. As the content is stored in Markdown files, this model describes the file structure and the metadata (frontmatter) for each file.

## Content Entity: Chapter

A "Chapter" is the primary content entity, represented by a single Markdown file.

### Fields (Frontmatter)

Each Markdown file will contain a YAML frontmatter block with the following fields:

-   **`id`** (string, required): A unique identifier for the document. This is used by Docusaurus for referencing the document.
    -   *Example*: `ros-2-middleware`
-   **`title`** (string, required): The title of the chapter, which will be displayed in the sidebar and at the top of the page.
    -   *Example*: `1. ROS 2 Middleware: Nodes, Topics, Services`
-   **`sidebar_label`** (string, optional): A shorter label for the sidebar if the full title is too long. If omitted, the `title` is used.
    -   *Example*: `ROS 2 Middleware`
-   **`sidebar_position`** (integer, required): Defines the order of the chapters in the sidebar.
    -   *Example*: `1`

### Relationships

-   A **Chapter** is a standalone entity. The hierarchical relationship between chapters is defined by the `sidebar_position` field and the sidebar configuration in Docusaurus.

### Validation Rules

-   The `id` field must be unique across all documents.
-   The `title` field must be present.
-   The `sidebar_position` field must be a unique integer.

### State Transitions

-   N/A

## Example File (`01-ros-middleware.md`)

```markdown
---
id: ros-2-middleware
title: 1. ROS 2 Middleware: Nodes, Topics, Services
sidebar_label: ROS 2 Middleware
sidebar_position: 1
---

## Introduction to ROS 2

...content of the chapter...
```
