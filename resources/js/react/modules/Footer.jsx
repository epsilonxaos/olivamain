import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Contacto from "../components/Inicio/Contacto";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="mx-auto max-w-[1600px] ">
                <Contacto />
            </div>
            <footer className="w-full bg-black px-4 py-5 text-white lg:px-10">
                <ul className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between font-instrumentSans text-xs sm:flex-row md:text-base">
                    <li>
                        <Link to={"/politicas-privacidad"}>
                            {t("politicasReservacion")} | Cookies
                        </Link>
                    </li>
                    <li className="mb-1 sm:mb-0">
                        <a
                            href="https://www.madeby.partners/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("madeBy")}{" "}
                            <span className="font-bold">MadebyPartners®</span>
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;
