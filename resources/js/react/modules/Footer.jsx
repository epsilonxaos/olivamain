const Footer = () => {
    return (
        <footer className="w-full bg-black px-4 py-5 text-white">
            <ul className="flex w-full flex-col items-center justify-between font-instrumentSans md:flex-row">
                <li>Oliva Pizzeria</li>
                <li>
                    Diseño y desarrollo x{" "}
                    <span className="font-bold">MadebyPartners®</span>
                </li>
                <li>Políticas de privacidad</li>
            </ul>
        </footer>
    );
};

export default Footer;
