"use client";

import { useEffect } from "react";

export function useHydrationFix() {
  useEffect(() => {
    const clean = () => {
      document.querySelectorAll("[fdprocessedid]").forEach((el) => {
        el.removeAttribute("fdprocessedid");
      });
    };
    clean();
    const observer = new MutationObserver(clean);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
}
