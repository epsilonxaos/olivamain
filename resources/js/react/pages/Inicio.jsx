import Bienvenida from "../components/Inicio/Bienvenida";
import Contacto from "../components/Inicio/Contacto";
import Instagram from "../components/Inicio/Instagram";
import Sucursales from "../components/Inicio/Sucursales";
import Video from "../components/Inicio/Video";

const Inicio = () => {
    return (
        <section className="py-8 text-black">
            <Video />
            <Bienvenida />
            <Sucursales />
            <Instagram />
            <Contacto />
        </section>
    );
};

export default Inicio;
