// import Swiper core and required modules
import { Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { twMerge } from "tailwind-merge";

export const Gallery = ({ galeria, keySection, className }) => {
    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay
            loop
            effect="fade"
        >
            {galeria.map((item, idx) => (
                <SwiperSlide key={"galeria-" + keySection + "-" + idx}>
                    <figure>
                        <img
                            className={twMerge(
                                "w-full object-cover",
                                className,
                            )}
                            src={item}
                            alt=""
                        />
                    </figure>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
