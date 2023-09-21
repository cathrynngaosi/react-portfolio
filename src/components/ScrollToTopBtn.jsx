import { FaChevronUp } from "react-icons/fa";
import useScrollToTop from "../hooks/useScrollToTop";

function ScrollToTopBtn() {
  const { showButton, handleScrollToTop } = useScrollToTop();

  return (
    showButton && (
      <div id="scrollToTop" className="bounce" onClick={handleScrollToTop}>
        <span>
          <FaChevronUp />
        </span>
      </div>
    )
  );
}

export default ScrollToTopBtn;
