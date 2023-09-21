function Navbar({
  aboutRef,
  techStackRef,
  workExpRef,
  portfolioRef,
  contactRef,
}) {
  function handleScroll(ref) {
    ref.current.scrollIntoView();
  }

  return (
    <nav>
      <div className="navbar-wrapper">
        <img src="public/CNLogo.svg" alt="logo" />
        <ul>
          <li onClick={() => handleScroll(aboutRef)}>About</li>
          <li onClick={() => handleScroll(techStackRef)}>Tech Stack</li>
          <li onClick={() => handleScroll(workExpRef)}>Experience</li>
          <li onClick={() => handleScroll(portfolioRef)}>Portfolio</li>
          <li onClick={() => handleScroll(contactRef)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
