import React from 'react'

// Components
import Header from "./Header"
import Footer from "./Footer"

// Google Fonts
import "typeface-barlow"
import "typeface-roboto-mono"

// Stylesheets
import "../stylesheets/main.scss"

interface Props {

}

const Layout = ({ children }) => {
    return (
        <div className="page">
            <Header />
            <div className="page__wrapper">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
