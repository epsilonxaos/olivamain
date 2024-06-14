import { useContext, useEffect, useState } from "react";
import AppContext from "../../Context/AppContext";
import { _PATH_SOURCES } from "../../utils/const";
import { Gallery } from "../Gallery";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import { IoMdCloseCircle } from "react-icons/io";

const galeria = [
    "/img/galeria/1.jpg",
    "/img/galeria/2.jpg",
    "/img/galeria/3.jpg",
    "/img/galeria/4.jpg",
    "/img/galeria/5.jpg",
    "/img/galeria/6.jpg",
    "/img/galeria/7.jpg",
];

export default function Video() {
    const { state } = useContext(AppContext);
    const { i18n } = useTranslation();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open)
            document.querySelector("body").classList.add("overflow-hidden");
        else document.querySelector("body").classList.remove("overflow-hidden");
    }, [open]);

    return (
        <section className="px-4 pb-5 pt-3 md:pt-7 lg:px-10">
            <video
                autoPlay
                muted
                playsInline
                loop
                className="pointer-events-none hidden h-auto max-h-[760px] w-full select-none rounded-2xl bg-white object-cover md:block"
            >
                <source
                    src={_PATH_SOURCES + state.website.video}
                    type="video/mp4"
                    className=""
                />
            </video>

            <div className="relative h-auto min-h-[450px] w-full overflow-hidden rounded-2xl bg-white object-cover md:hidden">
                <Button.White
                    onClick={() => setOpen(true)}
                    className="absolute bottom-2 left-1/2 z-[50] -translate-x-1/2 border-black text-xs"
                >
                    {i18n.language == "en" ? "PLAY VIDEO" : "VER VIDEO"}
                </Button.White>

                <Gallery
                    keySection={"home-gallery"}
                    className={"h-[450px]"}
                    galeria={galeria}
                />
            </div>

            {open && (
                <div className="fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-center bg-black bg-opacity-60 p-4 backdrop-blur-sm">
                    <div className="absolute right-4 top-4 text-white">
                        <IoMdCloseCircle
                            size={28}
                            onClick={() => setOpen(false)}
                        />
                    </div>

                    <video
                        controls
                        className="h-auto max-h-[760px] w-full bg-white md:block"
                    >
                        <source
                            src={_PATH_SOURCES + state.website.videoM}
                            type="video/mp4"
                            className=""
                        />
                    </video>
                </div>
            )}
        </section>
    );
}
