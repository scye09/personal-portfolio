import { Link, NavLink } from "react-router";

const footerLinkClass = ({ isActive }) =>
  `footer-link-two${isActive ? " w--current" : ""}`;

const SOCIALS = [
  {
    href: "mailto:scye09@gmail.com",
    icon: "/images/material-symbols-mail.svg",
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/sophiaye/",
    icon: "/images/mdi-linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/scye09",
    icon: "/images/mdi-github.svg",
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <section className="footer-light">
      <div className="container">
        <div className="footer-wrapper-two">
          <Link to="/" className="footer-brand w-inline-block">
            <div className="logo">Sophia Ye</div>
          </Link>
          <div className="footer-block-two">
            <div className="footer-title">Navigation</div>
            <NavLink to="/" end className={footerLinkClass}>
              Work
            </NavLink>
            <NavLink to="/about" className={footerLinkClass}>
              About
            </NavLink>
          </div>
          <div className="footer-block-two">
            <div className="footer-title">Case studies</div>
            <NavLink to="/finiverse" className={footerLinkClass}>
              Finiverse
            </NavLink>
            <NavLink to="/artura" className={footerLinkClass}>
              Artura.org
            </NavLink>
            <NavLink to="/bayesian-health" className={footerLinkClass}>
              Bayesian Health
            </NavLink>
          </div>
          <div className="footer-form w-form">
            <form
              className="footer-form-container"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="footer-title">Connect with me</div>
              <div className="w-layout-hflex flex-block-8">
                {SOCIALS.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    className="footer-social-link w-inline-block"
                    aria-label={label}
                  >
                    <img
                      src={icon}
                      loading="lazy"
                      alt=""
                      className="social-icon"
                    />
                  </a>
                ))}
              </div>
              {/* Stands in for the empty spam-check widget Webflow injected here;
                  it adds one 16px flex gap, which the original layout includes. */}
              <div />
            </form>
          </div>
        </div>
        <div className="footer-divider-two" />
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 Sophia Ye. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
