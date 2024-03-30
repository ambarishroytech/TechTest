import React from "react";
import "./Animal.css";
import Like from "./Like/Like";
import DeleteAnimal from "./DeleteAnimal/DeleteAnimal";

const Animal = (props) => {
    const onAnimalDeleted = (animal) => {
        props.onDeleteAnimal(animal);
    }

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img
                    src={props.animalImage}
                    alt="Animal"
                />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <Like />
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{props.animalName.toUpperCase()}</p>
                    </div>
                    <div className="media-right">
                        <DeleteAnimal animal={props.animalName} onDeleteAnimal={onAnimalDeleted}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Animal;

