"use client";

import React, { useEffect } from "react";

export default function ScrollRevealManager() {
  useEffect(() => {
    const selector =
      ".reveal-fade-up, .reveal-fade-in, .reveal-scale-up, .reveal-fade-right, .reveal-fade-left, [data-reveal]";

    const checkVisibleElements = () => {
      const elements = document.querySelectorAll(selector);
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        if (el.classList.contains("is-revealed")) return;
        const rect = el.getBoundingClientRect();
        // If element is inside or above the lower threshold of viewport
        if (rect.top <= windowHeight - 40 && rect.bottom >= 0) {
          el.classList.add("is-revealed");
        }
      });
    };

    // 1. Initial check after preloader / page render
    checkVisibleElements();
    const initialTimer = setTimeout(checkVisibleElements, 300);
    const secondaryTimer = setTimeout(checkVisibleElements, 1200);

    // 2. IntersectionObserver for efficient GPU scroll observation
    let observer: IntersectionObserver | null = null;

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -50px 0px",
          threshold: 0.1,
        }
      );

      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        if (!el.classList.contains("is-revealed")) {
          observer?.observe(el);
        }
      });
    }

    // 3. Connect to Lenis smooth scroll ticker & window scroll
    const handleScroll = () => {
      checkVisibleElements();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Connect to Lenis if attached to window
    const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: () => void) => void } }).__lenis;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", handleScroll);
    }

    // 4. MutationObserver in case dynamic tabs or content switch
    const mutationObserver = new MutationObserver(() => {
      if (observer) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          if (!el.classList.contains("is-revealed")) {
            observer.observe(el);
          }
        });
      }
      checkVisibleElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(secondaryTimer);
      window.removeEventListener("scroll", handleScroll);
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
