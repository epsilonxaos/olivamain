import Text from "./Text";
import Button from "./Button";

export default function SucursalCard({ title }) {
    return (
        <article className="mb-5 w-full bg-white">
            <header className="py-2">
                <Text.Subtitle>{title}</Text.Subtitle>
            </header>

            <main>
                <figure className="bg-gray-400">
                    <img
                        src=""
                        alt="sucursal"
                        className="min-h-[450px] w-full object-cover object-center"
                    />
                </figure>
            </main>

            <footer className="mx-auto flex max-w-[220px] flex-row flex-wrap justify-between py-5">
                <Button.Black className="mb-4 w-[95px] px-0 py-2.5 text-xs">
                    Menú
                </Button.Black>
                <Button.Black className="mb-4 w-[95px] px-0 py-2.5 text-xs">
                    Delivery
                </Button.Black>
                <Button.Black className="mb-4 w-[95px] px-0 py-2.5 text-xs">
                    Reserva
                </Button.Black>
                <Button.Black className="mb-4 w-[95px] px-0 py-2.5 text-xs">
                    Ubicación
                </Button.Black>
                <Button.Black className="w-full px-0 py-2.5 text-xs">
                    Ver más información
                </Button.Black>
            </footer>
        </article>
    );
}
