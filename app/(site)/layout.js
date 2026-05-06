import Script from "next/script";

export default function SiteLayout({ children }) {
  return (
    <div className="font-heading-instumentsans-semibold">
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/all.min.css" />
      <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/css/progressbar.css" />
      <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
      <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
      <link rel="stylesheet" href="/assets/css/master-branding-agency.css" />
      
      {children}

      <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/counter.js" strategy="lazyOnload" />
      <Script src="/assets/js/progressbar.js" strategy="lazyOnload" />
      <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/ScrollToPlugin.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/SplitText.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/backToTop.js" strategy="lazyOnload" />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />
      <Script src="/assets/js/error-handling.js" strategy="lazyOnload" />
      <Script src="/assets/js/offcanvas.js" strategy="lazyOnload" />
    </div>
  );
}
