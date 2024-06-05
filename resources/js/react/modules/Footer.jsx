import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-black px-4 py-5 text-white">
            <ul className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between font-instrumentSans text-xs sm:flex-row md:text-base">
                <li className="mb-1 sm:mb-0">
                    <a
                        href="https://www.madeby.partners/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("madeBy")}{" "}
                        <span className="font-bold">MadebyPartners®</span>
                    </a>
                </li>
                <li>{t("Políticas de privacidad")}</li>
            </ul>
        </footer>
    );
};

export default Footer;
