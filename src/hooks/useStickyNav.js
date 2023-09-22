import { useEffect, useState } from "react";

function useStickyNav() {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    function changeNav() {
      window.scrollY >= 80 ? setStickyNav(true) : setStickyNav(false);
    }
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);
  return { stickyNav };
}

export default useStickyNav;
