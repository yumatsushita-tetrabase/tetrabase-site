(() => {
  const logo = document.getElementById("brandLogo");
  const anchor = document.getElementById("logoAnchor");
  if (!logo || !anchor) return;

  const root = document.documentElement;

  function getHeaderH() {
    const v = getComputedStyle(root).getPropertyValue("--header-h").trim();
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 64;
  }

  function computeTop() {
    const headerH = getHeaderH();
    const anchorRect = anchor.getBoundingClientRect();

    const stuckTop = (headerH - 60) / 2;
    const followTop = anchorRect.top;

    const top = Math.max(stuckTop, followTop);

    const stuck = top === stuckTop;
    logo.classList.toggle("is-stuck", stuck);

    logo.style.top = top + "px";
  }

  window.addEventListener("scroll", computeTop, { passive: true });
  window.addEventListener("resize", computeTop);
  computeTop();
})();
