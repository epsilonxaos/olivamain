import Text from "./Text";
import Button from "./Button";
import { Link } from "react-router-dom";
import { _PATH_SOURCES } from "../utils/const";

export default function SucursalCard({
    title,
    cover,
    slug,
    menu,
    delivery,
    reservation,
    location,
}) {
    return (
        <div className="w-full lg:w-1/3 lg:px-2">
            <article className="mx-auto mb-5 w-full bg-white sm:max-w-[430px] lg:w-auto 2xl:max-w-[475px]">
                <header className="py-2 md:py-4">
                    <Text.Subtitle>{title}</Text.Subtitle>
                </header>

                <main>
                    <figure className="bg-gray-400">
                        <Link to={"sucursal/" + slug}>
                            <img
                                src={_PATH_SOURCES + cover}
                                alt="sucursal"
                                className="min-h-[450px] w-full object-cover object-center  lg:min-h-[540px]"
                            />
                        </Link>
                    </figure>
                </main>

                <footer className="mx-auto flex max-w-[220px] flex-row flex-wrap justify-between py-5 sm:max-w-none sm:justify-center sm:gap-2">
                    {menu && (
                        <Button.Black
                            isLink={true}
                            isLinkExternal={true}
                            url={_PATH_SOURCES + menu}
                            className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0"
                        >
                            Menú
                        </Button.Black>
                    )}
                    {delivery && (
                        <Button.Black
                            isLink={true}
                            isLinkExternal={true}
                            url={delivery}
                            className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0"
                        >
                            Delivery
                        </Button.Black>
                    )}
                    {reservation && (
                        <Button.Black
                            isLink={true}
                            isLinkExternal={true}
                            url={reservation}
                            className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0"
                        >
                            Reserva
                        </Button.Black>
                    )}
                    {location && (
                        <Button.Black
                            isLink={true}
                            isLinkExternal={true}
                            url={location}
                            className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0"
                        >
                            Ubicación
                        </Button.Black>
                    )}
                    <Button.Black
                        isLink={true}
                        isLinkExternal={false}
                        url={"sucursal/" + slug}
                        className="w-full px-0 py-2.5 text-center text-xs sm:hidden"
                    >
                        Conóce más
                    </Button.Black>
                </footer>
            </article>
        </div>
    );
}
