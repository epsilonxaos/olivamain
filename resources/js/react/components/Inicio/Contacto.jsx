import { useContext } from "react";
import Text from "../Text";
import {
    FaFacebookF,
    FaInstagram,
    FaSpotify,
    FaTripadvisor,
} from "react-icons/fa";
import AppContext from "../../Context/AppContext";
import { useTranslation } from "react-i18next";
import FadeInUpDiv from "../FadeInUp";

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
        <section className="px-7 pb-10 pt-20 lg:py-28" id="contacto">
            <FadeInUpDiv>
                <div className="flex flex-row flex-wrap justify-between md:mb-20 md:items-center xl:mb-36">
                    <figure className="w-full md:w-auto">
                        <img
                            src="/img/horno.svg"
                            alt="Horno"
                            className="mx-auto mb-4 w-[116px] md:w-[160px] lg:w-[200px] xl:w-[380px]"
                        />
                    </figure>
                    <div className="w-full md:w-auto md:text-left">
                        <Text.Title
                            className={"mb-4 md:text-left"}
                            parseHtml={true}
                        >
                            {state.website[i18n.language].home_s5_title}
                        </Text.Title>

                        <div className="mb-10 flex items-center justify-center gap-5 md:justify-start">
                            {state.website.url_in && (
                                <a
                                    href={state.website.url_in}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="text-base lg:text-2xl" />
                                </a>
                            )}
                            {state.website.url_fb && (
                                <a
                                    href={state.website.url_fb}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF className="text-base lg:text-2xl" />
                                </a>
                            )}
                            {state.website.url_ta && (
                                <a
                                    href={state.website.url_ta}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTripadvisor className="text-base lg:text-2xl" />
                                </a>
                            )}
                            {state.website.url_sp && (
                                <a
                                    href={state.website.url_sp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaSpotify className="text-base lg:text-2xl" />
                                </a>
                            )}
                        </div>
                    </div>
                    <figure className="hidden w-full md:w-auto lg:inline">
                        <img
                            src="img/sello-p.svg"
                            alt="Sello p"
                            className="mx-auto mb-10 size-[127px] xl:size-[165px]"
                        />
                    </figure>
                </div>
            </FadeInUpDiv>

            <div className="mx-auto flex flex-row flex-wrap text-center md:max-w-[750px] xl:max-w-none xl:justify-between xl:text-left">
                {state?.sucursals.length > 0 && (
                    <FadeInUpDiv>
                        <div className="mb-10 w-full md:w-1/2 xl:w-auto">
                            <Text.Subtitle
                                className={
                                    "mb-1 text-center text-xl leading-5 tracking-[2px] underline xl:text-left"
                                }
                            >
                                {t("contacto")}
                            </Text.Subtitle>

                            {state.sucursals.map((item) => {
                                if (item.phone)
                                    return (
                                        <Text
                                            key={"sucursal-phone-" + item.slug}
                                        >
                                            {formatPhoneNumber(item.phone)}{" "}
                                            {t("sucursal")} {item.title}
                                        </Text>
                                    );
                            })}
                        </div>
                    </FadeInUpDiv>
                )}

                {state.website.email_facturacion && (
                    <FadeInUpDiv>
                        <div className="mb-10 w-full md:w-1/2 xl:w-auto">
                            <Text.Subtitle
                                className={
                                    "mb-1 text-center text-xl leading-5 tracking-[2px] underline xl:text-left"
                                }
                            >
                                {t("facturacion")}
                            </Text.Subtitle>
                            <Text>
                                <span className="font-bold">
                                    {t("facturacion.linea")}
                                </span>
                                <br />
                                {state.website.email_facturacion}
                            </Text>
                        </div>
                    </FadeInUpDiv>
                )}

                {state.website.email_facturacion && (
                    <FadeInUpDiv>
                        <div className="mb-10 w-full md:w-1/2 xl:w-auto">
                            <Text.Subtitle
                                className={
                                    "mb-1 text-center text-xl leading-5 tracking-[2px] underline xl:text-left"
                                }
                            >
                                {t("bolsa")}
                            </Text.Subtitle>
                            <Text>{state.website.email_bolsa}</Text>
                        </div>
                    </FadeInUpDiv>
                )}

                {state.website.email_facturacion && (
                    <FadeInUpDiv>
                        <div className="mb-10 w-full md:w-1/2 xl:w-auto">
                            <Text.Subtitle
                                className={
                                    "mb-1 text-center text-xl leading-5 tracking-[2px] underline xl:text-left"
                                }
                            >
                                {t("gruposEventos")}
                            </Text.Subtitle>
                            <Text>{state.website.email_eventos}</Text>
                        </div>
                    </FadeInUpDiv>
                )}
            </div>
        </section>
    );
}
