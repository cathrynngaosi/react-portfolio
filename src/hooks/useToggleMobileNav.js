import { useEffect, useState } from "react";

function useToggleMobileNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // toggle menu on click of icon
  useEffect(() => {
    console.log(menuIsOpen);
    async function showNavbar() {
      if (menuIsOpen) {
        document.getElementById("mobileMenu").className = "open";
      } else {
        document.getElementById("mobileMenu").className = "close";
      }
    }

    showNavbar();
  }, [menuIsOpen]);

  return { menuIsOpen, setMenuIsOpen };
}

export default useToggleMobileNav;
