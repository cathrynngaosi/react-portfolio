import { PiCopyright, PiHeartStraightFill } from "react-icons/pi";

function Copyright() {
  const year = new Date().getFullYear();

  return (
    <section id="copyright">
      <div className="copyright-container">
        <p>Developed & designed by Cathryn Ngaosi</p>
        <PiHeartStraightFill />
        <PiCopyright /> {year}
      </div>
    </section>
  );
}

export default Copyright;
