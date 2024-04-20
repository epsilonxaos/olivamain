import Text from "../Text";

export default function Bienvenida() {
    return (
        <section className="px-7 py-8 pb-20 md:py-20 lg:pb-28">
            <img
                className="mx-auto mb-12 size-[127px] lg:mb-20 lg:size-[230px]"
                src="/img/sello.svg"
                alt="Sello"
            />
            <Text.Main className={"mb-12"}>
                Ristorante inspirato <br /> all’autentica <br /> pizza al forno
            </Text.Main>

            <Text className={"mx-auto max-w-[900px] text-center"}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit felis
                ornare morbi leo, sollicitudin facilisis nisi proin viverra
                luctus vehicula iaculis potenti laoreet, condimentum a tincidunt
                hac curae nec curabitur scelerisque nulla ad. Semper taciti sed
                habitant penatibus tincidunt placerat dictum neque.
            </Text>
        </section>
    );
}
