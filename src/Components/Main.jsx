import React from "react";
import Header from "./Header/Header";
import DestinationSec from "./DestinationSection/DestinationSec";
import Tours from "./Tours/Tours";
import Services from "./ServicesSec/Services";
import Popular from "./Popular/Popular";
import BestFlight from "./BestFlight/BestFlight";
import Offer from "./OfferSec/Offer";
import ChooseUs from "./ChooseUs/ChooseUs";
function Main() {
    return (
        <div>
            <Header />
            <DestinationSec />
            <Tours />
            <Services />
            <Popular />
            <Offer />
            <BestFlight />
            <ChooseUs />
        </div>
    );
}

export default Main;
