FROM node:22-alpine AS app-build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM ghcr.io/vivliostyle/cli:11.1.0 AS publication-build
USER root
RUN apt-get update \
  && apt-get install -y --no-install-recommends poppler-utils ghostscript \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /source
ENTRYPOINT []
RUN mkdir -p /app/publications /source/src/data /source/src/lib /source/scripts/validation /source/public
COPY --from=app-build /app/node_modules /source/node_modules
COPY --from=app-build /app/package.json /source/package.json

# Adam A2 is the only static publication currently embedded in the runtime image.
# Keep this stage independent from unrelated story/UI source files so Docker/Cloud
# Build can reuse the expensive Vivliostyle + Ghostscript result on small previews.
COPY --from=app-build /app/src/types.ts /source/src/types.ts
COPY --from=app-build /app/src/lib/highlightTextMatch.ts /source/src/lib/highlightTextMatch.ts
COPY --from=app-build /app/src/data/*.ts /source/src/data/
COPY --from=app-build /app/src/data/adam /source/src/data/adam
COPY --from=app-build /app/scripts/pdf-pilot /source/scripts/pdf-pilot
COPY --from=app-build /app/scripts/validation/validateAdamA2Learning.ts /source/scripts/validation/validateAdamA2Learning.ts
COPY --from=app-build /app/public/Arakom-Regular.ttf /source/public/Arakom-Regular.ttf
COPY --from=app-build /app/public/Arakom-Bold.ttf /source/public/Arakom-Bold.ttf

RUN chown -R vivliostyle:vivliostyle /source /app/publications
USER vivliostyle
ENV PATH="/source/node_modules/.bin:${PATH}"
RUN PUBLICATION_OUT=/app/publications node scripts/pdf-pilot/buildAdamA2StudentBooksForRuntime.mjs

USER root
RUN set -eu; \
  for pdf in /app/publications/*.pdf; do \
    test -s "$pdf"; \
    tmp="${pdf%.pdf}.optimized.pdf"; \
    gs -q -dNOPAUSE -dBATCH -dSAFER \
      -sDEVICE=pdfwrite -dCompatibilityLevel=1.6 \
      -dDetectDuplicateImages=true -dCompressFonts=true -dSubsetFonts=true \
      -dDownsampleColorImages=true -dColorImageResolution=180 \
      -dDownsampleGrayImages=true -dGrayImageResolution=180 \
      -dDownsampleMonoImages=true -dMonoImageResolution=300 \
      -sOutputFile="$tmp" "$pdf"; \
    mv "$tmp" "$pdf"; \
    test -s "$pdf"; \
  done; \
  test -s /app/publications/Adam_A2_English_Student_Book_Gold.pdf; \
  test -s /app/publications/Adam_A2_Arabic_Student_Book_Gold.pdf

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=app-build /app/dist ./dist
COPY --from=publication-build /app/publications ./dist/pdfs
COPY deploy/server.mjs ./server.mjs
RUN test -s ./dist/pdfs/Adam_A2_English_Student_Book_Gold.pdf \
  && test -s ./dist/pdfs/Adam_A2_Arabic_Student_Book_Gold.pdf
EXPOSE 8080
CMD ["node", "server.mjs"]
