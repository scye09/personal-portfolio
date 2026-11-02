import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";

const navLinkClass = ({ isActive }) =>
  `nav-link mobile${isActive ? " w--current" : ""}`;

export default function Navbar({ hideOnScroll = false }) {
  const { pathname } = useLocation();
  // The mobile menu is open on the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const toggle = () => setOpenOn(open ? null : pathname);
  const [scrolledDown, setScrolledDown] = useState(false);
  const hidden = hideOnScroll && scrolledDown;
  const lastY = useRef(0);

  // Close the mobile menu when the window grows past the collapse breakpoint.
  useEffect(() => {
    const onResize = () => window.innerWidth > 991 && setOpenOn(null);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Home page only: slide the nav up on scroll down, back on scroll up.
  useEffect(() => {
    if (!hideOnScroll) return;
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY.current) setScrolledDown(y > lastY.current && y > 0);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnScroll]);

  const menu = (
    <nav
      role="navigation"
      className="nav-menu-wrapper w-nav-menu"
      {...(open && { "data-nav-menu-open": "" })}
    >
      <div className="nav-subcontainer">
        <div className="nav-links-wrapper">
          <NavLink to="/" end className={navLinkClass}>
            work
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </div>
        <a
          href="https://www.linkedin.com/in/sophiaye/"
          target="_blank"
          className="nav-link contact-mobile"
        >
          contact
        </a>
      </div>
    </nav>
  );

  return (
    <div
      role="banner"
      className="navbar-no-shadow-container w-nav"
      data-collapse="medium"
      data-animation="default"
      style={
        hideOnScroll
          ? {
              transform: hidden ? "translate3d(0, -100%, 0)" : "none",
              transition: "transform 500ms ease",
            }
          : undefined
      }
    >
      <div className="container-regular">
        <div className="navbar-wrapper">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-brand w-nav-brand${isActive ? " w--current" : ""}`
            }
          >
            <div className="logo">Sophia Ye</div>
          </NavLink>
          {!open && menu}
          <div
            className={`menu-button w-nav-button${open ? " w--open" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="menu"
            aria-expanded={open}
            onClick={toggle}
            onKeyDown={(e) => e.key === "Enter" && toggle()}
          >
            <div className="w-icon-nav-menu" />
          </div>
        </div>
      </div>
      {/* Webflow moves the open menu into this overlay below the bar. */}
      <div
        className="w-nav-overlay"
        style={{ display: open ? "block" : "none" }}
      >
        {open && menu}
      </div>
    </div>
  );
}
