import React from "react"

export default function Header(props){ 
    return(
        <header className="main-header">  
            <input onClick={props.switchTheme} type="checkbox" className="mode-switcher" />  
            <h1>Invoice Creator</h1>
            <h2>Thanks for choosing GoodCorp, LLC!</h2> 
        </header>
    )
}