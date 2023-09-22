function RecentWork({ portfolioRef }) {
  return (
    <section
      id="recent-works"
      ref={portfolioRef}
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <h1>My Recent Work</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sunt.
      </p>
      <div className="preview-container">
        <div>
          <img src="public/ImagePlaceholder.png" alt="" />
        </div>
        <div>
          <img src="public/ImagePlaceholder.png" alt="" />
        </div>
        <div>
          <img src="public/ImagePlaceholder.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
