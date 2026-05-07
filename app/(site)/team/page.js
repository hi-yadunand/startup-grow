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


          <section class="hero-area"><div class="container large"><div class="hero-area-inner"><div class="section-content"><div class="btn-wrapper has_fade_anim" data-fade-from="left"><a href="/contact" class="wc-btn wc-btn-underline">Meet the team building StartupGrow for Indian startups.<i class="fa-solid fa-arrow-right"></i></a></div><div class="content-last"><div class="section-title-wrapper"><div class="title-wrapper"><h1 class="section-title large has_text_move_anim">Team members of
                          StartupGrow.</h1></div></div><div class="text-wrapper"><p class="text has_fade_anim" data-fade-from="left">StartupGrow is an academic innovation project built by a focused student team.</p></div><div class="fun-fact has_fade_anim" data-fade-from="bottom"><span class="number wc-counter">3</span><p class="text">Team Members</p></div></div></div></div></div></section><div class="image-wrapper"><div class="container large"><div class="p-relative"><div class="experience has_fade_anim" data-fade-from="top" data-ease="bounce"><h2 class="number wc-counter">6</h2><h2 class="text">Core <br>services</h2></div></div></div><img class="w-100 has_fade_anim" data-on-scroll="0" src="/assets/imgs/gallery/img-s-104.webp" alt="image"></div>



          <section class="team-area startupgrow-team-members"><div class="container"><div class="team-area-inner section-spacing"><div class="section-header"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_text_move_anim">Bringing planning, design, and development together!</h2></div></div><div class="text-wrapper"><p class="text has_fade_anim">The team works together on research, design, development, testing, and presentation.</p></div></div><div class="team-wrapper-box"><div class="team-wrapper"><div class="team-box has_fade_anim" data-delay="0.15"><a href="/team"><div class="thumb"><img src="/team-members/Yadunand%20Pavithran.jpg" alt="Yadunand Pavithran"></div><div class="content"><h3 class="title">Yadunand Pavithran</h3><p class="text">Team Member</p></div></a></div><div class="team-box has_fade_anim" data-delay="0.30"><a href="/team"><div class="thumb"><img src="/team-members/Nashith%20Nihal%20C.jpeg" alt="Nashith Nihal C"></div><div class="content"><h3 class="title">Nashith Nihal C</h3><p class="text">Team Member</p></div></a></div><div class="team-box has_fade_anim" data-delay="0.45"><a href="/team"><div class="thumb"><img src="/team-members/Gokul%20Krishna.jpeg" alt="Gokul Krishna"></div><div class="content"><h3 class="title">Gokul Krishna</h3><p class="text">Team Member</p></div></a></div></div></div></div></div></section>



          <section class="community-area"><div class="container"><div class="community-area-inner section-spacing"><div class="section-content"><div class="section-title-wrapper"><div class="title-wrapper"><h2 class="section-title has_fade_anim">Future . Community . Honor </h2></div></div><div class="text-wrapper"><p class="text has_fade_anim">What sets us apart is what brings us together – a shared passion for solving business challenges through strategy, design, and engineering. We are the sum total of our team, their unique perspectives, capabilities, and our ability to collaborate from ideation to deployment.</p></div><div class="gallery-wrapper-box"><div class="gallery-wrapper has_fade_anim"><div><div class="thumb"><img src="/assets/imgs/gallery/img-s-94.webp" alt="image"></div></div><div><div class="thumb"><img src="/assets/imgs/gallery/img-s-95.webp" alt="image"></div></div><div><div class="thumb"><img src="/assets/imgs/gallery/img-s-96.webp" alt="image"></div><div class="thumb"><img src="/assets/imgs/gallery/img-s-97.webp" alt="image"></div></div></div></div></div></div></div></section>


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

export default function TeamPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/master-team.css" />
      <link rel="stylesheet" href="/assets/css/contact-overrides.css?v=3" />
      <div
        className={`public-arolax-page font-heading-beatricetrial-regular-2`}
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      />
    </>
  );
}
