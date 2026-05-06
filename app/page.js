import Script from "next/script";

const asset = (path) => `/arolax/assets/${path}`;

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href={asset("css/bootstrap.min.css")} />
      <link rel="stylesheet" href={asset("css/all.min.css")} />
      <link rel="stylesheet" href={asset("css/swiper-bundle.min.css")} />
      <link rel="stylesheet" href={asset("css/progressbar.css")} />
      <link rel="stylesheet" href={asset("css/meanmenu.min.css")} />
      <link rel="stylesheet" href={asset("css/magnific-popup.css")} />
      <link rel="stylesheet" href={asset("css/master-branding-agency.css")} />

      <div className="font-heading-instumentsans-semibold public-arolax-page">
        <div className="cursor1"></div>
        <div className="cursor2"></div>
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
          </svg>
        </div>

        <header className="header-area">
          <div className="container large">
            <div className="header-area__inner">
              <div className="header__logo">
                <a className="startupgrow-wordmark" href="#home" aria-label="StartupGrow home">
                  StartupGrow
                </a>
              </div>
              <div className="header__nav pos-center">
                <nav className="main-menu">
                  <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#services">services</a></li>
                    <li><a href="#works">projects</a></li>
                    <li><a href="#team">team</a></li>
                    <li><a href="#journal">blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div className="header__button">
                <div className="wc-btn-group">
                  <a className="wc-btn wc-btn-circle" href="#contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <a className="wc-btn wc-btn-primary" href="#contact">Get started</a>
                  <a className="wc-btn wc-btn-circle" href="#contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="header__navicon d-xl-none">
                <button className="open-offcanvas" type="button" data-open-canvas aria-label="Open menu">
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="offcanvas-3__area">
          <div className="offcanvas-3__inner">
            <div className="offcanvas-3__meta-wrapper">
              <div>
                <button className="close-button close-offcanvas" type="button" data-close-canvas aria-label="Close menu">
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div>
                <div className="offcanvas-3__meta mb-145 d-none d-md-block">
                  <ul>
                    <li><a href="tel:+919876543210" className="unnerline"><u>+91 98765 43210</u></a></li>
                    <li><a href="mailto:contact@startupgrow.in">contact@startupgrow.in</a></li>
                    <li><a href="#contact">StartupGrow Studio, <br />Kochi, India</a></li>
                  </ul>
                </div>
                <div className="offcanvas-3__social d-none d-md-block">
                  <p className="title">Follow Me</p>
                  <div className="offcanvas-3__social-links">
                    <a href="#contact"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#contact"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#contact"><i className="fa-brands fa-dribbble"></i></a>
                    <a href="#contact"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas-3__menu-wrapper">
              <nav className="nav-menu offcanvas-3__menu">
                <ul>
                  <li><a href="#home">home</a></li>
                  <li><a href="#about">about</a></li>
                  <li><a href="#services">services</a></li>
                  <li><a href="#works">projects</a></li>
                  <li><a href="#team">team</a></li>
                  <li><a href="#journal">blog</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="has-smooth" id="has_smooth"></div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="body-wrapper body-branding-agency">
              <main>
                <section id="home" className="hero-area section-item">
                  <div className="area-bg">
                    <img src={asset("imgs/gallery/img-s-33.webp")} alt="lime green brand background" />
                  </div>
                  <div className="container large">
                    <div className="hero-area-inner">
                      <div className="section-content">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h1 className="section-title has_char_anim" data-delay="0.15" data-translateX="50">
                              We <br />
                              grow <span className="has_fade_anim" data-fade-from="left" data-delay="1">Pro</span>
                              brand
                              Value
                            </h1>
                          </div>
                        </div>
                        <div className="video-wrapper has_fade_anim" data-ease="power3.out">
                          <div className="thumb p-relative">
                            <img src={asset("imgs/gallery/img-s-32.webp")} alt="abstract digital brand system" />
                            <a
                              href="https://crowdytheme.com/assets/wp-content/uploads/2024/06/arolux-branding-agency-video.mp4"
                              className="wc-btn wc-btn-circle video-popup pos-center"
                              aria-label="Play brand film"
                            >
                              <i className="fa-solid fa-play"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="about" className="about-area">
                      <div className="about-area-inner section-spacing-bottom">
                        <div className="section-content">
                          <div className="section-title-wrapper">
                            <div className="subtitle-wrapper">
                              <span className="section-subtitle">Who we are</span>
                            </div>
                          </div>
                          <div className="content-last">
                            <div className="text-wrapper">
                              <p className="text has_text_move_anim">
                                StartupGrow is a full-service digital partner for purpose-driven startups. We build
                                brands that look good, sound clear, and turn early attention into growth.
                              </p>
                            </div>
                            <div className="btn-wrapper has_fade_anim" data-fade-from="left">
                              <div className="wc-btn-group">
                                <a className="wc-btn wc-btn-circle" href="#contact"><i className="fa-solid fa-arrow-right"></i></a>
                                <a className="wc-btn wc-btn-primary" href="#contact">Get started</a>
                                <a className="wc-btn wc-btn-circle" href="#contact"><i className="fa-solid fa-arrow-right"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="works" className="work-area section-style section-item">
                  <div className="container large">
                    <div className="work-area-inner section-spacing">
                      <div className="section-header">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h2 className="section-title has_fade_anim">Selected work</h2>
                          </div>
                        </div>
                      </div>
                      <div className="works-wrapper-box">
                        <div className="works-wrapper">
                          {[
                            ["Fintech MVP", "Website", "Branding", "imgs/works/img-s-31.webp"],
                            ["D2C Food Brand", "Social", "Business", "imgs/works/img-s-32.webp"],
                            ["Edtech Platform", "SEO", "Growth", "imgs/works/img-s-33.webp"],
                            ["Founder Launch", "Identity", "Campaign", "imgs/works/img-s-34.webp"]
                          ].map(([title, tagOne, tagTwo, image]) => (
                            <div className="work-box" key={title}>
                              <div className="thumb">
                                <a href="#contact"><img src={asset(image)} alt={`${title} case study`} /></a>
                              </div>
                              <div className="content">
                                <h3 className="title">{title}</h3>
                                <div className="tags">
                                  <div className="tag">{tagOne}</div>
                                  <div className="tag">{tagTwo}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="section-content section-spacing-top">
                        <div></div>
                        <div className="content-last">
                          <div className="text-wrapper">
                            <p className="text has_text_move_anim">
                              We deliver startup brands with sharp strategy, conversion-focused websites, and campaign
                              systems built by a team that understands early-stage constraints.
                            </p>
                          </div>
                          <div className="btn-wrapper has_fade_anim" data-fade-from="left">
                            <div className="wc-btn-group">
                              <a className="wc-btn wc-btn-circle" href="#works"><i className="fa-solid fa-arrow-right"></i></a>
                              <a className="wc-btn wc-btn-primary" href="#works">View all works</a>
                              <a className="wc-btn wc-btn-circle" href="#works"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="fun-fact-area section-style section-item">
                  <div className="container large">
                    <div className="fun-fact-area-inner section-spacing">
                      <div className="section-header">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h2 className="section-title has_fade_anim">
                              Designing great digital launches is hard. But we make the system simple for every startup.
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="counter-wrapper-box">
                        <div className="counter-box overflow-hidden">
                          <img className="shape-1 show-light img_anim_reveal" src={asset("imgs/shape/img-s-47.webp")} alt="counter shape" />
                          <img className="shape-1 show-dark img_anim_reveal" src={asset("imgs/shape/img-s-47-light.webp")} alt="counter shape" />
                          <h3 className="number wc-counter has_fade_anim" data-fade-from="left">150</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="services" className="service-area section-style section-item">
                  <div className="container large">
                    <div className="service-area-inner section-spacing">
                      <div className="section-header">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h2 className="section-title has_fade_anim">We solve your brand problem in a different method</h2>
                          </div>
                        </div>
                      </div>
                      <div className="services-wrapper-box">
                        <div className="services-wrapper">
                          {[
                            ["01", "Brand Strategy", "We align positioning, market focus, and offer clarity for early-stage teams.", "imgs/icon/icon-s-1-light.webp"],
                            ["02", "Brand Identity", "We create a credible visual system across web, social, and launch materials.", "imgs/icon/icon-s-2-light.webp"],
                            ["03", "Web Development", "We build responsive landing pages and product websites for conversion.", "imgs/icon/icon-s-3-light.webp"],
                            ["04", "Growth Support", "We support SEO, content, social, email, and performance campaigns.", "imgs/icon/icon-s-4-light.webp"]
                          ].map(([number, title, text, icon], index) => (
                            <div className="has_fade_anim" data-delay={`${0.15 * (index + 1)}`} key={title}>
                              <a href="#contact">
                                <div className="service-box">
                                  <span className="number">{number}</span>
                                  <div className="icon"><img src={asset(icon)} alt="service icon" /></div>
                                  <div className="content">
                                    <h3 className="title">{title}</h3>
                                    <p className="text">{text}</p>
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="info-text has_fade_anim" data-fade-from="left">
                        <p className="text">Save your precious time for finding a solution. <br /><a className="wc-btn wc-btn-underline" href="#contact">Contact us now</a></p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="team" className="team-area section-style section-item">
                  <div className="container large">
                    <div className="team-area-inner section-spacing">
                      <div className="section-header">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h2 className="section-title has_fade_anim">The talented team behind the creative design</h2>
                          </div>
                        </div>
                        <div className="text-wrapper">
                          <p className="text has_fade_anim">
                            Our dedication and commitment to excellence help startup teams move confidently in the digital realm.
                          </p>
                        </div>
                      </div>
                      <div className="team-wrapper-box">
                        <div className="team-wrapper">
                          {[
                            ["Yadunand Pavithran", "Project Lead", "imgs/team/img-s-15.webp"],
                            ["Nashid Nihal C", "Growth Strategist", "imgs/team/img-s-16.webp"],
                            ["Gokul Krishna", "Developer", "imgs/team/img-s-17.webp"]
                          ].map(([name, role, image]) => (
                            <div className="team-box" key={name}>
                              <div className="thumb"><a href="#team"><img src={asset(image)} alt={name} /></a></div>
                              <div className="content">
                                <div className="top">
                                  <h3 className="name"><a href="#team">{name}</a></h3>
                                  <p className="post">{role}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="journal" className="blog-area section-style section-item">
                  <div className="container large">
                    <div className="blog-area-inner section-spacing">
                      <div className="section-header">
                        <div className="section-title-wrapper">
                          <div className="title-wrapper">
                            <h2 className="section-title has_fade_anim">Journal from StartupGrow</h2>
                          </div>
                        </div>
                        <div className="btn-wrapper has_fade_anim" data-fade-from="right">
                          <div className="wc-btn-group">
                            <a className="wc-btn wc-btn-circle" href="#journal"><i className="fa-solid fa-arrow-right"></i></a>
                            <a className="wc-btn wc-btn-primary" href="#journal">read all posts</a>
                            <a className="wc-btn wc-btn-circle" href="#journal"><i className="fa-solid fa-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="blogs-wrapper-box">
                        <div className="blogs-wrapper">
                          {[
                            ["A simple guide to launch-ready website positioning", "imgs/blog/img-s-8.webp"],
                            ["How early-stage teams can plan content before launch", "imgs/blog/img-s-9.webp"]
                          ].map(([title, image], index) => (
                            <article className="blog has_fade_anim" data-fade-from="right" data-delay={`${0.15 * (index + 1)}`} key={title}>
                              <div className="thumb"><a href="#journal"><img src={asset(image)} alt={title} /></a></div>
                              <div className="content">
                                <h2 className="title"><a href="#journal">{title}</a></h2>
                                <div className="meta-list">
                                  <a href="#journal"><span className="meta tag">Branding</span></a>
                                  <span className="meta date">06 May 2026</span>
                                </div>
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="contact" className="cta-area section-style section-item">
                  <div className="container large">
                    <div className="cta-area-inner section-spacing">
                      <div className="section-content">
                        <div className="section-title-wrapper">
                          <div className="subtitle-wrapper">
                            <span className="section-subtitle has_fade_anim">Have a project in mind?</span>
                          </div>
                          <div className="title-wrapper">
                            <h2 className="section-title has_fade_anim">Let&apos;s work together</h2>
                          </div>
                        </div>
                        <div className="btn-wrapper has_fade_anim">
                          <div className="wc-btn-group">
                            <a className="wc-btn wc-btn-circle" href="mailto:contact@startupgrow.in"><i className="fa-solid fa-arrow-right"></i></a>
                            <a className="wc-btn wc-btn-primary" href="mailto:contact@startupgrow.in">contact us</a>
                            <a className="wc-btn wc-btn-circle" href="mailto:contact@startupgrow.in"><i className="fa-solid fa-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

              <footer className="footer-area section-style pb-0">
                <div className="container large">
                  <div className="footer-area-inner section-spacing-top">
                    <div className="footer-widget-wrapper">
                      <div className="footer-logo">
                        <a className="startupgrow-wordmark light" href="#home">StartupGrow</a>
                      </div>
                    </div>
                    <div className="footer-widget-wrapper">
                      <h2 className="title">Service</h2>
                      <ul className="footer-nav-list">
                        <li><a href="#services">Web Design</a></li>
                        <li><a href="#services">Branding</a></li>
                        <li><a href="#services">SEO</a></li>
                        <li><a href="#services">Social Media</a></li>
                        <li><a href="#services">Development</a></li>
                      </ul>
                    </div>
                    <div className="footer-widget-wrapper">
                      <h2 className="title">Company</h2>
                      <ul className="footer-nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Agency</a></li>
                        <li><a href="#works">Achievement</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                      </ul>
                    </div>
                    <div className="footer-widget-wrapper newsletter">
                      <h2 className="title">Newsletter</h2>
                      <div className="newsletter-text">
                        <p className="text">Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
                      </div>
                      <form action="#contact" className="subscribe-form">
                        <div className="input-field">
                          <input type="email" placeholder="Enter your email" aria-label="Email address" />
                          <button type="submit" className="subscribe-btn">
                            <img src={asset("imgs/icon/arrow-light.webp")} alt="submit" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="footer-widget-wrapper location">
                      <h2 className="title">Kerala</h2>
                      <ul className="footer-nav-list">
                        <li><a href="#contact">StartupGrow Studio, <br />Kochi</a></li>
                      </ul>
                    </div>
                    <div className="footer-widget-wrapper location">
                      <h2 className="title">India</h2>
                      <ul className="footer-nav-list">
                        <li><a href="#contact">Digital solutions for <br />Indian startups</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="copyright-area">
                  <div className="container large">
                    <div className="copyright-area-inner">
                      <p className="text">© 2026 StartupGrow Agency</p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <Script src={asset("js/jquery-3.6.0.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/bootstrap.bundle.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/jquery.magnific-popup.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/swiper-bundle.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/counter.js")} strategy="afterInteractive" />
      <Script src={asset("js/progressbar.js")} strategy="afterInteractive" />
      <Script src={asset("js/gsap.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/ScrollSmoother.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/ScrollToPlugin.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/ScrollTrigger.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/SplitText.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/jquery.meanmenu.min.js")} strategy="afterInteractive" />
      <Script src={asset("js/backToTop.js")} strategy="afterInteractive" />
      <Script src={asset("js/main.js")} strategy="afterInteractive" />
      <Script src={asset("js/error-handling.js")} strategy="afterInteractive" />
      <Script src={asset("js/offcanvas.js")} strategy="afterInteractive" />
      <Script id="arolax-offcanvas-bind" strategy="afterInteractive">
        {`
          document.addEventListener("click", function(event) {
            if (event.target.closest("[data-open-canvas]") && window.showCanvas3) window.showCanvas3();
            if (event.target.closest("[data-close-canvas]") && window.hideCanvas3) window.hideCanvas3();
          });
        `}
      </Script>
    </>
  );
}
