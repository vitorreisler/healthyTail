"use client"
import Layout from "@/components/layout";
// import { InstagramEmbed } from "react-social-media-embed";

const Media = () => {
  const iframeClassnames = "border-radius:12px"
  const mediasPodcast = [
    {
      title: `Podcast פרק 155 | על השמנה, עיקורים וסירוסים ואלרגיות, עם הווטרינר ד"ר יון ראיליאנו`,
      className: iframeClassnames,
      src: "https://open.spotify.com/embed/episode/0UU3VSdtL2CmgocvST88aE?utm_source=generator&t=0",
      width: "100%",
      height: "352",
      frameBorder: "0",
      allowfullscreen: "",
      allow:
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      loading: "lazy",
    },
   
    {
      title: `Podcast פרק 155: ד״ר יון אלכסנדרה ראיליאנו - רפואה וטרינרית מבוססת עובדות`,
      className: iframeClassnames,
      src: "https://open.spotify.com/embed/episode/2OLOplPsT5igVsM5MNGeiE?utm_source:generator&t:0",
      width: "100%",
      height: "352",
      frameBorder: "0",
      allowfullscreen: "",
      allow:
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      loading: "lazy",
    },
 
  ];

  /*
  const mediasInstagram = [
    {
      urlInstagram:
        "https://www.instagram.com/reel/DGfry0WsVjB/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
    {
      urlInstagram:
        "https://www.instagram.com/reel/DGfusstsoM6/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
    {
      urlInstagram:
        "https://www.instagram.com/reel/DD6lp9VN47e/?utm_source=ig_embed&amp;utm_campaign=loading",
    },
  ];
  */

  return (
    <>
      <Layout pageName={"תקשורת"}>
        <div className=" flex flex-wrap justify-evenly gap-20">
          {mediasPodcast.map(
            ({
              title,
              className,
              src,
              width,
              height,
              frameBorder,
              allowfullscreen,
              allow,
              loading,
            }) => {
              return (
                <div key={src}>
                  <iframe
                  title={title}
                    className={className}
                    src={src}
                    width={width}
                    height={height}
                    frameBorder={frameBorder}
                    allowFullScreen={allowfullscreen}
                    allow={allow}
                    loading={loading}
                  ></iframe>
                </div>
              );
            }
          )}
         {/* <div className="flex flex-wrap justify-evenly gap-20">
            {mediasInstagram.map(({ urlInstagram }) => {
              return (
                <div key={urlInstagram} className="w-75 flex flex-wrap">
                  <InstagramEmbed url={urlInstagram} width={328} />
                </div>
              );
            })}
          </div>
          */}
        </div>
      </Layout>
    </>
  );
};

export default Media;
