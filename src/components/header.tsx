import React from 'react'
import './style.css'

export const Header = () => {
    return <header>
        <div className="container">
            <div className="d-flex justify-content-between">
                <div className="logo">
                    <img src={require('../images/MainLogo-svg.png')} alt="logo" className="img-fluid"/>
                </div>
                <div className="head-btn-get-app">
                    <button className="btn btn-primary text-uppercase" type="submit">Get the app</button>
                </div>
            </div>
        </div>
    </header>
}