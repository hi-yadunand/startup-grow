
export default function AboutPage() {
  return (
    <>
      

  
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
          <span data-text=" " className="characters">&nbsp;</span>
          <span data-text="G" className="characters">G</span>
          <span data-text="R" className="characters">R</span>
          <span data-text="O" className="characters">O</span>
          <span data-text="W" className="characters">W</span>
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

          
          <section className="hero-area">
            <div className="container large"><div className="hero-area-inner"><div className="section-content"><div className="section-title-wrapper"><div className="title-wrapper"><h1 className="section-title large has_fade_anim">We are ”Arolax” - product and
                        branding and creative agency
                        based in California</h1></div></div><div className="content-last"><div className="subtitle-wrapper has_fade_anim" data-fade-from="right"><span className="section-subtitle has-right-line">01. about us</span></div><div className="text-wrapper"><p className="text has_fade_anim" data-fade-from="left">Unlocking creative horizons: the story behind “Arolax” a global digital agency crafting experiences, building dreams, and shaping success.</p></div></div></div></div></div>
          </section>
          

          
          <div className="counter-area"><div className="counter-area-inner"><div className="thumb"><img src="assets/imgs/gallery/img-s-27.webp" alt="image" /></div><div className="counter-wrapper-box"><div className="counter-wrapper"><div className="thumb overflow-hidden"><img src="assets/imgs/gallery/img-s-28.webp" data-speed="0.9" alt="image" /></div><div className="counter-box"><h2 className="text has_fade_anim">We have 100+ <br />satisfied clients</h2><h2 className="number wc-counter has_fade_anim">100+</h2></div><div className="counter-box dark"><h2 className="text has_fade_anim">We helped to get <br />companies with $25M+ <br />funding</h2><h2 className="number wc-counter has_fade_anim">25M+</h2></div><div className="thumb overflow-hidden"><img src="assets/imgs/gallery/img-s-29.webp" data-speed="0.9" alt="image" /></div></div></div></div></div>
          

          
          <section className="awards-area"><div className="container"><div className="awards-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="subtitle-wrapper"><span className="section-subtitle has-left-line">02. Who we are</span></div><div className="title-wrapper"><h2 className="section-title has_fade_anim">We make storable strategy growth your company with arolax agency!</h2></div></div></div><div className="section-content"><div className="text-wrapper"><p className="text has_fade_anim" data-fade-from="left">We deploy world-class creative design, team on demand. that can design surest measure's of success is when a client partner with more than once build, ship scale your vision most efficient.</p></div><div className="awards-list has_fade_anim"><ul><li><div className="meta"><div className="icon"><img className="show-light" src="assets/imgs/icon/icon-s-40.webp" alt="icon" /><img className="show-dark" src="assets/imgs/icon/icon-s-40-light.webp" alt="icon" /></div><div className="content"><h3 className="number wc-counter">50+</h3><p className="text">projects success rate 99%</p></div></div></li><li><div className="meta"><div className="icon"><img className="show-light" src="assets/imgs/icon/icon-s-41.webp" alt="icon" /><img className="show-dark" src="assets/imgs/icon/icon-s-41-light.webp" alt="icon" /></div><div className="content"><h3 className="number wc-counter">12+</h3><p className="text">award for digital innovation</p></div></div></li></ul></div></div><div className="about-thumbs"><div className="thumb-first"><img src="assets/imgs/gallery/img-s-3.webp" className="has_fade_anim" data-fade-from="right" alt="image" /></div><div className="thumb-second"><img src="assets/imgs/gallery/img-s-4.webp" className="has_fade_anim" data-fade-from="left" alt="image" /></div></div></div></div></section>
          

          
          <section className="about-area container-hd"><div className="about-area-inner"><div className="thumb"><img src="assets/imgs/gallery/img-s-30.webp" alt="gallery image" /></div><div className="section-content"><div className="bg"><img src="assets/imgs/gallery/img-s-31.webp" alt="image" /></div><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">We’re simple
                      but pro-level
                      agency</h2></div></div><div className="text-wrapper"><p className="text has_fade_anim" data-fade-from="left">Theme Builder, you have complete control over the <span>static elements</span> of your website</p></div><div className="btn-wrapper has_fade_anim" data-ease="bounce"><a href="contact.html" className="wc-btn wc-btn-primary btn-text-flip"><span data-text="Learn More">Learn More</span></a></div></div></div></section>
          

          
          <section className="team-area"><div className="container"><div className="team-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Quality team</h2></div></div><div className="text-wrapper"><p className="text has_fade_anim">We deploy world-class creative design, team on demand. that can design surest measure's of success is when a client partner with more than once build, ship scale your vision most efficient.</p></div></div><div className="team-wrapper-box"><div className="team-wrapper"><div className="team-box has_fade_anim" data-fade-from="left" data-delay="0.15"><a href="team.html"><div className="thumb"><img src="assets/imgs/team/img-s-1.webp" alt="team icon" /></div><div className="content"><h3 className="title">Kamal Abraham</h3><p className="text">CEO, Wealcoder</p></div></a></div><div className="team-box has_fade_anim" data-fade-from="left" data-delay="0.30"><a href="team.html"><div className="thumb"><img src="assets/imgs/team/img-s-2.webp" alt="team icon" /></div><div className="content"><h3 className="title">Selina Gomaze</h3><p className="text">Junior Executive</p></div></a></div><div className="team-box has_fade_anim" data-fade-from="left" data-delay="0.45"><a href="team.html"><div className="thumb"><img src="assets/imgs/team/img-s-3.webp" alt="team icon" /></div><div className="content"><h3 className="title">Pedrik Vadra</h3><p className="text">Sr. Developer</p></div></a></div><div className="team-box has_fade_anim" data-fade-from="left" data-delay="0.60"><a href="team.html"><div className="thumb"><img src="assets/imgs/team/img-s-4.webp" alt="team icon" /></div><div className="content"><h3 className="title">Thomas Ribbon</h3><p className="text">UX Designer</p></div></a></div></div></div></div></div></section>
          

          
          <section className="contact-area"><div className="container"><div className="contact-area-inner section-spacing"><div className="shape-1"><img src="assets/imgs/shape/img-s-73.webp" alt="shape" /></div><div className="section-content"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Start your experience
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
