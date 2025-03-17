import React from "react";
import FlightCard from "./FlightCard.jsx";
import "./BestFlight.css";
function BestFlight() {
    return (
        <section className="FlightSec">
            <div className="content">
                <div className="titles">
                    <h2>
                        Discover the best flight deals designed just for you!
                    </h2>
                    <p>
                        Choose from a variety of unique tourist packages and
                        enjoy an unforgettable experience <br />
                        in the most beautiful destinations in Egypt.
                    </p>
                </div>
                <button>See All Packeges</button>
            </div>
            <div className="flightCards">
                <FlightCard />
                <FlightCard />
                <FlightCard />
                <FlightCard />
                <FlightCard />
                <FlightCard />
            </div>
        </section>
    );
}

export default BestFlight;
