# Devi Prasad Chinthamreddy — Personal Portfolio

Editorial personal portfolio website built with **React + Vite**, designed with a warm burnt-orange cinematic hero, cream About section, sand-toned Experience timeline, and dark charcoal Projects & Contact sections.

## Quick Start

```bash
npm install
npm run dev
```

Build for production (Vercel-ready):

```bash
npm run build
```

---

## Swapping in Your Hero Video, Portrait Photo & Project Screenshots

No code changes are required to add your hero video or portrait photo—the site automatically detects and fades them in as soon as the files exist in `public/`:

1. **Hero Background Video (`public/hero.mp4` or `public/hero.webm`)**
   - Generate a 16:9 landscape `.mp4` clip (5–8 seconds, 1080p) in **Google Flow (Veo)**, **Kling AI**, or **Runway** using your reference photo and the prompt below.
   - Save the video as `public/hero.mp4`.
   - Until added, the hero displays an animated warm burnt-orange sunlit architectural scene.

2. **Portrait Photo (`public/portrait.jpg`, `.jpeg`, `.png`, or `.webp`)**
   - Save your portrait image into `public/portrait.jpg` (or `.png` / `.webp`).
   - It automatically replaces the editorial silhouette frame in the **About** section.

3. **Project Screenshots (Optional)**
   - Save screenshots in `public/projects/` (e.g., `public/projects/geo-trip-planner.jpg`) and set `coverImage: '/projects/geo-trip-planner.jpg'` in `src/data/portfolioData.js`.

---

## Ready-to-Use Hero Video Prompt (16:9 Landscape)

Upload your clear portrait reference photo into **Google Flow / Veo**, **Kling**, or **Runway** (Image-to-Video / Subject Reference, **16:9 aspect ratio**) and paste:

> Create a premium, cinematic 16:9 portfolio hero video using my uploaded photo as the identity reference. Show me walking naturally and confidently toward the right/camera-three-quarter angle through a modern architectural colonnade with warm golden-hour sunlight, subtle gimbal camera movement, realistic long architectural shadows, and a calm, confident software engineer / founder aesthetic. Preserve my exact facial identity, face shape, eyes, nose, lips, skin tone, hairstyle, and overall appearance from the reference photo without distortion. Use elegant warm burnt-orange and amber lighting with a sophisticated 35mm editorial film look. Frame me slightly right-of-center so the left side of the frame has clean, uncluttered architectural space for a name and title overlay. Smooth natural motion, realistic proportions, no text, no logos, no watermarks.

