import { Link, NavLink } from 'react-router-dom'
import BrandLogo from '../../Assets/img/Binarex-Logo-black.png'

import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className="">
            <div className="container-xxl position-relative p-0">
                <nav
                    className="navbar navbar-expand-lg navbar-white bg-white px-4 px-lg-5
                    py-3 py-lg-0 fixed-top pb-4 shadow-sm mb-4"
                >
                    {/* Product Brand */}
                    <Link to="/" className="navbar-brand p-3 brand__logo">
                        The Bin
                    </Link>

                    {/* Toogler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    {/* nav content + Links */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0 px-3 text-start">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link text-dark
                                    link-underline link-underline-warning">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown
                                link-underline link-underline-warning">
                                    <NavLink to="" className="nav-link text-dark dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        id='#navbarDropdownMenuLink' role="button"
                                        aria-expanded="false">
                                        Our Services
                                    </NavLink>
                                    <ul className="dropdown-menu dropdown-menu-light" role="menu"
                                        aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <NavLink to="" className="dropdown-item">
                                                Binarex Robot
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="" className="dropdown-item">
                                                Account Management
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="" className="dropdown-item">
                                                Buy Options
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="" className="dropdown-item">
                                                Our Blog
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="" className="dropdown-item">
                                                Our Partnership
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link text-dark
                                    link-underline link-underline-warning">
                                    
                                        Remmitance
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link text-dark
                                    link-underline link-underline-warning">
                                        Faq's
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link text-dark
                                    link-underline link-underline-warning">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="px-3">
                            <button className="btn btn-outline-primary me-4 ripple btn-min w-sm ">Login</button>
                            <button className="btn btn-primary ripple btn-min w-sm  ">Register</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
