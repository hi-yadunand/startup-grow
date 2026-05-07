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
            <span class="startupgrow-wordmark light">STARTUPGROW</span>
          </a>
        </div>
        <div class="header__nav pos-center">
          <nav class="main-menu menu-light">
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


          <section class="hero-area"><div class="container"><div class="hero-area-inner"><div class="section-content"><div class="section-title-wrapper"><div class="title-wrapper"><h1 class="section-title large has_fade_anim">Build startup growth! <br><img class="shape-1" src="/assets/imgs/client/img-s-5.webp" alt="image"> academic project
                        with StartupGrow
                      </h1></div></div><div class="text-box"><div class="subtitle-wrapper"><span class="section-subtitle has-right-line has_fade_anim" data-fade-from="left" data-delay="0.30">Career</span></div><div class="text-wrapper"><p class="text has_fade_anim" data-fade-from="left" data-delay="0.45">StartupGrow is designed as a practical project where digital services, request handling, and basic admin workflows come together.</p></div></div><div class="thumb overflow-hidden"><img src="/assets/imgs/gallery/img-s-93.webp" data-speed="0.8" alt="image"></div></div></div></div></section>



          <section class="community-area"><div class="container"><div class="community-area-inner section-spacing"><div class="section-content"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_fade_anim">Plan . Design . Develop </h2></div></div><div class="text-wrapper"><p class="text has_fade_anim">The project combines requirement analysis, UI design, service planning, contact flow, and request management for early-stage Indian startups.</p></div><div class="gallery-wrapper-box has_fade_anim"><div class="gallery-wrapper"><div><div class="thumb"><img src="/assets/imgs/gallery/img-s-94.webp" alt="image"></div></div><div><div class="thumb"><img src="/assets/imgs/gallery/img-s-95.webp" alt="image"></div></div><div><div class="thumb"><img src="/assets/imgs/gallery/img-s-96.webp" alt="image"></div><div class="thumb"><img src="/assets/imgs/gallery/img-s-97.webp" alt="image"></div></div></div></div></div></div></div></section>



          <section class="roles-area"><div class="container"><div class="roles-area-inner section-spacing"><div class="section-header"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_fade_anim">Project <br>modules</h2></div></div></div><div class="roles-wrapper-box"><div class="roles-wrapper"><div class="has_fade_anim"><a href="#"><div class="role-item"><span class="serial">01</span><h3 class="title">User Interface Module</h3><p class="positions">(StartupGrow)</p><span class="icon"><img src="/assets/imgs/icon/plus-2-light.webp" alt="icon"></span></div></a></div><div class="has_fade_anim"><a href="#"><div class="role-item"><span class="serial">02</span><h3 class="title">Service Module</h3><p class="positions">(StartupGrow)</p><span class="icon"><img src="/assets/imgs/icon/plus-2-light.webp" alt="icon"></span></div></a></div><div class="has_fade_anim"><a href="#"><div class="role-item"><span class="serial">03</span><h3 class="title">Contact Module</h3><p class="positions">(StartupGrow)</p><span class="icon"><img src="/assets/imgs/icon/plus-2-light.webp" alt="icon"></span></div></a></div><div class="has_fade_anim"><a href="#"><div class="role-item"><span class="serial">04</span><h3 class="title">Admin Module</h3><p class="positions">(StartupGrow)</p><span class="icon"><img src="/assets/imgs/icon/plus-2-light.webp" alt="icon"></span></div></a></div></div></div></div></div></section>



          <section class="process-area"><div class="container"><div class="process-area-inner section-spacing"><div class="section-header"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_fade_anim">Why this project matters for startups!</h2></div></div><div class="text-wrapper"><p class="text has_fade_anim">We bet on brands that shift categories and add value to people's lives; and on founders who are motivated to shape</p></div></div><div class="process-wrapper-box"><div class="process-wrapper"><div class="process-box has_fade_anim" data-delay="0.15"><div class="thumb"><img class="show-light" src="/assets/imgs/icon/icon-s-42.webp" alt="process icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-42-light.webp" alt="process icon"></div><div class="content"><h3 class="title">Innovation</h3><p class="text">StartupGrow turns early startup challenges into a simple digital growth path.</p></div></div><div class="process-box has_fade_anim" data-delay="0.30"><div class="thumb"><img class="show-light" src="/assets/imgs/icon/icon-s-43.webp" alt="process icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-43-light.webp" alt="process icon"></div><div class="content"><h3 class="title">Collaboration</h3><p class="text">The system connects users, service requests, and basic admin tracking in one flow.</p></div></div><div class="process-box has_fade_anim" data-delay="0.45"><div class="thumb"><img class="show-light" src="/assets/imgs/icon/icon-s-44.webp" alt="process icon"><img class="show-dark" src="/assets/imgs/icon/icon-s-44-light.webp" alt="process icon"></div><div class="content"><h3 class="title">Empathy</h3><p class="text">The platform keeps the experience easy for founders with limited time, budget, and technical support.</p></div></div></div></div></div></div></section>


        </main>


        <footer class="footer-area section-style pb-0 startupgrow-unified-footer">
          <div class="container large">
            <div class="footer-area-inner section-spacing-top">
              <div class="footer-widget-wrapper">
                <div class="footer-logo">
                  <a href="/"><span class="startupgrow-wordmark light">STARTUPGROW</span></a>
                </div>
              </div>
              <div class="footer-widget-wrapper">
                <h2 class="title">Service</h2>
                <ul class="footer-nav-list">
                  <li><a href="/services">SEO</a></li>
                  <li><a href="/services">PPC Advertising</a></li>
                  <li><a href="/services">Social Media Marketing</a></li>
                  <li><a href="/services">Content Marketing</a></li>
                  <li><a href="/services">Email Marketing</a></li>
                  <li><a href="/services">Web Design &amp; Development</a></li>
                </ul>
              </div>
              <div class="footer-widget-wrapper">
                <h2 class="title">Company</h2>
                <ul class="footer-nav-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">Objective</a></li>
                  <li><a href="/works">Project Scope</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div class="footer-widget-wrapper newsletter">
                <h2 class="title">Abstract</h2>
                <div class="newsletter-text">
                  <p class="text">StartupGrow is a web-based digital solutions platform that helps startups build their online presence through web development and marketing services.</p>
                </div>
                <form action="#" class="subscribe-form">
                  <div class="input-field">
                    <input type="email" placeholder="Enter your email">
                    <button type="submit" class="subscribe-btn">
                      <img src="/assets/imgs/icon/arrow-light.webp" alt="icon">
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="copyright-area">
            <div class="container large">
              <div class="copyright-area-inner">
                <p class="text">© 2026 STARTUPGROW – Academic Innovation Project for Indian Startups</p>
              </div>
            </div>
          </div>
        </footer>


      </div>
    </div>
  </div>`;

export default function CareerPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/master-career.css" />
      <link rel="stylesheet" href="/assets/css/contact-overrides.css?v=4" />
      <div
        className={`public-arolax-page font-heading-beatricetrial-regular-2`}
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      />
    </>
  );
}
