import { useContext } from "react";
import FadeInUpDiv from "../components/FadeInUp";
import Bienvenida from "../components/Inicio/Bienvenida";
import GaleriaPrincipal from "../components/Inicio/GaleriaPrincipal";
import Sucursales from "../components/Inicio/Sucursales";
import AppContext from "../Context/AppContext";
import { _PATH_SOURCES } from "../utils/const";

import IlustPastas from "../../../img/home/ilust2.png";

const Inicio = () => {
    const { state } = useContext(AppContext);

    return (
        <div className="text-black">
            <div className="mx-auto max-w-[1600px]">
                <FadeInUpDiv>
                    <GaleriaPrincipal />
                </FadeInUpDiv>

                <Bienvenida />
            </div>

            <hr className="border-black" />

            <div className="mx-auto max-w-[1600px] ">
                <Sucursales />
            </div>

            <div className="relative z-[1]">
                <div className="absolute top-1/2 -z-10 w-full translate-y-[-50%] border-t border-black" />
                <img
                    className="mx-auto w-[70%] max-w-[600px]"
                    src={IlustPastas}
                    alt="Ilustraciond de pastas"
                />
            </div>

            <div className="mx-auto max-w-[1600px] ">
                {state.website.img_promo_movil && (
                    <img
                        className="mx-auto mt-16 w-[90%] shadow-lg shadow-gray-300 md:hidden"
                        src={_PATH_SOURCES + state.website.img_promo_movil}
                        alt=""
                    />
                )}
                {state.website.img_promo && (
                    <img
                        className="mx-auto mt-16 hidden w-[80%] shadow-lg shadow-gray-200 md:block"
                        src={_PATH_SOURCES + state.website.img_promo}
                        alt=""
                    />
                )}
            </div>
        </div>
    );
};

export default Inicio;
