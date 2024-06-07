import { useContext, useEffect, useMemo, useState } from "react";
import { Copa, Logo, MenuIcon } from "../components/Assets";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { lightPages } from "../utils/const";
import AppContext from "../Context/AppContext";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

const Header = ({ location }) => {
    const [open, setOpen] = useState(false);
    const themeLight = useMemo(() => lightPages.includes(location), [location]);

    const Language = () => {
        const { i18n } = useTranslation();

        return (
            <div className="mr-4 flex items-center justify-center">
                <span
                    onClick={() => i18n.changeLanguage("es")}
                    className={
                        i18n.language == "es"
                            ? "font-bold"
                            : "cursor-pointer opacity-30 hover:opacity-100"
                    }
                >
                    ES
                </span>
                <span className="mx-2 block font-bold">|</span>
                <span
                    onClick={() => i18n.changeLanguage("en")}
                    className={
                        i18n.language == "en"
                            ? "font-bold"
                            : "cursor-pointer opacity-30 hover:opacity-100"
                    }
                >
                    EN
                </span>
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
            <header
                className={`fixed left-0 top-0 z-50 w-full px-4 py-3 uppercase transition-all duration-300 sm:p-4 lg:px-10 ${themeLight ? "bg-white" : "bg-black"}`}
            >
                <nav className="relative mx-auto flex max-w-[1600px] flex-row flex-wrap items-center justify-between sm:justify-center">
                    <div className="order-2 hidden sm:absolute sm:left-0 sm:order-1 sm:block sm:w-auto">
                        {themeLight ? (
                            <Link to={"/#sucursales"}>
                                <Button.Black className="bg-transparent">
                                    DELIVERY
                                </Button.Black>
                            </Link>
                        ) : (
                            <Link to={"/#sucursales"}>
                                <Button.TransparentWhite className="bg-transparent">
                                    DELIVERY
                                </Button.TransparentWhite>
                            </Link>
                        )}
                    </div>
                    <div className="order-1 w-auto sm:order-2 sm:w-auto">
                        <Link to={"/"} onClick={() => setOpen(false)}>
                            <Logo
                                themelight={themeLight}
                                className="mx-auto w-[95px] md:w-[120px] "
                            />
                        </Link>
                    </div>
                    <div
                        className={`order-3 flex w-auto items-center sm:absolute sm:right-0 sm:w-auto ${themeLight ? "text-black" : "text-white"}`}
                    >
                        <Language />
                        <button
                            className={`size-[28px] overflow-hidden rounded-full md:size-[36px] ${themeLight ? "bg-white" : "bg-black"} `}
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            <MenuIcon themelight={themeLight} />
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
            className={`fixed left-0 top-0 z-10 h-dvh w-full overflow-hidden  transition-all  ${themeLight ? "bg-white" : "bg-black text-white"}`}
        >
            <nav className="flex h-full flex-row flex-wrap items-end justify-center overflow-auto pb-[40px] pt-[80px] md:h-full md:pt-[150px]">
                <ul className="mb-16 block w-full text-center font-medium uppercase sm:min-h-[220px] ">
                    <li className="mb-4">
                        <button
                            className="uppercase"
                            onClick={() => setOpen(!open)}
                        >
                            {t("header.sucursales")}
                        </button>
                        {open && (
                            <ul
                                className={`mx-auto mt-4 flex max-w-[450px] items-center justify-center gap-4 border-y ${themeLight ? "border-black" : "border-white"}  py-2`}
                            >
                                {state.sucursals.map((item) => (
                                    <li key={"menu-" + item.slug}>
                                        <Link
                                            onClick={() => onClose()}
                                            to={"sucursal/" + item.slug}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
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
                    <Copa
                        themelight={themeLight}
                        className="mx-auto block h-[108px] w-[70px]"
                    />
                </div>
            </nav>
        </div>
    );
};

export default Header;
