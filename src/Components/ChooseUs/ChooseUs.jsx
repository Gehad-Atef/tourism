import React from "react";
import "./ChooseUs.css";
import { FaCircle } from "react-icons/fa";
import chooseUs1 from "../../assets/images/chooseUs1.jpg";
import chooseUs2 from "../../assets/images/chooseUs2.jpg";
import chooseUs3 from "../../assets/images/chooseUs3.jpg";
function ChooseUs() {
    return (
        <section className="chooseSec">
            <div className="content">
                <h2>Why Choose Us ?</h2>
                <div className="chooseDevs">
                    <div className="devOne">
                        <div
                            className="orangeCircle"
                            style={{ position: "relative" }}
                        >
                            <span
                                style={{
                                    color: "#ff7815",
                                    fontSize: "35px",
                                }}
                            >
                                <FaCircle />
                            </span>
                            <div className="content">
                                <h3>HONEST PRICES</h3>
                                <p>we have the best prices for tours..</p>
                            </div>
                        </div>
                        <div
                            className="orangeCircle"
                            style={{ position: "relative" }}
                        >
                            <span
                                style={{
                                    color: "#ff7815",
                                    fontSize: "35px",
                                }}
                            >
                                <FaCircle />
                            </span>
                            <div className="content">
                                <h3>FULL SUPPORT</h3>
                                <p>on all matters when you contact us.</p>
                            </div>
                        </div>
                        <div
                            className=""
                            style={{
                                backgroundImage: `url(${chooseUs3})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                borderRadius: "80px 30px  100px 40px",
                            }}
                        ></div>
                    </div>
                    <div
                        className="devTwo"
                        style={{
                            backgroundImage: `url(${chooseUs2})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            borderRadius: "80px 30px  100px 40px",
                        }}
                    ></div>
                    <div className="devThree devOne">
                        <div
                            className=""
                            style={{
                                backgroundImage: `url(${chooseUs1})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                borderRadius: "80px 30px  100px 40px",
                            }}
                        ></div>
                        <div
                            className="orangeCircle"
                            style={{ position: "relative" }}
                        >
                            <span
                                style={{
                                    color: "#ff7815",
                                    fontSize: "35px",
                                }}
                            >
                                <FaCircle />
                            </span>
                            <div className="content">
                                <h3>HONEST PRICES</h3>
                                <p>we have the best prices for tours..</p>
                            </div>
                        </div>
                        <div
                            className="orangeCircle"
                            style={{ position: "relative" }}
                        >
                            <span
                                style={{
                                    color: "#ff7815",
                                    fontSize: "35px",
                                }}
                            >
                                <FaCircle />
                            </span>
                            <div className="content">
                                <h3>FULL SUPPORT</h3>
                                <p>on all matters when you contact us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseUs;
