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
            className="w-full h-60 object-cover"
            src="/images/banner3.png"
            alt="dogs and cats"
          />
        </div>
      ) : (
        <div className="w-full">
          <img
            className="w-full max-h-[570px] object-cover"
            src="/images/banner3.png"
            alt="dogs and cats"
          />
        </div>
      )}
    </>
  );
};

export default Banner;
