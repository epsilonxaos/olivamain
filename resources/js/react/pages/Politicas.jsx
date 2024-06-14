import { useTranslation } from "react-i18next";
import Text from "../components/Text";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

export const Politicas = () => {
    const { i18n } = useTranslation();
    const { state } = useContext(AppContext);

    return (
        <section className="mx-auto max-w-[1024px] px-7 py-8 pb-20 md:py-20 lg:pb-28">
            <Text.Title className={"mb-8 md:mb-16"}>
                {i18n.language == "en"
                    ? "Privacy policy"
                    : "Políticas de privacidad"}
            </Text.Title>

            <Text parseHtml={true}>
                {state.website[i18n.language].politicas_privacidad}
            </Text>
        </section>
    );
};
