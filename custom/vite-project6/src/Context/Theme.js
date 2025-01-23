import { useContext } from "react";
import { createContext } from "react";

// at the initial stage kon kon se value already feed ho
export const ThemeContext = createContext({
    // create context ke andar hum value or function dono de sakte hai. 
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}