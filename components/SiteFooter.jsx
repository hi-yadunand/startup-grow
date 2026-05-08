"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

function FooterMarkup({ isHomePage }) {
  const footerClassName = [
    "footer-area",
    "pb-0",
    "startupgrow-unified-footer",
    isHomePage ? "section-style" : "startupgrow-inner-footer",
  ].join(" ");

  return (
    <footer className={footerClassName} data-startupgrow-footer>
      <div className="container large">
        <div className="footer-area-inner section-spacing-top">
          <div className="footer-widget-wrapper has_fade_anim" data-fade-from="left">
            <div className="footer-logo">
              <a href="/"><span className="startupgrow-wordmark light">STARTUPGROW</span></a>
            </div>
          </div>
          <div className="footer-widget-wrapper has_fade_anim" data-delay="0.15">
            <h2 className="title">Service</h2>
            <ul className="footer-nav-list">
              <li><a href="/services">SEO</a></li>
              <li><a href="/services">PPC Advertising</a></li>
              <li><a href="/services">Social Media Marketing</a></li>
              <li><a href="/services">Content Marketing</a></li>
              <li><a href="/services">Email Marketing</a></li>
              <li><a href="/services">Web Design &amp; Development</a></li>
            </ul>
          </div>
          <div className="footer-widget-wrapper has_fade_anim" data-delay="0.30">
            <h2 className="title">Company</h2>
            <ul className="footer-nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">Objective</a></li>
              <li><a href="/works">Project Scope</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-widget-wrapper newsletter has_fade_anim" data-fade-from="right" data-delay="0.45">
            <h2 className="title">Abstract</h2>
            <div className="newsletter-text">
              <p className="text">
                StartupGrow is a web-based digital solutions platform that helps startups build their online presence
                through web development and marketing services.
              </p>
            </div>
            <form action="#" className="subscribe-form">
              <div className="input-field">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="subscribe-btn">
                  <img src="/assets/imgs/icon/arrow-light.webp" alt="icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container large">
          <div className="copyright-area-inner">
            <p className="text has_fade_anim" data-fade-from="left">© 2026 STARTUPGROW - Academic Innovation Project for Indian Startups</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteFooter() {
  const pathname = usePathname();
  const [target, setTarget] = useState(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let attempts = 0;
    let timer;

    function findTarget() {
      attempts += 1;
      const smoothContent = document.querySelector("#smooth-content");

      if (smoothContent) {
        setTarget(smoothContent);
        return;
      }

      if (attempts < 30) {
        timer = window.setTimeout(findTarget, 100);
      } else {
        setTarget(document.body);
      }
    }

    setTarget(null);
    timer = window.setTimeout(findTarget, 0);

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [pathname]);

  useEffect(() => {
    if (!target) {
      return;
    }

    const timer = window.setTimeout(() => {
      const footer = document.querySelector("[data-startupgrow-footer]");

      if (footer && window.gsap && window.ScrollTrigger) {
        if (animationRef.current) {
          animationRef.current.revert();
        }

        animationRef.current = window.gsap.context(() => {
          const widgets = footer.querySelectorAll(".footer-widget-wrapper");
          const copyright = footer.querySelector(".copyright-area .text");

          window.gsap.fromTo(
            footer,
            { y: 90, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: footer,
                start: "top 88%",
                once: true,
              },
            }
          );

          window.gsap.fromTo(
            widgets,
            { y: 60, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: footer,
                start: "top 82%",
                once: true,
              },
            }
          );

          if (copyright) {
            window.gsap.fromTo(
              copyright,
              { y: 24, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                delay: 0.35,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: copyright,
                  start: "top 96%",
                  once: true,
                },
              }
            );
          }
        }, footer);
      }

      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }

      if (window.ScrollSmoother && window.ScrollSmoother.get()) {
        window.ScrollSmoother.get().refresh();
      }
    }, 120);

    return () => window.clearTimeout(timer);
  }, [target]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.revert();
      }
    };
  }, []);

  if (!target) {
    return null;
  }

  return createPortal(<FooterMarkup isHomePage={pathname === "/"} />, target);
}
