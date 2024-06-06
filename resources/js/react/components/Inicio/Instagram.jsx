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

            <div className="overflow-hidden pt-6 md:mt-8">
                {/* <!-- SnapWidget -->
<iframe src="https://snapwidget.com/embed/1069699" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:2000px; height:400px" title="Posts from Instagram"></iframe> */}
                <iframe
                    src="https://snapwidget.com/embed/1069699"
                    className="snapwidget-widget h-[400px] w-[2000px] overflow-hidden border-none"
                    title="Posts from Instagram"
                ></iframe>
            </div>
        </section>
    );
}
