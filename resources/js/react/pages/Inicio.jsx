import { useEffect } from "react";
import FadeInUpDiv from "../components/FadeInUp";
import Bienvenida from "../components/Inicio/Bienvenida";
import Contacto from "../components/Inicio/Contacto";
import Instagram from "../components/Inicio/Instagram";
import Sucursales from "../components/Inicio/Sucursales";
import Video from "../components/Inicio/Video";

const Inicio = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/js/instafeed.js";
        script.async = true;

        script.onload = () => {
            var feed = new window.Instafeed({
                accessToken:
                    "IGQWRPV1VGVzRxZAHhkaExuSEhCNlVXVlZAQV2c2WXh4OGdqNkFjSGJzTFE0bFNuVDgyMktpVEdvb0lLbDRyaFp4Qm1rbHJBZAmNPYkZAmb0ZANM24wZAGV0WGVEampnLUpTZAUVJOFpCU2RISTRtY1FmczR0eXV1LTNkUjQZD",
            });
            feed.run();
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="text-black">
            <div className="mx-auto max-w-[1600px]">
                <FadeInUpDiv>
                    <Video />
                </FadeInUpDiv>
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
