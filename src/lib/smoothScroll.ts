// Shared smooth-scroll helper so all CTAs / nav links jump to sections
// with the same offset and behavior — no extra delay.
export const smoothScrollTo = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  offset = 72,
) => {
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
  history.replaceState(null, "", href);
};
