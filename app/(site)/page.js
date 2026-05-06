export default function HomePage() {
  return (
    <>
      {/* hero area start */}
      <section className="hero-area section-item">
        <div className="area-bg">
          <img src="/assets/imgs/gallery/img-s-33.webp" alt="image" />
        </div>
        <div className="container large">
          <div className="hero-area-inner">
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h1 className="section-title has_char_anim" data-delay="0.15" data-translatex="50">
                    Digital <br />
                    Solutions <span className="has_fade_anim" data-fade-from="left" data-delay="1">For</span>
                    <br />Startups
                  </h1>
                </div>
              </div>
              <div className="video-wrapper has_fade_anim" data-ease="power3.out">
                <div className="thumb p-relative">
                  <img src="/assets/imgs/gallery/img-s-32.webp" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="about-area">
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
                      StartupGrow is a digital solutions platform designed to help Indian startups build a strong online presence. We make digital growth simple, affordable, and effective.
                    </p>
                  </div>
                  <div className="btn-wrapper has_fade_anim" data-fade-from="left">
                    <div className="wc-btn-group">
                      <a className="wc-btn wc-btn-circle" href="/contact"><i className="fa-solid fa-arrow-right"></i></a>
                      <a className="wc-btn wc-btn-primary" href="/contact">Get started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service area start */}
      <section className="service-area section-style section-item">
        <div className="container large">
          <div className="service-area-inner section-spacing">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title has_fade_anim">Core Services We Provide</h2>
                </div>
              </div>
            </div>
            <div className="services-wrapper-box">
              <div className="services-wrapper">
                <div className="has_fade_anim" data-delay="0.15">
                  <a href="/services">
                    <div className="service-box">
                      <span className="number">01</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-1-light.webp" alt="service icon" /></div>
                      <div className="content">
                        <h3 className="title">Web Development</h3>
                        <p className="text">Build professional websites that convert visitors into customers easily.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="has_fade_anim" data-delay="0.30">
                  <a href="/services">
                    <div className="service-box">
                      <span className="number">02</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-2-light.webp" alt="service icon" /></div>
                      <div className="content">
                        <h3 className="title">SEO & PPC</h3>
                        <p className="text">Improve website ranking on search engines and run paid ads on Google.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="has_fade_anim" data-delay="0.45">
                  <a href="/services">
                    <div className="service-box">
                      <span className="number">03</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-3-light.webp" alt="service icon" /></div>
                      <div className="content">
                        <h3 className="title">Social Media</h3>
                        <p className="text">Manage social media accounts and content to attract maximum users.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team area start */}
      <section className="team-area section-style section-item">
        <div className="container large">
          <div className="team-area-inner section-spacing">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title has_fade_anim">The Team Behind StartupGrow</h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p className="text has_fade_anim">Our dedication and commitment to excellence ensure that your startup thrives in the ever-evolving digital realm.</p>
              </div>
            </div>
            <div className="team-wrapper-box">
              <div className="team-wrapper">
                <div className="team-box">
                  <div className="thumb"><img src="/assets/imgs/team/img-s-15.webp" alt="team image" /></div>
                  <div className="content">
                    <div className="top">
                      <h3 className="name">Yadunand Pavithran</h3>
                      <p className="post">Team Member</p>
                    </div>
                  </div>
                </div>
                <div className="team-box">
                  <div className="thumb"><img src="/assets/imgs/team/img-s-16.webp" alt="team image" /></div>
                  <div className="content">
                    <div className="top">
                      <h3 className="name">Nashid Nihal C</h3>
                      <p className="post">Team Member</p>
                    </div>
                  </div>
                </div>
                <div className="team-box">
                  <div className="thumb"><img src="/assets/imgs/team/img-s-17.webp" alt="team image" /></div>
                  <div className="content">
                    <div className="top">
                      <h3 className="name">Gokul Krishna</h3>
                      <p className="post">Team Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* cta area start */}
      <section className="cta-area section-style section-item">
        <div className="container large">
          <div className="cta-area-inner section-spacing">
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle has_fade_anim">Overcome your challenges</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title has_fade_anim">Let’s grow your startup</h2>
                </div>
              </div>
              <div className="btn-wrapper has_fade_anim">
                <div className="wc-btn-group">
                  <a className="wc-btn wc-btn-primary" href="/contact">Request a Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
