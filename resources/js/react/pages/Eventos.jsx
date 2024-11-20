import Input from "../components/Input";
import Text from "../components/Text";
import Button from "../components/Button";
import Textarea from "../components/Textarea";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { _PATH_SOURCES } from "../utils/const";
import { useTranslation } from "react-i18next";
import FadeInUpDiv from "../components/FadeInUp";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

import sello from "../../../img/bolsa/ilustracion.png";

export default function Eventos() {
    const { state } = useContext(AppContext);
    const { i18n } = useTranslation();

    return (
        <>
            <section className="mx-auto max-w-[1600px] pb-10 lg:pb-0">
                <div className="flex flex-row flex-wrap">
                    <figure className="mb-12 w-full overflow-hidden lg:mb-0 lg:w-1/2">
                        <img
                            src={_PATH_SOURCES + state.website.events_s1_cover}
                            alt="Grupos y eventos"
                            className="size-full min-h-[400px] object-cover object-center md:min-h-[550px] lg:min-h-[730px]"
                        />
                    </figure>
                    <div className="w-full md:py-10 lg:w-1/2 lg:px-7 lg:py-20">
                        <div className="mx-auto max-w-[450px]">
                            <FadeInUpDiv>
                                <img
                                    src={sello}
                                    alt="Sello"
                                    className="mx-auto mb-10 size-[127px] lg:size-[140px]"
                                />

                                <Text.Title className={"mb-5"} parseHtml={true}>
                                    {
                                        state.website[i18n.language]
                                            .events_s1_title
                                    }
                                </Text.Title>
                                <Text
                                    className={"mb-10 text-center"}
                                    parseHtml={true}
                                >
                                    {
                                        state.website[i18n.language]
                                            .events_s1_text
                                    }
                                </Text>

                                <FormEvento />

                                <a href="mailto:reservas@olivamerida.com">
                                    <Text className={"text-center underline"}>
                                        reservas@olivamerida.com
                                    </Text>
                                </a>
                            </FadeInUpDiv>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-black" />
        </>
    );
}

const FormEvento = () => {
    const { t } = useTranslation();
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        axios
            .post(_PATH_SOURCES + "send/mailEvento", data)
            .then((response) => {
                toast.success("Enviado");
                console.log(response);
                reset();
            })
            .catch(() => {
                toast.error("Intente más tarde");
                reset();
            });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="mx-auto mb-5 flex max-w-[430px] flex-row flex-wrap"
        >
            <Input
                label={t("form.nombre")}
                name={"nombre"}
                validate={true}
                register={register}
                rules={{ required: "Este campo es obligatorio" }}
                validateError={!!errors.nombre}
                validateErrorMessage={errors.nombre?.message}
            />
            <Input
                label={t("form.telefono")}
                name={"telefono"}
                validate={true}
                register={register}
                rules={{
                    required: "Este campo es obligatorio",
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message:
                            "Ingrese un número de teléfono válido (10 dígitos)",
                    },
                }}
                validateError={!!errors.telefono}
                validateErrorMessage={errors.telefono?.message}
            />
            <Input
                className={"sm:w-1/2 sm:pr-2"}
                label={t("form.diaEvento")}
                name={"dia"}
                validate={true}
                register={register}
                rules={{ required: "Ingrese la fecha del evento" }}
                validateError={!!errors.dia}
                validateErrorMessage={errors.dia?.message}
            />
            <Input
                className={"sm:w-1/2 sm:pl-2"}
                label={t("form.numPersonas")}
                name={"personas"}
                validate={true}
                register={register}
                rules={{
                    required: "Este campo es obligatorio",
                    pattern: {
                        value: /^[0-9]/,
                        message: "Ingrese el numero de personas",
                    },
                }}
                validateError={!!errors.telefono}
                validateErrorMessage={errors.telefono?.message}
            />
            <Input
                label={t("form.email")}
                name={"email"}
                validate={true}
                register={register}
                rules={{
                    required: "Este campo es obligatorio",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Ingrese un correo electrónico válido",
                    },
                }}
                validateError={!!errors.email}
                validateErrorMessage={errors.email?.message}
            />
            <Textarea
                label={t("form.mensaje")}
                name={"mensaje"}
                validate={true}
                register={register}
                rules={{
                    required: "Este campo es obligatorio",
                }}
                validateError={!!errors.mensaje}
                validateErrorMessage={errors.mensaje?.message}
            />
            <div className="w-full text-center">
                <Button type="submit">{t("form.enviar")}</Button>
            </div>
        </form>
    );
};
