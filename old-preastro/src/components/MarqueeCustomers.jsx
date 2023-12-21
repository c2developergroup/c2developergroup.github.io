import "react";
import PropTypes from 'prop-types';

import '../css/marquee.css'

export const MarqueeComponent = ({ logosTop, logosBtm }) => {
  const cardsTop = logosTop.map((item, index) => (
    <img key={index} src={item.src} className={item.className} />
  ));
  const cardsBtm = logosBtm.map((item, index) => (
    <img key={index} src={item.src} className={item.className} />
  ));
  
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
        <div className="marquee marquee--reverse">
          <div className="marquee__group">{cardsBtm}</div>
          <div className="marquee__group">{cardsBtm}</div>
        </div>
      </article>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
MarqueeComponent.propTypes = {
  logosTop: PropTypes.array.isRequired,
  logosBtm: PropTypes.array.isRequired,
}