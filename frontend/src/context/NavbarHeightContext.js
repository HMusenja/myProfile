import { createContext, useContext } from "react";

export const NavbarHeightContext = createContext(0);

export const useNavbarHeight = () => useContext(NavbarHeightContext);
