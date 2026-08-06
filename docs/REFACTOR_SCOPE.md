# Platform Foundation Refactor Scope

This branch modernizes the internal architecture without redesigning the user-facing application.

## In scope

1. Reproducible build and dependency cleanup
2. Repository documentation and maintainable folder boundaries
3. Book registry and manifest contracts
4. Standard teacher and self-study guide contracts
5. Automated content and guide validation
6. Storage path manifests and a compatibility resolver for existing paths
7. Generic book selection and asset-loading services
8. Lazy-loading boundaries
9. One consolidated quality workflow
10. Consistent icon semantics and accessibility guardrails

## Out of scope

- Editing canonical story text
- Changing chapter boundaries or chapter order
- Replacing, editing, regenerating, or renaming narration audio in this phase
- Redesigning layouts, colors, typography, animations, or navigation
- Adding accounts, authentication, Firestore, payment, EBA, or e-Devlet integration
- Rewriting exercises or guide prose in this technical phase

## Delivery model

All foundation work is kept in one branch and one draft pull request. The branch is merged only after typechecking, content validation, and production build pass.
