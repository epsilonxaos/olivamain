import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

const an = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.2 } },
    exit: { opacity: 0, y: -10 },
};

const BranchMenu = () => {
    const { openBranchMenu } = useContext(HeaderContext);

    return (
        <AnimatePresence mode="wait">
            {openBranchMenu && (
                <motion.nav
                    initial={an.initial}
                    animate={an.animate}
                    exit={an.exit}
                    className="pt-1"
                >
                    <ul className="grid grid-cols-1 gap-2">
                        <li className="col-span-1 uppercase">Enoteca</li>
                        <li className="col-span-1 uppercase">Patio</li>
                        <li className="col-span-1 uppercase">Al mare</li>
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default BranchMenu;
