
export default function HomePage() {
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
            <img src="assets/imgs/logo/logo.png" alt="Site Logo" />
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
          <div className="wc-btn-group">
            <a className="wc-btn wc-btn-circle" href="contact.html">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="wc-btn wc-btn-primary" href="contact.html">Get started</a>
            <a className="wc-btn wc-btn-circle" href="contact.html">
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
                      <h1 className="section-title has_char_anim" data-delay="0.15" data-translateX="50">We <br />
                        sharp <span className="has_fade_anim" data-fade-from="left" data-delay="1">Pro</span>
                        brand
                        Value
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
                        <span className="section-subtitle">Who we are</span>
                      </div>
                    </div>
                    <div className="content-last">
                      <div className="text-wrapper">
                        <p className="text has_text_move_anim">Arolax is a full-service brand agency for purpose-driven
                          companies. We build
                          brands that look good, sound good, and do good.</p>
                      </div>
                      <div className="btn-wrapper has_fade_anim" data-fade-from="left">
                        <div className="wc-btn-group">
                          <a className="wc-btn wc-btn-circle" href="contact.html"><i className="fa-solid fa-arrow-right"></i></a>
                          <a className="wc-btn wc-btn-primary" href="contact.html">Get started</a>
                          <a className="wc-btn wc-btn-circle" href="contact.html"><i className="fa-solid fa-arrow-right"></i></a>
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
                  <div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Selected
                        work</h2></div></div>
                </div>
                <div className="works-wrapper-box">
                  <div className="works-wrapper">
                    <div className="work-box"><div className="thumb"><a href="works.html"><img src="assets/imgs/works/img-s-31.webp" alt="work image" /></a></div><div className="content"><h3 className="title">Smart T-shirt <br />Artwork</h3><div className="tags"><div className="tag">Branding</div><div className="tag">Business</div></div></div></div>
                    <div className="work-box"><div className="thumb"><a href="works.html"><img src="assets/imgs/works/img-s-32.webp" alt="work image" /></a></div><div className="content"><h3 className="title">Crafted Payment <br />Get-way</h3><div className="tags"><div className="tag">Branding</div><div className="tag">Business</div></div></div></div>
                    <div className="work-box"><div className="thumb"><a href="works.html"><img src="assets/imgs/works/img-s-33.webp" alt="work image" /></a></div><div className="content"><h3 className="title">Wild Code Zem <br />Boxes</h3><div className="tags"><div className="tag">Branding</div><div className="tag">Business</div></div></div></div>
                    <div className="work-box"><div className="thumb"><a href="works.html"><img src="assets/imgs/works/img-s-34.webp" alt="work image" /></a></div><div className="content"><h3 className="title">Floral Business <br />Card</h3><div className="tags"><div className="tag">Branding</div><div className="tag">Business</div></div></div></div>
                  </div>
                </div>
                <div className="section-content section-spacing-top"><div></div><div className="content-last"><div className="text-wrapper"><p className="text has_text_move_anim">We are delivering brands with high objectives the strategy and the creativity it takes to have that impact, by the professional team with any creativity.</p></div><div className="btn-wrapper has_fade_anim" data-fade-from="left"><div className="wc-btn-group"><a className="wc-btn wc-btn-circle" href="works.html"><i className="fa-solid fa-arrow-right"></i></a><a className="wc-btn wc-btn-primary" href="works.html">View all works</a><a className="wc-btn wc-btn-circle" href="works.html"><i className="fa-solid fa-arrow-right"></i></a></div></div></div></div>
              </div>
            </div>
          </section>
          

          
          <section className="fun-fact-area section-style section-item">
            <div className="container large"><div className="fun-fact-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Designing great products
                        is so hard. But we've done
                        more than 150 of them in
                        this year.</h2></div></div></div><div className="counter-wrapper-box"><div className="counter-box overflow-hidden"><img className="shape-1 show-light img_anim_reveal" src="assets/imgs/shape/img-s-47.webp" alt="image" /><img className="shape-1 show-dark img_anim_reveal" src="assets/imgs/shape/img-s-47-light.webp" alt="image" /><h3 className="number wc-counter has_fade_anim" data-fade-from="left">150</h3></div></div></div></div>
          </section>
          

          
          <section className="service-area section-style section-item">
            <div className="container large"><div className="service-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">We solve your brand problem in a different method</h2></div></div></div><div className="services-wrapper-box"><div className="services-wrapper">
              <div className="has_fade_anim" data-delay="0.15"><a href="services.html"><div className="service-box"><span className="number">01</span><div className="icon"><img src="assets/imgs/icon/icon-s-1-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Brand Strategy</h3><p className="text">We closely collaborate with our clients to understand the needs and goals of the key to design</p></div></div></a></div>
              <div className="has_fade_anim" data-delay="0.30"><a href="services.html"><div className="service-box"><span className="number">02</span><div className="icon"><img src="assets/imgs/icon/icon-s-2-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Brand Identity</h3><p className="text">We closely collaborate with our clients to understand the needs and goals of the key to design</p></div></div></a></div>
              <div className="has_fade_anim" data-delay="0.45"><a href="services.html"><div className="service-box"><span className="number">03</span><div className="icon"><img src="assets/imgs/icon/icon-s-3-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Brand Guidelines</h3><p className="text">We closely collaborate with our clients to understand the needs and goals of the key to design</p></div></div></a></div>
              <div className="has_fade_anim" data-delay="0.60"><a href="services.html"><div className="service-box"><span className="number">04</span><div className="icon"><img src="assets/imgs/icon/icon-s-4-light.webp" alt="service icon" /></div><div className="content"><h3 className="title">Brand Support</h3><p className="text">We closely collaborate with our clients to understand the needs and goals of the key to design</p></div></div></a></div>
            </div></div><div className="info-text has_fade_anim" data-fade-from="left"><p className="text">Save your precious time for finding a solution. <br /><a className="wc-btn wc-btn-underline" href="contact.html">Contact us now</a></p></div></div></div>
          </section>
          

          
          <section className="team-area section-style section-item">
            <div className="container large"><div className="team-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">The talented team
                        behind the creative
                        design</h2></div></div><div className="text-wrapper"><p className="text has_fade_anim">Our dedication and commitment to excellence ensure that your business thrives in the ever-evolving digital realm.</p></div></div><div className="team-wrapper-box"><div className="team-wrapper">
              <div className="team-box"><div className="thumb"><a href="team.html"><img src="assets/imgs/team/img-s-15.webp" alt="team image" /></a></div><div className="content"><div className="top"><h3 className="name"><a href="team.html">Kamal Abraham</a></h3><p className="post">CEO, Alaska</p></div></div></div>
              <div className="team-box"><div className="thumb"><a href="team.html"><img src="assets/imgs/team/img-s-16.webp" alt="team image" /></a></div><div className="content"><div className="top"><h3 className="name"><a href="team.html">Selina Gomaze</a></h3><p className="post">Jr. Executive</p></div></div></div>
              <div className="team-box"><div className="thumb"><a href="team.html"><img src="assets/imgs/team/img-s-17.webp" alt="team image" /></a></div><div className="content"><div className="top"><h3 className="name"><a href="team.html">Pedrik Vadra</a></h3><p className="post">Logo Designer</p></div></div></div>
            </div></div></div></div>
          </section>
          

          
          <section className="blog-area section-style section-item">
            <div className="container large"><div className="blog-area-inner section-spacing"><div className="section-header"><div className="section-title-wrapper"><div className="title-wrapper"><h2 className="section-title has_fade_anim">Journal from
                        arolax</h2></div></div><div className="btn-wrapper has_fade_anim" data-fade-from="right"><div className="wc-btn-group"><a className="wc-btn wc-btn-circle" href="blog.html"><i className="fa-solid fa-arrow-right"></i></a><a className="wc-btn wc-btn-primary" href="blog.html">read all posts</a><a className="wc-btn wc-btn-circle" href="blog.html"><i className="fa-solid fa-arrow-right"></i></a></div></div></div><div className="blogs-wrapper-box"><div className="blogs-wrapper"><article className="blog has_fade_anim" data-fade-from="right" data-delay="0.15"><div className="thumb"><a href="blog.html"><img src="assets/imgs/blog/img-s-8.webp" alt="blog image" /></a></div><div className="content"><h2 className="title"><a href="blog.html">A simple guide to retrieval auto generated read content models</a></h2><div className="meta-list"><a href="#"><span className="meta tag">Branding</span></a><span className="meta date">14 Jan 2024</span></div></div></article><article className="blog has_fade_anim" data-fade-from="right" data-delay="0.30"><div className="thumb"><a href="blog.html"><img src="assets/imgs/blog/img-s-9.webp" alt="blog image" /></a></div><div className="content"><h2 className="title"><a href="blog.html">The complex but awesome CSS border-image property for web design</a></h2><div className="meta-list"><a href="#"><span className="meta tag">Branding</span></a><span className="meta date">14 Jan 2024</span></div></div></article></div></div></div></div>
          </section>
          

          
          <section className="cta-area section-style section-item"><div className="container large"><div className="cta-area-inner section-spacing"><div className="section-content"><div className="section-title-wrapper"><div className="subtitle-wrapper"><span className="section-subtitle has_fade_anim">Have a project in mind?</span></div><div className="title-wrapper"><h2 className="section-title has_fade_anim">Let’s work
                        together</h2></div></div><div className="btn-wrapper has_fade_anim"><div className="wc-btn-group"><a className="wc-btn wc-btn-circle" href="contact.html"><i className="fa-solid fa-arrow-right"></i></a><a className="wc-btn wc-btn-primary" href="contact.html">contact us</a><a className="wc-btn wc-btn-circle" href="contact.html"><i className="fa-solid fa-arrow-right"></i></a></div></div></div></div></div></section>
          

        </main>

        
        <footer className="footer-area section-style pb-0">
          <div className="container large">
            <div className="footer-area-inner section-spacing-top">
              <div className="footer-widget-wrapper">
                <div className="footer-logo">
                  <a href="#"><img src="assets/imgs/logo/logo-light-2.png" alt="site-logo" /></a>
                </div>
              </div>
              <div className="footer-widget-wrapper">
                <h2 className="title">Service</h2>
                <ul className="footer-nav-list">
                  <li><a href="#">UI/UX Design</a></li>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Webflow</a></li>
                  <li><a href="#">Development</a></li>
                </ul>
              </div>
              <div className="footer-widget-wrapper">
                <h2 className="title">Company</h2>
                <ul className="footer-nav-list">
                  <li><a href="branding-agency.html">Home</a></li>
                  <li><a href="about.html">Agency</a></li>
                  <li><a href="works.html">Achievement</a></li>
                  <li><a href="career.html">Career</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
              <div className="footer-widget-wrapper newsletter">
                <h2 className="title">Newsletter</h2>
                <div className="newsletter-text">
                  <p className="text">Feel free to reach out if you want to collaborate with us, or simply have a chat.
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
              <div className="footer-widget-wrapper location">
                <h2 className="title">New York</h2>
                <ul className="footer-nav-list">
                  <li><a href="#">789 Madison Avenue, <br />
                      New York</a></li>
                </ul>
              </div>
              <div className="footer-widget-wrapper location">
                <h2 className="title">London</h2>
                <ul className="footer-nav-list">
                  <li><a href="#">4517 Washington Ave. <br />
                      New York</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container large">
              <div className="copyright-area-inner">
                <p className="text">© 2024-25 <a href="https://themeforest.net/user/crowdytheme"
                    target="_blank">crowdyTheme</a> Agency
                </p>
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
