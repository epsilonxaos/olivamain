// import Swiper core and required modules
import { Autoplay, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { useContext } from "react";
import AppContext from "../Context/AppContext";

export const Gallery = () => {
    const { state } = useContext(AppContext);

    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay
            loop
            effect="fade"
        >
            {state.galeria.map((item) => (
                <SwiperSlide key={"galeria-home-" + item.id}>
                    <figure>
                        <img
                            className="h-[450px] w-full object-cover"
                            src={item.cover}
                            alt=""
                        />
                    </figure>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
