import React from 'react';

const Header = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-lightgreen" href="/">PENZ DESIGNING STUDIO</a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/tours">Tours</a>
                </li>
            </ul>
        </div>
    </nav>
);
};

export default Header;