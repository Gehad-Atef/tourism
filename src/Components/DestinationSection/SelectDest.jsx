import React from "react";
import "./DestinationSec.css";

function SelectDest({ item }) {
    return (
        <div
            className="container"
            style={{
                display: "flex",
                gap: "5px",
            }}
        >
            <div
                className="divForIcon"
                style={{
                    width: "20%",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        color: "#ff7815",
                        backgroundColor: "#FFF2E8",
                        borderRadius: "50% ",
                        width: "25px",
                        height: "25px",
                        textAlign: "center",
                    }}
                >
                    {item.icon}
                </span>
            </div>
            <div className="divForSelectDetails" style={{ width: "80%" }}>
                <h2 style={{ fontSize: "20px" }}>{item.title}</h2>
                <p
                    style={{
                        fontSize: "15px",
                        paddingTop: "5px",
                        color: "#1D1C1B",
                    }}
                >
                    {item.paragraph}
                </p>
            </div>
        </div>
    );
}

export default SelectDest;
