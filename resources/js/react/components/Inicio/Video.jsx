import { useContext } from "react";
import AppContext from "../../Context/AppContext";
import { _PATH_SOURCES } from "../../utils/const";

export default function Video() {
    const { state } = useContext(AppContext);

    return (
        <section className="px-7 py-8 md:px-0">
            <video
                autoPlay
                muted
                loop
                className="hidden h-auto w-full rounded-2xl bg-white md:block"
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
                className="h-auto w-full rounded-2xl bg-white md:hidden"
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
