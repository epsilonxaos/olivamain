import { useTranslation } from "react-i18next";
import Text from "../Text";

export default function Instagram() {
    const { t } = useTranslation();

    return (
        <section className="py-20 text-center lg:py-28" id="galeria">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Text.Title className={"mb-3"}>@pizzeriaolivamid</Text.Title>
                <Text>{t("siguenos")}</Text>
            </a>
        </section>
    );
}
