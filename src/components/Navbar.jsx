import{ useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/app.css"
// import { useTranslation } from "react-i18next";
// import { LanguageButton } from "./LanguageButton.jsx";
// import { Darkmode } from "./Darkmode.jsx";

export const Navbar = () => {
    // const [t] = useTranslation("app");
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed flex justify-between items-center z-40 w-screen py-3 font-serif dark:text-gray-200 text-black bg-blue-500 top-0 left-0">
            <h2
                className="text-4xl text-red-600 font-semibold ml-10 lg:ml-32 cursor-pointer"
                onClick={() => {
                    navigate("/");
                }}>
                C2 DEVELOPER GROUP
            </h2>
            <div
                className="hidden resp:flex justify-center items-center mr-5 w-10 h-10 text-2xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
                onClick={() => {
                    setIsOpen(true);
                }}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div
                className={
                    "resp:fixed resp:top-0 resp:left-0 resp:w-full resp:h-screen resp:bg-[rgba(0,0,0,0.5)]" +
                    " " +
                    (isOpen ? "resp:block" : "hidden")
                }
                id="back__menu"
                onClick={() => {
                    setIsOpen(false);
                }}></div>
            <nav
                className={
                    "navbar-home mr-4 lg:mr-16 resp:dark:bg-zinc-950 resp:bg-white resp:m-0 resp:fixed resp:w-60 resp:h-screen resp:top-0 resp:p-7 resp:z-10" +
                    " " +
                    (isOpen ? "resp:right-0" : "resp:-right-60")
                }>
                <h2 className="text-gray-600 dark:text-gray-100 text-center text-4xl font-semibold hidden resp:block resp:mt-5">
                    C2 DEV GROUP
                </h2>
                <ul className="flex items-center resp:mt-5 resp:flex-col">
                    <li className="my-2.5">
                        <NavLink
                            onClick={() => {
                                setIsOpen(false);
                            }}
                            to="/"
                            className="text-xl font-medium ml-6 hover:text-cyan-300 hover:transition-all duration-300 resp:m-0">
                            INICIO
                        </NavLink>
                    </li>
                    {/* <li className="my-2.5">
                        <LanguageButton className="ml-3 md:mt-2.5 resp:absolute resp:top-3 resp:right-5 w-9 h-6" />
                    </li>
                    <li className="my-2.5">
                        <Darkmode className="text-[10%] ml-3 resp:absolute resp:top-3 resp:left-3" />
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};
