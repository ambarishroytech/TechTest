import React from "react";
import "./Heading.css";

const Heading = ({ title, subTitle }) => {
    return (
        <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">{title}</p>
                <p class="subtitle">{subTitle}</p>
            </div>
        </section>
    );
};

export default Heading;