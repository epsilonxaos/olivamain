import { FaChevronDown } from "react-icons/fa6";
import { HeaderContext } from "../contexts/HeaderContext";
import { useContext } from "react";

const Menu = () => {
    const { openBranchMenu, setOpenBranchMenu } = useContext(HeaderContext);

    return (
        <nav className="font-apercuPro">
            <ul className="flex items-center justify-center gap-8">
                <li>
                    <button
                        onClick={() => setOpenBranchMenu(!openBranchMenu)}
                        type="button"
                        className="flex items-center"
                    >
                        SUCURSALES <FaChevronDown className="ml-2" />
                    </button>
                </li>
                <li>GRUPOS Y EVENTOS</li>
                <li>CONTACTO</li>
            </ul>
        </nav>
    );
};

export default Menu;
