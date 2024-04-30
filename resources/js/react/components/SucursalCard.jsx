import Text from "./Text";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function SucursalCard({ title }) {
    return (
        <article className="mx-auto mb-5 w-full bg-white sm:min-w-[430px] lg:w-auto 2xl:min-w-[475px]">
            <header className="py-2 md:py-4">
                <Text.Subtitle>{title}</Text.Subtitle>
            </header>

            <main>
                <figure className="bg-gray-400">
                    <Link to={"sucursal/centro-merida"}>
                        <img
                            src=""
                            alt="sucursal"
                            className="min-h-[450px] w-full object-cover object-center lg:min-h-[540px]"
                        />
                    </Link>
                </figure>
            </main>

            <footer className="mx-auto flex max-w-[220px] flex-row flex-wrap justify-between py-5 sm:max-w-none sm:justify-center sm:gap-2">
                <Button.Black className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0">
                    Menú
                </Button.Black>
                <Button.Black className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0">
                    Delivery
                </Button.Black>
                <Button.Black className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0">
                    Reserva
                </Button.Black>
                <Button.Black className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0">
                    Ubicación
                </Button.Black>
                <Button.Black
                    isLink={true}
                    isLinkExternal={false}
                    url="sucursal/centro-merida"
                    className="w-full px-0 py-2.5 text-xs sm:hidden"
                >
                    Ver más información
                </Button.Black>
            </footer>
        </article>
    );
}
