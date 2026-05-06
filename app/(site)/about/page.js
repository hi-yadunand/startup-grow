export default function AboutPage() {
  return (
    <>
      <section className="hero-area">
        <div className="container large">
          <div className="hero-area-inner">
            <div className="section-content">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h1 className="section-title large has_fade_anim">
                    Project Objective & Plan for Indian Startups
                  </h1>
                </div>
              </div>
              <div className="content-last">
                <div className="subtitle-wrapper has_fade_anim" data-fade-from="right">
                  <span className="section-subtitle has-right-line">01. about us</span>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim" data-fade-from="left">
                    The main objective of this project is to design and develop a web-based platform that helps Indian startups grow their business online by providing affordable and scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="awards-area">
        <div className="container">
          <div className="awards-area-inner section-spacing">
            <div className="section-header">
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle has-left-line">02. Problem & Solution</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title has_fade_anim">Solving the digital challenges of modern startups.</h2>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="text-wrapper">
                <p className="text has_fade_anim" data-fade-from="left">
                  <strong>Problem Statement:</strong> Many startups in India face problems such as lack of technical skills, low website traffic, poor marketing strategies, and the high cost of hiring agencies.
                  <br /><br />
                  <strong>Proposed Solution:</strong> StartupGrow solves these problems by providing simple and affordable digital solutions. Our platform allows startups to explore services, request quotes, and build their online presence efficiently.
                </p>
              </div>
            </div>
            <div className="about-thumbs">
              <div className="thumb-first">
                <img src="/assets/imgs/gallery/img-s-3.webp" className="has_fade_anim" data-fade-from="right" alt="image" />
              </div>
              <div className="thumb-second">
                <img src="/assets/imgs/gallery/img-s-4.webp" className="has_fade_anim" data-fade-from="left" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area container-hd">
        <div className="about-area-inner">
          <div className="thumb">
            <img src="/assets/imgs/gallery/img-s-30.webp" alt="gallery image" />
          </div>
          <div className="section-content">
            <div className="bg">
              <img src="/assets/imgs/gallery/img-s-31.webp" alt="image" />
            </div>
            <div className="section-title-wrapper">
              <div className="title-wrapper">
                <h2 className="section-title has_fade_anim">Simple but pro-level platform</h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text has_fade_anim" data-fade-from="left">
                StartupGrow is a simple and practical solution. It combines web development and digital marketing into one platform, helping startups grow faster and more efficiently.
              </p>
            </div>
            <div className="btn-wrapper has_fade_anim" data-ease="bounce">
              <a href="/contact" className="wc-btn wc-btn-primary btn-text-flip">
                <span data-text="Get in touch">Get in touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
