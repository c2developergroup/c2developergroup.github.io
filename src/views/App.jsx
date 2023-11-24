import { useRef, useContext  } from "react";
import { Context } from "../store/appContext";
import Slider from "react-slick";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineGithub } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/app.css";
import "../css/3Deffect.css";

export const App = () => {
  const cardRef = useRef(null);
  const { store } = useContext(Context);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // 3D Effect
  const handleHover = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = ((0.5 - vertical) * 40).toFixed(2);
    const rotateY = ((0.5 - horizontal) * 40).toFixed(2);

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetStyles = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <div className="mt-28"></div>
      <div className="w-[60rem] flex justify-center ml-40 mt-40">
        <h2 className="text-blue-500 dark:text-white text-6xl transition duration-300">
          ¿Estás listo para hacer tu página web o aplicación con nosotros?
        </h2>
      </div>
      <div className="mx-20 flex justify-end">
        <div className="w-[30rem] h-[30rem]">
          <img
            src="/squarelogowhite.png"
            className="w-10 ml-[13.5rem] mt-[18rem] absolute invert"
          />
          <img src="/computer.png" className="w-[30rem]" />
        </div>
        <div
          className="bg-blue-500 dark:bg-blue-700 transition duration-300 w-[27.7rem] h-[15.7rem] z-0 absolute mr-[1.15rem] mt-[1.15rem] flex justify-center items-center"
          onMouseMove={handleHover}
          onMouseLeave={resetStyles}
        >
          <img
            ref={cardRef}
            src="/c2logowhite.png"
            className="w-[25rem] mb-10 card z-20"
            // onMouseMove={handleHover}
            // onMouseLeave={resetStyles}
          />
        </div>
      </div>
      <div className="w-[50rem] h-[30rem] p-20 bg-blue-500 dark:bg-blue-700 m-auto mt-20 rounded-lg flex justify-center">
        <div className="w-40 mt-16">
          <h2 className="text-6xl text-white text-end">Nuestro enfoque</h2>
        </div>
        <div className="w-96 text-2xl text-white mt-16 ml-10 leading-9">
          <p>
            Brindamos un servicio de <b>aplicaciones y sitios web</b> con bases
            sólidas en <b>diseño y funcionabilidad</b> que hagan destacar a la
            empresa u organización en el internet.
          </p>
          <button className="text-neutral-300 hover:text-neutral-100 transition duration-300 mt-7 flex items-center gap-6">
            Contáctanos <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
      <h2 className="text-6xl text-center mb-10 mt-20 text-blue-500 dark:text-white">
        Algunos de nuestros trabajos
      </h2>
      {/* Carrusel */}
      <div className="relative w-8/12 m-auto mt-28">
        <Slider {...settings} className="invert dark:invert-0">
          <div>
            <img src="/c2logowhite.png" className="w-full" alt="Slide 1" />
          </div>
          <div>
            <img src="/bynxlogowhite.png" className="w-full" alt="Slide 2" />
          </div>
          <div>
            <img src="/serologowhite.png" className="w-10/12 m-auto" alt="Slide 3" />
          </div>
          <div>
            <img src="/c2logowhite.png" className="w-full" alt="Slide 4" />
          </div>
          <div>
            <img src="/c2logowhite.png" className="w-full" alt="Slide 5" />
          </div>
        </Slider>
      </div>
      <div className="w-full h-64 bg-blue-500 dark:bg-blue-700 transition duration-300 mt-40 flex items-center">
        <div className="w-96 m-auto mt-12 flex flex-col">
          <h2 className="text-white text-5xl text-center">
            ¿Tienes algún proyecto? Construyámoslo juntos
          </h2>
          <button className="w-32 m-auto mt-5 bg-white text-black p-3 rounded-lg">
            Contáctanos
          </button>
        </div>
      </div>
      <div className="h-[20rem] w-[70rem] m-auto my-20 flex gap-x-5 justify-evenly flex-wrap items-center transition duration-300">
        {store.theme === "dark" && (
          <>
            <img src="/bynxlogowhite.png" className="w-54 h-24 mt-1 cursor-pointer" />
            <img src="/serologowhite.png" className="w-54 h-24 cursor-pointer" />
            <img src="/c2logowhite.png" className="w-54 h-24 invert dark:invert-0" />
            <img src="/c2logowhite.png" className="w-54 h-24 invert dark:invert-0" />
            <img src="/c2logowhite.png" className="w-54 h-24 invert dark:invert-0" />
            <img src="/c2logowhite.png" className="w-54 h-24 invert dark:invert-0" />
          </>
        )}
        {store.theme === "light" && (
          <>
            <img src="/bynxlogoblack.png" className="w-54 h-24 cursor-pointer" />
            <img src="/serologoblack.png" className="w-54 h-24 cursor-pointer" />
            <img src="/c2logowhite.png" className="w-54 h-24 invert dark:invert-0" />
            <img src="/c2logowhite.png" className="w-54 h-24 invert dark:invert-0" />
            <img src="/c2logowhite.png" className="w-54 h-24 invert dark:invert-0" />
            <img src="/c2logowhite.png" className="w-54 h-24 invert dark:invert-0" />
          </>
        )}
      </div>
      <div className="w-full h-40 bg-blue-500 dark:bg-blue-700 text-white flex items-center justify-between">
        <div className="ml-10">
          <img src="/c2logowhite.png" className="w-54 h-24 mb-2" />
        </div>
        <div className="flex gap-x-6 w-36">
          <FaWhatsapp className="text-4xl cursor-pointer" />
          <FaInstagram className="text-4xl cursor-pointer" />
          <AiOutlineGithub className="text-4xl cursor-pointer" />
        </div>
        <div className="mr-16">
          <h2 className="text-2xl hover:text-neutral-200 transition duration-300 cursor-pointer">
            Forma parte de nuestro equipo
          </h2>
          <h2 className="text-2xl mt-2 hover:text-neutral-200 transition duration-300 cursor-pointer">
            Contáctanos
          </h2>
        </div>
      </div>
    </>
  );
};
