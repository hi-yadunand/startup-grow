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


          <section class="faq-area"><div class="container large"><div class="faq-area-inner section-spacing-bottom"><div class="section-content"><div class="btn-wrapper has_fade_anim" data-fade-from="left"><a href="/contact" class="wc-btn wc-btn-underline">Simple answers about StartupGrow<i class="fa-solid fa-arrow-right"></i></a></div><div class="content-last"><div class="section-title-wrapper"><div class="title-wrapper"><h1 class="section-title large has_fade_anim">Frequently asked
                          questions!</h1></div></div><div class="text-wrapper"><p class="text has_fade_anim" data-delay="0.30">StartupGrow is a web-based digital solutions platform for Indian startups.</p></div><div class="accordion-wrapper has_fade_anim" data-delay="0.45"><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What is StartupGrow?</button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body">StartupGrow helps early-stage teams explore digital services, request support, and plan their online growth in a simple way.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingTwo"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Who can use StartupGrow?</button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"><div class="accordion-body">StartupGrow helps early-stage teams explore digital services, request support, and plan their online growth in a simple way.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">What services are included?</button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><div class="accordion-body">StartupGrow helps early-stage teams explore digital services, request support, and plan their online growth in a simple way.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">What comes next for the project?</button></h2><div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample"><div class="accordion-body">StartupGrow helps early-stage teams explore digital services, request support, and plan their online growth in a simple way.</div></div></div></div></div></div></div></div></section>


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
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
              <div class="footer-widget-wrapper newsletter">
                <h2 class="title">Abstract</h2>
                <div class="newsletter-text">
                  <p class="text">StartupGrow helps early-stage Indian startups build their online presence through web development and digital marketing services.</p>
                </div>
                <form action="#" class="subscribe-form">
                  <div class="input-field">
                    <input type="email" placeholder="Enter your email">
                    <button type="submit" class="subscribe-btn"><img src="/assets/imgs/icon/arrow-light.webp" alt="icon"></button>
                  </div>
                </form>
              </div>
              <div class="footer-widget-wrapper location">
                <h2 class="title">Project</h2>
                <ul class="footer-nav-list">
                  <li><a href="/works">Academic Innovation Project<br>for Indian Startups</a></li>
                </ul>
              </div>
              <div class="footer-widget-wrapper location">
                <h2 class="title">Contact</h2>
                <ul class="footer-nav-list">
                  <li><a href="mailto:startupgrow@example.com">startupgrow@example.com</a></li>
                  <li><a href="/contact">Digital Agency Enquiry</a></li>
                </ul>
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

export default function FaqPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.initArolax) {
      window.initArolax();
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/assets/css/master-faq.css" />
      <link rel="stylesheet" href="/assets/css/contact-overrides.css?v=4" />
      <div
        className={`public-arolax-page font-heading-beatricetrial-regular-2`}
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      />
    </>
  );
}
