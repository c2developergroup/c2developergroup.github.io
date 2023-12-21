import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import "./css/app.css"
// import { I18nextProvider } from "react-i18next";
// import i18next from "i18next";
// import "./i18next-config.js";

function App() {

    return (
        <React.StrictMode>
            {/* <I18nextProvider i18n={i18next}> */}
                <Layout />
            {/* </I18nextProvider> */}
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
