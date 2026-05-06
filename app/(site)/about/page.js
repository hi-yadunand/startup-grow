
"use client";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    // Re-initialize any scripts that need it after React mounts
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      

  
  <div id="preloader">
    <div id="container" className="container-preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading"><span data-text="S" className="characters">S</span><span data-text="T" className="characters">T</span><span data-text="A" className="characters">A</span><span data-text="R" className="characters">R</span><span data-text="T" className="characters">T</span><span data-text="U" className="characters">U</span><span data-text="P" className="characters">P</span><span data-text=" " className="characters">&nbsp;</span><span data-text="G" className="characters">G</span><span data-text="R" className="characters">R</span><span data-text="O" className="characters">O</span><span data-text="W" className="characters">W</span></div>
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
              <li><a href="tel:+2-352698102" className="unnerline"><u>Contact and Request Module</u></a></li>
              <li><a href="mailto:startupgrow@example.com">startupgrow@example.com</a></li>
              <li><a href="">A Digital Solutions Platform <br />
                  for Indian Startups</a></li>
            </ul>
          </div>
          <div className="offcanvas-3__social d-none d-md-block">
            <p className="title">Team Members</p>
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
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/works">projects</a></li>
            <li><a href="/team">team</a></li>
            <li><a href="#">scope</a></li>
            <li><a href="#">requirements</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/contact">Contact</a></li>
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
            <input type="text" placeholder="Search project" />
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
          <a href="/">
            <img className="show-light" src="assets/imgs/logo/logo.png" alt="Site Logo" />
            <img className="show-dark" src="assets/imgs/logo/logo-light.png" alt="Site Logo" />
          </a>
        </div>
        <div className="header__nav pos-center">
          <nav className="main-menu">
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/about">about</a></li>
              <li><a href="/services">services</a></li>
              <li className="menu-item-has-children">
                <a href="#">Project</a>
                <ul className="dp-menu">
                  <li><a href="/works">portfolio</a></li>
                  <li><a href="/team">team members</a></li>
                  <li><a href="#">future scope</a></li>
                  <li><a href="#">requirements</a></li>
                </ul>
              </li>
              <li><a href="/blog">blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="header__button">
          <a className="wc-btn wc-btn-primary btn-text-flip" href="/contact"><span data-text="Get started">Get
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
            <div className="container large"><div className="hero-area-inner"><div className="section-content"><div className="section-title-wrapper"><div className="title-wrapper"><h1 className="section-title large has_fade_anim">We are “StartupGrow” - digital and
                        marketing platform built
                        for Indian startups</h1></div></div><div className="content-last"><div className="subtitle-wrapper has_fade_anim" data-fade-from="right"><span className="section-subtitle has-right-line">01. StartupGrow</span></div><div className="text-wrapper"><p className="text has_fade_anim" data-fade-from="left">StartupGrow helps Indian startups build websites, brands, and marketing systems that make digital growth simple.</p></div></div></div></div></div>
          </section>
          

          
          <div className="counter-area"><div className="counter-area-inner"><div className="thumb"><img src="assets/imgs/gallery/img-s-27.webp" alt="image" /></div><div className="counter-wrapper-box"><div className="counter-wrapper"><div className="thumb overflow-hidden"><img src="assets/imgs/gallery/img-s-28.webp" data-speed="0.9" alt="image" /></div><div className="counter-box"><h2 className="text has_fade_anim">We support Indian <br />startup growth</h2><h2 className="number wc-counter has_fade_anim">6</h2></div><div className="counter-box dark"><h2 className="text has_fade_anim">We connect <br />frontend, backend, and <br />database requests</h2><h2 className="number wc-counter has_fade_anim">3</h2></div><div className="thumb overflow-hidden"><img src="assets/imgs/gallery/img-s-29.webp" data-speed="0.9" alt="image" /></div></div></div></div></div>
          

          
          <section className="awards-area"><div className="container"><div className="awards-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="subtitle-wrapper"><span className="section-subtitle has-left-line">02. Problem</span></div><div className="title-wrapper"><h2 className="section-title has_fade_anim">We make digital growth simple for Indian startup teams!</h2></div></div></div><div className="section-content"><div className="text-wrapper"><p className="text has_fade_anim" data-fade-from="left">We help founders move from idea to online presence with affordable websites, SEO, social campaigns, content, email, and a basic request system that keeps service planning clear.</p></div><div className="awards-list has_fade_anim"><ul><li><div className="meta"><div className="icon"><img className="show-light" src="assets/imgs/icon/icon-s-40.webp" alt="icon" /><img className="show-dark" src="assets/imgs/icon/icon-s-40-light.webp" alt="icon" /></div><div className="content"><h3 className="number wc-counter">4</h3><p className="text">startup problems solved</p></div></div></li><li><div className="meta"><div className="icon"><img className="show-light" src="assets/imgs/icon/icon-s-41.webp" alt="icon" /><img className="show-dark" src="assets/imgs/icon/icon-s-41-light.webp" alt="icon" /></div><div className="content"><h3 className="number wc-counter">6</h3><p className="text">core digital services</p></div></div></li></ul></div></div><div className="about-thumbs"><div className="thumb-first"><img src="assets/imgs/gallery/img-s-3.webp" className="has_fade_anim" data-fade-from="right" alt="image" /></div><div className="thumb-second"><img src="assets/imgs/gallery/img-s-4.webp" className="has_fade_anim" data-fade-from="left" alt="image" /></div></div></div></div></section>
          

          
          <section className="about-area container-hd"><div className="about-area-inner"><div className="thumb"><img src="assets/imgs/gallery/img-s-30.webp" alt="gallery image" /></div><div className="section-content"><div className="bg"><img src="assets/imgs/gallery/img-s-31.webp" alt="image" /></div><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Simple
                      but scalable
                      platform</h2></div></div><div className="text-wrapper"><p className="text has_fade_anim" data-fade-from="left">Startups explore services, request quotes, contact the team, and grow online from one place</p></div><div className="btn-wrapper has_fade_anim" data-ease="bounce"><a href="/contact" className="wc-btn wc-btn-primary btn-text-flip"><span data-text="View details">View details</span></a></div></div></div></section>
          

          
          <section className="team-area"><div className="container"><div className="team-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Project team</h2></div></div><div className="text-wrapper"><p className="text has_fade_anim">Yadunand, Nashid, and Gokul built StartupGrow as a practical college project with faculty support, service discovery, request collection, and simple admin management.</p></div></div><div className="team-wrapper-box"><div className="team-wrapper"><div className="team-box has_fade_anim" data-fade-from="left" data-delay="0.15"><a href="/team"><div className="thumb"><img src="assets/imgs/team/img-s-1.webp" alt="team icon" /></div><div className="content"><h3 className="title">Yadunand Pavithran</h3><p className="text">Team Member</p></div></a></div><div className="team-box has_fade_anim" data-fade-from="left" data-delay="0.30"><a href="/team"><div className="thumb"><img src="assets/imgs/team/img-s-2.webp" alt="team icon" /></div><div className="content"><h3 className="title">Nashid Nihal C</h3><p className="text">Team Member</p></div></a></div><div className="team-box has_fade_anim" data-fade-from="left" data-delay="0.45"><a href="/team"><div className="thumb"><img src="assets/imgs/team/img-s-3.webp" alt="team icon" /></div><div className="content"><h3 className="title">Gokul Krishna</h3><p className="text">Team Member</p></div></a></div><div className="team-box has_fade_anim" data-fade-from="left" data-delay="0.60"><a href="/team"><div className="thumb"><img src="assets/imgs/team/img-s-4.webp" alt="team icon" /></div><div className="content"><h3 className="title">Faculty Support</h3><p className="text">Guidance</p></div></a></div></div></div></div></div></section>
          

          
          <section className="contact-area"><div className="container"><div className="contact-area-inner section-spacing"><div className="shape-1"><img src="assets/imgs/shape/img-s-73.webp" alt="shape" /></div><div className="section-content"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Start your growth
                        with StartupGrow</h2></div></div><div className="btn-wrapper has_fade_anim"><a href="/contact" className="wc-btn wc-btn-underline btn-text-flip"><span data-text="Contact us">Contact us</span> <img src="assets/imgs/icon/arrow-right-half-light.webp" alt="icon image" /></a></div></div></div></div></section>
          

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
                    <h2 className="section-title has_fade_anim"><span>Build online</span> <br />
                      presence</h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">StartupGrow helps Indian startups request digital services, communicate with the team, and grow online through one simple platform.</p>
                </div>
              </div>
              <div className="footer-cta">
                <div className="footer-widget-wrapper">
                  <h2 className="title">Frontend</h2>
                  <ul className="footer-nav-list">
                    <li>HTML5, CSS3, Tailwind CSS, <br />
                      JavaScript, Next.js</li>
                  </ul>
                </div>
                <div className="footer-widget-wrapper">
                  <h2 className="title">Backend</h2>
                  <ul className="footer-nav-list">
                    <li>Node.js, Express.js, <br />
                      MongoDB</li>
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
                  <p className="text">© 2026 STARTUPGROW <br />
                    A Digital Solutions Platform for Indian Startups</p>
                </div>
                <ul className="footer-nav-list">
                  <li><a href="#">Introduction</a></li>
                  <li><a href="#">Objective</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">References</a></li>
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
