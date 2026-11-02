import Slider from "../components/Slider";
import LightboxLink from "../components/Lightbox";
import PageMeta from "../components/PageMeta";

export default function Finiverse() {
  return (
    <>
      <PageMeta
        title="Sophia Ye | Finiverse"
        description="An educational web application sponsored by the Wharton School to guide high school students through the college financing process."
      />
      <section className="section hero-section first-section" data-reveal="">
        <div className="container gap">
          <div className="hero-wrapper">
            <div className="hero-split">
              <p className="overline">finiverse @ wharton</p>
              <h1 className="title">
                Building a financial literacy platform for high school students
              </h1>
              <p className="paragraph">
                An educational web application built as part of a 3-year
                contract with the Wharton School to guide high school students
                through the college financing process.
              </p>
              <div className="w-layout-hflex flex-block-4">
                <a
                  className="button-primary w-button ix-press"
                  href="https://www.finiverse.org/"
                  target="_blank"
                >
                  finiverse.org
                </a>
              </div>
            </div>
            <img
              className="image-2"
              srcSet="/images/finiverse-small-banner-pre-redesign.avif 4322w"
              sizes="(max-width: 4322px) 100vw, 4322px"
              src="/images/finiverse-small-banner-pre-redesign.avif"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container gap">
          <div className="hero-split full-width">
            <h1 className="heading-2">Overview</h1>
            <p className="paragraph">
              As Product Lead of Finiverse @ Wharton, I spent more than two
              years bringing this web app to life and refining it through
              countless product iterations. As one of the key decision-makers of
              Finiverse's product strategy, I advocated for a{" "}
              <strong>user-centered development approach</strong>—ensuring that
              critical product decisions were backed by both{" "}
              <strong>qualitative and quantitative feedback</strong>. <br />
              <br />
              Built under the guidance of the Wharton School of Business at the
              University of Pennsylvania, Finiverse is a comprehensive resource
              designed to help high school and college students navigate
              critical college financing decisions. <br />
            </p>
          </div>
          <div className="w-layout-grid grid-5">
            <div className="hero-split full-width">
              <h1 className="heading-2">Problem</h1>
              <p className="paragraph justify">
                <strong>
                  Prospective and current college students often feel lost or
                  overwhelmed when making financial choices about higher
                  education.
                </strong>
                <br />
                <br />
                To address this, Wharton Professor David Musto and Dr. Jill
                Bazelon asked us to build a solution that would involve local
                high schoolers.
                <br />
              </p>
            </div>
            <div className="hero-split full-width">
              <h1 className="heading-2">Solution</h1>
              <p className="paragraph justify">
                <strong>
                  We created an interactive web application that thoughtfully
                  educates students about the process of financing college.
                </strong>
                <br />
                <br />
                We worked with our target users — high school students —
                throughout the entire development process, creating a rapid
                feedback loop.
                <br />
              </p>
            </div>
          </div>
          <div className="hero-split project-details finiverse">
            <div className="w-layout-grid summary-grid">
              <div className="div-block">
                <p className="overline">client</p>
                <p className="paragraph">The Wharton School of Business</p>
              </div>
              <div className="div-block">
                <p className="overline">role</p>
                <p className="paragraph">Product &amp; Design Lead</p>
              </div>
              <div className="div-block">
                <p className="overline">team</p>
                <p className="paragraph">
                  Co-founders (2)
                  <br />
                  Technical Leads (4)
                  <br />
                  Marketing Leads (2)
                  <br />
                  Junior Designers (20+)
                </p>
              </div>
              <div className="div-block">
                <p className="overline">timeframe</p>
                <p className="paragraph">2+ years</p>
              </div>
            </div>
          </div>
          <div className="hero-split full-width">
            <h1 className="heading-2">My Role</h1>
            <p className="paragraph justify">
              I joined Finiverse as its lead designer but quickly expanded into
              product strategy to address broader challenges. In this role, I
              led efforts across design, research, and cross-functional
              collaboration, including:
              <br />
              <strong>
                <br />
                📍 Owning and driving product roadmaps:{" "}
              </strong>
              Built and updated quarterly roadmaps, prioritizing features based
              on user and stakeholder input.
              <br />‍<br />
              <strong>🔎 Leading user research and demos</strong>: Ran
              interviews and usability tests, and conducted live demos at five
              Philadelphia high schools to gather feedback that directly
              informed product decisions.
              <br />‍
              <strong>
                <br />
                🎨 Building the design system:
              </strong>{" "}
              Created Finiverse’s first scalable design system and aligned it
              with Wharton’s brand in partnership with the marketing team.
              <br />‍<br />
              <strong>💬 Driving team alignment</strong>: Facilitated
              communication across design, engineering, product, and research to
              keep the team focused and in sync.
              <br />‍<br />
              <strong>👩🏻‍🏫 Mentoring junior designers</strong>: Trained over 20
              design interns, helping them build UI/UX skills and contribute to
              new product iterations.
              <br />
            </p>
          </div>
          <Slider
            className="slider-3 w-slider"
            maskClassName="w-slider-mask"
            leftIconClassName="icon-4 w-icon-slider-left"
            rightIconClassName="icon-3 w-icon-slider-right"
            navClassName="w-slider-nav w-slider-nav-invert w-shadow w-round"
            duration={500}
          >
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  {
                    url: "/images/finiverse-banner-transparent.png",
                    width: 3752,
                    height: 2197,
                  },
                ]}
              >
                <img
                  className="image-13"
                  alt=""
                  srcSet="/images/finiverse-banner-transparent.avif 3752w"
                  sizes="(max-width: 3752px) 100vw, 3752px"
                  src="/images/finiverse-banner-transparent.avif"
                  loading="lazy"
                />
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  { url: "/images/finiverse-1.png", width: 3752, height: 2197 },
                ]}
              >
                <img
                  className="image-12"
                  alt=""
                  srcSet="/images/finiverse-1.avif 3752w"
                  sizes="(max-width: 3752px) 100vw, 3752px"
                  src="/images/finiverse-1.avif"
                  loading="lazy"
                />
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  {
                    url: "/images/sticker-price.png",
                    width: 1440,
                    height: 1360,
                  },
                ]}
              >
                <img
                  className="image-11"
                  alt=""
                  srcSet="/images/blank-desktop-black.avif 1876w"
                  sizes="(max-width: 1876px) 100vw, 1876px"
                  src="/images/blank-desktop-black.avif"
                  loading="lazy"
                />
                <div className="scrollable-div">
                  <img
                    className="scrollable-image"
                    srcSet="/images/sticker-price.avif 1440w"
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    src="/images/sticker-price.avif"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  { url: "/images/net-price.png", width: 2880, height: 3090 },
                ]}
              >
                <img
                  className="image-11"
                  alt=""
                  srcSet="/images/blank-desktop-black.avif 1876w"
                  sizes="(max-width: 1876px) 100vw, 1876px"
                  src="/images/blank-desktop-black.avif"
                  loading="lazy"
                />
                <div className="scrollable-div">
                  <img
                    className="scrollable-image"
                    srcSet="/images/net-price.avif 2880w"
                    sizes="(max-width: 2880px) 100vw, 2880px"
                    src="/images/net-price.avif"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  {
                    url: "/images/financing-flow.png",
                    width: 2880,
                    height: 5166,
                  },
                ]}
              >
                <img
                  className="image-11"
                  alt=""
                  srcSet="/images/blank-desktop-black.avif 1876w"
                  sizes="(max-width: 1876px) 100vw, 1876px"
                  src="/images/blank-desktop-black.avif"
                  loading="lazy"
                />
                <div className="scrollable-div">
                  <img
                    className="scrollable-image"
                    srcSet="/images/financing-flow.avif 2880w"
                    sizes="(max-width: 2880px) 100vw, 2880px"
                    src="/images/financing-flow.avif"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  {
                    url: "/images/risk-simulation.png",
                    width: 2880,
                    height: 4418,
                  },
                ]}
              >
                <img
                  className="image-11"
                  alt=""
                  srcSet="/images/blank-desktop-black.avif 1876w"
                  sizes="(max-width: 1876px) 100vw, 1876px"
                  src="/images/blank-desktop-black.avif"
                  loading="lazy"
                />
                <div className="scrollable-div">
                  <img
                    className="scrollable-image"
                    srcSet="/images/risk-simulation.avif 2880w"
                    sizes="(max-width: 2880px) 100vw, 2880px"
                    src="/images/risk-simulation.avif"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </LightboxLink>
            </div>
          </Slider>
        </div>
      </section>
      <section className="section less-bottom-padding" data-reveal="">
        <div className="container">
          <div className="hero-wrapper align-middle">
            <div className="hero-split full-width">
              <p className="overline">phase one</p>
              <div className="w-layout-hflex flex-block-5">
                <h1 className="heading-1">Discovery</h1>
                <div className="div-block-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split full-width">
              <h1 className="heading-2">User Research</h1>
              <p className="paragraph">
                To better understand our{" "}
                <strong>users' needs and pain points</strong>, we visited{" "}
                <strong>5 local high schools</strong> in Philadelphia and
                conducted a series of user testing sessions with students
                (primarily juniors and seniors) and their teachers during their
                class periods.
                <br />
              </p>
              <div className="w-layout-grid grid-9">
                <div className="w-layout-vflex research-flex">
                  <h1 className="heading-4">We wanted to know...</h1>
                  <div className="w-layout-vflex">
                    <p className="paragraph questions">
                      <em className="italic-text">
                        How do students decide on what to do post-graduation?
                      </em>
                      <br />
                    </p>
                    <p className="paragraph questions">
                      <em className="italic-text">
                        How do students choose which school to attend?
                      </em>
                      <br />
                    </p>
                    <p className="paragraph questions">
                      <em className="italic-text">
                        What do they know about college financing?
                      </em>
                      <br />
                    </p>
                    <p className="paragraph questions">
                      <em className="italic-text">
                        Where do they go to learn more about college
                        financing?{" "}
                      </em>
                      <br />
                    </p>
                    <p className="paragraph questions">
                      <em className="italic-text">
                        What confuses them about college financing?
                      </em>
                      <br />
                    </p>
                    <p className="paragraph questions">
                      <em className="italic-text">
                        How do their post-college plans affect their financial
                        decisions?
                      </em>
                      <br />
                    </p>
                    <img
                      className="smaller-image"
                      srcSet="/images/240724-1012-1.avif 1407w"
                      sizes="(max-width: 1407px) 100vw, 1407px"
                      src="/images/240724-1012-1.avif"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-layout-vflex research-flex">
                  <h1 className="heading-4">We found...</h1>
                  <div className="w-layout-grid grid-8 three-col">
                    <div className="w-layout-vflex statistic">
                      <h1 className="heading-2">47%</h1>
                      <p className="paragraph">
                        of juniors had little to no understanding of college
                        financing
                        <br />
                      </p>
                    </div>
                    <div className="w-layout-vflex statistic">
                      <h1 className="heading-2">69%</h1>
                      <p className="paragraph">
                        of seniors had thought about college financing but
                        hadn't made any plans
                        <br />
                      </p>
                    </div>
                    <div className="w-layout-vflex statistic">
                      <h1 className="heading-2">67%</h1>
                      <p className="paragraph">
                        of seniors were planning to attend college after
                        graduation
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="w-layout-vflex flex-block-3 smaller-padding">
                    <div className="w-layout-grid findings-grid">
                      <p className="paragraph color-background">
                        💸 A general lack of knowledge about{" "}
                        <strong>how to take out loans</strong>,{" "}
                        <strong>what types of loans</strong> exist, and{" "}
                        <strong>how to repay</strong> them
                        <br />
                      </p>
                      <p className="paragraph color-background">
                        🏷️ Misconceptions about school sticker price
                        <br />
                        <br />
                        💬
                        <em>
                          {" "}
                          "I probably can’t attend Penn because it’s too
                          expensive"
                        </em>
                        <br />
                      </p>
                      <p className="paragraph color-background">
                        🎓 Many students select colleges based on{" "}
                        <strong>hearsay </strong>or through{" "}
                        <strong>Google</strong>
                        <br />
                        <br />
                        💬{" "}
                        <em>
                          "I just Googled 'best colleges for nursing' and this
                          school came up"
                        </em>
                        <br />
                      </p>
                      <p className="paragraph color-background">
                        💭 Most students didn’t make college financial plans
                        until <strong>senior year</strong> — either during the
                        application process or after receiving their award
                        letters
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split full-width">
              <h1 className="heading-2">User personas</h1>
              <p className="paragraph">
                Working with a few student interns, we narrowed down our target
                users and created user personas to empathize with users and
                succinctly capture their needs.
                <br />
              </p>
              <div className="w-layout-grid grid-11">
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[{ url: "/images/2.png", width: 1920, height: 1080 }]}
                >
                  <img
                    srcSet="/images/2.avif 1920w"
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    src="/images/2.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[{ url: "/images/3.png", width: 1920, height: 1080 }]}
                >
                  <img
                    srcSet="/images/3.avif 1920w"
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    src="/images/3.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section less-bottom-padding" data-reveal="">
        <div className="container">
          <div className="hero-wrapper align-middle">
            <div className="hero-split full-width">
              <p className="overline">phase two</p>
              <div className="w-layout-hflex flex-block-5">
                <h1 className="heading-1">Design</h1>
                <div className="div-block-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <h1 className="heading-2">User Stories</h1>
              <p className="paragraph">
                Through the above research, I developed a clearer vision of our
                solution and prioritized use cases for Finiverse based on user
                feedback and market needs.
                <br />
              </p>
            </div>
            <div className="div-block-2">
              <p className="paragraph thicker">
                As a prospective college student...
                <br />
              </p>
              <ol className="list-3" role="list">
                <li className="paragraph list-item">
                  I want to compare schools by price.
                </li>
                <li className="paragraph list-item">
                  I want to learn about how I can pay for college.
                </li>
                <li className="paragraph list-item">
                  I want to understand what kind of loans are available and why
                  I might pick one over the other.
                </li>
                <li className="paragraph list-item">
                  I want to learn how to repay loans.
                </li>
                <li className="paragraph list-item">
                  I want to understand how college can impact my financial
                  future.
                  <br />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="section less-bottom-padding" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split full-width">
              <h1 className="heading-2">User Flows &amp; Features</h1>
              <div className="w-layout-vflex">
                <p className="paragraph">
                  After analyzing student feedback, we decided to design the
                  flow of Finiverse in a linear fashion with three main
                  sections: <br />
                </p>
                <ol className="list-3" role="list">
                  <li className="paragraph list-item">
                    <strong>College Costs: </strong>Focus on pre-college
                    decisions, like comparing colleges by{" "}
                    <strong>net price</strong> (rather than sticker price)
                  </li>
                  <li className="paragraph list-item">
                    <strong>Financing: </strong>Focus on decisions during
                    college, like paying for college and{" "}
                    <strong>taking out loans</strong>
                  </li>
                  <li className="paragraph list-item">
                    <strong>Risk Simulation: </strong>Focus on post-college
                    decisions, like repaying loans and{" "}
                    <strong>starting a career</strong>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section color-section indigo" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split full-width larger-gap">
              <div className="w-layout-vflex design-section">
                <p className="overline">
                  college costs
                  <br />
                </p>
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[
                    {
                      url: "/images/college-cost-flow.png",
                      width: 11880,
                      height: 3090,
                    },
                  ]}
                >
                  <img
                    srcSet="/images/college-cost-flow.avif 11880w"
                    sizes="100vw"
                    src="/images/college-cost-flow.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
                <p className="paragraph">
                  <em>
                    Student selects schools and state of residence → Student
                    views sticker price compared to average net price by
                    school{" "}
                  </em>
                  <strong>
                    <em>→ </em>
                  </strong>
                  <em>
                    Student can calculates Student Aid Index to get more
                    personalized net prices by school
                  </em>
                  <strong>
                    <em> </em>
                  </strong>
                  <br />
                </p>
              </div>
              <div className="w-layout-grid grid-10">
                <div className="w-layout-vflex design-section">
                  <p className="overline">
                    financing
                    <br />
                  </p>
                  <LightboxLink
                    className="w-inline-block w-lightbox"
                    items={[
                      {
                        url: "/images/financing-flow-commented.png",
                        width: 3180,
                        height: 5166,
                      },
                    ]}
                  >
                    <img
                      srcSet="/images/financing-flow-commented.avif 3180w"
                      sizes="(max-width: 3180px) 100vw, 3180px"
                      src="/images/financing-flow-commented.avif"
                      loading="lazy"
                      alt=""
                    />
                  </LightboxLink>
                </div>
                <div className="w-layout-vflex design-section">
                  <p className="overline">
                    risk simulation
                    <br />
                  </p>
                  <LightboxLink
                    className="w-inline-block w-lightbox"
                    items={[
                      {
                        url: "/images/risk-simulation-commented.png",
                        width: 3400,
                        height: 4418,
                      },
                    ]}
                  >
                    <img
                      srcSet="/images/risk-simulation-commented.avif 3400w"
                      sizes="(max-width: 3400px) 100vw, 3400px"
                      src="/images/risk-simulation-commented.avif"
                      loading="lazy"
                      alt=""
                    />
                  </LightboxLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split full-width">
              <h1 className="heading-2">Testing Results</h1>
              <div className="w-layout-hflex flex-block-9">
                <div className="w-layout-grid grid-8 half-width">
                  <div className="w-layout-vflex statistic">
                    <h1 className="heading-2">92</h1>
                    <p className="paragraph">
                      Number of responses from high school juniors and seniors
                      <br />
                    </p>
                  </div>
                  <div className="w-layout-vflex statistic">
                    <h1 className="heading-2">4.2 / 5</h1>
                    <p className="paragraph">
                      Average rating of Finiverse's usability
                      <br />
                    </p>
                  </div>
                  <div className="w-layout-vflex statistic">
                    <h1 className="heading-2">4.3 / 5</h1>
                    <p className="paragraph">
                      Average rating of Finiverse's quality of information{" "}
                      <br />
                    </p>
                  </div>
                  <div className="w-layout-vflex statistic">
                    <h1 className="heading-2">3.9 / 5</h1>
                    <p className="paragraph">
                      Average rating of Finiverse's helpfulness in college
                      planning
                      <br />
                    </p>
                  </div>
                </div>
                <div className="w-layout-vflex flex-block-3 smaller-padding half-width">
                  <div className="w-layout-grid findings-grid">
                    <p className="paragraph color-background">
                      Students find their current college resources to be
                      overwhelming — it is nice for everything to be in{" "}
                      <strong>one place</strong>
                      <br />
                    </p>
                    <p className="paragraph color-background">
                      💬
                      <em>
                        {" "}
                        "It's useful because you don’t have to stress out about
                        calculating the cost of college and it’s{" "}
                      </em>
                      <strong>
                        <em>not too time consuming</em>
                      </strong>
                      <em> to use"</em>
                      <br />
                    </p>
                    <p className="paragraph color-background">
                      💬{" "}
                      <em>
                        "I wish I had this last year [junior year] when I was
                        choosing colleges"
                      </em>
                      <br />
                    </p>
                    <p className="paragraph color-background">
                      Finiverse has helped college options look{" "}
                      <strong>more realistic</strong> and "understand more of
                      what you are getting yourself into"
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <p className="paragraph">
                Based on this feedback, we decided to move forward on developing
                this iteration of Finiverse.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split full-width">
              <h1 className="heading-2">Design System</h1>
              <p className="paragraph">
                During the process of designing this MVP, I also implemented a{" "}
                <strong>comprehensive style guide</strong> for Finiverse,
                creating reusable components and a more cohesive user experience
                throughout the app. <br />
              </p>
              <div className="w-layout-grid grid-11 brand">
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[
                    {
                      url: "/images/finiverse-fonts.png",
                      width: 1778,
                      height: 860,
                    },
                  ]}
                >
                  <img
                    srcSet="/images/finiverse-fonts.avif 1778w"
                    sizes="(max-width: 1778px) 100vw, 1778px"
                    src="/images/finiverse-fonts.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[
                    {
                      url: "/images/finiverse-colors.png",
                      width: 1778,
                      height: 860,
                    },
                  ]}
                >
                  <img
                    srcSet="/images/finiverse-colors.avif 1778w"
                    sizes="(max-width: 1778px) 100vw, 1778px"
                    src="/images/finiverse-colors.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[
                    {
                      url: "/images/finiverse-buttons.png",
                      width: 1778,
                      height: 580,
                    },
                  ]}
                >
                  <img
                    srcSet="/images/finiverse-buttons.avif 1778w"
                    sizes="(max-width: 1778px) 100vw, 1778px"
                    src="/images/finiverse-buttons.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section less-bottom-padding" data-reveal="">
        <div className="container">
          <div className="hero-wrapper align-middle">
            <div className="hero-split full-width">
              <p className="overline">phase three</p>
              <div className="w-layout-hflex flex-block-5">
                <h1 className="heading-1">Outcome &amp; Launch</h1>
                <div className="div-block-5 smaller" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <h1 className="heading-2">The Final Product</h1>
              <p className="paragraph">
                An educational platform that empowers students to make informed
                decisions about college finances —built by high school students,
                for high school students.{" "}
              </p>
              <a
                className="button-primary w-button ix-press"
                href="https://www.finiverse.org/"
                target="_blank"
              >
                finiverse.org
              </a>
            </div>
            <div className="div-block-4">
              <div
                className="w-video w-embed"
                style={{ paddingTop: "51.276595744680854%" }}
              >
                <iframe
                  className="embedly-embed"
                  src="https://player.vimeo.com/video/1087621517?h=0518ec5c18&app_id=122963"
                  width={940}
                  height={482}
                  scrolling="no"
                  allowFullScreen
                  title="Finiverse Walkthrough"
                  allow="autoplay; fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <LightboxLink
              className="lightbox-link-2 w-inline-block w-lightbox"
              items={[
                { url: "/images/team-white.png", width: 1571, height: 1248 },
              ]}
            >
              <img
                className="image-6"
                srcSet="/images/240419-finiverse40-1.avif 1288w"
                sizes="(max-width: 1288px) 100vw, 1288px"
                src="/images/240419-finiverse40-1.avif"
                loading="lazy"
                alt=""
              />
            </LightboxLink>
            <div className="hero-split">
              <h1 className="heading-2">Product Launch</h1>
              <p className="paragraph">
                We officially unveiled the new Finiverse site in April 2024 at a
                launch event at The Wharton School. There were close to 100
                attendees, and we were able to present our work to a broader
                audience of school administrators, counselors, and other
                external stakeholders.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <h1 className="heading-2">Success Metrics</h1>
              <p className="paragraph">
                As of December 2024, Finiverse has received traffic of{" "}
                <strong>over 4,000 users</strong>, and we continue to monitor
                the following success metrics to inform future product
                decisions:
              </p>
              <ul className="list-3 bulleted" role="list">
                <li className="paragraph list-item">
                  Number of active users and page views
                </li>
                <li className="paragraph list-item">Average engagement time</li>
                <li className="paragraph list-item">Number of rage clicks</li>
                <li className="paragraph list-item">Qualitative feedback</li>
                <li className="paragraph list-item">
                  Instagram engagement (likes, comments, shares)
                </li>
              </ul>
            </div>
            <img
              className="image-7 smaller"
              srcSet="/images/img-1887-1.avif 1334w"
              sizes="(max-width: 1334px) 100vw, 1334px"
              src="/images/img-1887-1.avif"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="section less-bottom-padding" data-reveal="">
        <div className="container">
          <div className="hero-wrapper align-middle">
            <div className="hero-split full-width">
              <p className="overline">phase four</p>
              <div className="w-layout-hflex flex-block-5">
                <h1 className="heading-1">Reflection</h1>
                <div className="div-block-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <h1 className="heading-2">Next Steps</h1>
              <p className="paragraph">
                For the next phase of Finiverse, we will be focusing more on
                marketing and outreach to students, teachers, parents, and
                counselors. We will also continue to monitor{" "}
                <strong>product analytics </strong>and{" "}
                <strong>user behavior</strong> using Hotjar and Google
                Analytics.
                <br />
                <br />
                There are also a few more features we'd like to develop and test
                in Finiverse in the near future:
              </p>
              <ul className="list-5" role="list">
                <li className="paragraph list-item">
                  Personalized career path and school recommendations using AI
                  <br />
                </li>
                <li className="paragraph list-item">
                  Information on which majors are associated with which jobs
                </li>
                <li className="paragraph list-item">
                  Resources for prospective &amp; current community college
                  students
                </li>
              </ul>
            </div>
            <img
              className="image-7"
              srcSet="/images/img-1883-1.avif 1330w"
              sizes="(max-width: 1330px) 100vw, 1330px"
              src="/images/img-1883-1.avif"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <LightboxLink
              className="lightbox-link-2 w-inline-block w-lightbox"
              items={[
                { url: "/images/team-white.png", width: 1571, height: 1248 },
              ]}
            >
              <img
                className="image-6"
                srcSet="/images/230410062-1-1.avif 1329w"
                sizes="(max-width: 1329px) 100vw, 1329px"
                src="/images/230410062-1-1.avif"
                loading="lazy"
                alt=""
              />
            </LightboxLink>
            <div className="hero-split">
              <h1 className="heading-2">Growing our student team</h1>
              <p className="paragraph">
                One of the most unique aspects of Finiverse is that we brought
                our primary target users — prospective college students — to
                work on the project from the very beginning. <br />
                <br />
                Since the start of the project, we've steadily grown our cohort
                of student interns from 10 interns to{" "}
                <strong>50+ interns </strong>who are distributed across 5
                different teams. <br />
                <br />
                We plan to continue recruiting students to join our project,
                thus creating a sustainable feedback loop for Finiverse (and
                furthering our broader mission to educate more students!)
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section color-section pink" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split full-width">
              <h1 className="heading-2">Key Takeaways</h1>
              <div className="w-layout-grid grid-4">
                <p className="overline">
                  balancing educational &amp; product goals
                </p>
                <p className="paragraph">
                  Finiverse aims to educate through both its product and its
                  internship program. As Product Lead, I often had to{" "}
                  <strong>balance product delivery with training goals</strong>
                  —making strategic tradeoffs to meet external stakeholder needs
                  while supporting student learning.
                </p>
                <p className="overline">navigating selection bias</p>
                <p className="paragraph">
                  The project demonstrated the value of co-designing with users.
                  Working closely with our high school interns provided rich
                  insights, but I also recognized the risk of{" "}
                  <strong>selection bias</strong>. To ensure broader appeal, we
                  made sure to interview students outside the program to reflect
                  the diversity of our user base.
                </p>
                <p
                  className="overline"
                  id="w-node-bad35296-6f46-1998-4529-b38123d24729-b47d338c"
                >
                  good COPYWrItiNG is key
                </p>
                <p className="paragraph">
                  <strong>Clear, student-friendly copy</strong> was essential to
                  Finiverse’s design, given our focus on educating a teenage
                  audience. We prioritized concise, accessible language to
                  explain complex financial topics.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
