import { PiCopyright, PiHeartStraightFill } from "react-icons/pi";

function Footer({ children }) {
  const year = new Date().getFullYear();

  return (
    <section id="footer">
      {children}
      <div className="copyright-container">
        <p>Developed & designed by Cathryn Ngaosi</p>
        <PiHeartStraightFill />
        <PiCopyright /> {year}
      </div>
    </section>
  );
}

export default Footer;
