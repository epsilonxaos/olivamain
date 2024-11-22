import { AnimatePresence } from "framer-motion";
import { useEffect, useReducer } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Toaster } from "sonner";
import "./lang/i18n";
import Index from "./pages/home/Index";
import AppContext from "./contexts/AppContext";
import Header from "./modules/Header";
import PageTransition from "./components/animations/PageTransition";
import Footer from "./modules/Footer";
import { MessageConsent } from "./components/MessageConsent";

const initialArgs = {
    loading: true,
};
const reducer = (prev, next) => ({ ...prev, ...next });

export default function Web() {
    const location = useLocation();
    const [state, dispatch] = useReducer(reducer, initialArgs);

    useEffect(() => {
        // async function fetchData() {
        //     const response = await axios.get(
        //         import.meta.env.VITE_APP_URL + "api/initial",
        //     );

        //     const { website, sucursals, galeria } = response.data;
        //     website.translations.forEach((translation) => {
        //         let locale = translation.locale;
        //         website[locale] = translation;
        //     });
        //     dispatch({ website, sucursals, galeria });

        // }
        // fetchData();

        setTimeout(() => {
            dispatch({ loading: false });
        }, 1500);
    }, []);

    if (state.loading)
        return (
            <div className="flex h-screen w-full items-center justify-center bg-grisClaro text-black">
                <span className="spinner"></span>
            </div>
        );

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Header location={location.pathname} />

            <Toaster />

            <main className="mx-auto min-h-svh pt-[65px]">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route
                            index
                            exact
                            path="/"
                            element={
                                <PageTransition>
                                    <Index />
                                </PageTransition>
                            }
                        />

                        {/* <Route
                            path="/bolsa-de-trabajo"
                            element={
                                <PageTransition>
                                    <BolsaTrabajo />
                                </PageTransition>
                            }
                        /> */}
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
            <MessageConsent />
        </AppContext.Provider>
    );
}
