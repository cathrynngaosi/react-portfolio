import { useEffect, useState } from "react";

function useScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScrollBtnVisibility() {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    }

    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { showButton, handleScrollToTop };
}

export default useScrollToTop;
