# sophiaye.com

Personal portfolio, migrated off Webflow to React + Vite + Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`. Besides `index.html` it
writes `about/index.html`, `artura/index.html`, etc. and a `404.html`, so clean
URLs like `/about` load directly on static hosts such as GitHub Pages.

## Layout

```
public/images/        every image from the Webflow site (Webflow's CDN goes away with the plan)
src/pages/            one component per page (Home, About, Artura, Finiverse, BayesianHealth)
src/components/       Navbar, Footer, and React versions of Webflow's widgets:
                        Slider    – w-slider carousels
                        Tabs      – the before/after tabs on Artura
                        Lightbox  – click-to-enlarge images
src/styles/webflow.css  the site's original Webflow stylesheet
src/index.css         Tailwind setup + the recreated Webflow animations
src/routes.js         list of URL paths (add new pages here and in App.jsx)
```

## Styling

The pages use the original Webflow class names, styled by `webflow.css`, which
is what keeps the site pixel-identical. Tailwind utilities are available
everywhere and override the Webflow styles, so you can restyle gradually, e.g.
`<p className="paragraph text-turquoise">`. The site colors are Tailwind tokens
(`turquoise`, `teal`, `dark-teal`, `light-teal`, `dark-indigo`, `artura-red`, …)
and Inter is the default `font-sans`.

Five Tailwind utilities are switched off because Webflow uses the same class
names: `container`, `grid`, `list-item`, `overline`, `align-middle` (see
`src/index.css`).

## Animations

- `data-reveal` on an element fades it up 40px when it scrolls into view
  (`data-reveal="delay"` adds a 200ms delay).
- `ix-press` shrinks a button/card to 95% on hover.
- On the home page the nav slides away on scroll down (visible on mobile, where the nav is fixed).

## Media

Videos are Vimeo embeds (search for `player.vimeo.com` in `src/pages`).
To swap an image, replace the file in `public/images/` keeping its name, or
point the `src` at a new file.
