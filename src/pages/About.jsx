import PageMeta from "../components/PageMeta";

export default function About() {
  return (
    <>
      <PageMeta
        title="Sophia Ye | About"
        description="I'm a Product Designer and Engineer from Philadelphia, PA with over 5 years of experience building products in healthcare and education."
      />
      <section className="section hero-section first-section" data-reveal="">
        <div className="container gap">
          <div className="hero-wrapper">
            <div className="hero-split about-split">
              <h1 className="title">About me</h1>
              <p className="subtitle">
                I'm a Product Designer and Engineer from Philadelphia, PA with
                over 5 years of experience building products in healthcare and
                education. <br />
                <br />I am passionate about leveraging technology and design to
                increase access to economic opportunities, improve health and
                safety, promote educational inclusivity, and strengthen
                communities.
                <br />
                <br />
                My passion led me to cofound{" "}
                <a
                  className="link"
                  href="https://levralabs.com/"
                  target="_blank"
                >
                  Levra Labs
                </a>
                , a design &amp; development agency that helps social
                enterprises and nonprofits bring their technical visions their
                life.
                <br />
                <br />
                When I'm not designing, I enjoy... <br />
                🎵 Singing in my local community choir
                <br />
                🎨 Exploring different art mediums, including watercolor,
                pottery, crocheting, and embroidery
                <br />
                ✈️ Traveling to different countries — I've traveled to 7
                countries in the past 2 years!
                <br />
              </p>
              <div className="w-layout-hflex flex-block-10">
                <a
                  className="button-primary w-button ix-press"
                  href="https://www.linkedin.com/in/sophiaye/"
                  target="_blank"
                >
                  connect on linkedin
                </a>
                <a
                  className="button-primary-2 w-button ix-press"
                  href="https://levralabs.com/"
                  target="_blank"
                >
                  levralabs.com
                </a>
              </div>
            </div>
            <img
              className="image-2 portrait"
              srcSet="/images/sophia-profile-picture-1.avif 1280w"
              sizes="(max-width: 1280px) 100vw, 1280px"
              src="/images/sophia-profile-picture-1.avif"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
