# Repository Layout

The production application is rooted in `src/`. Root-level Markdown files and `app/applet/` contain source or legacy working material imported from earlier production stages. They are not part of the Vite TypeScript compilation.

They remain in place during the foundation refactor to avoid accidental changes to approved source material. Archiving or deduplicating them requires a separate checksum-preserving housekeeping change after the application foundation is merged.
