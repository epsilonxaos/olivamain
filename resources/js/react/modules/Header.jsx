import { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Copa, Logo, MenuIcon } from "../components/Assets";
import Button from "../components/Button";
import AppContext from "../Context/AppContext";
import { lightPages } from "../utils/const";

import logo from "../../../img/logo.svg";
import { cn } from "../components/cn";

import Circle from "../../../img/circle.svg";

const Header = ({ location }) => {
    const [open, setOpen] = useState(false);
    const themeLight = useMemo(() => lightPages.includes(location), [location]);

    const Language = () => {
        const { i18n } = useTranslation();

        return (
            <div className="font-apercuPro mr-4 flex items-center justify-center">
                <button
                    onClick={() => i18n.changeLanguage("es")}
                    className={cn(
                        "mr-4 size-[30px] rounded-full",
                        i18n.language == "es"
                            ? "bg-gray-200 font-bold"
                            : "cursor-pointer opacity-30 hover:opacity-100",
                    )}
                >
                    ES
                </button>
                <button
                    onClick={() => i18n.changeLanguage("en")}
                    className={cn(
                        "mr-4 size-[30px] rounded-full",
                        i18n.language == "en"
                            ? "bg-gray-200 font-bold"
                            : "cursor-pointer opacity-30 hover:opacity-100",
                    )}
                >
                    EN
                </button>
            </div>
        );
    };

    useEffect(() => {
        if (open)
            document.querySelector("body").classList.add("overflow-hidden");
        else document.querySelector("body").classList.remove("overflow-hidden");
    }, [open]);

    return (
        <>
            <header className="bg-grisClaro fixed left-0 top-0 z-50 flex h-[65px] w-full items-center justify-center p-4 transition-all duration-300 sm:p-4 lg:px-10">
                <nav className="relative mx-auto flex w-full max-w-[1600px] flex-row flex-wrap items-center justify-between sm:justify-center">
                    <div className="order-2 hidden sm:absolute sm:left-0 sm:order-1 sm:block sm:w-auto">
                        <Button.To
                            url={"/#sucursales"}
                            onClick={() => setOpen(false)}
                        >
                            Delivery
                        </Button.To>
                    </div>
                    <div className="order-1 w-auto sm:order-2 sm:w-auto">
                        <Link to={"/"} onClick={() => setOpen(false)}>
                            <img className="w-[100px]" src={logo} alt="Oliva" />
                        </Link>
                    </div>
                    <div
                        className={`order-3 flex w-auto items-center sm:absolute sm:right-0 sm:w-auto`}
                    >
                        <Language />
                        <button type="button" onClick={() => setOpen(!open)}>
                            <div
                                className={cn("menu menu-3", open && "active")}
                            >
                                <span></span>
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {open && (
                <Menu onClose={() => setOpen(false)} themeLight={themeLight} />
            )}
        </>
    );
};

const Menu = ({ onClose, themeLight }) => {
    const [open, setOpen] = useState(false);
    const { state } = useContext(AppContext);
    const { t } = useTranslation();

    return (
        <div
            className={`bg-grisClaro fixed left-0 top-0 z-40 h-dvh w-full overflow-hidden transition-all`}
        >
            <nav className="flex h-full flex-row flex-wrap items-end justify-center overflow-auto pb-[40px] pt-[80px] md:h-full md:pt-[150px]">
                <ul className="mb-16 block w-full text-center font-medium  sm:min-h-[220px] ">
                    <li className="mb-4">
                        <Link onClick={() => onClose()} to="bolsa-de-trabajo">
                            Nosotros
                        </Link>
                    </li>
                    {state.sucursals.map((item) => (
                        <li className="mb-4" key={"menu-" + item.slug}>
                            <Link
                                onClick={() => onClose()}
                                to={"sucursal/" + item.slug}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    <li className="mb-4">
                        <Link onClick={() => onClose()} to="bolsa-de-trabajo">
                            {t("header.bolsa")}
                        </Link>
                    </li>
                    <li className="mb-4">
                        {" "}
                        <Link onClick={() => onClose()} to="/#contacto">
                            {t("header.facturacion")}
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link onClick={() => onClose()} to="eventos">
                            {t("header.grupos")}
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => onClose()} to="/#contacto">
                            {t("header.contacto")}
                        </Link>
                    </li>
                </ul>

                <div>
                    <img
                        className="mx-auto block h-[108px] w-[70px]"
                        src={Circle}
                        alt=""
                    />
                </div>
            </nav>
        </div>
    );
};

export default Header;
