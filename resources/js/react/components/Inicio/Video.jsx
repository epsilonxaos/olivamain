import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import { _PATH_SOURCES } from "../../utils/const";

export default function Video() {
    const { state } = useContext(AppContext);

    return (
        <section className="px-4 pb-5 pt-3 md:px-3 md:pt-7">
            <video
                autoPlay
                muted
                loop
                className="hidden h-auto max-h-[760px] w-full rounded-2xl bg-white object-cover md:block"
            >
                <source
                    src={_PATH_SOURCES + state.website.video}
                    type="video/mp4"
                    className=""
                />
            </video>
            <video
                autoPlay
                muted
                loop
                className="h-auto min-h-[450px] w-full rounded-2xl bg-white object-cover md:hidden"
            >
                <source
                    src={_PATH_SOURCES + state.website.videoM}
                    type="video/mp4"
                    className="md:hidden"
                />
            </video>
        </section>
    );
}
