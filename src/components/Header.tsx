import React from 'react'
import { Link } from "gatsby"


interface Props {

}

const Header = (props: Props) => {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__link" activeClassName="header__link--active">home</Link>
                <Link to="/blog" className="header__link" activeClassName="header__link--active">blog</Link>
                <Link to="/contact" className="header__link" activeClassName="header__link--active">contact</Link>
            </nav>
        </header>
    )
}

export default Header
