import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Webflow lightbox (w-lightbox): clicking the link opens its images full
 * screen. Uses Webflow's lightbox markup and class names so the ported CSS
 * styles it exactly as before.
 *
 * items: [{ url, width, height }]
 */
export default function LightboxLink({ className, items, children }) {
  const [openAt, setOpenAt] = useState(null);
  return (
    <>
      <a
        href="#"
        className={className}
        onClick={(e) => {
          e.preventDefault();
          setOpenAt(0);
        }}
      >
        {children}
      </a>
      {openAt !== null && (
        <Lightbox
          items={items}
          start={openAt}
          onClose={() => setOpenAt(null)}
        />
      )}
    </>
  );
}

function Lightbox({ items, start, onClose }) {
  const [index, setIndex] = useState(start);
  const [visible, setVisible] = useState(false);
  const isGroup = items.length > 1;
  const last = items.length - 1;
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(last, i + 1));

  // Fade in, and lock page scroll while open.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    document.documentElement.classList.add("w-lightbox-noscroll");
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("w-lightbox-noscroll");
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(last, i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, last]);

  const item = items[index];

  return createPortal(
    <div
      className="w-lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="image viewer"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 300ms" }}
    >
      <div className="w-lightbox-container">
        <div
          className={`w-lightbox-content${isGroup ? " w-lightbox-group" : ""}`}
        >
          <div
            className="w-lightbox-view"
            style={{ opacity: 1 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <div className="w-lightbox-frame">
              <figure
                className="w-lightbox-figure"
                onClick={isGroup ? next : undefined}
              >
                <img
                  className="w-lightbox-img w-lightbox-image"
                  src={item.url}
                  width={item.width}
                  height={item.height}
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div
            className={`w-lightbox-control w-lightbox-left${index === 0 ? " w-lightbox-inactive" : ""}`}
            role="button"
            aria-label="previous image"
            onClick={prev}
          />
          <div
            className={`w-lightbox-control w-lightbox-right${index === last ? " w-lightbox-inactive" : ""}`}
            role="button"
            aria-label="next image"
            onClick={next}
          />
          <div
            className="w-lightbox-control w-lightbox-close"
            role="button"
            aria-label="close lightbox"
            onClick={onClose}
          />
        </div>
        {isGroup && (
          <div className="w-lightbox-strip" role="tablist">
            {items.map((it, i) => (
              <div
                key={it.url + i}
                className={`w-lightbox-item${i === index ? " w-lightbox-active" : ""}`}
                role="tab"
                aria-label={`show item ${i + 1} of ${items.length}`}
                onClick={() => setIndex(i)}
              >
                <div className="w-lightbox-thumbnail">
                  <img
                    className={`w-lightbox-thumbnail-image ${it.width > it.height ? "w-lightbox-wide" : "w-lightbox-tall"}`}
                    src={it.url}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
