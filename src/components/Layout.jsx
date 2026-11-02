import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
    // Only the Webflow home page had the `body` class (white background).
    document.body.classList.toggle("body", isHome);
  }, [pathname, isHome]);

  // Fade elements marked with data-reveal in as they scroll into view.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }
    });
    document
      .querySelectorAll("[data-reveal]:not(.is-revealed)")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <Navbar hideOnScroll={isHome} />
      <Outlet />
      <Footer />
    </>
  );
}
