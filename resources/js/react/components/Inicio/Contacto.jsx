import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import FadeInUpDiv from "../FadeInUp";
import Text from "../Text";

function formatPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.toString();
    if (phoneNumber.length !== 10) {
        return phoneNumber;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 10)}`;
}

export default function Contacto() {
    const { state } = useContext(AppContext);
    const { t, i18n } = useTranslation();

    return (
        <section className="px-7 pb-10 pt-20 lg:px-10 lg:pt-28" id="contacto">
            <div className="mx-auto flex flex-row flex-wrap text-center xl:max-w-none xl:justify-between xl:text-left">
                {state?.sucursals.length > 0 && (
                    <FadeInUpDiv className={"mb-10 w-full md:w-1/2 xl:w-auto"}>
                        <Text.Title className={"mb-1 text-center xl:text-left"}>
                            {t("contacto")}
                        </Text.Title>

                        {state.sucursals.map((item) => {
                            if (item.phone)
                                return (
                                    <Text key={"sucursal-phone-" + item.slug}>
                                        <a
                                            className="mr-3 underline"
                                            href={"tel:+52" + item.phone}
                                        >
                                            {formatPhoneNumber(item.phone)}
                                        </a>
                                        Oliva {item.title}
                                    </Text>
                                );
                        })}
                    </FadeInUpDiv>
                )}

                <FadeInUpDiv className={"mb-10 w-full md:w-1/2 xl:w-auto"}>
                    <Text.Title className={"mb-1 text-center xl:text-left"}>
                        {t("facturacion")}
                    </Text.Title>
                    {/* {state.sucursals.map((item) => {
                        if (item.urlfacturacion)
                            return (
                                <a
                                    key={"sucursal-link-" + item.slug}
                                    href={item.urlfacturacion}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Text className={"underline"}>
                                        {item.title}
                                    </Text>
                                </a>
                            );
                    })} */}
                    <Text className={"underline"}>
                        <a href={"mailto:" + state.website.email_facturacion}>
                            Factura en linea
                        </a>
                    </Text>
                    <Text>
                        <a href={"mailto:" + state.website.email_facturacion}>
                            {state.website.email_facturacion}
                        </a>
                    </Text>
                </FadeInUpDiv>

                <FadeInUpDiv className={"mb-10 w-full md:w-1/2 xl:w-auto"}>
                    <Text.Title className={"mb-1 text-center xl:text-left"}>
                        {t("bolsa")}
                    </Text.Title>
                    <Link to={"bolsa-de-trabajo"}>
                        <Text className={"underline"}>{t("formContact")}</Text>
                    </Link>
                    <a href={"mailto:" + state.website.email_bolsa}>
                        <Text>{state.website.email_bolsa}</Text>
                    </a>
                </FadeInUpDiv>

                <FadeInUpDiv className={"mb-10 w-full md:w-1/2 xl:w-auto"}>
                    <Text.Title className={"mb-1 text-center xl:text-left"}>
                        {t("gruposEventos")}
                    </Text.Title>
                    <Link to={"eventos"}>
                        <Text className={"underline"}>{t("formContact")}</Text>
                    </Link>
                    <a href={"mailto:" + state.website.email_eventos}>
                        <Text>{state.website.email_eventos}</Text>
                    </a>
                </FadeInUpDiv>

                <FadeInUpDiv className={"w-full"}>
                    <div className="mb-10 flex items-center justify-center gap-5 xl:justify-start">
                        {state.website.url_fb && (
                            <a
                                href={state.website.url_fb}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Text.Title>FB</Text.Title>
                            </a>
                        )}
                        {state.website.url_in && (
                            <a
                                href={state.website.url_in}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Text.Title>IN</Text.Title>
                            </a>
                        )}

                        {state.website.url_ta && (
                            <a
                                href={state.website.url_ta}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Text.Title>TA</Text.Title>
                            </a>
                        )}
                    </div>
                </FadeInUpDiv>
            </div>
        </section>
    );
}
