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


          <section class="hero-area"><div class="container"><div class="hero-area-inner"><div class="section-content"><div class="section-title-wrapper"><div class="title-wrapper"><h1 class="section-title large has_fade_anim">Need digital <br>
                        support? <br>
                        contact
                        StartupGrow!</h1></div></div><div class="content-last"><div class="col-first"><div class="image-box overflow-hidden"><img src="/assets/imgs/gallery/img-s-106.webp" data-speed="0.9" alt="image"></div><div class="contact-box"><div class="shape-1"><img src="/assets/imgs/shape/img-s-89.webp" alt="shape"></div><span class="title">Direct contact: </span><p class="link"><a href="#">startupgrow@example.com</a></p></div></div><div class="col-second"><div class="image-box"><img src="/assets/imgs/gallery/img-s-107.webp" alt="image"></div><div class="image-box overflow-hidden"><img src="/assets/imgs/gallery/img-s-108.webp" data-speed="0.9" alt="image"></div></div></div></div></div></div></section><div class="image-wrapper overflow-hidden"><img class="w-100" src="/assets/imgs/gallery/img-s-105.webp" data-speed="0.9" alt="image"></div>



          <section class="contact-area"><div class="container"><div class="contact-area-inner section-spacing"><div class="section-header"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title large has_fade_anim">Send your
                        startup request!</h2></div></div><div class="text-wrapper"><p class="text has_fade_anim">Tell us what your startup needs and the team will plan the next step.</p></div></div><div class="section-content"><div class="info-box has_fade_anim"><div class="text-wrapper"><p class="text">Share your website, branding, SEO, social media, content, PPC, or email marketing requirement.</p></div><ul class="contact-list"><li><a href="tel:+881750660600">Contact and Request Module</a></li><li><a href="#">startupgrow@example.com</a></li><li>Digital Solutions <br>for Indian Startups</li></ul></div><div class="contact-wrap has_fade_anim" data-delay="0.30"><form action="#"><div class="contact-formwrap"><div class="contact-formfield"><input type="text" name="Name" id="Name" placeholder="Name*"></div><div class="contact-formfield"><input type="text" name="Email" id="Email" placeholder="Email*"></div><div class="contact-formfield"><input type="text" name="Phone" id="Phone" placeholder="Phone"></div><div class="contact-formfield"><input type="text" name="Subject" id="Subject" placeholder="Subject*"></div><div class="contact-formfield messages"><input type="text" name="Messages" id="Messages" placeholder="Messages*"></div></div><div class="submit-btn"><button type="submit" class="wc-btn wc-btn-primary btn-text-flip"><span data-text="Send Message">Send Message</span></button></div></form></div></div></div></div></section>


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

export default function ContactPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/master-contact.css" />
      <link rel="stylesheet" href="/assets/css/contact-overrides.css?v=3" />
      <div
        className={`public-arolax-page font-heading-beatricetrial-regular-2`}
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      />
    </>
  );
}
