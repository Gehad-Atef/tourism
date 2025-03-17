import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./Popular.css";
import PopularCard from "./PopularCard";
function Popular() {
    return (
        <section className="popularSec">
            <div className="content">
                <div className="titles">
                    <p>Visit</p>
                    <h2>Popular Destinations</h2>
                </div>
                <div className="icons">
                    <span>
                        <a href="#" style={{ backgroundColor: "black" }}>
                            <MdArrowBackIos />
                        </a>
                    </span>
                    <span>
                        <a href="#">
                            <MdArrowForwardIos />
                        </a>
                    </span>
                </div>
            </div>
            <div className="popularCards">
                <PopularCard />
                <PopularCard />
                <PopularCard />
            </div>
        </section>
    );
}

export default Popular;
