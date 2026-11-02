import { Link } from "react-router";
import PageMeta from "../components/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Sophia Ye"
        description="I design and build thoughtful, human-centered products to drive meaningful societal change."
      />
      <section className="section home-hero-section first-section">
        <div className="container">
          <div className="hero-wrapper title">
            <div className="hero-split title-split another">
              <h1 className="title another-title" data-reveal="">
                🍃 Hi, I'm Sophia.
              </h1>
              <div className="div-block-5 hero" />
              <p className="subtitle hero-subtitle" data-reveal="delay">
                I design and build thoughtful, human-centered products to build
                stronger, healthier communities.
                <br />
                Currently at{" "}
                <a
                  className="link"
                  href="https://levralabs.com/"
                  target="_blank"
                >
                  Levra Labs
                </a>
                .
              </p>
              <a
                className="button-primary-2 w-button ix-press"
                href="https://www.linkedin.com/in/sophiaye/"
                target="_blank"
              >
                let's chat
              </a>
            </div>
            <Link to="/about" className="link-block-2 w-inline-block ix-press">
              <img
                className="shadow-two"
                src="/images/profile-decorated-smaller.avif"
                loading="lazy"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="section project-section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <img
                className="product-logo brandywine"
                src="/images/brandywine-logo.avif"
                loading="lazy"
                alt=""
              />
              <h1 className="heading-1">
                Redesigning Artura.org's search &amp; discovery experience
              </h1>
              <p className="overline smaller">
                web &amp; mobile design <strong>•</strong> ux research
              </p>
              <p className="subtitle">
                Redesigned Brandywine Workshop and Archives's content discovery
                platform to bring over 2,000 artworks to art enthusiasts and
                professionals.
              </p>
              <Link to="/artura" className="button-primary w-button ix-press">
                case study
              </Link>
            </div>
            <Link to="/artura" className="link-block w-inline-block ix-press">
              <img
                className="product-image"
                srcSet="/images/artura-showcase-glow.avif 2080w"
                sizes="(max-width: 2080px) 100vw, 2080px"
                src="/images/artura-showcase-glow.avif"
                loading="lazy"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
      <section
        className="section project-section"
        id="work-section"
        data-reveal=""
      >
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <img
                className="product-logo larger"
                srcSet="/images/wharton-logo.avif 1955w"
                sizes="(max-width: 1955px) 100vw, 1955px"
                src="/images/wharton-logo.avif"
                loading="lazy"
                alt=""
              />
              <h1 className="heading-1">
                Building Wharton's financial literacy outreach platform
              </h1>
              <p className="overline smaller">
                responsive design <strong>•</strong> usability testing{" "}
                <strong>•</strong> user analytics
              </p>
              <p className="subtitle">
                Product lead of Wharton's educational tool that helps
                prospective college students make informed decisions about
                financing higher education.{" "}
              </p>
              <Link
                to="/finiverse"
                className="button-primary w-button ix-press"
              >
                case study
              </Link>
            </div>
            <Link
              to="/finiverse"
              className="link-block w-inline-block ix-press"
            >
              <img
                className="product-image"
                srcSet="/images/finiverse-showcase-glow.avif 1994w"
                sizes="(max-width: 1994px) 100vw, 1994px"
                src="/images/finiverse-showcase-glow.avif"
                loading="lazy"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="section project-section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <img
                className="product-logo larger"
                srcSet="/images/bayesian.avif 2372w"
                sizes="(max-width: 2372px) 100vw, 2372px"
                src="/images/bayesian.avif"
                loading="lazy"
                alt=""
              />
              <h1 className="heading-1">
                An AI-powered healthcare tool that saves lives
              </h1>
              <p className="overline smaller">
                healthcare design <strong>•</strong> ux research{" "}
                <strong>•</strong> user interviews <strong>•</strong> field
                studies{" "}
              </p>
              <p className="subtitle">
                Lead designer at healthcare startup, designing and building
                clinical workflows for healthcare providers.{" "}
              </p>
              <Link
                to="/bayesian-health"
                className="button-primary w-button ix-press"
              >
                ⚠️ limited case study (protected by nda)
              </Link>
            </div>
            <Link
              to="/bayesian-health"
              className="link-block w-inline-block ix-press"
            >
              <img
                className="product-image"
                srcSet="/images/bayesian-showcase-glow.avif 2000w"
                sizes="(max-width: 2000px) 100vw, 2000px"
                src="/images/bayesian-showcase-glow.avif"
                loading="lazy"
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
