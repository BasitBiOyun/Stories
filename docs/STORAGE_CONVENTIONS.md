# Firebase Storage Conventions

## Current phase

Existing media files and folders remain untouched. `storageManifests.ts` records the current path candidates and the runtime resolver preserves compatibility.

## Standard for newly published material

```text
stories/<collection>/<story>/<level>/<language>/
  cover.webp
  images/chapter-01.webp
  images/chapter-02.webp
  audio/chapter-01.mp3
  audio/chapter-02.mp3
```

Rules:

- lowercase ASCII folder names
- kebab-case story ids
- lowercase CEFR level folders
- two-digit chapter numbers
- no spaces or alternative spellings
- one canonical path per new asset
- never overwrite approved narration with a different recording under the same path

## Compatibility policy

Legacy candidate paths may be removed only after every corresponding file has been verified at its standard path. A migration must compare file counts and checksums before old paths are retired.
