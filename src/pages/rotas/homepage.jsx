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
                  <article className="flex flex-wrap items-center justify-center gap-2 shadow-md border-2 rounded-md">
                    <picture className="w-[500px] p-4">
                      <img
                        className="w-96 mx-auto rounded-lg shadow-lg"
                        src={src}
                        alt={alt}
                      />
                    </picture>
                    <figcaption className="p-3 rtl">
                      <h3 className="text-center mb-6 text-2xl">
                        {tituloImage}
                      </h3>
                      {isSmallScreen ? (
                        <p className="max-w-[600px] overflow-hidden text-xl">
                          {textoCurto}
                          <button
                            onClick={onSubmit}
                            className=" block mx-auto border-1 shadow-sm p-4 mt-3 rounded-md text-lg border-green-500 text-green-500 duration-500 hover:bg-green-500 hover:text-white "
                          >
                            read more
                          </button>
                        </p>
                      ) : (
                        <p className="max-w-[600px] overflow-hidden text-xl">
                          {textoLongo}
                          {closeButton && (
                            <button
                              onClick={onSubmit}
                              className="block  mx-auto border-1 shadow-sm p-4 mt-3  rounded-md text-lg border-green-500 text-green-500 duration-500 hover:bg-green-500 hover:text-white text-"
                            >
                              {" "}
                              close{" "}
                            </button>
                          )}
                        </p>
                      )}
                    </figcaption>
                  </article>
                  <HrElement />
                </Fragment>
              ) : (
                <Fragment key={src}>
                  <article className="flex flex-wrap-reverse items-center justify-center gap-9 shadow-sm border-2 rounded-md">
                    <figcaption className="p-3 rtl">
                      <h3 className="text-center mb-6 text-2xl">
                        {tituloImage}
                      </h3>
                      {isSmallScreen ? (
                        <p className="max-w-[600px] overflow-hidden text-xl">
                          {textoCurto}
                          <button
                            onClick={onSubmit}
                            className="border-1 block mx-auto shadow-sm p-4 mt-3 rounded-md text-lg border-green-500 text-green-500 duration-500 hover:bg-green-500 hover:text-white text-"
                          >
                            read more
                          </button>
                        </p>
                      ) : (
                        <p className="max-w-[600px] overflow-hidden text-xl">
                          {textoLongo}
                          {closeButton && (
                            <button
                              onClick={onSubmit}
                              className="border-1 block mx-auto shadow-sm p-4 mt-3  rounded-md text-lg border-green-500 text-green-500 duration-500 hover:bg-green-500 hover:text-white text-"
                            >
                              close
                            </button>
                          )}
                        </p>
                      )}
                    </figcaption>
                    <picture className="w-[500px] p-4">
                      <img
                        className="w-96 mx-auto rounded-lg shadow-lg"
                        src={src}
                        alt={alt}
                      />
                    </picture>
                  </article>
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
