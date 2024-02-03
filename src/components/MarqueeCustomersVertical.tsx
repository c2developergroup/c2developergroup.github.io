import "react";
import "../css/marquee.css";

export interface MarqueeLogo {
  src: string;
  class: string;
  href?: string;
}

interface MarqueeComponentProps {
  logosTop: MarqueeLogo[];
  vertical?: boolean;
  reverse?: boolean;
}


export const MarqueeComponent = ({ logosTop, vertical = false, reverse = false }: MarqueeComponentProps) => {
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
      <article className="wrapper">
        <div className={"marquee" + (vertical ? " flex-col" : "")}>
          <div className={"marquee__group" + (vertical ? " vertical" : "horizontal")  + (reverse ? " reverse" : "")}>{cardsTop}</div>
          <div className={"marquee__group" + (vertical ? " vertical" : "horizontal")  + (reverse ? " reverse" : "")}>{cardsTop}</div>
          <div className={"marquee__group" + (vertical ? " vertical" : "horizontal")  + (reverse ? " reverse" : "")}>{cardsTop}</div>
          <div className={"marquee__group" + (vertical ? " vertical" : "horizontal")  + (reverse ? " reverse" : "")}>{cardsTop}</div>
        </div>
        {/* <div className="marquee marquee--reverse">
          <div className="marquee__group">{cardsBtm}</div>
          <div className="marquee__group">{cardsBtm}</div>
        </div> */}
      </article>
    </div>
  );
};
