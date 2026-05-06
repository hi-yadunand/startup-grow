"use client";
import { useEffect } from "react";

export default function BlogPage() {
  useEffect(() => {
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
              <li><a href="tel:+91-0000000000" className="unnerline"><u>Contact and Request Module</u></a></li>
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
            <li><a href="#">career</a></li>
            <li><a href="#">faq</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  


  
  <div className="modal fade" id="search-template" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
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
                <a href="#">Pages</a>
                <ul className="dp-menu">
                  <li><a href="/works">project pages</a></li>
                  <li><a href="/team">team pages</a></li>
                  <li><a href="#">career pages</a></li>
                  <li><a href="#">faq</a></li>
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

          
          <section className="featured-area"><div className="container"><div className="featured-area-inner"><div className="section-content"><div className="section-title-wrapper"><div className="title-wrapper"><h1 className="section-title large has_fade_anim">We plan
                        growth</h1></div></div><div className="text-box"><div className="text-wrapper"><p className="text has_fade_anim">StartupGrow documents objectives, scope, architecture, requirements, testing, result, conclusion, and future enhancements.</p></div><div className="counter-box has_fade_anim"><div className="counter-item"><span className="number wc-counter">27</span><p className="text">Project Sections</p></div><div className="counter-item"><span className="number wc-counter">3</span><p className="text">Team Members</p></div></div></div></div></div></div></section>
          

          <div className="featured-post-area"><div className="container"><div className="featured-post-box"><div className="featured-posts"><article className="blog-box has_fade_anim"><a href="/blog"><div className="thumb"><img src="assets/imgs/blog/img-s-17.webp" alt="blog image" /></div><div className="content"><div className="content-first"><h2 className="title">Abstract and Keywords</h2><span className="tag">Project Note <br />May - 2026</span></div><div className="icon"><i className="fa-solid fa-arrow-right"></i></div></div></a></article><article className="blog-box has_fade_anim" data-delay="0.30"><a href="/blog"><div className="thumb"><img src="assets/imgs/blog/img-s-18.webp" alt="blog image" /></div><div className="content"><div className="content-first"><h2 className="title">Project references</h2><span className="tag">Docs Used <br />Next - Mongo</span></div><div className="icon"><i className="fa-solid fa-arrow-right"></i></div></div></a></article><article className="blog-box has_fade_anim" data-delay="0.45" data-on-scroll="0"><a href="/blog"><div className="thumb"><img src="assets/imgs/blog/img-s-19.webp" alt="blog image" /></div><div className="content"><div className="content-first"><h2 className="title">Appendix notes</h2><span className="tag">Screens Added <br />Soon - More</span></div><div className="icon"><i className="fa-solid fa-arrow-right"></i></div></div></a></article></div></div></div></div>

          
          <section className="blog-area"><div className="container"><div className="blog-area-inner section-spacing"><div className="section-content"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Latest
                        project
                        notes</h2></div></div><div className="text-wrapper"><p className="text has_fade_anim">StartupGrow documents objectives, scope, architecture, requirements, testing, result, conclusion, and future enhancements.</p></div></div><div className="blogs-wrapper-box"><div className="blogs-wrapper has_fade_anim"><a href="/blog"><div className="blog-box"><div className="thumb"><img src="assets/imgs/blog/img-s-20.webp" alt="image" /></div><div className="content"><span className="number">01</span><h3 className="title">Existing <br />System</h3><span className="icon"><i className="fa-solid fa-arrow-right"></i></span></div></div></a><a href="/blog"><div className="blog-box"><div className="thumb"><img src="assets/imgs/blog/img-s-21.webp" alt="image" /></div><div className="content"><span className="number">02</span><h3 className="title">Proposed <br />System</h3><span className="icon"><i className="fa-solid fa-arrow-right"></i></span></div></div></a><a href="/blog"><div className="blog-box"><div className="thumb"><img src="assets/imgs/blog/img-s-22.webp" alt="image" /></div><div className="content"><span className="number">03</span><h3 className="title">Feasibility <br />Study</h3><span className="icon"><i className="fa-solid fa-arrow-right"></i></span></div></div></a></div></div></div></div></section>
          

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
                    <h2 className="section-title has_fade_anim"><span>Build online</span> <br />presence</h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">StartupGrow helps Indian startups request digital services, communicate with the team, and grow online through one simple platform.</p>
                </div>
              </div>
              <div className="footer-cta">
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
                  <p className="text">© 2026 STARTUPGROW <br />A Digital Solutions Platform for Indian Startups</p>
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
