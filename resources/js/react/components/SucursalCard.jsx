import Text from "./Text";
import Button from "./Button";
import { Link } from "react-router-dom";
import { _PATH_SOURCES } from "../utils/const";
import { useTranslation } from "react-i18next";
import FadeInUpDiv from "./FadeInUp";

export default function SucursalCard({
    title,
    cover,
    slug,
    menu,
    delivery,
    reservation,
    location,
    delay,
}) {
    const { t } = useTranslation();

    console.log({
        title,
        cover,
        slug,
        menu,
        delivery,
        reservation,
        location,
        delay,
    });

    return (
        <div className="mb-14 w-full lg:mb-0 lg:w-1/3 lg:px-2">
            <FadeInUpDiv
                className={
                    "mx-auto w-full shadow-sm transition-all sm:max-w-[430px] md:shadow-none lg:w-auto 2xl:max-w-[475px]"
                }
                delay={delay}
            >
                <header className="py-2 md:py-4">
                    <Text>{title}</Text>
                </header>

                <main>
                    <figure className="bg-gray-100">
                        <Link to={"sucursal/" + slug}>
                            <img
                                src={_PATH_SOURCES + cover}
                                alt="sucursal"
                                className="min-h-[400px] w-full object-cover object-center lg:h-[540px]"
                            />
                        </Link>
                    </figure>
                </main>

                <footer className="mx-auto grid grid-cols-4 justify-center gap-1 py-5 sm:max-w-none sm:justify-center sm:gap-2 lg:grid-cols-2 xl:grid-cols-4">
                    {menu && (
                        <Button.Url
                            url={_PATH_SOURCES + menu}
                            className="col-span-1 mb-2 px-0 py-2.5 text-[10px] sm:mb-0 md:text-xs"
                        >
                            {t("sucursal.btn.menu")}
                        </Button.Url>
                    )}
                    {delivery && (
                        <Button.Url
                            url={delivery}
                            className="col-span-1 mb-2 px-0 py-2.5 text-[10px] sm:mb-0 md:text-xs"
                        >
                            {t("sucursal.btn.delivery")}
                        </Button.Url>
                    )}
                    {reservation && (
                        <Button.Url
                            url={reservation}
                            className="col-span-1 mb-2 px-0 py-2.5 text-[10px] sm:mb-0 md:text-xs"
                        >
                            {t("sucursal.btn.reserva")}
                        </Button.Url>
                    )}
                    {location && (
                        <Button.Url
                            url={location}
                            className="col-span-1 mb-2 px-0 py-2.5 text-[10px] sm:mb-0 md:text-xs"
                        >
                            {t("sucursal.btn.ubicacion")}
                        </Button.Url>
                    )}
                    <Button.To
                        url={"sucursal/" + slug}
                        className="col-span-4 px-0 py-2.5 text-center text-[10px] md:text-xs lg:col-span-2 xl:col-span-4"
                    >
                        {t("sucursal.btn.conoceMas")}
                    </Button.To>
                </footer>
            </FadeInUpDiv>
        </div>
    );
}
