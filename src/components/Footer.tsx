import React from 'react'

interface Props {

}

const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <div className="footer__body">
                <p>Copyright© {new Date().getFullYear()}, Builted by <strong> Olivier Chemla</strong></p>
            </div>
        </footer>
    )
}

export default Footer
