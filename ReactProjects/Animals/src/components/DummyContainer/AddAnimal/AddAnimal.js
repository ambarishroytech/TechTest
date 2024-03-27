import React, {useState} from "react";  
import "./AddAnimal.css";

const AddAnimal = (props) => {

  const [newData, setNewData] = useState('');

  const handleAnimalNameChange = (event) => {
    setNewData(event.target.value);
  };

  const addAnimalHandler = event => {
    event.preventDefault();

    if(newData.trim().length === 0) return;

    props.onAddAnimal(newData);

    setNewData('');
  };

  return (
      <form className="box" onSubmit={addAnimalHandler}>
      <div className="field">
        <label className="label">Animal Name</label>
        <div className="control">
          <input className="input is-rounded is-focused" type="text" placeholder="Enter Animal Name" maxLength={15} onChange={handleAnimalNameChange} value={newData} />
        </div>
      </div>
      <button type='submit' className="button is-primary">Add Animal</button>
      </form>
  );
}

export default AddAnimal;