# PosterPro

Optimizador de producción de pósteres para impresión. Sube un diseño, elige ratios de impresión y genera archivos JPEG listos para producción a 300 DPI.

## Características

- **Procesador**: sube imágenes (JPG, PNG, WEBP), selecciona ratios (2:3, 3:4, 4:5, 11:14, ISO A, 1:1) y genera recortes con center-crop inteligente
- **Multiplicador de resolución**: escala de 1x a 3x con protección de límite de canvas del navegador
- **Dashboard**: estadísticas de archivos generados, volumen procesado y actividad reciente
- **Historial**: registro persistente en localStorage
- **Ajustes**: formato de exportación y perfil de color

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Producción

```bash
npm run build
npm run preview
```

Los archivos estáticos se generan en `dist/`.

## Uso

1. Ve a **Procesador** y sube tu diseño original
2. Selecciona uno o más ratios de impresión
3. Ajusta el multiplicador de resolución si lo necesitas
4. Pulsa **Generar Archivos** y descarga los JPEG resultantes

## Notas técnicas

- Todo el procesamiento ocurre en el navegador; no se suben archivos a ningún servidor
- Resoluciones base calculadas a 300 DPI (ej. 24×36" → 7200×10800 px)
- Límite de canvas del navegador: 16384 px por lado
