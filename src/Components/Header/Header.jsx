import React from "react";
import "./HeaderStyle.css";
import logo from "../../assets/images/logo.png";
import { CiBrightnessDown } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

function Header() {
    return (
        <header className="header">
            <div className="headerContent">
                <div className="logo">
                    <img src={logo} alt="logo" height="100%" />
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Packages</a>
                        </li>
                        <li>
                            <a href="#">Tours</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Blogs</a>
                        </li>
                        <li>
                            <a href="#">Transportation</a>
                        </li>
                        <li>
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className="icons">
                    <a href="#">
                        <CiBrightnessDown />
                    </a>
                    <a href="#">
                        <IoPersonOutline />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
