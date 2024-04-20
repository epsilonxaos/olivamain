import { useState } from "react";
import { Copa, Logo, MenuIcon } from "../components/Assets";
import Button from "../components/Button";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full px-7 py-10 uppercase sm:bg-white sm:p-4">
                <nav className="flex flex-row flex-wrap items-center justify-between">
                    <div className="order-2 sm:order-1 sm:w-auto">
                        <Button.Black className="bg-transparent">
                            DELIVERY
                        </Button.Black>
                    </div>
                    <div className="order-1 mb-10 w-full sm:order-2 sm:mb-0 sm:w-auto">
                        <Logo className="mx-auto w-[120px] " />
                    </div>
                    <div className="order-3 flex items-center sm:w-auto">
                        <ul className="mr-4 flex items-center">
                            <li className="">ES</li>
                            <li className="px-2 font-bold">|</li>
                            <li className="">EN</li>
                        </ul>
                        <button
                            className="size-[36px] rounded-full bg-white"
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </nav>
            </header>

            {open && <Menu />}
        </>
    );
};

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed left-0 top-0 w-full bg-white ">
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
                            <ul className="mx-auto mt-4 flex max-w-[450px] items-center justify-around border-y border-black py-2">
                                <li>Centro</li>
                                <li>Victory Platz</li>
                                <li>Odara</li>
                            </ul>
                        )}
                    </li>
                    <li className="mb-4">Galeria</li>
                    <li className="mb-4">Bolsa de trabajo</li>
                    <li className="mb-4">facturacion</li>
                    <li className="mb-4">Grupos y eventos</li>
                    <li>Contacto / media</li>
                </ul>
                <Copa className="mx-auto block w-[70px]" />
            </nav>
        </div>
    );
};

export default Header;
