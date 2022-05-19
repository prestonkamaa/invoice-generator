import React from "react" 
import Header from "./Header"
import MainContent from "./MainContent"
import useLocalStorage from "use-local-storage"

export default function App(){

    const [theme,setTheme] = useLocalStorage("theme" ? "dark":"light")

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark":"light";
        setTheme(newTheme)
    }



    return( 
        <div className="app-body-backround" data-theme={theme}> 
            <Header
                data-theme={theme}
                switchTheme={switchTheme}
            />
            <MainContent
                data-theme={theme}
            /> 
        </div>
    )
}