import Input from "../components/Input";
import Text from "../components/Text";
import Button from "../components/Button";
import Textarea from "../components/Textarea";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { _PATH_SOURCES } from "../utils/const";
import { useTranslation } from "react-i18next";
import FadeInUpDiv from "../components/FadeInUp";

export default function Eventos() {
    const { state } = useContext(AppContext);
    const { t, i18n } = useTranslation();

    return (
        <section className="mx-auto px-7 py-10 text-white md:container lg:container xl:container lg:px-4 lg:py-20">
            <div className="flex flex-row flex-wrap">
                <figure className="mb-12 w-full overflow-hidden rounded-3xl lg:mb-0 lg:w-1/2">
                    <img
                        src={_PATH_SOURCES + state.website.events_s1_cover}
                        alt="eventos"
                        className="size-full min-h-[400px] object-cover object-center md:min-h-[550px] lg:min-h-[730px]"
                    />
                </figure>
                <div className="w-full lg:w-1/2 lg:px-7">
                    <FadeInUpDiv>
                        <img
                            src="/img/sello.svg"
                            alt="Sello"
                            className="mx-auto mb-10 size-[127px] invert lg:size-[140px]"
                        />

                        <Text.Title className={"mb-5"} parseHtml={true}>
                            {state.website[i18n.language].events_s1_title}
                        </Text.Title>
                        <Text className={"mb-10 text-center"} parseHtml={true}>
                            {state.website[i18n.language].events_s1_text}
                        </Text>

                        <form
                            action=""
                            className="mx-auto mb-5 flex max-w-[430px] flex-row flex-wrap"
                        >
                            <Input label={t("form.nombre")} name={"nombre"} />
                            <Input
                                label={t("form.telefono")}
                                name={"telefono"}
                            />
                            <Input
                                className={"sm:w-1/2 sm:pr-2"}
                                label={t("form.diaEvento")}
                                name={"dia"}
                            />
                            <Input
                                className={"sm:w-1/2 sm:pl-2"}
                                label={t("form.numPersonas")}
                                name={"personas"}
                            />
                            <Input label={t("form.email")} name={"email"} />
                            <Textarea
                                label={t("form.mensaje")}
                                name={"mensaje"}
                            />
                            <div className="w-full text-center">
                                <Button.White>{t("form.enviar")}</Button.White>
                            </div>
                        </form>
                        <Text className={"text-center underline"}>
                            reservas@olivamerida.com
                        </Text>
                    </FadeInUpDiv>
                </div>
            </div>
        </section>
    );
}
