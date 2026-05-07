"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ArolaxRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    let attempts = 0;
    let timer;

    const runAnimations = () => {
      attempts += 1;

      if (typeof window !== "undefined" && typeof window.initArolax === "function") {
        window.initArolax();
        timer = window.setTimeout(() => {
          if (typeof window.initArolax === "function") {
            window.initArolax();
          }
        }, 160);
        return;
      }

      if (attempts < 30) {
        timer = window.setTimeout(runAnimations, 100);
      }
    };

    timer = window.setTimeout(runAnimations, 0);

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [pathname]);

  return null;
}
