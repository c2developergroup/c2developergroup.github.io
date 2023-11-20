import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import "../css/app.css";

export const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <div className="mt-28"></div>
      <div className="w-[60rem] flex justify-center ml-20 mt-40">
        <h2 className="text-blue-500 dark:text-white text-5xl transition duration-300">
          ¿Estás listo para hacer tu página web o aplicación con nosotros?
        </h2>
      </div>
      <div className="w-[50rem] h-[30rem] p-20 bg-blue-500 dark:bg-blue-700 m-auto mt-32 rounded-lg flex justify-center">
        <div className="w-40 mt-16">
          <h2 className="text-6xl text-white text-end">Nuestro enfoque</h2>
        </div>
        <div className="w-96 text-2xl text-white mt-16 ml-10 leading-9">
          <p>
            Brindamos un servicio de <b>aplicaciones y sitios web</b> con bases
            sólidas en <b>diseño y funcionabilidad</b> que hagan destacar a la
            empresa u organización en el internet.
          </p>
          <button className="text-neutral-800 mt-7 flex items-center gap-6">Contáctanos{" "}<FaArrowRight className="mt-1"/>
</button>
        </div>
      </div>
      <h2 className="text-6xl text-center mb-10 mt-20 text-blue-500 dark:text-white">Algunos de nuestros trabajos</h2>
      {/* Carrusel */}
      <div className="relative w-8/12 m-auto mt-28">
        <Slider
          {...settings}
          className="invert dark:invert-0"
        >
          <div>
            <img
              src="../../public/c2logowhite.png"
              className="w-full"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="../../public/c2logowhite.png"
              className="w-full"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="../../public/c2logowhite.png"
              className="w-full"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src="../../public/c2logowhite.png"
              className="w-full"
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src="../../public/c2logowhite.png"
              className="w-full"
              alt="Slide 5"
            />
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
    </>
  );
};
