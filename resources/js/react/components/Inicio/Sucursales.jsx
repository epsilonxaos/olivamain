import { useContext } from "react";
import { useTranslation } from "react-i18next";
import AppContext from "../../Context/AppContext";
import FadeInUpDiv from "../FadeInUp";
import SucursalCard from "../SucursalCard";
import Text from "../Text";

export default function Sucursales() {
    const { state } = useContext(AppContext);
    const { t } = useTranslation();

    return (
        <section className="py-20 lg:py-28">
            <FadeInUpDiv>
                <Text.Title className={"mb-20"}>
                    {t("home.sucursales.title")}
                </Text.Title>
            </FadeInUpDiv>

            <div
                className="mb-4 flex flex-row flex-wrap px-4 lg:mb-20 lg:px-10"
                id="sucursales"
            >
                {state?.sucursals.length > 0 && (
                    <>
                        {state.sucursals.map((item, idx) => (
                            <SucursalCard
                                key={"sucursal-" + item.slug}
                                delay={0.5 + idx / 10}
                                cover={item.cover}
                                slug={item.slug}
                                menu={item.menu}
                                delivery={item.urlDelivery}
                                reservation={item.urlReservation}
                                location={item.urlLocation}
                                title={item.title}
                            />
                        ))}
                    </>
                )}
            </div>
        </section>
    );
}
