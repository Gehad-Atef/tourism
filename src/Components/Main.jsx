import React from "react";
import Header from "./Header/Header";
import DestinationSec from "./DestinationSection/DestinationSec";
import Tours from "./Tours/Tours";
import Services from "./ServicesSec/Services";
import Popular from "./Popular/Popular";
import BestFlight from "./BestFlight/BestFlight";
function Main() {
    return (
        <div>
            <Header />
            <DestinationSec />
            <Tours />
            <Services />
            <Popular />
            <BestFlight />
        </div>
    );
}

export default Main;
