import Footer from "./modules/Footer";
import Header from "./modules/Header";
import Inicio from "./pages/Inicio";

export default function Web() {
    return (
        <>
            <Header />

            <main className="pt-[100px]"></main>

            <Inicio />

            <Footer />
        </>
    );
}
