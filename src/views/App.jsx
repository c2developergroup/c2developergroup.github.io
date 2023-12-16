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
import { MarqueeComponent } from "../components/MarqueeCustomers";
// import { NetAnimation } from "../components/netAnimation";

export const App = () => {
  const cardDivRef = useRef(null);
  const cardImg1Ref = useRef(null);
  const cardImg2Ref = useRef(null);
  const cardImg3Ref = useRef(null);
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
    // const { clientWidth, clientHeight, offsetLeft, offsetTop } =
    //   cardDivRef.current;
    const { clientWidth: img1clientWidth, clientHeight: img1clientHeight, offsetLeft: img1offsetLeft, offsetTop: img1offsetTop } =
      cardImg1Ref.current;
    const { clientWidth: img2clientWidth, clientHeight: img2clientHeight, offsetLeft: img2offsetLeft, offsetTop: img2offsetTop } =
      cardImg2Ref.current;
    const { clientWidth: img3clientWidth, clientHeight: img3clientHeight, offsetLeft: img3offsetLeft, offsetTop: img3offsetTop } =
      cardImg3Ref.current;

    const img1horizontal = (clientX - img1offsetLeft) / img1clientWidth;
    const img1vertical = (clientY - img1offsetTop) / img1clientHeight;
    const img1rotateX = ((0.5 - img1vertical) * 5).toFixed(2);
    const img1rotateY = ((0.5 - img1horizontal) * 5).toFixed(2);

    const img2horizontal = (clientX - img2offsetLeft) / img2clientWidth;
    const img2vertical = (clientY - img2offsetTop) / img2clientHeight;
    const img2rotateX = ((0.5 - img2vertical) * 5).toFixed(2);
    const img2rotateY = ((0.5 - img2horizontal) * 5).toFixed(2);

    const img3horizontal = (clientX - img3offsetLeft) / img3clientWidth;
    const img3vertical = (clientY - img3offsetTop) / img3clientHeight;
    const img3rotateX = ((0.5 - img3vertical) * 5).toFixed(2);
    const img3rotateY = ((0.5 - img3horizontal) * 5).toFixed(2);
    cardImg1Ref.current.style.transform = `perspective(1000px) rotateX(${img1rotateX}deg) rotateY(${img1rotateY}deg)`;
    cardImg2Ref.current.style.transform = `perspective(1000px) rotateX(${img2rotateX}deg) rotateY(${img2rotateY}deg)`;
    cardImg3Ref.current.style.transform = `perspective(1000px) rotateX(${img3rotateX}deg) rotateY(${img3rotateY}deg)`;
  };

  const resetStyles = () => {
    cardImg1Ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    cardImg2Ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    cardImg3Ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
    <div onMouseMove={handleHover} onMouseLeave={resetStyles}>
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
        <div ref={cardDivRef} className="flex justify-between items-end">
          <img
            ref={cardImg1Ref}
            src="/phone.png"
            className="w-[13%]"
          />
          <img
            ref={cardImg2Ref}
            src="/tablet.png"
            className="w-[23%]"
          />
          <img
            ref={cardImg3Ref}
            src="/computer.png"
            className="w-[45%]"
          />
        </div>
      </section>
      <section className="m-auto my-20 flex gap-5 justify-evenly flex-wrap items-center transition duration-300">
        {function(){
          const logosTop = store.theme === "dark" ? [
            {
              src: "/bynxlogowhite.png",
              className: "w-54 h-24 cursor-pointer"
            },
            {
              src: "/serologowhite.png",
              className: "w-54 h-24 cursor-pointer invert dark:invert-0"
            },
            {
              src: "/zussetlogowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            }
          ] : [
            {
              src: "/bynxlogoblack.png",
              className: "w-54 h-24 cursor-pointer"
            },
            {
              src: "/serologowhite.png",
              className: "w-54 h-24 cursor-pointer invert dark:invert-0"
            },
            {
              src: "/zussetlogowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            }
          ];

          const logosBtm = [
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            },
            {
              src: "/c2logowhite.png",
              className: "w-54 h-24 invert dark:invert-0"
            }
          ];

          return (
            <MarqueeComponent logosTop={logosTop} logosBtm={logosBtm} />
          );
        }()}
        {/* {store.theme === "dark" && (
          <>
            <img
              src="/bynxlogowhite.png"
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
        )} */}
      </section>
      <section className="max-w-[90%] w-[50rem] md:py-20 py-10 mobl:px-8 bg-blue-500 dark:bg-blue-700 m-auto mt-20 rounded-lg flex justify-around items-center relative mobl:flex-col">
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
          <img src="/c2logowhite.png" className="w-54 h-24 mb-2" />
          <h2 className="text-4xl">Links Interesantes</h2>
          <h2 className="text-2xl hover:text-neutral-200 transition duration-300 cursor-pointer">
            Sobre Nosotros
          </h2>
          {/* <NetAnimation/> */}
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
    </div>
    </>
  );
};
