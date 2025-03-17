import React from "react";
import "./Tours.css";
import Giza from "../../assets/images/Giza.jpg";
const arrayTours = [
    {
        image: Giza,
        title: "Giza",
        span: "1 / 3",
    },
    {
        image: Giza,
        title: "Giza",
        span: "1",
    },
    {
        image: Giza,
        title: "Giza",
        span: "1 / 3",
    },
    {
        image: Giza,
        title: "Giza",
        span: "1",
    },
    {
        image: Giza,
        title: "Giza",
        span: "3",
    },
    {
        image: Giza,
        title: "Giza",
        span: "2 / 4",
    },
    {
        image: Giza,
        title: "Giza",
        span: "3",
    },
    {
        image: Giza,
        title: "Giza",
        span: "2/4",
    },
];
function Tours() {
    return (
        <section className="toursSec">
            <div className="content">
                <h3 className="see">See</h3>
                <h2 className="toursTitle">All Tours</h2>
                <div className="toursContainer">
                    {arrayTours.map((item, index) => (
                        <SingleTour key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Tours;
function SingleTour({ item }) {
    return (
        <div
            className="oneTour"
            style={{
                backgroundImage: `url(${item.image})`,
                gridRow: `${item.span}`,
                backgroundColor: "gray",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "30px",
                position: "relative",
            }}
        >
            <p
                className="tourTitle"
                style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    color: "white",
                }}
            >
                {item.title}
            </p>
        </div>
    );
}
