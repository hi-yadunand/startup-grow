(function () {
    "use strict";

    function ready() {
        return Boolean(window.gsap && window.ScrollTrigger);
    }

    function numberValue(value, fallback) {
        if (value === false || value === null || typeof value === "undefined") {
            return fallback;
        }

        var parsed = parseFloat(value);
        return Number.isNaN(parsed) ? fallback : parsed;
    }

    function mark(item, name) {
        var key = "arolax" + name;

        if (item.dataset[key] === "1") {
            return false;
        }

        item.dataset[key] = "1";
        return true;
    }

    function nodes(root, selector) {
        return window.gsap.utils.toArray(root.querySelectorAll(selector));
    }

    function splitText(item, options) {
        if (!window.SplitText) {
            return null;
        }

        try {
            return new window.SplitText(item, options);
        } catch (error) {
            return null;
        }
    }

    function initSmoothScroll() {
        var smootherWrap = document.querySelector("#has_smooth");

        if (
            window.screen.width > 767 &&
            smootherWrap &&
            smootherWrap.classList.contains("has-smooth") &&
            window.ScrollSmoother &&
            !window.ScrollSmoother.get()
        ) {
            window.ScrollSmoother.create({
                smooth: 0.5,
                effects: !(window.screen.width < 1025),
                smoothTouch: 0.5,
                normalizeScroll: true,
                ignoreMobileResize: true,
            });
        }
    }

    function initTextMove(root) {
        nodes(root, ".has_text_move_anim").forEach(function (item) {
            if (!mark(item, "TextMove")) {
                return;
            }

            var delayValue = numberValue(item.getAttribute("data-delay"), 0.1);
            var split = splitText(item, { type: "lines" });

            if (!split) {
                return;
            }

            window.gsap.set(item, { perspective: 400 });

            if (typeof split.split === "function") {
                split.split({ type: "lines" });
            }

            window.gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    duration: 1,
                    scrub: false,
                    markers: false,
                    toggleActions: "play none none none",
                },
            }).from(split.lines, {
                duration: 1,
                delay: delayValue,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1,
            });
        });
    }

    function initCharacter(root) {
        nodes(root, ".has_char_anim").forEach(function (item) {
            if (!mark(item, "Char")) {
                return;
            }

            var staggerValue = numberValue(item.getAttribute("data-stagger"), 0.05);
            var translateXValue = item.getAttribute("data-translateX") ? numberValue(item.getAttribute("data-translateX"), 20) : 20;
            var translateYValue = item.getAttribute("data-translateY") ? numberValue(item.getAttribute("data-translateY"), false) : false;
            var onscrollValue = item.getAttribute("data-on-scroll") || "1";
            var delayValue = numberValue(item.getAttribute("data-delay"), 0.1);
            var durationValue = numberValue(item.getAttribute("data-duration"), 1);
            var easeValue = item.getAttribute("data-ease") || "power2.out";
            var split = splitText(item, { type: "chars, words" });

            if (!split) {
                return;
            }

            var settings = {
                duration: translateXValue && translateYValue ? 2 : durationValue,
                delay: delayValue,
                autoAlpha: 0,
                stagger: staggerValue,
                ease: easeValue,
            };

            if (translateXValue && translateYValue) {
                settings.x = translateXValue;
                settings.y = translateYValue;
            } else if (translateYValue) {
                settings.y = translateYValue;
            } else {
                settings.x = translateXValue || 50;
            }

            if (onscrollValue == 1) {
                settings.scrollTrigger = {
                    trigger: item,
                    start: "top 85%",
                };
            }

            window.gsap.from(split.chars, settings);
        });
    }

    function initWord(root) {
        nodes(root, ".has_word_anim").forEach(function (item) {
            if (!mark(item, "Word")) {
                return;
            }

            var staggerValue = numberValue(item.getAttribute("data-stagger"), 0.04);
            var translateXValue = item.getAttribute("data-translateX") ? numberValue(item.getAttribute("data-translateX"), false) : false;
            var translateYValue = item.getAttribute("data-translateY") ? numberValue(item.getAttribute("data-translateY"), false) : false;
            var onscrollValue = item.getAttribute("data-on-scroll") || "1";
            var delayValue = numberValue(item.getAttribute("data-delay"), 0.1);
            var durationValue = numberValue(item.getAttribute("data-duration"), 0.75);
            var split = splitText(item, { type: "chars, words" });

            if (!split) {
                return;
            }

            var settings = {
                duration: durationValue,
                delay: delayValue,
                autoAlpha: 0,
                stagger: staggerValue,
            };

            if (translateXValue && translateYValue) {
                settings.x = translateXValue;
                settings.y = translateYValue;
            } else if (translateYValue) {
                settings.y = translateYValue;
            } else {
                settings.x = translateXValue || 20;
            }

            if (onscrollValue == 1) {
                settings.scrollTrigger = {
                    trigger: item,
                    start: "top 90%",
                };
            }

            window.gsap.from(split.words, settings);
        });
    }

    function initFade(root) {
        nodes(root, ".has_fade_anim").forEach(function (item) {
            if (!mark(item, "Fade")) {
                return;
            }

            var fadeDirection = item.getAttribute("data-fade-from") || "bottom";
            var onscrollValue = item.getAttribute("data-on-scroll") || "1";
            var durationValue = numberValue(item.getAttribute("data-duration"), 1.15);
            var fadeOffset = numberValue(item.getAttribute("data-fade-offset"), 50);
            var delayValue = numberValue(item.getAttribute("data-delay"), 0.15);
            var easeValue = item.getAttribute("data-ease") || "power2.out";
            var settings = {
                opacity: 0,
                ease: easeValue,
                duration: durationValue,
                delay: delayValue,
            };

            if (fadeDirection === "top") {
                settings.y = -fadeOffset;
            }

            if (fadeDirection === "left") {
                settings.x = -fadeOffset;
            }

            if (fadeDirection === "bottom") {
                settings.y = fadeOffset;
            }

            if (fadeDirection === "right") {
                settings.x = fadeOffset;
            }

            if (onscrollValue == 1) {
                settings.scrollTrigger = {
                    trigger: item,
                    start: "top 85%",
                };
            }

            window.gsap.from(item, settings);
        });
    }

    function initImageReveal(root) {
        nodes(root, ".img_anim_reveal").forEach(function (item) {
            if (!mark(item, "Image")) {
                return;
            }

            var image = item.querySelector("img");

            if (!image) {
                return;
            }

            var timeline = window.gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 50%",
                },
            });

            timeline.set(item, { autoAlpha: 1 });
            timeline.from(item, 1.5, { xPercent: -100, ease: window.Power2 ? window.Power2.out : "power2.out" });
            timeline.from(image, 1.5, { xPercent: 100, scale: 1.3, delay: -1.5, ease: window.Power2 ? window.Power2.out : "power2.out" });
        });
    }

    function initCounters(root) {
        if (!("counterUp" in window) || !window.IntersectionObserver) {
            return;
        }

        var counter = window.counterUp.default;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var item = entry.target;

                if (entry.isIntersecting && !item.classList.contains("is-visible")) {
                    counter(item, { duration: 1500, delay: 16 });
                    item.classList.add("is-visible");
                }
            });
        }, { threshold: 1 });

        nodes(root, ".wc-counter").forEach(function (item) {
            if (mark(item, "Counter")) {
                observer.observe(item);
            }
        });
    }

    function initPinnedSections(root) {
        if (window.screen.width < 1024) {
            return;
        }

        nodes(root, ".section-item").forEach(function (item) {
            if (!mark(item, "Pin")) {
                return;
            }

            window.gsap.to(item, {
                scrollTrigger: {
                    trigger: item,
                    markers: false,
                    pin: true,
                    pinSpacing: false,
                    start: "bottom bottom",
                    end: "bottom -=500",
                },
            });
        });
    }

    window.initArolax = function initArolax() {
        if (!ready()) {
            return;
        }

        window.gsap.registerPlugin(window.ScrollTrigger);

        if (window.ScrollSmoother) {
            window.gsap.registerPlugin(window.ScrollSmoother);
        }

        if (window.ScrollToPlugin) {
            window.gsap.registerPlugin(window.ScrollToPlugin);
        }

        var root = document.querySelector("#smooth-content") || document;

        initSmoothScroll();
        initTextMove(root);
        initCharacter(root);
        initWord(root);
        initFade(root);
        initImageReveal(root);
        initCounters(root);
        initPinnedSections(root);

        window.requestAnimationFrame(function () {
            window.ScrollTrigger.refresh();

            if (window.ScrollSmoother && window.ScrollSmoother.get()) {
                window.ScrollSmoother.get().refresh();
            }
        });
    };
}());
