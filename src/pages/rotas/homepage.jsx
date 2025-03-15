import HrElement from "@/components/hrElement";
import { Fragment, useEffect, useState } from "react";
import { homepageData } from "@/data/homepageData";

const HomePage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [closeButton, setCloseButton] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 400) {
      setIsSmallScreen(true);
      setCloseButton(true);
    }
  }, []);

  const onSubmit = () => {
    return setIsSmallScreen(!isSmallScreen);
  };

  return (
    <>
      <figure>
        <div className="bg-offwhite py-11 flex flex-col gap-10">
          {homepageData.map(
            ({ src, alt, tituloImage, textoCurto, textoLongo }, index) => {
              return index % 2 === 0 ? (
                <Fragment key={src}>
                  <div className="flex flex-wrap items-center justify-center gap-2 shadow-sm border-2 rounded-md">
                    <picture className="w-[320px] p-4">
                      <img
                        className="w-72 rounded-lg shadow-lg"
                        src={src}
                        alt={alt}
                      />
                    </picture>
                    <figcaption className="p-3 text-center rtl">
                      <h3 className="text-center mb-6 text-2xl">
                        {tituloImage}
                      </h3>
                      {isSmallScreen ? (
                        <p className="max-w-[600px] overflow-hidden">
                          {textoCurto}
                          <button
                            onClick={onSubmit}
                            className=" block mx-auto border-1 shadow-sm p-2 mt-3 rounded-2xl text-sm border-green-500 text-green-500 hover:bg-green-500 hover:text-white "
                          >
                            more ...
                          </button>
                        </p>
                      ) : (
                        <p className="max-w-[600px] overflow-hidden">
                          {textoLongo}
                          {closeButton && (
                            <button
                              onClick={onSubmit}
                              className="block  mx-auto border-1 shadow-sm p-2 mt-3  rounded-2xl text-sm border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-"
                            >
                              {" "}
                              close ...{" "}
                            </button>
                          )}
                        </p>
                      )}
                    </figcaption>
                  </div>
                  <HrElement />
                </Fragment>
              ) : (
                <Fragment key={src}>
                  <div
                    className="flex flex-wrap-reverse items-center justify-center gap-9 shadow-sm border-2 rounded-md"
                  >
                    <figcaption className="p-3 text-center">
                      <h3 className="text-center mb-6 text-2xl">
                        {tituloImage}
                      </h3>
                      {isSmallScreen ? (
                        <p className="max-w-[600px] overflow-hidden">
                          {textoCurto}
                          <button
                            onClick={onSubmit}
                            className="border-1 block mx-auto shadow-sm p-2 mt-3 rounded-2xl text-sm border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-"
                          >
                            more ...
                          </button>
                        </p>
                      ) : (
                        <p className="max-w-[600px] overflow-hidden">
                          {textoLongo}
                          {closeButton && (
                            <button
                              onClick={onSubmit}
                              className="border-1 block mx-auto shadow-sm p-2 mt-3  rounded-2xl text-sm border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-"
                            >
                              {" "}
                              close ...{" "}
                            </button>
                          )}
                        </p>
                      )}
                    </figcaption>
                    <picture className="w-[320px] p-4">
                      <img
                        className="w-72 rounded-lg shadow-lg"
                        src={src}
                        alt={alt}
                      />
                    </picture>
                  </div>
                  <HrElement />
                </Fragment>
              );
            }
          )}
        </div>
      </figure>
    </>
  );
};

export default HomePage;
