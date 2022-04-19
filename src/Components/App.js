import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import MainContent from "./MainContent"

export default function App(){
    return(
        <div className="app-body-backround">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}