import Footer from "./modules/Footer";
import Header from "./modules/Header";
import Inicio from "./pages/Inicio";

import "../../fonts/fonts.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import BolsaTrabajo from "./pages/BolsaTrabajo";
import { useEffect, useState } from "react";
import { lightPages } from "./utils/const";
import Eventos from "./pages/Eventos";

export default function Web() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            if (lightPages.includes(location.pathname)) {
                document.querySelector("body").classList.remove("bg-negro");
                document.querySelector("body").classList.add("bg-blanco");
            } else {
                document.querySelector("body").classList.remove("bg-blanco");
                document.querySelector("body").classList.add("bg-negro");
            }
        }, 300);

        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, [location?.pathname]);

    if (loading)
        return (
            <div className="flex h-screen w-full items-center justify-center bg-white text-black">
                <span className="spinner"></span>
            </div>
        );

    return (
        <>
            <Header location={location.pathname} />

            <main className="grid-rows-auto grid min-h-svh grid-rows-[1fr,auto] pt-[206px] sm:pt-[76px]">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            index
                            element={
                                <PageTransition>
                                    <Inicio />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="/bolsa-de-trabajo"
                            element={
                                <PageTransition>
                                    <BolsaTrabajo />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="/eventos"
                            element={
                                <PageTransition>
                                    <Eventos />
                                </PageTransition>
                            }
                        />
                    </Routes>
                </AnimatePresence>

                <Footer />
            </main>
        </>
    );
}
