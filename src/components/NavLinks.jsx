function NavLinks({
  aboutRef,
  techStackRef,
  workExpRef,
  portfolioRef,
  contactRef,
}) {
  function handleScroll(ref) {
    ref.current.scrollIntoView();
    document.getElementById("mobileMenu").offsetHeight > 0 &&
      document.querySelector("#mobileNav button").click();
  }

  return (
    <ul>
      <li onClick={() => handleScroll(aboutRef)}>About</li>
      <li onClick={() => handleScroll(techStackRef)}>Tech Stack</li>
      <li onClick={() => handleScroll(workExpRef)}>Experience</li>
      <li onClick={() => handleScroll(portfolioRef)}>Portfolio</li>
      <li onClick={() => handleScroll(contactRef)}>Contact</li>
    </ul>
  );
}

export default NavLinks;
