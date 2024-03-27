import React from "react";
import "./AnimalLayout.css";
import Animal from "./Animal/Animal";
import AnimalCounter from "./AnimalCounter/AnimalCounter"; 

import BirdImage from "../../images/bird.jpeg";
import CatImage from "../../images/cat.jpg";
import DogImage from "../../images/dog.jpeg";
import FoxImage from "../../images/fox.jpeg";
import MonkeyImage from "../../images/monkey.jpeg";
import PlaceHolderImage from "../../images/placeHolder.jpg";
import TurtleImage from "../../images/turtle.jpeg";
import FishImage from "../../images/fish.jpg";
import CowImage from "../../images/cow.jpg";

const AnimalLayout = ({animals}) => {

    // write a arrow function which will take an animalName as parameter and checking switch case and return an image
    // if not matched return a placeholder image
     const getAnimalImage = (animalName) => {
        switch(animalName.trim().toLowerCase()) {
            case 'bird':
                return BirdImage;
            case 'cat':
                return CatImage;
            case 'dog':
                return DogImage;
            case 'fox':
                return FoxImage;
            case 'monkey':
                return MonkeyImage;
            case 'turtle':
                return TurtleImage;
            case 'fish':
                return FishImage;
            case 'cow':
                return CowImage;
            default:
                return PlaceHolderImage;
        }
     }

    return (
        <div className="box">   
            <div class="columns is-multiline is-mobile">
                {
                    animals.map((animal, index) => {
                        return (
                            <div id={index} class="column is-one-quarter">
                                <Animal animalName={animal} animalImage={getAnimalImage(animal)}/>
                            </div>
                        );
                    })
                }
            </div>
            <AnimalCounter animalCount={animals.length}/>
        </div>
    );
}

export default AnimalLayout;