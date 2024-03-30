import React, {useState} from "react";  
import "./AddAnimal.css";

const AddAnimal = (props) => {

  const [newAnimal, setNewAnimal] = useState('');

  const handleAnimalNameChange = (event) => {
    setNewAnimal(event.target.value);
  };

  const addAnimalHandler = event => {
    event.preventDefault();

    if(newAnimal.trim().length === 0) return;

    props.onAddAnimal(newAnimal);

    setNewAnimal('');
  };

    return (
        <form onSubmit={addAnimalHandler}>
            <input type="text" placeholder="Enter Animal Name" onChange={handleAnimalNameChange} value={newAnimal} />
            <button type='submit' className="button is-primary">Add Animal</button>
            <button className="button is-warning" onClick={() => console.log('Inline event handler')}>Test</button>
        </form>
    );
}

export default AddAnimal;