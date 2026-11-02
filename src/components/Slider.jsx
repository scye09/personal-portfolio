import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * Webflow slider (w-slider), rebuilt in React. Children are the `w-slide`
 * elements; the rest of the markup and class names match Webflow's so the
 * ported CSS applies unchanged.
 */
export default function Slider({
  className,
  style,
  maskClassName,
  leftIconClassName,
  rightIconClassName,
  navClassName,
  duration = 500,
  autoplay,
  children,
}) {
  const slides = Children.toArray(children).filter(isValidElement);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const touchX = useRef(null);

  const go = (i) => setIndex(((i % count) + count) % count);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), autoplay);
    return () => clearInterval(id);
  }, [autoplay, count]);

  const onKey = (i) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go(i);
    }
  };

  return (
    <div
      className={className}
      style={style}
      role="region"
      aria-label="carousel"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      }}
    >
      <div className={maskClassName}>
        {slides.map((slide, i) =>
          cloneElement(slide, {
            "aria-hidden": i !== index,
            style: {
              ...slide.props.style,
              transform: `translateX(${-index * 100}%)`,
              transition: `transform ${duration}ms ease`,
            },
          }),
        )}
      </div>
      <div
        className="w-slider-arrow-left"
        role="button"
        tabIndex={0}
        aria-label="previous slide"
        onClick={() => go(index - 1)}
        onKeyDown={onKey(index - 1)}
      >
        <div className={leftIconClassName} />
      </div>
      <div
        className="w-slider-arrow-right"
        role="button"
        tabIndex={0}
        aria-label="next slide"
        onClick={() => go(index + 1)}
        onKeyDown={onKey(index + 1)}
      >
        <div className={rightIconClassName} />
      </div>
      <div className={navClassName}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-slider-dot${i === index ? " w-active" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`Show slide ${i + 1} of ${count}`}
            onClick={() => go(i)}
            onKeyDown={onKey(i)}
          />
        ))}
      </div>
    </div>
  );
}
