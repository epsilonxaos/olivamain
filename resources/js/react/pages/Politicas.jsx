import { useTranslation } from "react-i18next";
import Text from "../components/Text";

export const Politicas = () => {
    const { i18n } = useTranslation();

    if (i18n.language == "en")
        return (
            <section className="mx-auto max-w-[1024px] px-7 py-8 pb-20 md:py-20 lg:pb-28">
                <Text.Title className={"mb-8 md:mb-16"}>
                    Privacy policy
                </Text.Title>
                <Text className={"mb-3"}>
                    <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>{" "}
                    respects your right to privacy. This policy outlines what
                    personal information we may collect, how we may use this
                    information, as well as other important issues regarding
                    your privacy and data protection.
                </Text>
                <Text className={"mb-3"}>
                    <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>{" "}
                    has the policy of complying with all current privacy and
                    data protection laws. This commitment reflects the value we
                    place on earning and keeping the trust of our customers,
                    business partners, and anyone who shares their personal
                    information with us.
                </Text>
                <Text className={"mb-3"}>
                    This Policy applies to all Internet sites and mobile
                    applications operated by or on behalf of{" "}
                    <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>
                    , and includes{" "}
                    <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>{" "}
                    companies worldwide (known as “Website or Mobile Application
                    from
                    <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>
                    ”). It also applies to all personal information that{" "}
                    <span className="font-bold">
                        REDUX CONCEPTS SAPI DE CV
                    </span>{" "}
                    may otherwise collect:
                </Text>
                <Text className={"mb-3"}>
                    1. Through our products and services.
                </Text>
                <Text className={"mb-3"}>
                    2. Through interaction by means other than a website or
                    application for mobile phone from{" "}
                    <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>
                    . For example, in person, by phone or in a trade fair or
                    training.
                </Text>
                <Text className={"mb-3"}>
                    3. Through our customers, distributors, suppliers, vendors
                    and other business partners (collectively known as “business
                    associates”).
                </Text>
                <Text className={"mb-3"}>
                    However, the Internet sites, mobile applications, products
                    and services of{" "}
                    <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>{" "}
                    may have different purposes and characteristics. If it is
                    necessary to provide additional or different information for
                    a specific website, mobile application, product or service
                    of{" "}
                    <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>
                    , said obligation will be published separately on the
                    relevant website, mobile application, product or service.
                    Each of these additional information obligations, specific
                    privacy policies or statements (“Specific Privacy
                    Statement”) supplement and amend this Policy.
                </Text>
            </section>
        );

    return (
        <section className="mx-auto max-w-[1024px] px-7 py-8 pb-20 md:py-20 lg:pb-28">
            <Text.Title className={"mb-8 md:mb-16"}>
                Políticas de privacidad
            </Text.Title>
            <Text className={"mb-3"}>
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>{" "}
                respeta su derecho de privacidad. Esta política resume qué
                información personal podemos recoger, de qué manera podemos
                utilizar esta información y otros temas importantes relacionados
                con su privacidad y protección de datos.
            </Text>
            <Text className={"mb-3"}>
                Es política de{" "}
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>{" "}
                cumplir con todas las leyes de privacidad y de protección de
                datos vigentes. Este compromiso refleja el valor que le damos al
                hecho de obtener y conservar la confianza de nuestros clientes,
                socios comerciales y demás personas que comparten su información
                personal con nosotros.
            </Text>
            <Text className={"mb-3"}>
                Esta Política se aplica a todos los sitios de Internet y
                aplicaciones móviles administrados por{" "}
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span> o
                en su nombre, e incluye las compañías de{" "}
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span> de
                todo el mundo (conocidas como “sitio de internet o aplicación
                móvil de{" "}
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>”).
                También se aplica a toda la información personal que{" "}
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>{" "}
                pueda recoger de cualquier otro modo:
            </Text>
            <Text className={"mb-3"}>
                1. A través de nuestros productos y servicios.
            </Text>
            <Text className={"mb-3"}>
                2. Cuando interactúa con nosotros por medios distintos de un
                sitio de internet o aplicación móvil de{" "}
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>,
                por ejemplo, de manera presencial, por teléfono o en una feria
                de muestras o formación.
            </Text>
            <Text className={"mb-3"}>
                3. A través de nuestros clientes, distribuidores, proveedores,
                vendedores y otros socios comerciales (en conjunto, “socios
                comerciales”).
            </Text>
            <Text className={"mb-3"}>
                No obstante, los sitios de Internet, aplicaciones móviles,
                productos y servicios de{" "}
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>{" "}
                pueden tener fines y características distintas. Si se necesita
                proporcionar información adicional o diferente para un
                determinado sitio de internet, aplicación móvil, producto o
                servicio específico de
                <span className="font-bold">REDUX CONCEPTS SAPI DE CV</span>, se
                publicará dicha obligación por separado en el sitio de internet,
                aplicación móvil, producto o servicio que sea pertinente. Cada
                una de estas obligaciones de proporcionar información
                adicionales, políticas o declaraciones de privacidad específicas
                (“Declaración de Privacidad Específica”) complementan y
                enmiendan esta Política.
            </Text>
        </section>
    );
};
