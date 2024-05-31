import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Text from "../components/Text";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { _PATH_SOURCES } from "../utils/const";

export default function SucursalDetalle() {
    const [data, setData] = useState({});

    let { slug } = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                import.meta.env.VITE_APP_URL + "api/sucursal/" + slug,
            );

            console.log({ response });
            if (response.status == 200) setData(response.data);
            else console.log("redirect");
        }
        fetchData();
    }, [slug]);

    return (
        <section className="flex max-w-[1920px] flex-row flex-wrap text-white">
            <figure className="mb-12 w-full overflow-hidden bg-gray-900 lg:mb-0 lg:w-1/2">
                <img
                    src={_PATH_SOURCES + data.cover}
                    alt={data.title}
                    className="size-full min-h-[400px] object-cover object-center md:min-h-[550px] lg:min-h-[730px]"
                />
            </figure>
            <article className="w-full px-7 py-10 text-center lg:w-1/2 lg:py-20">
                <header className="mx-auto max-w-[590px]">
                    <Text.Title className={"mb-8"}>
                        Sucursal {data.title}
                    </Text.Title>
                </header>
                <main className="mx-auto max-w-[590px]">
                    <img
                        src={_PATH_SOURCES + data.icon}
                        alt="Icono sucursal"
                        className="mx-auto mb-7 w-auto max-w-[600px]"
                    />
                    <Text parseHtml={true}>{data.descEs}</Text>

                    <hr className="my-8" />

                    <Text.Subtitle>Horarios</Text.Subtitle>
                    <Text className={"mb-2 tracking-[1.6px]"} parseHtml={true}>
                        {data.horarioEs}
                    </Text>

                    {data.urlIn || data.urlFb || data.titleIn || (
                        <div className="mb-8 flex items-center justify-center">
                            {data.urlIn && (
                                <a
                                    href={data.urlIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="text-base lg:text-2xl" />
                                </a>
                            )}
                            {data.urlFb && (
                                <a
                                    href={data.urlFb}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF className="text-base lg:text-2xl" />
                                </a>
                            )}
                            {data.titleIn && (
                                <a
                                    href={data.urlIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Text className={"tracking-[1.6px]"}>
                                        {data.titleIn}
                                    </Text>
                                </a>
                            )}
                        </div>
                    )}

                    <div className="mx-auto flex max-w-[220px] flex-row flex-wrap justify-center py-5 sm:max-w-none sm:gap-2">
                        {data.menu && (
                            <Button.TransparentWhite
                                isLink={true}
                                isLinkExternal={true}
                                url={_PATH_SOURCES + data.menu}
                                className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0"
                            >
                                Menú
                            </Button.TransparentWhite>
                        )}
                        {data.urlDelivery && (
                            <Button.TransparentWhite
                                isLink={true}
                                isLinkExternal={true}
                                url={data.urlDelivery}
                                className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0"
                            >
                                Delivery
                            </Button.TransparentWhite>
                        )}
                        {data.urlReservation && (
                            <Button.TransparentWhite
                                isLink={true}
                                isLinkExternal={true}
                                url={data.urlReservation}
                                className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0"
                            >
                                Reserva
                            </Button.TransparentWhite>
                        )}
                        {data.urlLocation && (
                            <Button.TransparentWhite
                                isLink={true}
                                isLinkExternal={true}
                                url={data.urlLocation}
                                className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0"
                            >
                                Ubicación
                            </Button.TransparentWhite>
                        )}
                    </div>
                </main>

                <footer className="mx-auto max-w-[590px] pt-8">
                    {data?.address && (
                        <div className="mb-10 border-y border-y-white py-3">
                            <Text className={"tracking-[1.6px]"}>
                                {data.address}
                            </Text>
                        </div>
                    )}
                    {data?.croquisEs && (
                        <figure>
                            <img
                                className="mx-auto"
                                src={_PATH_SOURCES + data.croquisEs}
                                alt="Croquis o mapa"
                            />
                        </figure>
                    )}
                </footer>
            </article>
        </section>
    );
}
