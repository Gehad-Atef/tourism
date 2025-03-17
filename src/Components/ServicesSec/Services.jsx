import React from "react";
import "./Services.css";
import { LuPlane } from "react-icons/lu";
import { GiGreekTemple } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";
import ServicesDetails from "./ServicesDetails";
const array = [
    {
        icon: <LuPlane />,
        paragraph: "Tours",
        title: "+150",
    },
    {
        icon: <GiGreekTemple />,
        paragraph: "Destination",
        title: "+20",
    },
    {
        icon: <BsPeople />,
        paragraph: "Customers",
        title: "+3000",
    },
    {
        icon: <MdOutlineTravelExplore />,
        paragraph: "Travel Guides",
        title: "+50",
    },
];
function Services() {
    return (
        <section className="servicesSec">
            <div className="servicesContent">
                <h2>What We Do For You</h2>
                <p>Experience The Terill</p>
                <div className="serviceDetails">
                    {array.map((item) => (
                        <ServicesDetails item={item} key={item.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
