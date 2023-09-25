import HamburgerBtn from "../components/HamburgerBtn";
import useStickyNav from "../hooks/useStickyNav";
import useToggleMobileNav from "../hooks/useToggleMobileNav";
import CNLogo from "/public/CNLogo.svg";

function Navbar({ children }) {
  const { menuIsOpen, setMenuIsOpen } = useToggleMobileNav();
  const { stickyNav } = useStickyNav();

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav id="navbar" className={`${stickyNav && "is-sticky"}`}>
      <div className="navbar-wrapper">
        <img src={CNLogo} alt="logo" onClick={handleScrollToTop} />
        {children}
        <HamburgerBtn
          menuIsOpen={menuIsOpen}
          onClick={() => setMenuIsOpen((isOpen) => !isOpen)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
