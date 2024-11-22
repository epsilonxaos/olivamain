import React from "react";

import Menu from "./Menu";

import { motion } from "framer-motion";

import logo from "../../../img/logo.svg";
import LanguagesSelection from "./LanguagesSelection";
import Container from "../components/Container";
import BranchMenu from "./BranchMenu";
import { useState } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { Link } from "react-router-dom";

const Header = () => {
    const [openBranchMenu, setOpenBranchMenu] = useState<boolean>(false);

    return (
        <HeaderContext.Provider value={{ openBranchMenu, setOpenBranchMenu }}>
            <motion.header className="relative border-b border-black py-7 font-apercuPro text-xs">
                <Container className="transition-all">
                    <div className="relative flex items-center justify-between">
                        <Menu />

                        <Link to={"/"}>
                            <img
                                className="absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2"
                                src={logo}
                                alt="Oliva"
                            />
                        </Link>

                        <div className="flex items-center justify-center gap-8">
                            <LanguagesSelection />
                            <button type="button">DELIVERY</button>
                            <button className="bg-crema h-[36px] border border-black px-5">
                                RESERVA
                            </button>
                        </div>
                    </div>

                    <BranchMenu />
                </Container>
            </motion.header>
        </HeaderContext.Provider>
    );
};

export default Header;
