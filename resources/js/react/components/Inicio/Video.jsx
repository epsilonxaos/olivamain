import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import { _PATH_SOURCES } from "../../utils/const";
import { Gallery } from "../Gallery";

export default function Video() {
    const { state } = useContext(AppContext);

    return (
        <section className="px-4 pb-5 pt-3 md:pt-7 lg:px-10">
            <video
                autoPlay
                muted
                playsInline
                loop
                poster="imgUrl"
                className="pointer-events-none hidden h-auto max-h-[760px] w-full select-none rounded-2xl bg-white object-cover md:block"
            >
                <source
                    src={_PATH_SOURCES + state.website.video}
                    type="video/mp4"
                    className=""
                />
            </video>

            <div className="pointer-events-none h-auto min-h-[450px] w-full select-none overflow-hidden rounded-2xl bg-white object-cover md:hidden">
                <Gallery
                    keySection={"home-gallery"}
                    className={"h-[450px]"}
                    galeria={[
                        {
                            cover: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
                        },
                        {
                            cover: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        },
                        {
                            cover: "https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        },
                    ]}
                />
            </div>
        </section>
    );
}
