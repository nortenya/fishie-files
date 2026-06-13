# Fishie Files

Archivo personal para análisis, lore, teorías y timeline de Rafayel.

## Stack

- Astro
- Markdown / MDX
- CSS propio
- GitHub Pages

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

## Antes de subir a GitHub Pages

Edita `astro.config.mjs`:

```js
site: 'https://TU_USUARIO.github.io',
base: '/fishie-files'
```

Cambia `TU_USUARIO` por tu usuario de GitHub.

## Publicar en GitHub

1. Crea un repositorio llamado `fishie-files`.
2. Sube todos estos archivos.
3. Ve a `Settings > Pages`.
4. En `Build and deployment`, selecciona `GitHub Actions`.
5. Haz push a `main`.

Tu sitio quedará en:

```txt
https://TU_USUARIO.github.io/fishie-files/
```

## Crear una entrada nueva

Agrega un archivo `.md` en una carpeta de `src/content/`.

Ejemplo:

```md
---
title: "Título del análisis"
description: "Descripción breve."
date: 2026-06-13
tags: ["personalidad", "lore"]
mood: "mar dramático"
featured: false
---

## Tu análisis

Escribe aquí.
```
