import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view.
 * Uses scroll position relative to a tunable offset so the active link
 * updates near the top of the viewport rather than only when sections
 * fully intersect.
 */
export const useActiveSection = (sectionIds: string[], offset = 120) => {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const compute = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) current = id;
      }
      // bottom of page → last
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = sectionIds[sectionIds.length - 1] ?? current;
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [sectionIds, offset]);

  return active;
};
