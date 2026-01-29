import { useState } from 'react';
import { createContext } from 'react'

export const themeDataContext = createContext();

export const ThemeContext = (props) => {
    const [theme, setTheme] = useState("light")

    return (
        <themeDataContext.Provider value={[theme, setTheme]}>
            {props.children}
        </themeDataContext.Provider>
    )
}

export default ThemeContext