import React from "react";
import "./Heading.css";

const Heading = ({ title, subTitle }) => {
    return (
        <section className="hero is-info">
            <div className="hero-body">
                <p className="title">{title}</p>
                <p className="subtitle">{subTitle}</p>
            </div>
        </section>
    );
};

export default Heading;