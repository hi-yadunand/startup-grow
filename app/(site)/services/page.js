export default function ServicesPage() {
  return (
    <>
      <section className="hero-area">
        <div className="container large">
          <div className="hero-area-inner pb-0">
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h1 className="section-title large has_fade_anim">
                    Our Core Services
                  </h1>
                </div>
              </div>
              <div className="content-last">
                <div className="subtitle-wrapper has_fade_anim" data-fade-from="right">
                  <span className="section-subtitle has-right-line">What we offer</span>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim" data-fade-from="left">
                    StartupGrow acts as a one-stop solution where startups can access all digital services in one place. We offer affordable and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-area section-style section-item">
        <div className="container large">
          <div className="service-area-inner section-spacing">
            <div className="services-wrapper-box">
              <div className="services-wrapper">
                <div className="has_fade_anim" data-delay="0.15">
                  <a href="/contact">
                    <div className="service-box">
                      <span className="number">01</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-1-light.webp" alt="icon" /></div>
                      <div className="content">
                        <h3 className="title">Search Engine Optimisation (SEO)</h3>
                        <p className="text">Improve website ranking on search engines to increase traffic.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="has_fade_anim" data-delay="0.30">
                  <a href="/contact">
                    <div className="service-box">
                      <span className="number">02</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-2-light.webp" alt="icon" /></div>
                      <div className="content">
                        <h3 className="title">Pay-Per-Click Advertising (PPC)</h3>
                        <p className="text">Run paid ads on platforms like Google and Instagram.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="has_fade_anim" data-delay="0.45">
                  <a href="/contact">
                    <div className="service-box">
                      <span className="number">03</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-3-light.webp" alt="icon" /></div>
                      <div className="content">
                        <h3 className="title">Social Media Marketing</h3>
                        <p className="text">Manage social media accounts and content.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="has_fade_anim" data-delay="0.60">
                  <a href="/contact">
                    <div className="service-box">
                      <span className="number">04</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-4-light.webp" alt="icon" /></div>
                      <div className="content">
                        <h3 className="title">Content Marketing</h3>
                        <p className="text">Create blogs, videos, and posts to attract users.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="has_fade_anim" data-delay="0.75">
                  <a href="/contact">
                    <div className="service-box">
                      <span className="number">05</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-1-light.webp" alt="icon" /></div>
                      <div className="content">
                        <h3 className="title">Email Marketing</h3>
                        <p className="text">Send promotional emails and campaigns.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="has_fade_anim" data-delay="0.90">
                  <a href="/contact">
                    <div className="service-box">
                      <span className="number">06</span>
                      <div className="icon"><img src="/assets/imgs/icon/icon-s-2-light.webp" alt="icon" /></div>
                      <div className="content">
                        <h3 className="title">Web Design & Development</h3>
                        <p className="text">Build websites that convert visitors into customers.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="info-text has_fade_anim" data-fade-from="left">
              <p className="text">Currently, startups depend on multiple service providers, which increases cost and confusion. StartupGrow provides all services in one platform! <br /><br /><a className="wc-btn wc-btn-underline" href="/contact">Contact us now</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
