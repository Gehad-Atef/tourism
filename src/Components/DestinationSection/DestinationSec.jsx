import React from "react";
import "./DestinationSec.css";
import background1 from "../../assets/images/background1.png";
import SelectDest from "./SelectDest";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const array = [
    {
        icon: <CiLocationOn />,
        title: "Location",
        paragraph: "Enter Your Destination",
    },
    {
        icon: <MdOutlineDateRange />,
        title: "Date",
        paragraph: "Choose Your Date",
    },
    {
        icon: <MdOutlinePriceChange />,
        title: "Price",
        paragraph: "Enter Your Budget",
    },
];
function DestinationSec() {
    return (
        <main>
            <div
                className="background"
                style={{
                    backgroundImage: `url(${background1})`,
                    width: "100%",
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="content">
                    <div className="details">
                        <h2>Discover your next </h2>
                        <h1>Destinations</h1>
                        <p>
                            Embark on a journey through time and experience the
                            breathtaking beauty of Egypt, from the <br /> Great
                            Pyramids of Giza to the stunning beaches of the Red
                            Sea.
                        </p>
                    </div>
                    <div className="contentInformation">
                        {array.map((item) => (
                            <SelectDest item={item} key={item.title} />
                        ))}
                        <button className="search">
                            Find My Adventure{" "}
                            <span>
                                <CiSearch />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DestinationSec;
