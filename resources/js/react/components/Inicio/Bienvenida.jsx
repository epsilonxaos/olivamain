import { useContext } from "react";
import Text from "../Text";
import AppContext from "../../Context/AppContext";
import { useTranslation } from "react-i18next";
import FadeInUpDiv from "../FadeInUp";

import ilustracion1 from "../../../../img/home/ilust1.png";
import { InfiniteMovingImages } from "../animations/infinite-moving-cards";

const slideBarImage = [
    "/img/slide-bar/1.png",
    "/img/slide-bar/2.png",
    "/img/slide-bar/3.png",
    "/img/slide-bar/4.png",
    "/img/slide-bar/5.png",
    "/img/slide-bar/6.png",
    "/img/slide-bar/7.png",
    "/img/slide-bar/8.png",
    "/img/slide-bar/9.png",
    "/img/slide-bar/10.png",
];

export default function Bienvenida() {
    const { state } = useContext(AppContext);

    const { i18n } = useTranslation();

    return (
        <>
            <section className="px-7 pb-20 pt-8 md:py-20" id="nosotros">
                <FadeInUpDiv>
                    <Text.Title className="mb-6" parseHtml={true}>
                        {state.website[i18n.language].home_s1_title}
                    </Text.Title>
                </FadeInUpDiv>
                <FadeInUpDiv>
                    <Text
                        className={"mx-auto mb-6 max-w-[870px]"}
                        parseHtml={true}
                    >
                        {state.website[i18n.language].home_s1_text}
                    </Text>
                </FadeInUpDiv>

                <FadeInUpDiv>
                    <img
                        src={ilustracion1}
                        alt="Ilustracion 1"
                        className="mx-auto w-[270px]"
                    />
                </FadeInUpDiv>
            </section>

            <div className="pb-20 md:pb-20 lg:pb-24">
                <InfiniteMovingImages
                    className="mx-auto w-full"
                    pauseOnHover={false}
                    direction="right"
                    speed="slow"
                    items={slideBarImage}
                />
            </div>
        </>
    );
}
