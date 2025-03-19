import React from "react";

function ServicesDetails({ item }) {
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
                    width: "auto",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        color: "white",
                        backgroundColor: "#ff7815",
                        borderRadius: "30px ",
                        width: "50px",
                        height: "40px",
                        textAlign: "center",
                        fontSize: "30px",
                        outline: "1px #ff7815 dotted",
                    }}
                >
                    {item.icon}
                </span>
            </div>
            <div className="divForSelectDetails" style={{ width: "80%" }}>
                <h2 style={{ fontSize: "30px" }}>{item.title}</h2>
                <p
                    style={{
                        fontSize: "20px",
                        color: "#1D1C1B",
                    }}
                >
                    {item.paragraph}
                </p>
            </div>
        </div>
    );
}

export default ServicesDetails;
