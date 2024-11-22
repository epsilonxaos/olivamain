import { createContext } from "react";

type HeaderContextType = {
    openBranchMenu: boolean;
    setOpenBranchMenu: (value: boolean) => void;
};

export const HeaderContext = createContext<HeaderContextType>({
    openBranchMenu: false,
    setOpenBranchMenu: () => {},
});
