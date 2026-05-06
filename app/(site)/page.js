
"use client";
import { useEffect } from "react";

export default function HomePage() {
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
              <li><a href="">Digital Solutions <br />
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
            <span className="startupgrow-wordmark">STARTUPGROW</span>
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
          <div className="wc-btn-group">
            <a className="wc-btn wc-btn-circle" href="/contact">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="wc-btn wc-btn-primary" href="/contact">Contact us</a>
            <a className="wc-btn wc-btn-circle" href="/contact">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
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
      <div className="body-wrapper body-branding-agency">

        
        <div className="overlay-switcher-close"></div>

        <main>

          
          <section className="hero-area section-item">
            <div className="area-bg">
              <img src="assets/imgs/gallery/img-s-33.webp" alt="image" />
            </div>
            <div className="container large">
              <div className="hero-area-inner">
                <div className="section-content">
                  <div className="section-title-wrapper">
                    <div className="title-wrapper">
                      <h1 className="section-title has_char_anim" data-delay="0.15" data-translateX="50">Digital <br />
                        Solutions
                        for Indian
                        Startups
                      </h1>
                    </div>
                  </div>
                  <div className="video-wrapper has_fade_anim" data-ease="power3.out">
                    <div className="thumb p-relative">
                      <img src="assets/imgs/gallery/img-s-32.webp" alt="image" />
                      <a href="https://crowdytheme.com/assets/wp-content/uploads/2024/06/arolux-branding-agency-video.mp4"
                        className="wc-btn wc-btn-circle video-popup pos-center"><i className="fa-solid fa-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-area">
                <div className="about-area-inner section-spacing-bottom">
                  <div className="section-content">
                    <div className="section-title-wrapper">
                      <div className="subtitle-wrapper">
                        <span className="section-subtitle">1. Introduction</span>
                      </div>
                    </div>
                    <div className="content-last">
                      <div className="text-wrapper">
                        <p className="text has_text_move_anim">In today's digital world, startups play an important role in innovation and economic growth. StartupGrow helps early-stage Indian startups build a strong online presence through website development, branding, and digital marketing in one simple platform.</p>
                      </div>
                      <div className="btn-wrapper has_fade_anim" data-fade-from="left">
                        <div className="wc-btn-group">
                          <a className="wc-btn wc-btn-circle" href="/contact"><i className="fa-solid fa-arrow-right"></i></a>
                          <a className="wc-btn wc-btn-primary" href="/contact">Contact us</a>
                          <a className="wc-btn wc-btn-circle" href="/contact"><i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          
          <section className="work-area section-style section-item">
            <div className="container large">
              <div className="work-area-inner section-spacing">
                <div className="section-header">
                  <div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Project
                        objectives</h2></div></div>
                </div>
                <div className="works-wrapper-box">
                  <div className="works-wrapper">
                    <div className="work-box"><div className="thumb"><a href="/works"><img src="assets/imgs/works/img-s-31.webp" alt="work image" /></a></div><div className="content"><h3 className="title">Professional <br />Websites</h3><div className="tags"><div className="tag">Objective</div><div className="tag">Startup Growth</div></div></div></div>
                    <div className="work-box"><div className="thumb"><a href="/works"><img src="assets/imgs/works/img-s-32.webp" alt="work image" /></a></div><div className="content"><h3 className="title">Digital Marketing <br />Services</h3><div className="tags"><div className="tag">Objective</div><div className="tag">Startup Growth</div></div></div></div>
                    <div className="work-box"><div className="thumb"><a href="/works"><img src="assets/imgs/works/img-s-33.webp" alt="work image" /></a></div><div className="content"><h3 className="title">Affordable <br />Solutions</h3><div className="tags"><div className="tag">Objective</div><div className="tag">Startup Growth</div></div></div></div>
                    <div className="work-box"><div className="thumb"><a href="/works"><img src="assets/imgs/works/img-s-34.webp" alt="work image" /></a></div><div className="content"><h3 className="title">Request and <br />Communication</h3><div className="tags"><div className="tag">Objective</div><div className="tag">Startup Growth</div></div></div></div>
                  </div>
                </div>
                <div className="section-content section-spacing-top"><div></div><div className="content-last"><div className="text-wrapper"><p className="text has_text_move_anim">The objective is to design and develop a web-based platform that helps Indian startups grow through professional websites, SEO, social media, affordable services, and a simple request system.</p></div><div className="btn-wrapper has_fade_anim" data-fade-from="left"><div className="wc-btn-group"><a className="wc-btn wc-btn-circle" href="/works"><i className="fa-solid fa-arrow-right"></i></a><a className="wc-btn wc-btn-primary" href="/works">View all works</a><a className="wc-btn wc-btn-circle" href="/works"><i className="fa-solid fa-arrow-right"></i></a></div></div></div></div>
              </div>
            </div>
          </section>
          

          
          <section className="fun-fact-area section-style section-item">
            <div className="container large"><div className="fun-fact-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">StartupGrow is planned as a digital marketing agency focused on helping Indian startups overcome their initial challenges through one digital service platform.</h2></div></div></div><div className="counter-wrapper-box"><div className="counter-box overflow-hidden"><img className="shape-1 show-light img_anim_reveal" src="assets/imgs/shape/img-s-47.webp" alt="image" /><img className="shape-1 show-dark img_anim_reveal" src="assets/imgs/shape/img-s-47-light.webp" alt="image" /><h3 className="number wc-counter has_fade_anim" data-fade-from="left">6</h3></div></div></div></div>
          </section>
          

          
          <section className="service-area section-style section-item">
            <div className="container large"><div className="service-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">StartupGrow provides six core services for digital growth</h2></div></div></div><div className="services-wrapper-box"><div className="services-wrapper">
              <div className="has_fade_anim" data-delay="0.15"><a href="/services"><div className="service-box"><span className="number">01</span><div className="icon"><img src="assets/imgs/icon/icon-s-1-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Search Engine Optimisation</h3><p className="text">Improve website ranking on search engines to increase traffic.</p></div></div></a></div>
              <div className="has_fade_anim" data-delay="0.30"><a href="/services"><div className="service-box"><span className="number">02</span><div className="icon"><img src="assets/imgs/icon/icon-s-2-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Pay-Per-Click Advertising</h3><p className="text">Run paid ads on platforms like Google and Instagram.</p></div></div></a></div>
              <div className="has_fade_anim" data-delay="0.45"><a href="/services"><div className="service-box"><span className="number">03</span><div className="icon"><img src="assets/imgs/icon/icon-s-3-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Social Media Marketing</h3><p className="text">Manage social media accounts and content.</p></div></div></a></div>
              <div className="has_fade_anim" data-delay="0.60"><a href="/services"><div className="service-box"><span className="number">04</span><div className="icon"><img src="assets/imgs/icon/icon-s-4-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Content Marketing</h3><p className="text">Create blogs, videos, and posts to attract users.</p></div></div></a></div>
              <div className="has_fade_anim" data-delay="0.75"><a href="/services"><div className="service-box"><span className="number">05</span><div className="icon"><img src="assets/imgs/icon/icon-s-13-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Email Marketing</h3><p className="text">Send promotional emails and campaigns.</p></div></div></a></div>
              <div className="has_fade_anim" data-delay="0.90"><a href="/services"><div className="service-box"><span className="number">06</span><div className="icon"><img src="assets/imgs/icon/icon-s-14-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Web Design and Development</h3><p className="text">Build websites that convert visitors into customers.</p></div></div></a></div>
            </div></div><div className="info-text has_fade_anim" data-fade-from="left"><p className="text">StartupGrow solves lack of technical skills, low traffic, poor marketing strategies, and high agency costs. <br /><a className="wc-btn wc-btn-underline" href="/contact">Contact us now</a></p></div></div></div>
          </section>
          

          
          <section className="team-area section-style section-item">
            <div className="container large"><div className="team-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Team members</h2></div></div><div className="text-wrapper"><p className="text has_fade_anim">StartupGrow was developed by a student team with guidance and support from faculty and institution.</p></div></div><div className="team-wrapper-box"><div className="team-wrapper">
              <div className="team-box"><div className="thumb"><a href="/team"><img src="assets/imgs/team/img-s-15.webp" alt="team image" /></a></div><div className="content"><div className="top"><h3 className="name"><a href="/team">Yadunand Pavithran</a></h3><p className="post">Team Member</p></div></div></div>
              <div className="team-box"><div className="thumb"><a href="/team"><img src="assets/imgs/team/img-s-16.webp" alt="team image" /></a></div><div className="content"><div className="top"><h3 className="name"><a href="/team">Nashid Nihal C</a></h3><p className="post">Team Member</p></div></div></div>
              <div className="team-box"><div className="thumb"><a href="/team"><img src="assets/imgs/team/img-s-17.webp" alt="team image" /></a></div><div className="content"><div className="top"><h3 className="name"><a href="/team">Gokul Krishna</a></h3><p className="post">Team Member</p></div></div></div>
            </div></div></div></div>
          </section>
          

          
          <section className="blog-area section-style section-item">
            <div className="container large"><div className="blog-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Modules of the system</h2></div></div><div className="btn-wrapper has_fade_anim" data-fade-from="right"><div className="wc-btn-group"><a className="wc-btn wc-btn-circle" href="/blog"><i className="fa-solid fa-arrow-right"></i></a><a className="wc-btn wc-btn-primary" href="/blog">view project notes</a><a className="wc-btn wc-btn-circle" href="/blog"><i className="fa-solid fa-arrow-right"></i></a></div></div></div><div className="blogs-wrapper-box"><div className="blogs-wrapper"><article className="blog has_fade_anim" data-fade-from="right" data-delay="0.15"><div className="thumb"><a href="/blog"><img src="assets/imgs/blog/img-s-8.webp" alt="blog image" /></a></div><div className="content"><h2 className="title"><a href="/blog">User Interface, Service, and Contact Modules</a></h2><div className="meta-list"><a href="#"><span className="meta tag">Project</span></a><span className="meta date">06 May 2026</span></div></div></article><article className="blog has_fade_anim" data-fade-from="right" data-delay="0.30"><div className="thumb"><a href="/blog"><img src="assets/imgs/blog/img-s-9.webp" alt="blog image" /></a></div><div className="content"><h2 className="title"><a href="/blog">Admin Module, Testing, and Deployment</a></h2><div className="meta-list"><a href="#"><span className="meta tag">Project</span></a><span className="meta date">06 May 2026</span></div></div></article></div></div></div></div>
          </section>
          

          
          <section className="cta-area section-style section-item"><div className="container large"><div className="cta-area-inner section-spacing"><div className="section-content"><div className="section-title-wrapper"><div className="subtitle-wrapper"><span className="section-subtitle has_fade_anim">22. Conclusion</span></div><div className="title-wrapper"><h2 className="section-title has_fade_anim">Simple. Affordable. Scalable.</h2></div></div><div className="btn-wrapper has_fade_anim"><div className="wc-btn-group"><a className="wc-btn wc-btn-circle" href="/contact"><i className="fa-solid fa-arrow-right"></i></a><a className="wc-btn wc-btn-primary" href="/contact">contact us</a><a className="wc-btn wc-btn-circle" href="/contact"><i className="fa-solid fa-arrow-right"></i></a></div></div></div></div></div></section>
          

        </main>

        
        <footer className="footer-area section-style pb-0">
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
                  <li><a href="#">SEO</a></li>
                  <li><a href="#">PPC Advertising</a></li>
                  <li><a href="#">Social Media Marketing</a></li>
                  <li><a href="#">Content Marketing</a></li>
                  <li><a href="#">Email Marketing</a></li>
                  <li><a href="#">Web Design and Development</a></li>
                </ul>
              </div>
              <div className="footer-widget-wrapper">
                <h2 className="title">Company</h2>
                <ul className="footer-nav-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">Objective</a></li>
                  <li><a href="/works">Project Scope</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-widget-wrapper newsletter">
                <h2 className="title">Abstract</h2>
                <div className="newsletter-text">
                  <p className="text">StartupGrow is a web-based digital solutions platform that helps startups build their online presence through web development and marketing services.
                  </p>
                </div>
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
          <div className="copyright-area">
            <div className="container large">
              <div className="copyright-area-inner">
                <p className="text">© 2026 STARTUPGROW – Academic Innovation Project for Indian Startups</p>
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
