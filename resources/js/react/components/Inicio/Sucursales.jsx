import { useContext } from "react";
import SucursalCard from "../SucursalCard";
import Text from "../Text";
import AppContext from "../../Context/AppContext";
import { useTranslation } from "react-i18next";

export default function Sucursales() {
    const { state } = useContext(AppContext);
    const { t } = useTranslation();

    return (
        <section className="py-20 lg:py-28" id="sucursales">
            <Text.Title className={"mb-20"}>
                {t("home.sucursales.title")}
            </Text.Title>

            <div className="mb-20 flex flex-row flex-wrap px-4">
                {state?.sucursals.length > 0 && (
                    <>
                        {state.sucursals.map((item) => (
                            <SucursalCard
                                key={"sucursal-" + item.slug}
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

            <Text className={"text-center uppercase underline"}>
                {t("politicasReservacion")}
            </Text>
        </section>
    );
}
