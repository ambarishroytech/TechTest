import React from "react";
import AddAnimal from "./AddAnimal/AddAnimal";

const DummyContainer = (props) => {

    const handleDummyData = (animal) => {
        props.onAddNewAnimal(animal);
    }

    return (
        <AddAnimal onAddAnimal={handleDummyData}/>
    );
};

export default DummyContainer;

