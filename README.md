# Velnqora Labs — consulting website

An independent Next.js implementation of a premium consulting-agency site, using the public Advero Webflow demo as a reference for layout and art direction. No Webflow code, assets or branding are used.

## Stack

- Next.js 16 (App Router, static generation), React 19, TypeScript
- Plain CSS with design tokens (`app/globals.css`), `next/font` (Inter + Inter Tight), `next/image`
- No animation library: CSS plus one small scroll engine, `components/ScrollFX.tsx` (all motion off under `prefers-reduced-motion`)

## Motion

Add these attributes to any element; `ScrollFX` (mounted in the layout) does the rest.

| Attribute | Effect |
| --- | --- |
| `data-reveal` / `="left"` / `="right"` / `="scale"` | Fade-and-slide in once when scrolled into view (`--delay` for stagger) |
| `data-reveal="clip"` | Image wipe-in (clip-path) |
| `data-reveal="split"` + `<Split text="…" />` | Word-by-word (or `by="chars"`) rising headline |
| `data-parallax="0.08"` | Parallax on the element's inner image |
| `data-float="0.06"` | Parallax on the element itself |
| `data-scrub="exit"` / `="enter"` | Writes `--p` (0–1) for scroll-linked CSS (hero fade-out, showcase zoom, process line) |
| `<CountUp value="13K+" />` | Number counts up on first view |

Plus a top scroll-progress bar and a client-name marquee on the home page.

## 3D video

`public/video/build-3d.{webm,mp4}` (12 s seamless loop, 1080p) and `public/images/build-3d-poster.jpg` show a website being built: blocks assembling in a browser, code typing in an editor, a phone building the responsive layout and a cursor clicking the CTA. It is an original three.js scene rendered frame by frame, so the site ships a ~1.7 MB video instead of a WebGL runtime. It plays only while on screen (`components/Showcase3D.tsx`).

The hero background (`public/video/hero-build.{webm,mp4}`, poster `public/images/hero-build-poster.jpg`) is a second scene, `tools/build-3d/hero-bg.html`: a 16 s seamless drift through floating browsers, code editors, phones, UI components and code glyphs, with the centre kept clear for the headline. Render it the same way using `http://127.0.0.1:4567/hero-bg.html?auto=1`.

To change and re-render it:

```bash
cd tools/build-3d && npm install && npm run serve      # http://127.0.0.1:4567/?f=200 previews frame 200
# open http://127.0.0.1:4567/?auto=1 in Chrome and wait for the tab title "done" (writes frames/*.jpg)
ffmpeg -framerate 30 -i frames/%04d.jpg -c:v libx264 -crf 24 -pix_fmt yuv420p -movflags +faststart -an ../../public/video/build-3d.mp4
ffmpeg -i ../../public/video/build-3d.mp4 -c:v libvpx-vp9 -b:v 0 -crf 36 -an ../../public/video/build-3d.webm
```

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint
npm run typecheck
```

## Structure

```
app/                     routes (see below)
components/              Header, Footer, HeroVideo, EmailCapture, FAQ, Testimonials,
                         FilterGrids, ContactForm, PasswordGate, Blocks (cards, CTA, headings)
lib/data.ts              all content — acts as the CMS (services, case studies, posts, plans, FAQ…)
public/images, public/video
```

### Routes

| Route | Notes |
| --- | --- |
| `/` | Video hero, proof/metrics, editorial features, services, process, case studies, pricing, testimonials, blog, FAQ, CTA |
| `/about` | Story, values, timeline, team, testimonials, FAQ |
| `/services` | Detailed service rows (anchor links `#risk-assessment` etc.), process, outcomes |
| `/pricing` | Plans, comparison table, FAQ |
| `/contact` | Validated form; accepts `?email=`, `?schedule=1`, `?plan=<slug>` to prefill |
| `/case-study`, `/case-study/[slug]` | Filterable grid + reusable detail template |
| `/blog`, `/post/[slug]` | Category filters + reusable article template |
| `/pricing-plan/[slug]` | Reusable plan detail |
| `/401` | Demo password page (client-side only — not real protection) |
| `/style-guide`, `/changelog`, `/licenses` | Utility pages |
| any unknown URL (incl. `/404`) | `app/not-found.tsx` |

To add content, append to the arrays in `lib/data.ts`; detail pages are generated automatically via `generateStaticParams`.

## Placeholders to replace before launch

- **Forms** — `components/ContactForm.tsx` and `components/EmailCapture.tsx` validate in the browser and show a local success message; nothing is sent. Add a route handler (e.g. `app/api/contact/route.ts`) that forwards to your CRM/email provider at the marked comments.
- **Password page** — `components/PasswordGate.tsx` uses a hard-coded demo password (`velnqora`). Use middleware + server-side auth for real protection.
- **Content** — client names, metrics, testimonials, team, address/phone and email (`hello@velnqoralabs.example`) are sample content. Pricing amounts are placeholders, labelled on the site as not real offers.
- **Imagery** — photos in `public/images` are from Unsplash (Unsplash License). `public/video/hero.{webm,mp4}` was rendered locally from those photos with ffmpeg (slow pan/zoom + crossfades) and `images/hero-poster.jpg` is its first frame. Swap in brand footage at the same paths; the poster is shown underneath as a fallback.
