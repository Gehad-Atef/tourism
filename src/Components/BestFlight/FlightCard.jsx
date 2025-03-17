import React from "react";
import fayoum from "../../assets/images/fayoum.jpeg";
import "./BestFlight.css";
function FlightCard() {
    return (
        <div className="flightCard">
            <div style={{ width: "100%", height: "40%", marginBottom: "10px" }}>
                <img
                    src={fayoum}
                    alt={fayoum}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                />
            </div>
            <div className="cardDetails">
                <div
                    className="cardTitle"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h2>The Black and White deserts</h2>
                    <span style={{ color: "#ff7815" }}>150$</span>
                </div>
                <p> 2 Days 1 Night Package</p>
            </div>

            <button>View All Details</button>
        </div>
    );
}

export default FlightCard;
