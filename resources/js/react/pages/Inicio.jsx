import Bienvenida from "../components/Inicio/Bienvenida";
import Contacto from "../components/Inicio/Contacto";
import Instagram from "../components/Inicio/Instagram";
import Sucursales from "../components/Inicio/Sucursales";
import Video from "../components/Inicio/Video";

const Inicio = () => {
    return (
        <section className="text-black">
            <Video />
            <Bienvenida />
            <hr className="border-black" />
            <Sucursales />
            <hr className="border-black" />
            <Instagram />
            <Contacto />
        </section>
    );
};

export default Inicio;
