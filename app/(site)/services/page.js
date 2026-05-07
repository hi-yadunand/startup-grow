"use client";
import { useEffect } from "react";

const pageHtml = `<div id="preloader">
    <div id="container" class="container-preloader">
      <div class="animation-preloader">
        <div class="spinner"></div>
        <div class="txt-loading">
          <span data-text="S" class="characters">S</span>
          <span data-text="T" class="characters">T</span>
          <span data-text="A" class="characters">A</span>
          <span data-text="R" class="characters">R</span>
          <span data-text="T" class="characters">T</span>
          <span data-text="U" class="characters">U</span>
          <span data-text="P" class="characters">P</span>
          <span data-text="G" class="characters">G</span>
          <span data-text="R" class="characters">R</span>
          <span data-text="O" class="characters">O</span>
          <span data-text="W" class="characters">W</span>
        </div>
      </div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>
  </div>


  <div class="cursor1"></div>
  <div class="cursor2"></div>


  <div class="progress-wrap">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </div>

  <div class="offcanvas-3__area">
    <div class="offcanvas-3__inner">
      <div class="offcanvas-3__meta-wrapper">
        <div class="">
          <button id="close_offcanvas" class="close-button close-offcanvas" onclick="hideCanvas3()">
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="">
          <div class="offcanvas-3__meta mb-145 d-none d-md-block">
            <ul>
              <li><a href="tel:+91-0000000000" class="unnerline"><u>Contact and Request Module</u></a></li>
              <li><a href="mailto:startupgrow@example.com">startupgrow@example.com</a></li>
              <li><a href="">Digital Solutions <br>
                  for Indian Startups</a></li>
            </ul>
          </div>
          <div class="offcanvas-3__social d-none d-md-block">
            <p class="title">Team Members</p>
            <div class="offcanvas-3__social-links">
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
              <a href=""><i class="fa-brands fa-twitter"></i></a>
              <a href=""><i class="fa-brands fa-dribbble"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas-3__menu-wrapper">
        <nav class="nav-menu offcanvas-3__menu">
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/works">Project Pages</a></li>
            <li><a href="/team">Team Pages</a></li>
            <li><a href="/career">Career Pages</a></li>
            <li><a href="/faq">Faq</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>




  <div class="modal fade" id="search-template" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="search-template" aria-hidden="true">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <form action="#" class="form-search">
            <input type="text" placeholder="Search">
            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>



  <header class="header-area">
    <div class="container large">
      <div class="header-area__inner">
        <div class="header__logo">
          <a href="/">
            <span class="startupgrow-wordmark">STARTUPGROW</span>
          </a>
        </div>
        <div class="header__nav pos-center">
          <nav class="main-menu">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/services">SERVICES</a></li>
              <li class="menu-item-has-children">
                <a href="#">PAGES</a>
                <ul class="dp-menu">
                  <li><a href="/works">Project Pages</a></li>
                  <li><a href="/team">Team Pages</a></li>
                  <li><a href="/career">Career Pages</a></li>
                  <li><a href="/faq">Faq</a></li>
                </ul>
              </li>
              <li><a href="/blog">BLOG</a></li>
              <li><a href="/contact">CONTACT</a></li>
            </ul>
          </nav>
        </div>
        <div class="header__button">
          <a class="wc-btn wc-btn-primary btn-text-flip" href="/contact"><span data-text="Get started">Get
              started</span></a>
        </div>
        <div class="header__navicon d-xl-none">
          <button onclick="showCanvas3()" class="open-offcanvas">
            <i class="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </div>
  </header>


  <div class="has-smooth" id="has_smooth"></div>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div class="body-wrapper body-corporate-agency">


        <div class="overlay-switcher-close"></div>

        <main>


          <section class="hero-area"><div class="container"><div class="hero-area-inner"><div class="section-content"><div class="section-title-wrapper"><div class="title-wrapper"><h1 class="section-title large has_text_move_anim">We make
                        design that
                        lead and
                        grow online.</h1></div></div><div class="text-wrapper"><p class="text has_fade_anim">StartupGrow brings essential digital services into one clear, affordable platform for early-stage Indian startups.</p></div><div class="icon has_fade_anim" data-on-scroll="0"><img class="show-light" src="/assets/imgs/shape/img-s-82.webp" alt="image"><img class="show-dark" src="/assets/imgs/shape/img-s-82-light.webp" alt="image"></div></div><div class="thumb"><img src="/assets/imgs/gallery/img-s-86.webp" class="has_fade_anim" data-fade-offset="0" data-delay="0.45" alt="image"></div></div></div></section>



          <section class="service-area section-spacing"><div class="container"><div class="service-top-wrapper"><div class="section-heading"><h2 class="section-title has_text_move_anim">Six core digital <br>services</h2></div><div class="content"><p class="text has_fade_anim">We bet on brands that shift categories and add value to people's lives; and on founders who are motivated to shape</p></div></div><div class="services-wrapper-box"><div class="services-grid"><div class="service-item has_fade_anim" data-delay="0.15"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-1.webp" alt="service-icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-1-light.webp" alt="service-icon"></div><h2 class="title">Search Engine <br>Optimisation</h2><ul class="service-features"><li>Search ranking</li><li>Keyword research</li><li>Technical SEO</li><li>Local visibility</li><li>Content optimisation</li><li>Traffic growth</li></ul></div><div class="service-item has_fade_anim" data-delay="0.30"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-2.webp" alt="service-icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-2-light.webp" alt="service-icon"></div><h2 class="title">Pay-Per-Click <br>Advertising</h2><ul class="service-features"><li>Google Ads</li><li>Instagram Ads</li><li>Budget planning</li><li>Campaign setup</li><li>Lead targeting</li><li>Performance review</li></ul></div><div class="service-item has_fade_anim" data-delay="0.45"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-3.webp" alt="service-icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-3-light.webp" alt="service-icon"></div><h2 class="title">Social Media <br>Marketing</h2><ul class="service-features"><li>Account setup</li><li>Content calendar</li><li>Reels and posts</li><li>Community replies</li><li>Brand consistency</li><li>Growth reports</li></ul></div><div class="service-item has_fade_anim" data-delay="0.60"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-4.webp" alt="service-icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-4-light.webp" alt="service-icon"></div><h2 class="title">Content <br>Marketing</h2><ul class="service-features"><li>Blog writing</li><li>Video ideas</li><li>Website copy</li><li>Campaign messaging</li><li>Educational posts</li><li>Lead magnets</li></ul></div><div class="service-item has_fade_anim" data-delay="0.75"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-1.webp" alt="service-icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-1-light.webp" alt="service-icon"></div><h2 class="title">Email <br>Marketing</h2><ul class="service-features"><li>Welcome emails</li><li>Promotional campaigns</li><li>Audience segments</li><li>Templates</li><li>Follow-up flows</li><li>Reports</li></ul></div><div class="service-item has_fade_anim" data-delay="0.90"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-2.webp" alt="service-icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-2-light.webp" alt="service-icon"></div><h2 class="title">Web Design and <br>Development</h2><ul class="service-features"><li>Startup websites</li><li>Landing pages</li><li>Responsive design</li><li>Contact forms</li><li>Conversion copy</li><li>Maintenance</li></ul></div></div></div></div></section>



          <section class="about-area container-hd"><div class="about-area-inner"><div class="thumb"><img src="/assets/imgs/gallery/img-s-30.webp" alt="gallery image"></div><div class="section-content"><div class="bg"><img src="/assets/imgs/gallery/img-s-31.webp" alt="image"></div><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_text_move_anim">We’re simple
                      but pro-level
                      agency</h2></div></div><div class="text-wrapper"><p class="text has_fade_anim">Theme Builder, you have complete control over the <span>static elements</span> of your website</p></div><div class="btn-wrapper has_fade_anim" data-ease="bounce"><a href="/contact" class="wc-btn wc-btn-primary btn-text-flip"><span data-text="Learn More">Learn More</span></a></div></div></div></section>



          <section class="pricing-area"><div class="container"><div class="pricing-area-inner section-spacing"><div class="section-header"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_text_move_anim">Special offer! choose
                        your pack today</h2></div></div></div><div class="pricing-wrapper-box"><div class="pricing-wrapper"><div class="pricing-box has_fade_anim" data-delay="0.15"><span class="tag">Basic</span><h3 class="price">$9.00</h3><div class="feature-list"><ul><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">Unlimited cards</li><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">Automated management</li><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">SOX compliance</li></ul></div><a href="/contact" class="wc-btn wc-btn-primary btn-text-flip bordered"><span data-text="Learn More">Learn More</span></a></div><div class="pricing-box has_fade_anim" data-delay="0.30"><span class="tag">Standard</span><h3 class="price">$29.00</h3><div class="feature-list"><ul><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">Unlimited cards</li><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">Automated management</li><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">Enterprise ERP integrations</li></ul></div><a href="/contact" class="wc-btn wc-btn-primary btn-text-flip bordered"><span data-text="Learn More">Learn More</span></a></div><div class="pricing-box has_fade_anim" data-delay="0.45"><span class="tag">Premium</span><h3 class="price">$69.00</h3><div class="feature-list"><ul><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">Unlimited cards</li><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">Unlimited tools</li><li><img class="show-light" src="/assets/imgs/icon/check-2.webp" alt="icon image"><img class="show-dark" src="/assets/imgs/icon/check-2-light.webp" alt="icon image">Local video issuance</li></ul></div><a href="/contact" class="wc-btn wc-btn-primary btn-text-flip bordered"><span data-text="Learn More">Learn More</span></a></div></div></div></div></div></section>



          <section class="contact-area"><div class="container"><div class="contact-area-inner section-spacing"><div class="shape-1"><img src="/assets/imgs/shape/img-s-73.webp" alt="shape"></div><div class="section-content"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_text_move_anim">Start your growth plan
                        with StartupGrow</h2></div></div><div class="btn-wrapper has_fade_anim"><a href="/contact" class="wc-btn wc-btn-underline btn-text-flip"><span data-text="Let’s get in touch">Let’s get in touch</span> <img src="/assets/imgs/icon/arrow-right-half-light.webp" alt="icon image"></a></div></div></div></div></section>


        </main>


        <footer class="footer-area">
          <div class="container">
            <div class="footer-area-inner section-spacing-top">
              <div class="shape-1">
                <img class="show-light" src="/assets/imgs/shape/img-s-33.webp" alt="shape">
                <img class="show-dark" src="/assets/imgs/shape/img-s-33-light.webp" alt="shape">
              </div>
              <div class="section-header">
                <div class="section-title-wrapper">
                  <div class="title-wrapper">
                    <h2 class="section-title has_fade_anim"><span>Get started</span> <br>
                      now</h2>
                  </div>
                </div>
                <div class="text-wrapper">
                  <p class="text has_fade_anim">If your startup needs a website, branding, or digital marketing support, we would love to hear from you!</p>
                </div>
              </div>
              <div class="footer-cta">
                <div class="footer-widget-wrapper">
                  <h2 class="title">Team</h2>
                  <ul class="footer-nav-list">
                    <li>Yadunand Pavithran, <br>
                      Nashith Nihal C</li>
                  </ul>
                </div>
                <div class="footer-widget-wrapper">
                  <h2 class="title">Project</h2>
                  <ul class="footer-nav-list">
                    <li>Gokul Krishna, <br>
                      StartupGrow</li>
                  </ul>
                </div>
                <div class="footer-widget-wrapper newsletter">
                  <form action="#" class="subscribe-form">
                    <div class="input-field">
                      <input type="email" placeholder="Enter your email">
                      <button type="submit" class="subscribe-btn"><img src="/assets/imgs/icon/arrow-light.webp"
                          alt="icon"></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-area">
            <div class="container">
              <div class="copyright-area-inner">
                <div class="copyright-text">
                  <p class="text">© 2026 STARTUPGROW – Academic Innovation Project for Indian Startups</p>
                </div>
                <ul class="footer-nav-list">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>


      </div>
    </div>
  </div>`;

export default function ServicesPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/master-services.css" />
      <link rel="stylesheet" href="/assets/css/contact-overrides.css?v=7" />
      <div
        className={`public-arolax-page font-heading-beatricetrial-regular-2`}
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      />
    </>
  );
}
