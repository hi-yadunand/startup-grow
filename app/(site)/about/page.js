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


  <div class="switcher__area">
    <div class="switcher__icon">
      <button id="switcher_open"><i class="fa-solid fa-gear"></i></button>
      <button id="switcher_close"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="switcher__items">
      <div class="switcher__item">
        <div class="switch__title-wrap">
          <p class="switcher__title">mode</p>
        </div>
        <div class="switcher__btn mode-type wc-col-2">
          <button class="active" data-mode="light">light</button>
          <button data-mode="dark">dark</button>
        </div>
      </div>
      <div class="switcher__item">
        <div class="switch__title-wrap">
          <p class="switcher__title">Language Support</p>
        </div>
        <div class="switcher__btn lang_dir wc-col-2">
          <button class="active" data-mode="ltr">LTR</button>
          <button data-mode="rtl">RTL</button>
        </div>
      </div>
      <div class="switcher__item">
        <div class="switch__title-wrap">
          <p class="switcher__title">Layout</p>
        </div>
        <div class="switcher__btn layout-type wc-col-2">
          <button class="active" data-mode="full-width">Full Width</button>
          <button data-mode="box-layout">Box Layout</button>
        </div>
      </div>
      <div class="switcher__item">
        <div class="switch__title-wrap">
          <p class="switcher__title">Cursor</p>
        </div>
        <div class="switcher__btn">
          <select name="cursor-style" id="cursor_style">
            <option value="1">default</option>
            <option selected value="2">animated</option>
          </select>
        </div>
      </div>
    </div>
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


          <section class="hero-area">
            <div class="container large"><div class="hero-area-inner"><div class="section-content"><div class="section-title-wrapper"><div class="title-wrapper"><h1 class="section-title large has_fade_anim">StartupGrow helps Indian startups
                        build a strong digital presence</h1></div></div><div class="content-last"><div class="subtitle-wrapper has_fade_anim" data-fade-from="right"><span class="section-subtitle has-right-line">01. about us</span></div><div class="text-wrapper"><p class="text has_fade_anim" data-fade-from="left">A digital solutions platform created to make websites, branding, and marketing simpler for early-stage founders.</p></div></div></div></div></div>
          </section>



          <div class="counter-area"><div class="counter-area-inner"><div class="thumb"><img src="/assets/imgs/gallery/img-s-27.webp" alt="image"></div><div class="counter-wrapper-box"><div class="counter-wrapper"><div class="thumb overflow-hidden"><img src="/assets/imgs/gallery/img-s-28.webp" data-speed="0.9" alt="image"></div><div class="counter-box"><h2 class="text has_fade_anim">We provide 6 core <br>digital services</h2><h2 class="number wc-counter has_fade_anim">6</h2></div><div class="counter-box dark"><h2 class="text has_fade_anim">We support <br>startups with simple <br>growth systems</h2><h2 class="number wc-counter has_fade_anim">1</h2></div><div class="thumb overflow-hidden"><img src="/assets/imgs/gallery/img-s-29.webp" data-speed="0.9" alt="image"></div></div></div></div></div>



          <section class="awards-area"><div class="container"><div class="awards-area-inner section-spacing"><div class="section-header"><div class="section-title-wrapper"><div class="subtitle-wrapper"><span class="section-subtitle has-left-line">02. Who we are</span></div><div class="title-wrapper"><h2 class="section-title has_fade_anim">We make startup digital growth simple, affordable, and practical!</h2></div></div></div><div class="section-content"><div class="text-wrapper"><p class="text has_fade_anim" data-fade-from="left">We deploy world-class creative design, team on demand. that can design surest measure's of success is when a client partner with more than once build, ship scale your vision most efficient.</p></div><div class="awards-list has_fade_anim"><ul><li><div class="meta"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-40.webp" alt="icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-40-light.webp" alt="icon"></div><div class="content"><h3 class="number wc-counter">50+</h3><p class="text">projects success rate 99%</p></div></div></li><li><div class="meta"><div class="icon"><img class="show-light" src="/assets/imgs/icon/icon-s-41.webp" alt="icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-41-light.webp" alt="icon"></div><div class="content"><h3 class="number wc-counter">12+</h3><p class="text">award for digital innovation</p></div></div></li></ul></div></div><div class="about-thumbs"><div class="thumb-first"><img src="/assets/imgs/gallery/img-s-3.webp" class="has_fade_anim" data-fade-from="right" alt="image"></div><div class="thumb-second"><img src="/assets/imgs/gallery/img-s-4.webp" class="has_fade_anim" data-fade-from="left" alt="image"></div></div></div></div></section>



          <section class="about-area container-hd"><div class="about-area-inner"><div class="thumb"><img src="/assets/imgs/gallery/img-s-30.webp" alt="gallery image"></div><div class="section-content"><div class="bg"><img src="/assets/imgs/gallery/img-s-31.webp" alt="image"></div><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_fade_anim">Simple,
                      scalable,
                      startup-ready</h2></div></div><div class="text-wrapper"><p class="text has_fade_anim" data-fade-from="left">StartupGrow brings websites, branding, SEO, content, PPC, social media, and email into <span>one place</span></p></div><div class="btn-wrapper has_fade_anim" data-ease="bounce"><a href="/contact" class="wc-btn wc-btn-primary btn-text-flip"><span data-text="Learn More">Learn More</span></a></div></div></div></section>



          <section class="team-area"><div class="container"><div class="team-area-inner section-spacing"><div class="section-header"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_fade_anim">Project team</h2></div></div><div class="text-wrapper"><p class="text has_fade_anim">We deploy world-class creative design, team on demand. that can design surest measure's of success is when a client partner with more than once build, ship scale your vision most efficient.</p></div></div><div class="team-wrapper-box"><div class="team-wrapper"><div class="team-box has_fade_anim" data-fade-from="left" data-delay="0.15"><a href="/team"><div class="thumb"><img src="/assets/imgs/team/img-s-1.webp" alt="team icon"></div><div class="content"><h3 class="title">Yadunand Pavithran</h3><p class="text">Team Member</p></div></a></div><div class="team-box has_fade_anim" data-fade-from="left" data-delay="0.30"><a href="/team"><div class="thumb"><img src="/assets/imgs/team/img-s-2.webp" alt="team icon"></div><div class="content"><h3 class="title">Nashid Nihal C</h3><p class="text">Team Member</p></div></a></div><div class="team-box has_fade_anim" data-fade-from="left" data-delay="0.45"><a href="/team"><div class="thumb"><img src="/assets/imgs/team/img-s-3.webp" alt="team icon"></div><div class="content"><h3 class="title">Gokul Krishna</h3><p class="text">Team Member</p></div></a></div><div class="team-box has_fade_anim" data-fade-from="left" data-delay="0.60"><a href="/team"><div class="thumb"><img src="/assets/imgs/team/img-s-4.webp" alt="team icon"></div><div class="content"><h3 class="title">StartupGrow Team</h3><p class="text">Team Member</p></div></a></div></div></div></div></div></section>



          <section class="contact-area"><div class="container"><div class="contact-area-inner section-spacing"><div class="shape-1"><img src="/assets/imgs/shape/img-s-73.webp" alt="shape"></div><div class="section-content"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_fade_anim">Start your experience
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
                      Nashid Nihal C</li>
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

export default function AboutPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/master-about.css" />
      <link rel="stylesheet" href="/assets/css/contact-overrides.css" />
      <div
        className={`public-arolax-page font-heading-beatricetrial-regular-2`}
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      />
    </>
  );
}
