import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RouteScrollManager() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (!hash || hash === "#top") {
        window.scrollTo({ top: 0 });
        return;
      }

      if (hash) {
        const target = document.getElementById(hash.slice(1));

        if (target) {
          target.scrollIntoView();
          return;
        }
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

export default RouteScrollManager;
