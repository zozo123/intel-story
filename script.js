/* Scroll reveal + back-to-top for the Intel story page */
(function () {
  "use strict";

  // Tag elements for entrance animation
  var revealSelectors = [
    ".thesis__panel", ".feature__caption", ".feature__figure",
    ".phase__header", ".panel", ".leader", ".reckoning__title",
    ".reckoning__dek", ".edict", ".card", ".bottomline__text"
  ];
  var nodes = document.querySelectorAll(revealSelectors.join(","));
  nodes.forEach(function (n) { n.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach(function (n) { io.observe(n); });
  } else {
    nodes.forEach(function (n) { n.classList.add("in"); });
  }

  // Back-to-top button
  var btn = document.getElementById("toTop");
  if (btn) {
    var onScroll = function () {
      if (window.scrollY > 600) btn.classList.add("show");
      else btn.classList.remove("show");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    onScroll();
  }
})();
