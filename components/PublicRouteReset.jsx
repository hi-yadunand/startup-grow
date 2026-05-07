"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PublicRouteReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.ScrollSmoother?.get?.()?.kill?.();
    window.ScrollTrigger?.getAll?.().forEach((trigger) => trigger.kill());

    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const smoothWrapper = document.getElementById("smooth-wrapper");
      const smoothContent = document.getElementById("smooth-content");

      [smoothWrapper, smoothContent].forEach((element) => {
        if (!element) {
          return;
        }

        element.style.removeProperty("transform");
        element.style.removeProperty("translate");
        element.style.removeProperty("inset");
        element.style.removeProperty("position");
        element.style.removeProperty("height");
        element.style.removeProperty("overflow");
      });
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
    window.setTimeout(resetScroll, 60);
  }, [pathname]);

  return null;
}
