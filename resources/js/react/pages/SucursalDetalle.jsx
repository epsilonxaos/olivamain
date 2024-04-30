import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Text from "../components/Text";
import Button from "../components/Button";

export default function SucursalDetalle() {
    return (
        <section className="flex max-w-[1920px] flex-row flex-wrap text-white">
            <figure className="mb-12 w-full overflow-hidden bg-gray-900 lg:mb-0 lg:w-1/2">
                <img
                    src=""
                    alt="eventos"
                    className="size-full min-h-[400px] object-cover object-center md:min-h-[550px] lg:min-h-[730px]"
                />
            </figure>
            <article className="w-full px-7 py-10 text-center lg:w-1/2 lg:py-20">
                <header className="mx-auto max-w-[590px]">
                    <Text.Title className={"mb-8"}>Sucursal Centro</Text.Title>
                </header>
                <main className="mx-auto max-w-[590px]">
                    <img
                        src="/img/fachada.svg"
                        alt="Fachada"
                        className="mx-auto mb-7 w-11/12 max-w-[600px]"
                    />

                    <Text.Subtitle>Horarios</Text.Subtitle>
                    <Text className={"mb-2 tracking-[1.6px]"}>
                        Mar - Jue 13:00 a 23:00 | Vie - Sáb 13:00 a 00:00 <br />
                        Dom 13:00 a 21:00
                    </Text>
                    <div className="mb-8 flex items-center justify-center">
                        <FaInstagram className="text-base lg:text-2xl" />
                        <FaFacebookF className="text-base lg:text-2xl" />
                        <Text className={"tracking-[1.6px]"}>
                            @pizzeriaolivamid
                        </Text>
                    </div>

                    <div className="mx-auto flex max-w-[220px] flex-row flex-wrap justify-between py-5 sm:max-w-none sm:justify-between sm:gap-2">
                        <Button.TransparentWhite className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0">
                            Menú
                        </Button.TransparentWhite>
                        <Button.TransparentWhite className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0">
                            Delivery
                        </Button.TransparentWhite>
                        <Button.TransparentWhite className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0">
                            Reserva
                        </Button.TransparentWhite>
                        <Button.TransparentWhite className="mb-4 w-[95px] px-0 py-2.5 text-xs sm:mb-0">
                            Ubicación
                        </Button.TransparentWhite>
                    </div>
                </main>

                <footer className="mx-auto max-w-[590px] pt-8">
                    <div className="mb-10 border-y border-y-white py-3">
                        <Text className={"tracking-[1.6px]"}>
                            Calle 54 #433 x 47 y 49, Centro, Mérida, Yucatán.
                        </Text>
                    </div>
                    <figure>
                        <img
                            className="mx-auto"
                            src="/img/croquis.png"
                            alt="Croquis o mapa"
                        />
                    </figure>
                </footer>
            </article>
        </section>
    );
}
