import Footer from "./modules/Footer";
import Header from "./modules/Header";
import Inicio from "./pages/Inicio";

import "../../fonts/fonts.css";

export default function Web() {
    return (
        <>
            <Header />

            <main className="grid-rows-auto grid min-h-svh grid-rows-[1fr,auto] pt-[206px] sm:pt-[76px]">
                <Inicio />

                <Footer />
            </main>
        </>
    );
}
