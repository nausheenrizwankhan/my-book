# Tasks: ROS 2 Module Website

**Input**: Design documents from `specs/1-ros2-module-spec/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: No automated tests are required for this documentation-focused feature. Validation will be done via linting and successful builds.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Path Conventions

- All work will be done within the `docs/` directory at the repository root.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for the Docusaurus site.

- [x] T001 Initialize a new Docusaurus project in the `docs/` directory using the "classic" template.
- [x] T002 [P] Install `markdownlint-cli` as a development dependency in `docs/package.json`.
- [x] T003 [P] Create a `.markdownlint.json` configuration file in the `docs/` directory with baseline rules for heading styles and list formatting.
- [x] T004 [P] Update `docs/docusaurus.config.js` with the project title "The Robotic Nervous System (ROS 2)", a tagline, and basic theme configuration.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core configuration for the documentation site.

- [x] T005 Configure the sidebar in `docs/docusaurus.config.js` to automatically generate from the `docs/docs` directory, ensuring chapters are ordered by the `sidebar_position` frontmatter field.
- [x] T006 [P] Add an npm script to `docs/package.json` for linting all markdown files (e.g., `"lint": "markdownlint 'docs/**/*.md'"`).

**Checkpoint**: Foundation ready. The Docusaurus site is set up and ready for content.

---

## Phase 3: User Story 1 - Understand ROS 2 Concepts (Priority: P1) 🎯 MVP

**Goal**: Create the first chapter of the module, explaining the core concepts of ROS 2.

**Independent Test**: The "ROS 2 Middleware" chapter is readable and correctly formatted on the local Docusaurus server.

### Implementation for User Story 1

- [x] T007 [US1] Create the Markdown file `docs/docs/01-ros-middleware.md` with the frontmatter `id: ros-2-middleware`, `title: 1. ROS 2 Middleware`, and `sidebar_position: 1`.
- [x] T008 [US1] Write the content for the "ROS 2 Middleware" chapter in `docs/docs/01-ros-middleware.md`, explaining nodes, topics, and services as per the feature specification.

**Checkpoint**: User Story 1 is fully readable on the local site.

---

## Phase 4: User Story 2 - Learn to Bridge Python to ROS (Priority: P2)

**Goal**: Create the second chapter, explaining how to connect Python agents to ROS 2.

**Independent Test**: The "Python-ROS Bridging" chapter is readable and correctly formatted on the local Docusaurus server.

### Implementation for User Story 2

- [x] T009 [US2] Create the Markdown file `docs/docs/02-python-ros-bridging.md` with frontmatter `id: python-ros-bridging`, `title: 2. Python-ROS Bridging`, and `sidebar_position: 2`.
- [x] T010 [US2] Write the content for the "Python–ROS Control Bridging with RePLY" chapter in `docs/docs/02-python-ros-bridging.md`.

**Checkpoint**: User Stories 1 AND 2 are both readable on the local site.

---

## Phase 5: User Story 3 - Grasp Humanoid URDF Basics (Priority: P3)

**Goal**: Create the third chapter, explaining the basics of URDF for humanoid robots.

**Independent Test**: The "Humanoid URDF" chapter is readable and correctly formatted on the local Docusaurus server.

### Implementation for User Story 3

- [x] T011 [US3] Create the Markdown file `docs/docs/03-humanoid-urdf.md` with frontmatter `id: humanoid-urdf`, `title: 3. Humanoid URDF`, and `sidebar_position: 3`.
- [x] T012 [US3] Write the content for the "Humanoid URDF" chapter in `docs/docs/03-humanoid-urdf.md`.

**Checkpoint**: All three user stories are complete and readable on the local site.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and preparation for deployment.

- [x] T013 Run the linting script (`npm run lint`) from the `docs/` directory and fix any reported issues in the chapter files.
- [x] T014 Run the production build (`npm run build`) from the `docs/` directory to ensure the entire site builds without errors.
- [x] T015 [P] Create a GitHub Actions workflow file in `.github/workflows/deploy-docs.yml` to automatically build and deploy the Docusaurus site to GitHub Pages on pushes to the main branch.
- [x] T016 Run `quickstart.md` validation by following the steps to ensure they are correct.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)** must be completed before any other phase.
- **Foundational (Phase 2)** depends on Setup completion.
- **User Stories (Phases 3-5)** depend on Foundational phase completion.
- **Polish (Phase 6)** depends on all user stories being complete.

### User Story Dependencies

- All user stories (US1, US2, US3) are independent of each other and can technically be worked on in parallel after the Foundational phase is complete. The priority order (P1, P2, P3) suggests a sequential implementation to build the module in a logical order.

### Parallel Opportunities

- Within Phase 1, tasks T002, T003, and T004 can be done in parallel.
- Once the Foundational phase is complete, different developers could work on US1, US2, and US3 simultaneously, as they involve creating separate files.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup + Foundational.
2. Add User Story 1 → Validate locally.
3. Add User Story 2 → Validate locally.
4. Add User Story 3 → Validate locally.
5. **STOP and VALIDATE**: Check that the first chapter renders correctly on the local development server.

### Incremental Delivery

1. Complete Setup + Foundational.
2. Add User Story 1 → Validate locally.
3. Add User Story 2 → Validate locally.
4. Add User Story 3 → Validate locally.
5. Complete Polish phase and deploy the full module.