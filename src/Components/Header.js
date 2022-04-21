import React,{useState} from "react"

export default function Header(){

    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode(){
        
    }

    return(
        <header className="dark-main-header"> 
            <div className="toggle-btn">
                <input type="checkbox" id="switch" /> <label for="switch">Toggle</label>
            </div>  
            {/* <button className="mode-switcher">Switch Mode</button> */}
            <h1>Invoice Creator</h1>
            <h2>Thanks for choosing GoodCorp, LLC!</h2> 
        </header>
    )
}