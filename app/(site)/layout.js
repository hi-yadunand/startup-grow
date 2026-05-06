"use client";

import Script from "next/script";

export default function SiteLayout({ children }) {
  return (
    <>
      {/* CSS Assets */}
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/all.min.css" />
      <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/css/progressbar.css" />
      <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/master-branding-agency.css" />

      {/* Preloader */}
      <div id="preloader">
        <div id="container" className="container-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text="S" className="characters">S</span>
              <span data-text="T" className="characters">T</span>
              <span data-text="A" className="characters">A</span>
              <span data-text="R" className="characters">R</span>
              <span data-text="T" className="characters">T</span>
              <span data-text="U" className="characters">U</span>
              <span data-text="P" className="characters">P</span>
            </div>
          </div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      </div>

      {/* Cursor Animation */}
      <div className="cursor1"></div>
      <div className="cursor2"></div>

      {/* Scroll to top */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>

      {/* offcanvas start */}
      <div className="offcanvas-3__area">
        <div className="offcanvas-3__inner">
          <div className="offcanvas-3__meta-wrapper">
            <div>
              <button id="close_offcanvas" className="close-button close-offcanvas" onClick={() => { if(window.hideCanvas3) window.hideCanvas3(); }}>
                <span></span>
                <span></span>
              </button>
            </div>
            <div>
              <div className="offcanvas-3__meta mb-145 d-none d-md-block">
                <ul>
                  <li><a href="mailto:contact@startupgrow.com">contact@startupgrow.com</a></li>
                  <li><a href="#">India</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="offcanvas-3__menu-wrapper">
            <nav className="nav-menu offcanvas-3__menu">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* offcanvas end */}

      {/* Header area start */}
      <header className="header-area">
        <div className="container large">
          <div className="header-area__inner">
            <div className="header__logo">
              <a href="/" style={{ fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
                StartupGrow
              </a>
            </div>
            <div className="header__nav pos-center">
              <nav className="main-menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="header__button">
              <div className="wc-btn-group">
                <a className="wc-btn wc-btn-primary" href="/contact">Get started</a>
              </div>
            </div>
            <div className="header__navicon d-xl-none">
              <button onClick={() => { if(window.showCanvas3) window.showCanvas3(); }} className="open-offcanvas">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Header area end */}

      <div className="has-smooth" id="has_smooth"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="body-wrapper body-branding-agency">
            <div className="overlay-switcher-close"></div>

            <main>
              {children}
            </main>

            {/* footer area start */}
            <footer className="footer-area section-style pb-0">
              <div className="container large">
                <div className="footer-area-inner section-spacing-top">
                  <div className="footer-widget-wrapper">
                    <div className="footer-logo">
                      <a href="/" style={{ fontSize: "28px", fontWeight: "bold", color: "#fff" }}>StartupGrow</a>
                    </div>
                  </div>
                  <div className="footer-widget-wrapper">
                    <h2 className="title">Services</h2>
                    <ul className="footer-nav-list">
                      <li><a href="/services">Web Design & Dev</a></li>
                      <li><a href="/services">SEO</a></li>
                      <li><a href="/services">Social Media</a></li>
                      <li><a href="/services">Content Marketing</a></li>
                    </ul>
                  </div>
                  <div className="footer-widget-wrapper">
                    <h2 className="title">Company</h2>
                    <ul className="footer-nav-list">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="footer-widget-wrapper newsletter">
                    <h2 className="title">Contact</h2>
                    <div className="newsletter-text">
                      <p className="text">Ready to build a strong online presence? We are here to help Indian startups grow.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright-area">
                <div className="container large">
                  <div className="copyright-area-inner">
                    <p className="text">© 2024-25 StartupGrow | Digital Solutions Platform</p>
                  </div>
                </div>
              </div>
            </footer>
            {/* footer area end */}
          </div>
        </div>
      </div>

      {/* Scripts */}
      <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/counter.js" strategy="lazyOnload" />
      <Script src="/assets/js/progressbar.js" strategy="lazyOnload" />
      <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/ScrollToPlugin.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/SplitText.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/backToTop.js" strategy="lazyOnload" />
      <Script src="/assets/js/error-handling.js" strategy="lazyOnload" />
      <Script src="/assets/js/offcanvas.js" strategy="lazyOnload" />
      
      {/* Main JS Needs to run last */}
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
    </>
  );
}
