import "react";
import Slider from "react-slick";

export const ExampleSlider = () => {
  return (
    <div>
      <Slider
        dots
        dotsClass="slick-dots-portfolio"
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        autoplay
        autoplaySpeed={4000}
        centerMode
        centerPadding="200pc"
        focusOnSelect
        customPaging={(i: number) => {
          return <button type="button">{i}</button>;
        }}
      >
        <div className="px-10 pt-10 pb-16">
          <img
            src="/screenshot.png"
            className="w-full rounded-xl shadow-[0_0_26px_0_rgba(0,0,0,0.25)] shadow-neutral-500 hover:shadow-neutral-700 dark:shadow-neutral-900 dark:hover:shadow-neutral-950 transition duration-500"
            alt="Slide 1"
          />
        </div>
        <div className="px-10 pt-10 pb-16">
          <img
            src="/screenshot.png"
            className="w-full rounded-xl shadow-[0_0_26px_0_rgba(0,0,0,0.25)] shadow-neutral-500 hover:shadow-neutral-700 dark:shadow-neutral-900 dark:hover:shadow-neutral-950 transition duration-500"
            alt="Slide 2"
          />
        </div>
        <div className="px-10 pt-10 pb-16">
          <img
            src="/screenshot.png"
            className="w-full rounded-xl shadow-[0_0_26px_0_rgba(0,0,0,0.25)] shadow-neutral-500 hover:shadow-neutral-700 dark:shadow-neutral-900 dark:hover:shadow-neutral-950 transition duration-500"
            alt="Slide 3"
          />
        </div>
        <div className="px-10 pt-10 pb-16">
          <img
            src="/screenshot.png"
            className="w-full rounded-xl shadow-[0_0_26px_0_rgba(0,0,0,0.25)] shadow-neutral-500 hover:shadow-neutral-700 dark:shadow-neutral-900 dark:hover:shadow-neutral-950 transition duration-500"
            alt="Slide 4"
          />
        </div>
        <div className="px-10 pt-10 pb-16">
          <img
            src="/screenshot.png"
            className="w-full rounded-xl shadow-[0_0_26px_0_rgba(0,0,0,0.25)] shadow-neutral-500 hover:shadow-neutral-700 dark:shadow-neutral-900 dark:hover:shadow-neutral-950 transition duration-500"
            alt="Slide 5"
          />
        </div>
      </Slider>
    </div>
  );
};
