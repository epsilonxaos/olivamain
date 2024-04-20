import Text from "../Text";
import {
    FaFacebookF,
    FaInstagram,
    FaSpotify,
    FaTripadvisor,
} from "react-icons/fa";

export default function Contacto() {
    return (
        <section className="px-7 pb-10 lg:py-28">
            <div className="flex flex-row flex-wrap justify-between md:mb-20 md:items-center xl:mb-36">
                <figure className="w-full md:w-auto">
                    <img
                        src="/img/horno.svg"
                        alt="Horno"
                        className="mx-auto mb-4 w-[116px] md:w-[160px] lg:w-[200px] xl:w-[380px]"
                    />
                </figure>
                <div className="w-full md:w-auto md:text-left">
                    <Text.Title className={"mb-4 md:text-left"}>
                        Ristorante inspirato <br />
                        all’autentica pizza <br className="xl:hidden" />
                        al forno
                    </Text.Title>

                    <div className="mb-10 flex items-center justify-center gap-5 md:justify-start">
                        <FaInstagram className="text-base lg:text-2xl" />
                        <FaFacebookF className="text-base lg:text-2xl" />
                        <FaTripadvisor className="text-base lg:text-2xl" />
                        <FaSpotify className="text-base lg:text-2xl" />
                    </div>
                </div>
                <figure className="w-full md:w-auto">
                    <img
                        src="img/sello-p.svg"
                        alt="Sello p"
                        className="mx-auto mb-10 size-[127px] xl:size-[165px]"
                    />
                </figure>
            </div>

            <div className="mx-auto flex flex-row flex-wrap md:max-w-[750px] xl:max-w-none">
                <div className="mb-10 w-full text-center md:w-1/2 xl:w-1/4">
                    <Text.Subtitle
                        className={
                            "mb-1 text-xl leading-5 tracking-[2px] underline"
                        }
                    >
                        Contacto
                    </Text.Subtitle>
                    <Text>Sucursal Centro (999) 928 4332</Text>
                    <Text>Sucursal Odara (999) 750 1615</Text>
                    <Text>Sucursal Victory Platz (999) 913 5810</Text>
                </div>

                <div className="mb-10 w-full text-center md:w-1/2 xl:w-1/4">
                    <Text.Subtitle
                        className={
                            "mb-1 text-xl leading-5 tracking-[2px] underline"
                        }
                    >
                        Facturación
                    </Text.Subtitle>
                    <Text>
                        <span className="font-bold">Factura en línea</span>{" "}
                        <br />
                        factura@olivamerida.com
                    </Text>
                </div>

                <div className="mb-10 w-full text-center md:w-1/2 xl:w-1/4">
                    <Text.Subtitle
                        className={
                            "mb-1 text-xl leading-5 tracking-[2px] underline"
                        }
                    >
                        Bolsa de trabajo
                    </Text.Subtitle>
                    <Text>rh@olivamerida.com</Text>
                </div>

                <div className="mb-10 w-full text-center md:w-1/2 xl:w-1/4">
                    <Text.Subtitle
                        className={
                            "mb-1 text-xl leading-5 tracking-[2px] underline"
                        }
                    >
                        Grupos y eventos
                    </Text.Subtitle>
                    <Text>reservas@olivamerida.com</Text>
                </div>
            </div>
        </section>
    );
}
