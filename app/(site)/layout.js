import Script from "next/script";

export default function SiteLayout({ children }) {
  return (
    <div className="font-heading-instumentsans-semibold">
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/all.min.css" />
      <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/css/progressbar.css" />
      <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/master-branding-agency.css" />
      <link rel="stylesheet" href="/assets/css/contact-overrides.css?v=6" />
      
      {children}

      <footer className="footer-area section-style pb-0 startupgrow-unified-footer">
        <div className="container large">
          <div className="footer-area-inner section-spacing-top">
            <div className="footer-widget-wrapper">
              <div className="footer-logo">
                <a href="/"><span className="startupgrow-wordmark light">STARTUPGROW</span></a>
              </div>
            </div>
            <div className="footer-widget-wrapper">
              <h2 className="title">Service</h2>
              <ul className="footer-nav-list">
                <li><a href="/services">SEO</a></li>
                <li><a href="/services">PPC Advertising</a></li>
                <li><a href="/services">Social Media Marketing</a></li>
                <li><a href="/services">Content Marketing</a></li>
                <li><a href="/services">Email Marketing</a></li>
                <li><a href="/services">Web Design &amp; Development</a></li>
              </ul>
            </div>
            <div className="footer-widget-wrapper">
              <h2 className="title">Company</h2>
              <ul className="footer-nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/about">Objective</a></li>
                <li><a href="/works">Project Scope</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-widget-wrapper newsletter">
              <h2 className="title">Abstract</h2>
              <div className="newsletter-text">
                <p className="text">
                  StartupGrow is a web-based digital solutions platform that helps startups build their online presence
                  through web development and marketing services.
                </p>
              </div>
              <form action="#" className="subscribe-form">
                <div className="input-field">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit" className="subscribe-btn">
                    <img src="/assets/imgs/icon/arrow-light.webp" alt="icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container large">
            <div className="copyright-area-inner">
              <p className="text">© 2026 STARTUPGROW – Academic Innovation Project for Indian Startups</p>
            </div>
          </div>
        </div>
      </footer>

      <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/counter.js" strategy="afterInteractive" />
      <Script src="/assets/js/progressbar.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/ScrollToPlugin.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/backToTop.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
      <Script src="/assets/js/error-handling.js" strategy="afterInteractive" />
      <Script src="/assets/js/offcanvas.js" strategy="afterInteractive" />
    </div>
  );
}
