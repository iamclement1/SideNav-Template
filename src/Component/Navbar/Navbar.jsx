import { Link, NavLink } from 'react-router-dom'
import BrandLogo from '../../Assets/img/Binarex-Logo-black.png'

import '../../App.css'

export default function Navbar() {
    return (
        <div className="row">
            <div className="container-xxl position-relative p-0">
                <nav
                    className="navbar navbar-expand-lg navbar-white bg-white px-4 px-lg-5
                    py-3 py-lg-0 sticky-top"
                >
                    {/* Product Brand */}
                    <Link to="/" className="navbar-brand p-3 brand__logo">
                        <img src={BrandLogo} alt="brand__logo" />
                    </Link>

                    {/* Toogler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls='navbarCollapse'
                        aria-expanded="false"
                        aria-label="Collapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* nav content + Links */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 px-3 text-start">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
