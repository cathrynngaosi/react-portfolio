import { PiCopyright, PiHeartStraightFill } from "react-icons/pi";

function Footer({
  aboutRef,
  techStackRef,
  workExpRef,
  portfolioRef,
  contactRef,
}) {
  const year = new Date().getFullYear();

  function handleScroll(ref) {
    ref.current.scrollIntoView();
  }

  return (
    <section id="footer">
      <ul className="links-container">
        <li onClick={() => handleScroll(aboutRef)}>About</li>
        <li onClick={() => handleScroll(techStackRef)}>Tech Stack</li>
        <li onClick={() => handleScroll(workExpRef)}>Experience</li>
        <li onClick={() => handleScroll(portfolioRef)}>Portfolio</li>
        <li onClick={() => handleScroll(contactRef)}>Contact</li>
      </ul>
      <div className="copyright-container">
        <p>Developed & designed by Cathryn Ngaosi</p>
        <PiHeartStraightFill />
        <PiCopyright /> {year}
      </div>
    </section>
  );
}

export default Footer;
