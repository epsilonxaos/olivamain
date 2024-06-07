import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const MESSAGE_CONSENT_KEY = "AppConsent";

export const MessageConsent = ({ daysExpire = 7 }) => {
    const [cookies, setCookie] = useCookies([MESSAGE_CONSENT_KEY]);
    const [open, setOpen] = useState(true);

    const Accept = () => {
        const expires = new Date();
        expires.setDate(expires.getDate() + daysExpire);

        setCookie(MESSAGE_CONSENT_KEY, true, { expires }); //Expira en 7 dias
    };

    const Decline = () => setOpen(false);

    if (cookies[MESSAGE_CONSENT_KEY] || !open) return "";

    return (
        <div className="fixed bottom-0 left-0 z-10 w-full bg-white p-3 text-center font-instrumentSans">
            <div className="mx-auto max-w-[1600px] text-xs">
                <p className="mb-2">
                    Al utilizar nuestro sitio web, aceptas el uso de Cookies
                    conforme a esta política. Nos reservamos el derecho de
                    actualizar y modificar esta política en cualquier momento.
                    Cualquier cambio será publicado en esta página y, si es
                    necesario, se te notificará mediante el sitio web o por
                    otros medios.
                </p>
                <p className="mb-2">
                    Para obtener más información sobre nuestra política de
                    privacidad y el uso de tus datos personales, consulta
                    nuestra{" "}
                    <Link className="underline" to={"/politicas-privacidad"}>
                        Política de Privacidad.
                    </Link>
                </p>

                <button
                    className="border  border-black bg-white px-2 py-1 text-black"
                    type="button"
                    onClick={() => Decline()}
                >
                    Rechazar (Opcional)
                </button>
                <button
                    className="ml-2 bg-black px-2 py-1 text-white"
                    type="button"
                    onClick={() => Accept()}
                >
                    Estoy de acuerdo
                </button>
            </div>
        </div>
    );
};
