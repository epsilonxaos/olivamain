import Input from "../components/Input";
import Text from "../components/Text";
import Button from "../components/Button";
import Textarea from "../components/Textarea";

export default function Eventos() {
    return (
        <section className="mx-auto px-7 py-10 text-white md:container lg:container xl:container lg:py-20">
            <div className="flex flex-row flex-wrap">
                <figure className="mb-12 w-full overflow-hidden rounded-3xl bg-gray-900 lg:mb-0 lg:w-1/2">
                    <img
                        src=""
                        alt="eventos"
                        className="size-full min-h-[400px] object-cover object-center md:min-h-[550px] lg:min-h-[730px]"
                    />
                </figure>
                <div className="w-full lg:w-1/2 lg:px-7">
                    <img
                        src="/img/sello.svg"
                        alt="Sello"
                        className="mx-auto mb-10 size-[127px] invert lg:size-[140px]"
                    />

                    <Text.Title className={"mb-5"}>
                        GRUPOS Y EVENTOS <br />
                        PIZZERIA OLIVA
                    </Text.Title>
                    <Text className={"mb-10 text-center"}>
                        Cuéntanos más sobre tu evento y nosotros nos <br />
                        pondremos en contacto.
                    </Text>

                    <form
                        action=""
                        className="mx-auto mb-5 flex max-w-[430px] flex-row flex-wrap"
                    >
                        <Input label={"Nombre y Apellido"} name={"nombre"} />
                        <Input label={"Teléfono"} name={"telefono"} />
                        <Input
                            className={"pr-2 sm:w-1/2"}
                            label={"Día del evento"}
                            name={"dia"}
                        />
                        <Input
                            className={"pl-2 sm:w-1/2"}
                            label={"Número de personas"}
                            name={"personas"}
                        />
                        <Input label={"Email"} name={"email"} />
                        <Textarea label={"Mensaje"} name={"mensaje"} />
                        <div className="text-center">
                            <Button.White>Enviar</Button.White>
                        </div>
                    </form>
                    <Text className={"text-center underline"}>
                        reservas@olivamerida.com
                    </Text>
                </div>
            </div>
        </section>
    );
}
