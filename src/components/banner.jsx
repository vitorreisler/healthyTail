import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    if (window.screen.width < 500) {
      setIsSmallScreen(window.screen.width < 500);
    }
  }, []);
  return (
    <>
      {isSmallScreen ? (
        <div className="w-full">
          <img
            className="w-full h-52 object-cover"
            src="/images/banner.jpg"
            alt=""
          />
        </div>
      ) : (
        <div className="w-full">
          <img
            className="w-full h-96 object-cover"
            src="/images/banner.jpg"
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Banner;
