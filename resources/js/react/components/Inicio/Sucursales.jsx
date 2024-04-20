import SucursalCard from "../SucursalCard";
import Text from "../Text";

export default function Sucursales() {
    return (
        <section className="py-20 lg:py-28">
            <Text.Title className={"mb-20"}>Nuestras sucursales</Text.Title>

            <div className="mb-20 flex flex-row flex-wrap lg:gap-2">
                <SucursalCard title={"Centro"} />
                <SucursalCard title={"Odaka"} />
                <SucursalCard title={"Victory plats"} />
            </div>

            <Text className={"text-center uppercase underline"}>
                Políticas de reservación
            </Text>
        </section>
    );
}
