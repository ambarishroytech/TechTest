import 'bulma/css/bulma.css';
import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import AnimalLayout from './components/AnimalLayout/AnimalLayout';
import DummyContainer from './components/DummyContainer/DummyContainer';

const App = () => {

  const [animals, setAnimals] = useState([]);

  const addNewAnimalHandler = newAnimal => {
    if (animals.find(animal => animal.trim().toLowerCase() === newAnimal.trim().toLowerCase())) {
      alert('Animal already exists!');
      return;
    }
    setAnimals(prevAnimals => prevAnimals.concat(newAnimal));
  };

  return (
    <div>
      <Heading title="Animals" subTitle="Show your love..."/>
      <DummyContainer onAddNewAnimal={addNewAnimalHandler}/>
      <AnimalLayout animals={animals}/>
    </div>
  );
  
};

export default App;

