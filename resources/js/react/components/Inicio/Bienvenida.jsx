import { useContext } from "react";
import Text from "../Text";
import AppContext from "../../Context/AppContext";
import { useTranslation } from "react-i18next";
import FadeInUpDiv from "../FadeInUp";

export default function Bienvenida() {
    const { state } = useContext(AppContext);

    const { i18n } = useTranslation();

    return (
        <section className="px-7 py-8 pb-20 md:py-20 lg:pb-28" id="nosotros">
            <FadeInUpDiv>
                <img
                    className="mx-auto mb-12 size-[127px] lg:mb-20 lg:size-[230px]"
                    src="/img/sello.svg"
                    alt="Sello"
                />
                <Text.Main className={"mb-12"} parseHtml={true}>
                    {state.website[i18n.language].home_s1_title}
                </Text.Main>

                <Text
                    className={"mx-auto max-w-[900px] text-center"}
                    parseHtml={true}
                >
                    {state.website[i18n.language].home_s1_text}
                </Text>
            </FadeInUpDiv>
        </section>
    );
}
