import { useContext, useMemo, useState } from "react";
import { Copa, Logo, MenuIcon } from "../components/Assets";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { lightPages } from "../utils/const";
import AppContext from "../Context/AppContext";

const Header = ({ location }) => {
    const [open, setOpen] = useState(false);
    const themeLight = useMemo(() => lightPages.includes(location), [location]);

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full px-7 py-10 uppercase sm:p-4">
                <nav className="mx-auto flex max-w-[1600px] flex-row flex-wrap items-center justify-between">
                    <div className="order-2 sm:order-1 sm:w-auto">
                        {themeLight ? (
                            <Button.Black className="bg-transparent">
                                DELIVERY
                            </Button.Black>
                        ) : (
                            <Button.TransparentWhite className="bg-transparent">
                                DELIVERY
                            </Button.TransparentWhite>
                        )}
                    </div>
                    <div className="order-1 mb-10 w-full sm:order-2 sm:mb-0 sm:w-auto">
                        <Link to={"/"} onClick={() => setOpen(false)}>
                            <Logo
                                themelight={themeLight}
                                className="mx-auto w-[120px] "
                            />
                        </Link>
                    </div>
                    <div
                        className={`order-3 flex items-center sm:w-auto ${themeLight ? "text-black" : "text-white"}`}
                    >
                        <ul className="mr-4 flex items-center">
                            <li className="">ES</li>
                            <li className="px-2 font-bold">|</li>
                            <li className="">EN</li>
                        </ul>
                        <button
                            className={`size-[36px] overflow-hidden rounded-full ${themeLight ? "bg-white" : "bg-black"} `}
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            <MenuIcon themelight={themeLight} />
                        </button>
                    </div>
                </nav>
            </header>

            {open && (
                <Menu
                    onClose={() =>
                        setTimeout(() => {
                            setOpen(false);
                        }, 300)
                    }
                    themeLight={themeLight}
                />
            )}
        </>
    );
};

const Menu = ({ onClose, themeLight }) => {
    const [open, setOpen] = useState(false);
    const { state } = useContext(AppContext);

    return (
        <div
            className={`fixed left-0 top-0 z-10 w-full transition-all ${themeLight ? "bg-white" : "bg-black text-white"}`}
        >
            <nav className="flex min-h-svh flex-col items-end  justify-center pb-[60px] pt-[150px]">
                <ul className="min-h-[380px] w-full text-center font-medium uppercase">
                    <li className="mb-4">Nosotros</li>
                    <li className="mb-4">
                        <button
                            className="uppercase"
                            onClick={() => setOpen(!open)}
                        >
                            Sucursales
                        </button>
                        {open && (
                            <ul className="mx-auto mt-4 flex max-w-[450px] items-center justify-center gap-4 border-y border-black py-2">
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
                    <li className="mb-4">Galeria</li>
                    <li className="mb-4">
                        <Link onClick={() => onClose()} to="bolsa-de-trabajo">
                            Bolsa de trabajo
                        </Link>
                    </li>
                    <li className="mb-4">facturacion</li>
                    <li className="mb-4">
                        <Link onClick={() => onClose()} to="eventos">
                            Grupos y eventos
                        </Link>
                    </li>
                    <li>Contacto / media</li>
                </ul>
                <Copa
                    themelight={themeLight}
                    className="mx-auto block w-[70px]"
                />
            </nav>
        </div>
    );
};

export default Header;
