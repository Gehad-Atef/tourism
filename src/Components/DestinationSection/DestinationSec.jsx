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
function DestinationSec({ isOpen, setIsOpen, handleOpen }) {
    return (
        <main>
            {isOpen && (
                <div className="nav">
                    <table>
                        <tr>
                            <td>
                                {" "}
                                <a href="#">Home</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {" "}
                                <a href="#">Packages</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {" "}
                                <a href="#">Tours</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {" "}
                                <a href="#">About</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {" "}
                                <a href="#">Blogs</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {" "}
                                <a href="#">Transportation</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {" "}
                                <a href="#">Contact</a>
                            </td>
                        </tr>
                    </table>
                </div>
            )}

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
                            breathtaking beauty of Egypt, from the Great
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
