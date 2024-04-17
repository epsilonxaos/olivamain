import { useState } from "react";
import { Copa, Logo } from "../components/Assets";
import Button from "../components/Button";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="uppercase w-full bg-white py-4 px-4 fixed top-0 left-0 z-50">
                <nav className="flex flex-row justify-between items-center">
                    <Button.Black>DELIVERY</Button.Black>
                    <Logo className="w-[120px]" />
                    <div className="flex items-center">
                        <ul className="flex items-center mr-4">
                            <li className="px-1">ES</li>
                            <li className="font-bold">|</li>
                            <li className="px-1">EN</li>
                        </ul>
                        <button
                            className="w-[36px] h-[36px] rounded-full bg-black"
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            X
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
        <div className="fixed top-0 left-0 w-full bg-white ">
            <nav className="flex min-h-svh pt-[150px] pb-[60px]  flex-col items-end justify-center">
                <ul className="uppercase w-full text-center font-medium min-h-[380px]">
                    <li className="mb-4">Nosotros</li>
                    <li className="mb-4">
                        <button
                            className="uppercase"
                            onClick={() => setOpen(!open)}
                        >
                            Sucursales
                        </button>
                        {open && (
                            <ul className="flex mt-4 py-2 items-center justify-around max-w-[450px] mx-auto border-y border-black">
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
                <Copa className="w-[70px] block mx-auto" />
            </nav>
        </div>
    );
};

export default Header;
