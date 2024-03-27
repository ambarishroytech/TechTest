import React from "react";
import "./AnimalCounter.css";

const AnimalCounter = ({animalCount}) => {

    return (
        <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Number of Animals: {animalCount}</strong>
          </p>
        </div>
      </footer>
    );
}

export default AnimalCounter;