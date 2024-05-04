import { useContext } from "react";
import SucursalCard from "../SucursalCard";
import Text from "../Text";
import AppContext from "../../Context/AppContext";

export default function Sucursales() {
    const { state } = useContext(AppContext);

    return (
        <section className="py-20 lg:py-28">
            <Text.Title className={"mb-20"}>Nuestras sucursales</Text.Title>

            <div className="mb-20 flex flex-row flex-wrap">
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
                Políticas de reservación
            </Text>
        </section>
    );
}
