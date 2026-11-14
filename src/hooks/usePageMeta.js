import { useEffect } from "react";
import { siteMeta } from "../data/siteMeta";

/**
 * Keeps document.title and the meta description in sync with the active route.
 *
 * Every route that renders sets its own values, so no restore-on-unmount is
 * needed: when the URL changes, the next page's effect overwrites these tags.
 * The home page passes the defaults from src/data/siteMeta.js.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');

    document.title = title || siteMeta.title;
    if (meta) meta.setAttribute("content", description || siteMeta.description);
  }, [title, description]);
}
