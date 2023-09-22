function HamburgerBtn({ menuIsOpen, onClick }) {
  return (
    <div id="mobileNav">
      <button
        className={`${menuIsOpen ? "open" : "hamburger"}`}
        onClick={onClick}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
}

export default HamburgerBtn;
