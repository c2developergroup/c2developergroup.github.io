import { useRef, useContext } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineGithub } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/app.css";
import "../css/3Deffect.css";
import { NetAnimation } from "../components/netAnimation";

export const App = () => {
  const cardImgRef = useRef(null);
  const cardDivRef = useRef(null);
  const cardImg1Ref = useRef(null);
  const cardDiv1Ref = useRef(null);
  const cardImg2Ref = useRef(null);
  const cardDiv2Ref = useRef(null);
  const { store } = useContext(Context);

  const settings = {
    dots: true,
    dotsClass: "slick-dots-portfolio",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "200px",
    focusOnSelect: true,
    customPaging: function (slider, i) {
      return <button type="button">{i}</button>;
    },
  };

  // 3D Effect
  const handleHover = (e) => {
    const { clientX, clientY } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } =
      cardDivRef.current;
    cardDiv1Ref.current;
    cardDiv2Ref.current;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = ((0.5 - vertical) * 40).toFixed(2);
    const rotateY = ((0.5 - horizontal) * 40).toFixed(2);

    cardImgRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardImg1Ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardImg2Ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetStyles = () => {
    cardImgRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    cardImg1Ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    cardImg2Ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <section className="w-10/12 m-auto mt-40">
        <h2 className="text-black dark:text-white text-8xl resp:text-6xl transition duration-300">
          Exponenciamos tu <br />
          <span className="text-blue-500">
            <TypeAnimation
              sequence={[
                680,
                "empresa",
                2000,
                "proyecto",
                2000,
                "emprendimiento",
                2000,
                "organización",
                2000,
                "presencia",
                2000,
              ]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              className="font-extrabold"
              style={{ display: "inline-block" }}
            />
          </span>
        </h2>
        <h2 className="text-black dark:text-white text-5xl resp:text-4xl transition duration-300">
          con{" "}
          <span className="text-transparent font-extrabold text-ecommerce bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            e-commerce
          </span>
          ,{" "}
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#00ccff] to-[#3fa9ff]">
            páginas web
          </span>
          ,{" "}
          <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            aplicaciones
          </span>
          ...
        </h2>
      </section>
      <section className="w-10/12 m-auto mt-28">
        <h2 className="text-5xl text-blue-500 dark:text-white">
          Tratamiento Responsive
        </h2>
        <div className="flex justify-between items-end">
          <img
            src="/phone.png"
            className="w-[13%]"
            onMouseMove={handleHover}
            onMouseLeave={resetStyles}
          />
          <img
            src="/tablet.png"
            className="w-[23%]"
            onMouseMove={handleHover}
            onMouseLeave={resetStyles}
          />
          <img
            src="/computer.png"
            className="w-[45%]"
            onMouseMove={handleHover}
            onMouseLeave={resetStyles}
          />
        </div>
      </section>
      <section className="m-auto my-20 flex gap-5 justify-evenly flex-wrap items-center transition duration-300">
        {store.theme === "dark" && (
          <>
            <img
              src="/bynxlogowhite.png"
              className="w-54 h-24 mt-1 cursor-pointer"
            />
            <img
              src="/serologowhite.png"
              className="w-54 h-24 cursor-pointer"
            />
            <img
              src="/zussetlogowhite.png"
              className="w-54 h-24 invert dark:invert-0"
            />
            <img
              src="/c2logowhite.png"
              className="w-54 h-24 invert dark:invert-0"
            />
            <img
              src="/c2logowhite.png"
              className="w-54 h-24 invert dark:invert-0"
            />
            <img
              src="/c2logowhite.png"
              className="w-54 h-24 invert dark:invert-0"
            />
          </>
        )}
        {store.theme === "light" && (
          <>
            <img
              src="/bynxlogoblack.png"
              className="w-54 h-24 cursor-pointer"
            />
            <img
              src="/serologowhite.png"
              className="w-54 h-24 cursor-pointer invert dark:invert-0"
            />
            <img
              src="/zussetlogowhite.png"
              className="w-54 h-24 invert dark:invert-0"
            />
            <img
              src="/c2logowhite.png"
              className="w-54 h-24 invert dark:invert-0"
            />
            <img
              src="/c2logowhite.png"
              className="w-54 h-24 invert dark:invert-0"
            />
            <img
              src="/c2logowhite.png"
              className="w-54 h-24 invert dark:invert-0"
            />
          </>
        )}
      </section>
      <section className="card1 max-w-[90%] w-[50rem] md:py-20 py-10 mobl:px-8 bg-blue-500 dark:bg-blue-700 m-auto mt-20 rounded-lg flex justify-around items-center relative mobl:flex-col">
        <div className="tiny:w-[30%] mobl:mb-10">
          <h2 className="text-6xl text-white">Nuestro enfoque</h2>
        </div>
        <div className="tiny:w-[60%] text-2xl text-white leading-9">
          <p>
            Brindamos un servicio de <b>aplicaciones y sitios web</b> con bases
            sólidas en <b>diseño y funcionabilidad</b> que hagan destacar a la
            empresa u organización en el internet.
          </p>
          <button className="text-neutral-300 hover:text-neutral-100 transition duration-300 mt-7 flex items-center gap-6">
            Contáctanos <FaArrowRight />
          </button>
        </div>
      </section>
      <section className="w-full bg-blue-500 dark:bg-blue-700 transition duration-300 mt-40 flex flex-col items-center gap-5 p-6">
        <h2 className="text-white text-5xl text-center">
          ¿Tienes algún proyecto? <br />
          Construyámoslo juntos
        </h2>
        <button className="w-32 bg-white text-black text-2xl p-3 rounded-lg">
          Contáctanos
        </button>
      </section>
      <section>
        <h2 className="text-6xl text-center mb-5 mt-20 text-blue-500 dark:text-white">
          Algunos de nuestros trabajos
        </h2>
        {/* Carrusel */}
        <Slider {...settings}>
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
      </section>
      <section className="transition duration-300 my-40 flex flex-col items-center gap-5 p-6 bg-blue-500 dark:bg-blue-600">
        <h2 className="text-white text-5xl text-center">
          ¿Estás listo para hacer tu página web o aplicación <br /> con
          nosotros?
        </h2>
        <button className="w-32 bg-white text-black text-2xl p-3 rounded-lg">
          Contáctanos
        </button>
      </section>
      <footer className="w-full bg-blue-500 dark:bg-blue-700 text-white flex resp:flex-col resp:gap-y-10 p-10 items-center justify-around">
        <div>
          {/* <img src="/c2logowhite.png" className="w-54 h-24 mb-2" /> */}
          {/* <h2 className="text-4xl">Links Interesantes</h2>
          <h2 className="text-2xl hover:text-neutral-200 transition duration-300 cursor-pointer">
            Sobre Nosotros
          </h2> */}
          <NetAnimation/>
        </div>
        <div className="flex items-center gap-x-6 md:mx-36">
          <FaWhatsapp className="text-4xl  hover:text-neutral-200 hover:scale-110 transition duration-300 cursor-pointer" />
          <FaInstagram className="text-4xl  hover:text-neutral-200 hover:scale-110 transition duration-300 cursor-pointer" />
          <AiOutlineGithub className="text-4xl  hover:text-neutral-200 hover:scale-110 transition duration-300 cursor-pointer" />
        </div>
        <div>
          <h2 className="text-2xl hover:text-neutral-200 transition duration-300 cursor-pointer">
            Forma parte de nuestro equipo
          </h2>
          <h2 className="text-2xl hover:text-neutral-200 transition duration-300 cursor-pointer">
            Contáctanos
          </h2>
        </div>
      </footer>
    </>
  );
};
