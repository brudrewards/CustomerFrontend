import React from 'react'
import { Link } from "react-router-dom"
import { Example } from './Example'
import './Header.css'
import SignUpButton from './SignUpButton'

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <Link className='header_logo' to='/'>
                    <img src={require("./assets/rewards_logo_inverted.jpg")} alt="Brud_Rewards_logo" />
                </Link>
                <Link to="/aboutbrud" className="header__link">
                    About Brud
                </Link>
                <Link to="/cafePartners" className="header__link">
                    Cafe Partners
                </Link>
                <Link to="/download_app" className="header__link">
                    Download App
                </Link>
            </div>
            <div className="header__right">
                <Example />
                <>
                    <Link to='/account/create'>
                        <SignUpButton />
                    </Link>
                </>
            </div>
        </div>
    )
}

export default Header
