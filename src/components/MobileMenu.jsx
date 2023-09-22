import useToggleMobileNav from "../hooks/useToggleMobileNav";

function MobileMenu({ children }) {
  const { menuIsOpen } = useToggleMobileNav();

  return (
    <div id="mobileMenu" className={`${menuIsOpen ? "open" : "close"}`}>
      {children}
    </div>
  );
}

export default MobileMenu;
