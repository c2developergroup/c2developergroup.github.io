import "react";
import "../css/marquee.css";

export interface MarqueeLogo {
  src: string;
  class: string;
  href?: string;
}

export const MarqueeComponent = ({ logosTop }: { logosTop: MarqueeLogo[] }) => {
  const cardsTop = logosTop.map((item: MarqueeLogo, index: number) => {
    const logo = <img key={index} src={item.src} className={item.class} />;
    if (item.href !== undefined) {
      return (
        <a href={item.href} target="_blank">
          {logo}
        </a>
      );
    }
    return logo;
  });

  // const cardsBtm = logosBtm.map((item: MarqueeLogo, index: number) => (
  //   <img key={index} src={item.src} className={item.class} />
  // ));

  return (
    <div className="marquee__parent">
      <br></br>
      <br></br>
      <br></br>
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">{cardsTop}</div>
          <div className="marquee__group">{cardsTop}</div>
        </div>
        {/* <div className="marquee marquee--reverse">
          <div className="marquee__group">{cardsBtm}</div>
          <div className="marquee__group">{cardsBtm}</div>
        </div> */}
      </article>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
