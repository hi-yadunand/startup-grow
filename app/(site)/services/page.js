
export default function ServicesPage() {
  return (
    <>
      

  
  <div id="preloader">
    <div id="container" className="container-preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text="A" className="characters">A</span>
          <span data-text="R" className="characters">R</span>
          <span data-text="O" className="characters">O</span>
          <span data-text="L" className="characters">L</span>
          <span data-text="A" className="characters">A</span>
          <span data-text="X" className="characters">X</span>
        </div>
      </div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  </div>

  
  <div className="cursor1"></div>
  <div className="cursor2"></div>

  
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
  </div>

  
  <div className="switcher__area">
    <div className="switcher__icon">
      <button id="switcher_open"><i className="fa-solid fa-gear"></i></button>
      <button id="switcher_close"><i className="fa-solid fa-xmark"></i></button>
    </div>
    <div className="switcher__items">
      <div className="switcher__item">
        <div className="switch__title-wrap">
          <p className="switcher__title">mode</p>
        </div>
        <div className="switcher__btn mode-type wc-col-2">
          <button className="active" data-mode="light">light</button>
          <button data-mode="dark">dark</button>
        </div>
      </div>
      <div className="switcher__item">
        <div className="switch__title-wrap">
          <p className="switcher__title">Language Support</p>
        </div>
        <div className="switcher__btn lang_dir wc-col-2">
          <button className="active" data-mode="ltr">LTR</button>
          <button data-mode="rtl">RTL</button>
        </div>
      </div>
      <div className="switcher__item">
        <div className="switch__title-wrap">
          <p className="switcher__title">Layout</p>
        </div>
        <div className="switcher__btn layout-type wc-col-2">
          <button className="active" data-mode="full-width">Full Width</button>
          <button data-mode="box-layout">Box Layout</button>
        </div>
      </div>
      <div className="switcher__item">
        <div className="switch__title-wrap">
          <p className="switcher__title">Cursor</p>
        </div>
        <div className="switcher__btn">
          <select name="cursor-style" id="cursor_style">
            <option value="1">default</option>
            <option selected value="2">animated</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  

  
  <div className="offcanvas-3__area">
    <div className="offcanvas-3__inner">
      <div className="offcanvas-3__meta-wrapper">
        <div className="">
          <button id="close_offcanvas" className="close-button close-offcanvas" onclick="hideCanvas3()">
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="">
          <div className="offcanvas-3__meta mb-145 d-none d-md-block">
            <ul>
              <li><a href="tel:+2-352698102" className="unnerline"><u>+2-352 698 102</u></a></li>
              <li><a href="mailto:contact@me.com">contact@me.com</a></li>
              <li><a href="">27 Division St, <br />
                  New York, NY 10002, USA</a></li>
            </ul>
          </div>
          <div className="offcanvas-3__social d-none d-md-block">
            <p className="title">Follow Me</p>
            <div className="offcanvas-3__social-links">
              <a href=""><i className="fa-brands fa-facebook-f"></i></a>
              <a href=""><i className="fa-brands fa-twitter"></i></a>
              <a href=""><i className="fa-brands fa-dribbble"></i></a>
              <a href=""><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-3__menu-wrapper">
        <nav className="nav-menu offcanvas-3__menu">
          <ul>
            <li><a href="branding-agency.html">home</a></li>
            <li><a href="about.html">about</a></li>
            <li><a href="services.html">services</a></li>
            <li><a href="works.html">projects</a></li>
            <li><a href="team.html">team</a></li>
            <li><a href="career.html">career</a></li>
            <li><a href="faq.html">faq</a></li>
            <li><a href="blog.html">blog</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  


  
  <div className="modal fade" id="search-template" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="search-template" aria-hidden="true">
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <form action="#" className="form-search">
            <input type="text" placeholder="Search" />
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
  

  
  <header className="header-area">
    <div className="container large">
      <div className="header-area__inner">
        <div className="header__logo">
          <a href="branding-agency.html">
            <img className="show-light" src="assets/imgs/logo/logo.png" alt="Site Logo" />
            <img className="show-dark" src="assets/imgs/logo/logo-light.png" alt="Site Logo" />
          </a>
        </div>
        <div className="header__nav pos-center">
          <nav className="main-menu">
            <ul>
              <li><a href="branding-agency.html">home</a></li>
              <li><a href="about.html">about</a></li>
              <li><a href="services.html">services</a></li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="dp-menu">
                  <li><a href="works.html">project pages</a></li>
                  <li><a href="team.html">team pages</a></li>
                  <li><a href="career.html">career pages</a></li>
                  <li><a href="faq.html">faq</a></li>
                </ul>
              </li>
              <li><a href="blog.html">blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="header__button">
          <a className="wc-btn wc-btn-primary btn-text-flip" href="contact.html"><span data-text="Get started">Get
              started</span></a>
        </div>
        <div className="header__navicon d-xl-none">
          <button onclick="showCanvas3()" className="open-offcanvas">
            <i className="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </div>
  </header>
  

  <div className="has-smooth" id="has_smooth"></div>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div className="body-wrapper body-corporate-agency">

        
        <div className="overlay-switcher-close"></div>

        <main>

          
          <section className="hero-area"><div className="container"><div className="hero-area-inner"><div className="section-content"><div className="section-title-wrapper"><div className="title-wrapper"><h1 className="section-title large has_text_move_anim">We make
                        design that
                        lead and
                        inspire.</h1></div></div><div className="text-wrapper"><p className="text has_fade_anim">We take a similar approach to design commercial we do impactfully approache, over the flowchart of user friendly wireframe.</p></div><div className="icon has_fade_anim" data-on-scroll="0"><img className="show-light" src="assets/imgs/shape/img-s-82.webp" alt="image" /><img className="show-dark" src="assets/imgs/shape/img-s-82-light.webp" alt="image" /></div></div><div className="thumb"><img src="assets/imgs/gallery/img-s-86.webp" className="has_fade_anim" data-fade-offset="0" data-delay="0.45" alt="image" /></div></div></div></section>
          

          
          <section className="service-area section-spacing"><div className="container"><div className="service-top-wrapper"><div className="section-heading"><h2 className="section-title has_text_move_anim">Our exclusive <br />services</h2></div><div className="content"><p className="text has_fade_anim">We bet on brands that shift categories and add value to people's lives; and on founders who are motivated to shape</p></div></div><div className="services-wrapper-box"><div className="services-grid"><div className="service-item has_fade_anim" data-delay="0.15"><div className="icon"><img className="show-light" src="assets/imgs/icon/icon-s-1.webp" alt="service-icon" /><img className="show-dark" src="assets/imgs/icon/icon-s-1-light.webp" alt="service-icon" /></div><h2 className="title">Interaction <br /> Design</h2><ul className="service-features"><li>User Interface</li><li>User Experience</li><li>Design System</li><li>Wireframe</li><li>Prototype</li><li>Website & Mobile App</li><li>IOS + Android</li></ul></div><div className="service-item has_fade_anim" data-delay="0.30"><div className="icon"><img className="show-light" src="assets/imgs/icon/icon-s-2.webp" alt="service-icon" /><img className="show-dark" src="assets/imgs/icon/icon-s-2-light.webp" alt="service-icon" /></div><h2 className="title">Branding <br /> Design</h2><ul className="service-features"><li>User Interface</li><li>User Experience</li><li>Design System</li><li>Wireframe</li><li>Prototype</li><li>Website & Mobile App</li><li>IOS + Android</li></ul></div><div className="service-item has_fade_anim" data-delay="0.45"><div className="icon"><img className="show-light" src="assets/imgs/icon/icon-s-3.webp" alt="service-icon" /><img className="show-dark" src="assets/imgs/icon/icon-s-3-light.webp" alt="service-icon" /></div><h2 className="title">Design & <br /> Development</h2><ul className="service-features"><li>User Interface</li><li>User Experience</li><li>Design System</li><li>Wireframe</li><li>Prototype</li><li>Website & Mobile App</li><li>IOS + Android</li></ul></div><div className="service-item has_fade_anim" data-delay="0.60"><div className="icon"><img className="show-light" src="assets/imgs/icon/icon-s-4.webp" alt="service-icon" /><img className="show-dark" src="assets/imgs/icon/icon-s-4-light.webp" alt="service-icon" /></div><h2 className="title">eCommerce <br /> Development</h2><ul className="service-features"><li>User Interface</li><li>User Experience</li><li>Design System</li><li>Wireframe</li><li>Prototype</li><li>Website & Mobile App</li><li>IOS + Android</li></ul></div></div></div></div></section>
          

          
          <section className="about-area container-hd"><div className="about-area-inner"><div className="thumb"><img src="assets/imgs/gallery/img-s-30.webp" alt="gallery image" /></div><div className="section-content"><div className="bg"><img src="assets/imgs/gallery/img-s-31.webp" alt="image" /></div><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_text_move_anim">We’re simple
                      but pro-level
                      agency</h2></div></div><div className="text-wrapper"><p className="text has_fade_anim">Theme Builder, you have complete control over the <span>static elements</span> of your website</p></div><div className="btn-wrapper has_fade_anim" data-ease="bounce"><a href="contact.html" className="wc-btn wc-btn-primary btn-text-flip"><span data-text="Learn More">Learn More</span></a></div></div></div></section>
          

          
          <section className="pricing-area"><div className="container"><div className="pricing-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_text_move_anim">Special offer! choose
                        your pack today</h2></div></div></div><div className="pricing-wrapper-box"><div className="pricing-wrapper"><div className="pricing-box has_fade_anim" data-delay="0.15"><span className="tag">Basic</span><h3 className="price">$9.00</h3><div className="feature-list"><ul><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />Unlimited cards</li><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />Automated management</li><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />SOX compliance</li></ul></div><a href="contact.html" className="wc-btn wc-btn-primary btn-text-flip bordered"><span data-text="Learn More">Learn More</span></a></div><div className="pricing-box has_fade_anim" data-delay="0.30"><span className="tag">Standard</span><h3 className="price">$29.00</h3><div className="feature-list"><ul><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />Unlimited cards</li><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />Automated management</li><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />Enterprise ERP integrations</li></ul></div><a href="contact.html" className="wc-btn wc-btn-primary btn-text-flip bordered"><span data-text="Learn More">Learn More</span></a></div><div className="pricing-box has_fade_anim" data-delay="0.45"><span className="tag">Premium</span><h3 className="price">$69.00</h3><div className="feature-list"><ul><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />Unlimited cards</li><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />Unlimited tools</li><li><img className="show-light" src="assets/imgs/icon/check-2.webp" alt="icon image" /><img className="show-dark" src="assets/imgs/icon/check-2-light.webp" alt="icon image" />Local video issuance</li></ul></div><a href="contact.html" className="wc-btn wc-btn-primary btn-text-flip bordered"><span data-text="Learn More">Learn More</span></a></div></div></div></div></div></section>
          

          
          <section className="contact-area"><div className="container"><div className="contact-area-inner section-spacing"><div className="shape-1"><img src="assets/imgs/shape/img-s-73.webp" alt="shape" /></div><div className="section-content"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_text_move_anim">Start your experience
                        with Arolax</h2></div></div><div className="btn-wrapper has_fade_anim"><a href="contact.html" className="wc-btn wc-btn-underline btn-text-flip"><span data-text="Let’s get in touch">Let’s get in touch</span> <img src="assets/imgs/icon/arrow-right-half-light.webp" alt="icon image" /></a></div></div></div></div></section>
          

        </main>

        
        <footer className="footer-area">
          <div className="container">
            <div className="footer-area-inner section-spacing-top">
              <div className="shape-1">
                <img className="show-light" src="assets/imgs/shape/img-s-33.webp" alt="shape" />
                <img className="show-dark" src="assets/imgs/shape/img-s-33-light.webp" alt="shape" />
              </div>
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_fade_anim"><span>Get started</span> <br />
                      now</h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">If you would like to work with us or
                    just want to get in touch, we’d love
                    to hear from you!</p>
                </div>
              </div>
              <div className="footer-cta">
                <div className="footer-widget-wrapper">
                  <h2 className="title">London</h2>
                  <ul className="footer-nav-list">
                    <li>Baltia Squar, Mark Street, <br />
                      London</li>
                  </ul>
                </div>
                <div className="footer-widget-wrapper">
                  <h2 className="title">New York</h2>
                  <ul className="footer-nav-list">
                    <li>Nenuya Centre, Elia Street <br />
                      New York, USA</li>
                  </ul>
                </div>
                <div className="footer-widget-wrapper newsletter">
                  <form action="#" className="subscribe-form">
                    <div className="input-field">
                      <input type="email" placeholder="Enter your email" />
                      <button type="submit" className="subscribe-btn"><img src="assets/imgs/icon/arrow-light.webp"
                          alt="icon" /></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="copyright-area-inner">
                <div className="copyright-text">
                  <p className="text">© 2022 - 2025 | Alrights reserved <br />
                    by <a href="https://themeforest.net/user/crowdytheme" target="_blank">crowdyTheme</a></p>
                </div>
                <ul className="footer-nav-list">
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
  </div>



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  


    </>
  );
}
