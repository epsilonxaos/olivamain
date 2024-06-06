import Bienvenida from "../components/Inicio/Bienvenida";
import Contacto from "../components/Inicio/Contacto";
import Instagram from "../components/Inicio/Instagram";
import Sucursales from "../components/Inicio/Sucursales";
import Video from "../components/Inicio/Video";

const Inicio = () => {
    return (
        <div className="text-black">
            <div className="mx-auto max-w-[1600px]">
                <Video />
                <Bienvenida />
            </div>
            <hr className="border-black" />
            <div className="mx-auto max-w-[1600px] ">
                <Sucursales />
            </div>
            <hr className="border-black" />
            <div className="mx-auto max-w-[1600px] ">
                <Instagram />
            </div>
            <hr className="border-black md:hidden" />
            <div className="mx-auto max-w-[1600px] ">
                <Contacto />
            </div>
        </div>
    );
};

export default Inicio;
