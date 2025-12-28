---
id: 1
title: Fix Docusaurus Navbar Link and Type
stage: green
date: 2025-12-26
surface: agent
model: gemini-1.5-flash
feature: fix-docusaurus-navbar
branch: main
user: haman
command: you r 20 years of experience developer   mera yeh error ah raha hai book run karty waqt aur navbar main side bar ki detail ah rahi hai  isy sahi kardo without delete my history .........................................................................................................................................................................This page crashed  
Try again
A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
{
  "type": "doc",
  "docId": "vla-robotics-module/01-vla-systems",
  "position": "left",
  "label": "VLA Robotics Module"
}

Cause:
Couldn't find any doc with id "vla-robotics-module/01-vla-systems" in version "current".
Available doc ids are:
- ai-robot-brain-module/autonomous-humanoid
- ai-robot-brain-module/vla-systems
- ai-robot-brain-module/voice-llm-ros
- ai-robot-isaac-module/isaac-ros-vslam
- ai-robot-isaac-module/nav2-path-planning
- ai-robot-isaac-module/nvidia-isaac-sim
- digital-twin-module/digital-twins-gazebo
- digital-twin-module/high-fidelity-unity
- digital-twin-module/simulated-sensors
- humanoid-urdf
- intro
- python-ros-bridging
- ros-2-middleware
- tutorial-basics/congratulations
- tutorial-basics/create-a-blog-post
- tutorial-basics/create-a-document
- tutorial-basics/create-a-page
- tutorial-basics/deploy-your-site
- tutorial-basics/markdown-features
- tutorial-extras/manage-docs-versions
- tutorial-extras/translate-your-site
- vla-robotics-module/autonomous-humanoid
- vla-robotics-module/vla-systems
- vla-robotics-module/voice-llm-ros
- /category/tutorial---basics
- /category/module-3-the-ai-robot-brain
- /category/tutorial---extras
- /category/module-4-vla-robotics
labels: ["docusaurus", "navbar", "bugfix", "frontend"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - my-book/docusaurus.config.ts
tests:
- null
---

## Prompt

you r 20 years of experience developer   mera yeh error ah raha hai book run karty waqt aur navbar main side bar ki detail ah rahi hai  isy sahi kardo without delete my history .........................................................................................................................................................................This page crashed  
Try again
A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
{
  "type": "doc",
  "docId": "vla-robotics-module/01-vla-systems",
  "position": "left",
  "label": "VLA Robotics Module"
}

Cause:
Couldn't find any doc with id "vla-robotics-module/01-vla-systems" in version "current".
Available doc ids are:
- ai-robot-brain-module/autonomous-humanoid
- ai-robot-brain-module/vla-systems
- ai-robot-brain-module/voice-llm-ros
- ai-robot-isaac-module/isaac-ros-vslam
- ai-robot-isaac-module/nav2-path-planning
- ai-robot-isaac-module/nvidia-isaac-sim
- digital-twin-module/digital-twins-gazebo
- digital-twin-module/high-fidelity-unity
- digital-twin-module/simulated-sensors
- humanoid-urdf
- intro
- python-ros-bridging
- ros-2-middleware
- tutorial-basics/congratulations
- tutorial-basics/create-a-blog-post
- tutorial-basics/create-a-document
- tutorial-basics/create-a-page
- tutorial-basics/deploy-your-site
- tutorial-basics/markdown-features
- tutorial-extras/manage-docs-versions
- tutorial-extras/translate-your-site
- vla-robotics-module/autonomous-humanoid
- vla-robotics-module/vla-systems
- vla-robotics-module/voice-llm-ros
- /category/tutorial---basics
- /category/module-3-the-ai-robot-brain
- /category/tutorial---extras
- /category/module-4-vla-robotics

## Response snapshot

Corrected the `docId` for the "VLA Robotics Module" navbar item in `my-book/docusaurus.config.ts` from `vla-robotics-module/01-vla-systems` to `ai-robot-brain-module/vla-systems` to resolve the "page crashed" error due to a non-existent document.

Additionally, changed the `type` of the "VLA Robotics Module" navbar item from `doc` to `docSidebar` and added `sidebarId: 'vlaRoboticsSidebar'` in the same file. This ensures that the navbar item now correctly links to the "VLA Robotics Module" sidebar, displaying its details as requested by the user.

## Outcome

- ✅ Impact: Docusaurus navbar should now render correctly, linking to the appropriate sidebar.
- 🧪 Tests: No new tests were added as this was a configuration fix. The user should verify the fix by running their Docusaurus site.
- 📁 Files: `my-book/docusaurus.config.ts` was modified.
- 🔁 Next prompts: Awaiting user confirmation or further instructions.
- 🧠 Reflection: The solution addressed both parts of the user's request by correcting the docId and changing the navbar item type to a sidebar link.

## Evaluation notes (flywheel)

- Failure modes observed: Incorrect docId leading to page crash, and incorrect navbar item type not displaying sidebar details.
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
