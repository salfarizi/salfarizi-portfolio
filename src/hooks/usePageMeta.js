import { useEffect } from "react";

/**
 * Sets the document title and meta description for a route,
 * then restores the previous values on unmount.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");

    if (title) document.title = title;
    if (meta && description) meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
