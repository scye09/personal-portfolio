import Slider from "../components/Slider";
import { TabLink, TabPane, Tabs } from "../components/Tabs";
import LightboxLink from "../components/Lightbox";
import PageMeta from "../components/PageMeta";

export default function Artura() {
  return (
    <>
      <PageMeta
        title="Sophia Ye | Artura"
        description="A B2C web and mobile application for art professionals, educators, and enthusiasts"
      />
      <section className="section hero-section first-section" data-reveal="">
        <div className="container gap">
          <div className="hero-wrapper">
            <div className="hero-split">
              <p className="overline">brandywine workshop and archives</p>
              <h1 className="title">
                Redesigning Artura.org's search experience
              </h1>
              <p className="paragraph">
                A B2C web and mobile application built for art professionals,
                educators, and enthusiasts to discover new digital artworks
              </p>
              <div className="w-layout-hflex flex-block-4">
                <a
                  className="button-primary w-button ix-press"
                  href="https://artura.org/"
                  target="_blank"
                >
                  artura.org
                </a>
                <a
                  className="button-primary-2 w-button ix-press"
                  href="https://play.google.com/store/apps/details?id=com.artura.android&hl=en_US"
                  target="_blank"
                >
                  google play app
                </a>
              </div>
            </div>
            <img
              className="image-2"
              srcSet="/images/artura-banner.avif 4032w"
              sizes="(max-width: 4032px) 100vw, 4032px"
              src="/images/artura-banner.avif"
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
              First created by Brandywine Workshop and Archives, Artura.org is
              the world’s first digital archive of contemporary artworks by
              diverse artists. We were tasked with a{" "}
              <strong>modern redesign</strong> of the desktop site and the
              creation of an accompanying mobile application.
              <br />
            </p>
          </div>
          <div className="w-layout-grid grid-5">
            <div className="hero-split full-width">
              <h1 className="heading-2">Problem</h1>
              <p className="paragraph justify">
                <strong>
                  Art professionals, educators, and enthusiasts needed a
                  streamlined platform to easily find, discover, and explore
                  diverse contemporary artwork, reducing friction in identifying
                  artworks of interest.{" "}
                </strong>
                <br />
                <br />
                Artura.org aims to be an accessible and comprehensive resource
                for lovers of contemporary art.
                <br />
              </p>
            </div>
            <div className="hero-split full-width">
              <h1 className="heading-2">Solution</h1>
              <p className="paragraph justify">
                <strong>
                  We created a completely new interface for Artura.org with
                  improved search and personalization features to help users
                  quickly find and engage with diverse artworks.
                </strong>
                <br />
                <br />
                The new redesign includes account login, advanced search
                features, and the ability to save artworks to custom lists.
                <br />
              </p>
            </div>
          </div>
          <div className="hero-split project-details artura">
            <div className="w-layout-grid summary-grid artura">
              <div className="div-block">
                <p className="overline">client</p>
                <p className="paragraph">Brandywine Workshop and Archives</p>
              </div>
              <div className="div-block">
                <p className="overline">role</p>
                <p className="paragraph">Product Designer</p>
              </div>
              <div className="div-block">
                <p className="overline">team</p>
                <p className="paragraph">
                  Project Lead
                  <br />
                  Software Engineers (3){" "}
                </p>
              </div>
              <div className="div-block">
                <p className="overline">timeframe</p>
                <p className="paragraph">8 months</p>
              </div>
            </div>
          </div>
          <Tabs
            className="w-tabs"
            data-current="After"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            defaultTab="After"
          >
            <div className="tabs-menu w-tab-menu">
              <TabLink
                tab="After"
                className="tab-link-after w-inline-block w-tab-link"
              >
                <div className="text-block-2">After</div>
              </TabLink>
              <TabLink
                tab="Before"
                className="tab-link-before w-inline-block w-tab-link"
              >
                <div className="text-block">Before</div>
              </TabLink>
            </div>
            <div className="w-tab-content">
              <TabPane tab="After" className="w-tab-pane">
                <div className="hero-wrapper vertical-wrap">
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
                            url: "/images/new-artura-artwork.png",
                            width: 2813,
                            height: 1641,
                          },
                        ]}
                      >
                        <img
                          className="image-10"
                          alt=""
                          srcSet="/images/new-artura-artwork.avif 2813w"
                          sizes="(max-width: 2813px) 100vw, 2813px"
                          src="/images/new-artura-artwork.avif"
                          loading="lazy"
                        />
                      </LightboxLink>
                    </div>
                    <div className="indigo-slide not-indigo w-slide">
                      <LightboxLink
                        className="w-inline-block w-lightbox"
                        items={[
                          {
                            url: "/images/browse-1.png",
                            width: 2813,
                            height: 1681,
                          },
                        ]}
                      >
                        <img
                          className="image-14"
                          alt=""
                          srcSet="/images/browse-1-682e2464.avif 2813w"
                          sizes="(max-width: 2813px) 100vw, 2813px"
                          src="/images/browse-1-682e2464.avif"
                          loading="lazy"
                        />
                      </LightboxLink>
                    </div>
                    <div className="indigo-slide not-indigo w-slide">
                      <LightboxLink
                        className="w-inline-block w-lightbox"
                        items={[
                          {
                            url: "/images/new-artura-search-results.png",
                            width: 2813,
                            height: 1681,
                          },
                        ]}
                      >
                        <img
                          className="image-16"
                          alt=""
                          srcSet="/images/new-artura-search-results.avif 2813w"
                          sizes="(max-width: 2813px) 100vw, 2813px"
                          src="/images/new-artura-search-results.avif"
                          loading="lazy"
                        />
                      </LightboxLink>
                    </div>
                    <div className="indigo-slide not-indigo w-slide">
                      <LightboxLink
                        className="w-inline-block w-lightbox"
                        items={[
                          {
                            url: "/images/new-africa-browse.png",
                            width: 2813,
                            height: 1681,
                          },
                        ]}
                      >
                        <img
                          className="image-17"
                          alt=""
                          srcSet="/images/new-africa-browse.avif 2813w"
                          sizes="(max-width: 2813px) 100vw, 2813px"
                          src="/images/new-africa-browse.avif"
                          loading="lazy"
                        />
                      </LightboxLink>
                    </div>
                    <div className="indigo-slide not-indigo w-slide">
                      <LightboxLink
                        className="w-inline-block w-lightbox"
                        items={[
                          {
                            url: "/images/new-artura-exhibition.png",
                            width: 2813,
                            height: 1681,
                          },
                        ]}
                      >
                        <img
                          className="image-18"
                          alt=""
                          srcSet="/images/new-artura-exhibition.avif 2813w"
                          sizes="(max-width: 2813px) 100vw, 2813px"
                          src="/images/new-artura-exhibition.avif"
                          loading="lazy"
                        />
                      </LightboxLink>
                    </div>
                  </Slider>
                </div>
              </TabPane>
              <TabPane tab="Before" className="w-tab-pane">
                <div className="hero-wrapper vertical-wrap">
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
                            url: "https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg",
                            width: 150,
                            height: 150,
                          },
                        ]}
                      >
                        <img
                          className="image-11"
                          alt=""
                          srcSet="/images/old-artura-1.avif 2813w"
                          sizes="100vw"
                          src="/images/old-artura-1.avif"
                          loading="lazy"
                        />
                      </LightboxLink>
                    </div>
                    <div className="indigo-slide not-indigo w-slide">
                      <LightboxLink
                        className="w-inline-block w-lightbox"
                        items={[
                          {
                            url: "/images/old-artura-2.png",
                            width: 2813,
                            height: 1681,
                          },
                        ]}
                      >
                        <img
                          className="image-12"
                          alt=""
                          srcSet="/images/old-artura-2.avif 2813w"
                          sizes="100vw"
                          src="/images/old-artura-2.avif"
                          loading="lazy"
                        />
                      </LightboxLink>
                    </div>
                    <div className="indigo-slide not-indigo w-slide">
                      <LightboxLink
                        className="w-inline-block w-lightbox"
                        items={[
                          {
                            url: "/images/old-artura-3.png",
                            width: 2813,
                            height: 1681,
                          },
                        ]}
                      >
                        <img
                          className="image-13"
                          alt=""
                          srcSet="/images/old-artura-3.avif 2813w"
                          sizes="100vw"
                          src="/images/old-artura-3.avif"
                          loading="lazy"
                        />
                      </LightboxLink>
                    </div>
                  </Slider>
                </div>
              </TabPane>
            </div>
          </Tabs>
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
          <div className="hero-wrapper center-align">
            <LightboxLink
              className="lightbox-link-2 w-inline-block w-lightbox"
              items={[
                { url: "/images/team-white.png", width: 1571, height: 1248 },
              ]}
            >
              <img
                className="image-6"
                srcSet="/images/team.avif 1433w"
                sizes="(max-width: 1433px) 100vw, 1433px"
                src="/images/team.avif"
                loading="lazy"
                alt=""
              />
            </LightboxLink>
            <div className="hero-split">
              <h1 className="heading-2">Project Kickoff</h1>
              <p className="paragraph">
                I began my journey with Artura.org when the Project Lead
                contracted me and my development team at Levra Labs to execute
                the full redesign and technical overhaul of Artura.org. <br />
                <br />
                At the start of the project, I conducted some initial research
                and discovery, seeking to better understand the{" "}
                <strong>user's expectations </strong>and the{" "}
                <strong>competitive landscape</strong>. <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <h1 className="heading-2">
                Understanding relationships within the art world
              </h1>
              <p className="paragraph">
                In order to better understand the art world and our users'
                mindset, I learned the specific terms and relationships between
                different art objects through discussions with our client and
                explorations of the existing Artura.org website, such as:
                <br />
              </p>
              <ul className="list-2" role="list">
                <li className="paragraph list-item">
                  <strong>Artists‍</strong> can have multiple Artworks
                  <br />
                </li>
                <li className="paragraph list-item">
                  <strong>Exhibitions</strong> can contain Artworks from
                  multiple Artists
                </li>
                <li className="paragraph list-item">
                  Exhibitions can be subsets of one <strong>Collection</strong>{" "}
                  or multiple Collections
                </li>
              </ul>
            </div>
            <LightboxLink
              className="lightbox-link w-inline-block w-lightbox"
              items={[
                { url: "/images/relationships.png", width: 1485, height: 1532 },
              ]}
            >
              <img
                className="image-9"
                srcSet="/images/relationships.avif 1485w"
                sizes="(max-width: 1485px) 100vw, 1485px"
                src="/images/relationships.avif"
                loading="lazy"
                alt=""
              />
            </LightboxLink>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split full-width">
              <h1 className="heading-2">Understanding user expectations</h1>
              <p className="paragraph">
                To gain a better understanding of the project vision, we had a
                few discussions with our client to better understand how users
                might use a website like Artura.org to search for artworks of
                different heritages.
                <br />
                <br />
                To clarify the project vision, we spoke with the client about
                how users might search for artworks by heritage.{" "}
                <strong>
                  As art professionals and enthusiasts themselves, Brandywine
                  Workshop and Archives team members served as valuable user
                  proxies
                </strong>
                .<br />
                <br />
                We found that:
                <br />
              </p>
              <div className="w-layout-grid grid _2-col artura">
                <div
                  className="w-layout-vflex flex-block-3"
                  id="w-node-_0a474b01-74c2-ba73-2b19-52c7da988bcf-475476e2"
                >
                  <h1 className="overline centered">
                    users browse artwork by...
                  </h1>
                  <div className="w-layout-grid findings-grid artura">
                    <p className="paragraph color-background">
                      👩‍🎨
                      <br />
                      Artist
                      <br />
                    </p>
                    <p className="paragraph color-background">
                      🖼️ Exhibition
                      <br />
                    </p>
                    <p className="paragraph color-background">
                      🌎 Heritage
                      <br />
                    </p>
                    <p className="paragraph color-background">
                      🏛️ Collection
                      <br />
                    </p>
                    <p className="paragraph color-background">
                      🖌️Medium
                      <br />
                    </p>
                    <p className="paragraph color-background">
                      💬 Subject
                      <br />
                    </p>
                    <p
                      className="paragraph color-background"
                      id="w-node-_72c86d8b-c644-92f6-bc45-9f4ed06ee1c5-475476e2"
                    >
                      🕰️ <br />
                      Time period
                      <br />
                    </p>
                  </div>
                </div>
                <div className="w-layout-vflex flex-block-2">
                  <h1 className="overline centered">
                    users define artist heritage BASed on...
                  </h1>
                  <ul className="list" role="list">
                    <li className="paragraph list-item">
                      The culture(s) in which the artist grew up
                    </li>
                    <li className="paragraph list-item">
                      The place(s) the artist lived
                    </li>
                    <li className="paragraph list-item">
                      The culture(s) that they felt the strongest connection to
                    </li>
                    <li className="paragraph">
                      The culture(s) that influenced their artwork
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <h1 className="heading-2">
                Drawing inspiration from similar search experiences
              </h1>
              <p className="paragraph">
                We studied similar apps that are known for their excellent
                search interface and/or user experience. <br />
                <br />
                We asked: What makes their search experience great?
                <br />
              </p>
              <p className="paragraph solution">
                Spotify and Apple Music rely on<strong> keyword search </strong>
                and<strong> personalized algorithms </strong>to deliver relevant
                results, minimizing the need for advanced search filters.
              </p>
              <p className="paragraph solution">
                IMDB provides both keyword and <strong>advanced search</strong>,
                allowing users to build detailed queries and create custom
                lists. Unlike platforms with smarter search algorithms, IMDB
                relies on advanced search to help users find and filter for more
                specific content (e.g. "horror movies from the 80's starring
                Jack Nicholson").
              </p>
            </div>
            <Slider
              className="slider w-slider"
              maskClassName="mask w-slider-mask"
              leftIconClassName="w-icon-slider-left"
              rightIconClassName="w-icon-slider-right"
              navClassName="w-slider-nav w-shadow w-round"
              duration={500}
            >
              <div className="w-slide">
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[
                    {
                      url: "/images/spotify-with-caption.png",
                      width: 918,
                      height: 1397,
                    },
                    {
                      url: "/images/spotify-with-caption-682e65aa.png",
                      width: 918,
                      height: 1611,
                    },
                    {
                      url: "/images/imdb-with-caption.png",
                      width: 918,
                      height: 1397,
                    },
                  ]}
                >
                  <img
                    srcSet="/images/apple-music.avif 918w"
                    sizes="100vw"
                    src="/images/apple-music.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
                <p className="paragraph caption">
                  Apple Music keeps its search simple — it only offers keyword
                  search, which returns all relevant results by category. <br />
                </p>
              </div>
              <div className="w-slide">
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[
                    {
                      url: "/images/spotify-with-caption-682e65aa.png",
                      width: 918,
                      height: 1611,
                    },
                    {
                      url: "/images/imdb-with-caption.png",
                      width: 918,
                      height: 1397,
                    },
                    {
                      url: "/images/spotify-with-caption.png",
                      width: 918,
                      height: 1397,
                    },
                  ]}
                >
                  <img
                    srcSet="/images/spotify.avif 918w"
                    sizes="100vw"
                    src="/images/spotify.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
                <p className="paragraph caption">
                  Spotify also offers keyword search, allowing users to further
                  filter the results by category as needed.
                  <br />
                </p>
              </div>
              <div className="w-slide">
                <LightboxLink
                  className="w-inline-block w-lightbox"
                  items={[
                    {
                      url: "/images/imdb-with-caption.png",
                      width: 918,
                      height: 1397,
                    },
                    {
                      url: "/images/spotify-with-caption.png",
                      width: 918,
                      height: 1397,
                    },
                    {
                      url: "/images/spotify-with-caption-682e65aa.png",
                      width: 918,
                      height: 1611,
                    },
                  ]}
                >
                  <img
                    srcSet="/images/imdb.avif 918w"
                    sizes="100vw"
                    src="/images/imdb.avif"
                    loading="lazy"
                    alt=""
                  />
                </LightboxLink>
                <p className="paragraph caption">
                  IMDB has both keyword search and advanced search, allowing
                  users to construct more specific search queries.
                  <br />
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="section less-bottom-padding" data-reveal="">
        <div className="container">
          <div className="hero-wrapper align-middle">
            <div className="hero-split full-width">
              <p className="overline">phase two</p>
              <div className="w-layout-hflex flex-block-5">
                <h1 className="heading-1">Ideation</h1>
                <div className="div-block-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section callout-section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split full-width">
              <div className="hero-split full-width color-background">
                <p className="overline">problem statement</p>
                <h1 className="heading-4">
                  How might we make it easier to discover and explore artworks?
                </h1>
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
                The user stories were developed based on the client's Request
                for Proposal.{" "}
              </p>
            </div>
            <div className="div-block-2">
              <ol className="list-3" role="list">
                <li className="paragraph list-item">
                  As a user, I want to be able to <strong>find </strong>specific
                  artworks, artists, exhibitions, and collections.
                </li>
                <li className="paragraph list-item">
                  As a user, I want to be able to <strong>browse</strong>{" "}
                  artworks and artists by heritage.
                </li>
                <li className="paragraph list-item">
                  As a user, I want to be able to <strong>sign up</strong> for
                  an account and log in.
                </li>
                <li className="paragraph list-item">
                  As a user, I want to browse, view, and explore artworks
                  <strong> on my phone</strong>.
                </li>
                <li className="paragraph list-item">
                  As a user, I want to be able to <strong>save</strong> my
                  favorite artworks, artists, exhibitions, and collections for
                  future reference.
                  <br />
                </li>
                <li className="paragraph list-item">
                  As a user, I want to be able to create{" "}
                  <strong>custom lists</strong> of my favorites.
                  <br />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper vertical-wrap">
            <div className="hero-split full-width">
              <h1 className="heading-2">Site Architecture</h1>
              <p className="paragraph">
                Due to the complex relationships between artworks, artists,
                exhibitions, and collections, I found it necessary to create a
                site architecture diagram to map out how all features and user
                stories would be included in the final site's information
                architecture.
              </p>
            </div>
            <LightboxLink
              className="w-inline-block w-lightbox"
              items={[
                {
                  url: "/images/site-architecture.png",
                  width: 2522,
                  height: 1403,
                },
              ]}
            >
              <img
                srcSet="/images/site-architecture.avif 2522w"
                sizes="100vw"
                src="/images/site-architecture.avif"
                loading="lazy"
                alt=""
              />
            </LightboxLink>
          </div>
        </div>
      </section>
      <section className="section less-bottom-padding" data-reveal="">
        <div className="container">
          <div className="hero-wrapper align-middle">
            <div className="hero-split full-width">
              <p className="overline">phase three</p>
              <div className="w-layout-hflex flex-block-5">
                <h1 className="heading-1">Design</h1>
                <div className="div-block-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section less-bottom-padding" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split full-width">
              <h1 className="heading-2">Searching &amp; Filtering</h1>
              <p className="paragraph">
                As one of the key features of Artura.org, the search and filter
                functionality posed an interesting challenge. We realized that
                there were a few different reasons why someone might be using
                the search function on Artura.org.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section slider-section" data-reveal="">
        <div className="container">
          <Slider
            className="slider-2 w-slider"
            maskClassName="w-slider-mask"
            leftIconClassName="icon w-icon-slider-left"
            rightIconClassName="icon-2 w-icon-slider-right"
            navClassName="w-slider-nav w-slider-nav-invert w-shadow w-round"
            duration={500}
          >
            <div className="w-slide">
              <div className="hero-wrapper slider-wrapper">
                <div className="hero-split full-width">
                  <h1 className="overline">
                    Use Case #1: finding a specific item
                  </h1>
                  <p className="paragraph">
                    The user knows exactly what they are looking for — they have
                    a clear idea of a specific artwork, artist, exhibition, or
                    collection they want to find and remember the name of that
                    item.
                  </p>
                  <p className="paragraph solution">
                    <strong>Keyword search best fits this use case. </strong>
                    Like Spotify’s results page, search results are grouped by
                    category (Artworks, Artists, Exhibitions, Collections),
                    helping users quickly find specific items.
                  </p>
                </div>
                <img
                  className="image-19"
                  srcSet="/images/keyword-search-2.avif 2813w"
                  sizes="(max-width: 2813px) 100vw, 2813px"
                  src="/images/keyword-search-2.avif"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
            <div className="w-slide">
              <div className="hero-wrapper slider-wrapper">
                <div className="hero-split full-width">
                  <h1 className="overline">Use Case #2: browsing</h1>
                  <p className="paragraph">
                    The user is just browsing and doesn’t have a specific
                    artwork in mind. They want to discover new artworks or
                    artists, typically within some larger category.
                  </p>
                  <p className="paragraph solution">
                    <strong>
                      A “Browse Categories” page suited this use case well.{" "}
                    </strong>
                    Inspired by Spotify and Apple Music’s “Explore” pages, we
                    let users browse artworks and artists by region and
                    heritage.
                  </p>
                </div>
                <img
                  className="image-20"
                  srcSet="/images/browse-1.avif 2813w"
                  sizes="(max-width: 2813px) 100vw, 2813px"
                  src="/images/browse-1.avif"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
            <div className="w-slide">
              <div className="hero-wrapper slider-wrapper">
                <div className="hero-split full-width">
                  <h1 className="overline">
                    Use Case #3: browsing <em>and</em> filtering
                  </h1>
                  <p className="paragraph">
                    The user is looking for specific artworks and artists that
                    fit a certain criteria. They may not have a specific artwork
                    in mind, but they would like to look at a smaller subset of
                    art.
                  </p>
                  <p className="paragraph solution">
                    <strong>
                      An advanced search and filtering page was the best fit for
                      this use case.
                    </strong>{" "}
                    Inspired by IMDB’s approach, we kept it separate from
                    keyword search to avoid user confusion.
                  </p>
                </div>
                <img
                  className="image-21"
                  srcSet="/images/filter-search-1.avif 2813w"
                  sizes="(max-width: 2813px) 100vw, 2813px"
                  src="/images/filter-search-1.avif"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split full-width">
              <h1 className="heading-2">Advanced Search Iterations</h1>
              <p className="paragraph">
                We created many different iterations of the Advanced Search page
                based on client feedback and design research. Conversations with
                our client helped us{" "}
                <strong>prioritize which categories</strong> to use as filters,
                and we experimented with{" "}
                <strong>different layouts for the filter panel</strong>.
              </p>
              <p className="paragraph">
                One key design decision we had to make was whether to use{" "}
                <strong>interactive filtering </strong>or
                <strong> batch filtering</strong> for the advanced search
                feature.{" "}
              </p>
              <div className="w-layout-grid grid-6">
                <div
                  className="w-layout-vflex flex-block-6"
                  id="w-node-_047ce7ab-f647-9cce-bada-f6f095aec7a9-475476e2"
                >
                  <h1 className="overline">interactive filtering</h1>
                  <p className="paragraph">
                    The system starts by displaying a large list of results to
                    the user, and this list of results is updated dynamically{" "}
                    <strong>
                      as soon as the user makes a new filter selection
                    </strong>
                    .
                  </p>
                </div>
                <div className="w-layout-vflex flex-block-7">
                  <h1 className="overline">batch filtering</h1>
                  <p className="paragraph">
                    No results are shown at the start, and the system{" "}
                    <strong>
                      waits for the user to finish making all filter selections
                      and press “Submit”
                    </strong>{" "}
                    before displaying results.
                  </p>
                </div>
              </div>
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  {
                    url: "/images/filtering-matrix.png",
                    width: 4542,
                    height: 3576,
                  },
                ]}
              >
                <img
                  className="image-22"
                  srcSet="/images/filtering-matrix-transparent.avif 4128w"
                  sizes="100vw"
                  src="/images/filtering-matrix-transparent.avif"
                  loading="lazy"
                  alt=""
                />
              </LightboxLink>
              <p className="paragraph">
                <a
                  className="link"
                  href="https://www.nngroup.com/articles/applying-filters/"
                  target="_blank"
                >
                  Research from the Nielsen-Norman Group
                </a>{" "}
                finds that{" "}
                <strong>
                  users who already have multiple filter criteria in mind
                  benefit the most from batch filtering,{" "}
                </strong>
                and users who do not have a clear search goal benefit the most
                from interactive filtering.<strong> </strong>After finding that
                our users typically already have some criteria in mind when
                searching, we chose to pursue a <strong>batch filtering</strong>{" "}
                approach for the Advanced Search page.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split">
              <h1 className="heading-2">Browsing by Heritage</h1>
              <p className="paragraph">
                We had many discussions with the members of Brandywine Workshop
                and Archives to determine the relationships between artists,
                artworks, and heritages. We formed two key conclusions that
                shaped the design of the Browse page:
              </p>
              <ol className="list-4" role="list">
                <li className="paragraph list-item">
                  <strong>
                    The definition of heritage should be as flexible as possible
                  </strong>
                  , and artists should be free to choose however many and
                  whichever heritages to identify with. This means that{" "}
                  <strong>artists can have multiple heritages</strong>, and we
                  would no longer make a distinction between nationality and
                  heritage (which we used to do in the original Artura.org
                  website).
                  <br />
                </li>
                <li className="paragraph list-item">
                  This flexibility also has to be balanced with{" "}
                  <strong>users' need</strong>
                  <strong> to easily find and browse by heritage</strong>. This
                  means that there needs to be some standardization of heritage
                  names (e.g. grouping different spellings of "Chicano" into one
                  heritage category). We also added{" "}
                  <strong>"macro-heritages" or geographic regions</strong> —
                  this lets users discover related artists even if heritage
                  labels differ (e.g. the "Asia" macroheritage would include
                  both an "East Asian" artist and a "Japanese" artist). <br />
                </li>
              </ol>
            </div>
            <LightboxLink
              className="lightbox-link-3 w-inline-block w-lightbox"
              items={[
                { url: "/images/browse-2.png", width: 2880, height: 2768 },
              ]}
            >
              <img
                className="image-8"
                srcSet="/images/browse-2.avif 2880w"
                sizes="100vw"
                src="/images/browse-2.avif"
                loading="lazy"
                alt=""
              />
            </LightboxLink>
          </div>
        </div>
      </section>
      <section className="section" data-reveal="">
        <div className="container gap">
          <div className="hero-wrapper center-align">
            <div className="hero-split">
              <h1 className="heading-2">The Final Product</h1>
              <p className="paragraph">
                A modernized Artura.org website and mobile app with enhanced
                search, user accounts, and tools for saving personalized
                collections.
                <br />
              </p>
              <div className="w-layout-hflex flex-block-4">
                <a
                  className="button-primary w-button ix-press"
                  href="https://artura.org/"
                  target="_blank"
                >
                  artura.org
                </a>
                <a
                  className="button-primary-2 w-button ix-press"
                  href="https://play.google.com/store/apps/details?id=com.artura.android&hl=en_US"
                  target="_blank"
                >
                  google play app
                </a>
              </div>
            </div>
            <div className="div-block-3">
              <div
                className="w-video w-embed"
                style={{ paddingTop: "50.638297872340424%" }}
              >
                <iframe
                  className="embedly-embed"
                  src="https://player.vimeo.com/video/1085165269?h=78c0a3e2c6&app_id=122963"
                  width={940}
                  height={476}
                  scrolling="no"
                  allowFullScreen
                  title="Artura Walkthrough"
                  allow="autoplay; fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </div>
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
                    url: "/images/new-artura-artwork.png",
                    width: 2813,
                    height: 1641,
                  },
                ]}
              >
                <img
                  className="image-10"
                  alt=""
                  srcSet="/images/new-artura-artwork.avif 2813w"
                  sizes="(max-width: 2813px) 100vw, 2813px"
                  src="/images/new-artura-artwork.avif"
                  loading="lazy"
                />
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  { url: "/images/browse-1.png", width: 2813, height: 1681 },
                ]}
              >
                <img
                  className="image-14"
                  alt=""
                  srcSet="/images/browse-1-682e2464.avif 2813w"
                  sizes="(max-width: 2813px) 100vw, 2813px"
                  src="/images/browse-1-682e2464.avif"
                  loading="lazy"
                />
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  {
                    url: "/images/new-artura-search-results.png",
                    width: 2813,
                    height: 1681,
                  },
                ]}
              >
                <img
                  className="image-16"
                  alt=""
                  srcSet="/images/new-artura-search-results.avif 2813w"
                  sizes="(max-width: 2813px) 100vw, 2813px"
                  src="/images/new-artura-search-results.avif"
                  loading="lazy"
                />
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  {
                    url: "/images/new-africa-browse.png",
                    width: 2813,
                    height: 1681,
                  },
                ]}
              >
                <img
                  className="image-17"
                  alt=""
                  srcSet="/images/new-africa-browse.avif 2813w"
                  sizes="(max-width: 2813px) 100vw, 2813px"
                  src="/images/new-africa-browse.avif"
                  loading="lazy"
                />
              </LightboxLink>
            </div>
            <div className="indigo-slide not-indigo w-slide">
              <LightboxLink
                className="w-inline-block w-lightbox"
                items={[
                  {
                    url: "/images/new-artura-exhibition.png",
                    width: 2813,
                    height: 1681,
                  },
                ]}
              >
                <img
                  className="image-18"
                  alt=""
                  srcSet="/images/new-artura-exhibition.avif 2813w"
                  sizes="(max-width: 2813px) 100vw, 2813px"
                  src="/images/new-artura-exhibition.avif"
                  loading="lazy"
                />
              </LightboxLink>
            </div>
          </Slider>
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
                We will be conducting plenty of testing before Brandywine
                Workshop and Archives has its official PR launch for Artura.org
                later in 2025.
                <br />
                <br />
                Once the site and app are officially launched, we will be
                actively monitoring <strong>product analytics </strong>and{" "}
                <strong>user behavior</strong> to help us determine next steps
                for the Artura product.
                <br />
                <br />
                We also had some ideas for additional features to incorporate
                into a future iteration of Artura but were unable to add them to
                the current version due to resource constraints, specifically:
              </p>
              <ul className="list-5" role="list">
                <li className="paragraph list-item">
                  Personalized art recommendations based on account activity
                  <br />
                </li>
                <li className="paragraph list-item">
                  Sellers' contact information for each artwork, which would
                  help drive art sales and conversion{" "}
                </li>
                <li className="paragraph list-item">
                  Links to relevant media, interviews, and speaker events
                </li>
              </ul>
            </div>
            <img
              className="image-7"
              srcSet="/images/artura-app.avif 4032w"
              sizes="(max-width: 4032px) 100vw, 4032px"
              src="/images/artura-app.avif"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="section color-section pink" data-reveal="">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-split full-width">
              <h1 className="heading-2">Key Takeaways</h1>
              <div className="w-layout-grid grid-4">
                <p
                  className="overline"
                  id="w-node-bad35296-6f46-1998-4529-b38123d24729-475476e2"
                >
                  Collaborate with developers early in the process
                </p>
                <p className="paragraph">
                  Given the scope of the redesign and large technical overhaul,
                  <strong>
                    {" "}
                    it was critical for developers to be part of the
                    conversation early on
                  </strong>{" "}
                  in the product design &amp; planning process. Understanding
                  the data structures and relationships provided helpful design
                  constraints. It also made the developer handoff process much
                  smoother, as the developers were already somewhat familiar
                  with the system and designs.
                  <br />
                </p>
                <p className="overline">always prepare a proposal</p>
                <p className="paragraph">
                  Given the project’s complexity, we had many in-depth
                  discussions with our team and stakeholders around technical
                  and visual decisions. When working with high-level
                  stakeholders,{" "}
                  <strong>coming prepared with clear proposals</strong>—rather
                  than open-ended questions—helped focus conversations and drive
                  productive outcomes.
                </p>
                <p className="overline">
                  start with a mobile-first design approach
                </p>
                <p className="paragraph">
                  In hindsight, I should have
                  <strong> prioritized mobile designs</strong> earlier in the
                  design process. Starting with mobile always ensures more
                  efficient layouts due to limited screen space. Because this
                  was a desktop-first redesign, I focused on desktop initially,
                  which made adapting to mobile more challenging later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
