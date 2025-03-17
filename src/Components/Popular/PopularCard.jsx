import React from "react";
import "./Popular.css";
import cairo from "../../assets/images/cairo.jpeg";
function PopularCard() {
    return (
        <div className="popularCard">
            <div style={{ width: "100%", height: "35%", marginBottom: "10px" }}>
                <img
                    src={cairo}
                    alt={cairo}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                />
            </div>
            <div className="cardDetails">
                <button>Cairo Tour</button>
                <h2>The Black and White deserts</h2>
                <h3>Full Day Tours</h3>
                <p>
                    The Black and White deserts 2 Days 1 Night The Black and
                    White deserts are spectacular and well worth a trip.... 
                </p>
                <span>★★★★★</span>
            </div>

            <div className="cardFoot">
                <p>
                    From
                    <span> $80</span>
                </p>
                <button>Details</button>
            </div>
        </div>
    );
}

export default PopularCard;
