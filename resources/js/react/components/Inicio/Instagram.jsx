import { useTranslation } from "react-i18next";
import Text from "../Text";
import FadeInUpDiv from "../FadeInUp";

export default function Instagram() {
    const { t } = useTranslation();

    return (
        <section className="py-20 text-center lg:py-28" id="galeria">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Text.Title className={"mb-3"}>@pizzeriaolivamid</Text.Title>
                <Text>{t("siguenos")}</Text>
            </a>

            <FadeInUpDiv>
                <div className="overflow-hidden pt-6 md:mt-8">
                    <div
                        className="overflow-hidden pt-6 md:mt-8"
                        id="Instafeed"
                    />
                </div>
            </FadeInUpDiv>
        </section>
    );
}
