import { useEffect } from "react";

const useClickOutside = (ref_1, ref_2, className) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        ref_1.current &&
        !ref_1.current.contains(e.target) &&
        !ref_2.current.contains(e.target)
      ) {
        ref_1.current.classList.remove(className);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [className, ref_2, ref_1]);
};

export default useClickOutside;
