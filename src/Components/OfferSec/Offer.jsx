import React from "react";
import "./Offer.css";
import offer from "../../assets/images/offer.jpg";
function Offer() {
    return (
        <section className="offerSec">
            <div
                className="bgOffer"
                style={{
                    backgroundImage: `url(${offer})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="overlay">
                    <div className="content">
                        <h3>Special offer</h3>
                        <h2>Special offers not to be missed!</h2>
                        <button>See All Offers</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Offer;
