---
id: 1
title: Create Project Constitution for AI Book and Chatbot
stage: constitution
date: 2025-12-13
surface: agent
model: gemini
feature: none
branch: {{BRANCH}}
user: {{USER}}
command: /sp.constitution
labels: [constitution, project-setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
tests:
[]
---

## Prompt

/sp.constitution

Project: AI/Spec-Driven Book + Embedded RAG Chatbot

Core principles:
- Spec-driven authoring using Spec-Kit Plus as single source of truth
- Accuracy, consistency, and reproducibility across book + chatbot
- Zero-hallucination RAG behavior with strict grounding
- Clear, structured writing for intermediate AI/software developers

Key standards:
- Book generated with Docusaurus; deploy to GitHub Pages
- Writing assisted by Gemini / Claude Code
- All RAG settings (embedding model, chunk size, retrieval config) stored in specs
- Chatbot uses OpenAI Agents/ChatKit + FastAPI + Qdrant + Neon
- Code samples must be valid and runnable
- Chatbot must cite chunk IDs and source metadata for each answer

Constraints:
- Minimum 8 chapters generated from specs
- Chatbot must:
  - Answer using full book corpus, OR
  - Answer using ONLY user-selected text (highlight mode)
- If no relevant chunk: “The selected text does not contain information related to your query.”
- No external knowledge unless explicitly allowed

Success criteria:
- Docusaurus build passes with zero errors; deployed via GitHub Pages
- RAG chatbot produces grounded answers with ≥95% accuracy
- Highlight-based answering works reliably
- Specs, book, backend, and retrieval pipeline remain fully consistent

Output requirements:
- Complete Docusaurus site from specs
- FastAPI RAG backend (Qdrant + Neon)
- Integrated ChatKit/Agents chatbot UI
- Setup + deployment documentation

## Response snapshot

Successfully created the project constitution and updated related templates.

## Outcome

- ✅ Impact: High - Establishes the foundational principles for the project.
- 🧪 Tests: N/A
- 📁 Files: Created constitution, updated plan template.
- 🔁 Next prompts: `/sp.specify` to define a new feature.
- 🧠 Reflection: The process of creating a constitution from user input and propagating it to templates worked well.

## Evaluation notes (flywheel)

- Failure modes observed: Initially had trouble creating directories for the PHR.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
