import 'bulma/css/bulma.css';
import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading/Heading';
import AnimalLayout from './components/AnimalLayout/AnimalLayout';
import DummyContainer from './components/DummyContainer/DummyContainer';
import { deleteElementFromArray } from './js/utilities';

const App = () => {
  let initAnimals = [];
  if (localStorage.getItem('animals')) {  
    initAnimals = JSON.parse(localStorage.getItem('animals'));
  }

  const [animals, setAnimals] = useState(initAnimals);

  const addNewAnimalHandler = newAnimal => {
    if (animals.find(animal => animal.trim().toLowerCase() === newAnimal.trim().toLowerCase())) {
      alert('Animal already exists!');
      return;
    }
    setAnimals(prevAnimals => {
      prevAnimals.concat(newAnimal);
      const newAnimals = [...prevAnimals, newAnimal];
      localStorage.setItem('animals', JSON.stringify(newAnimals));
      return newAnimals;

    });
  };

  const onAnimalDeleted = (animalToDelete) => {
        setAnimals(prevAnimals => {
        const newAnimals = deleteElementFromArray([...prevAnimals], animalToDelete);
        localStorage.setItem('animals', JSON.stringify(newAnimals));
        return newAnimals;
      });
  };

  return (
    <>
      <Heading title="Animals" subTitle="Show your love..."/>
      <DummyContainer onAddNewAnimal={addNewAnimalHandler}/>
      <AnimalLayout animals={animals} onDeleteAnimal={onAnimalDeleted}/>
    </>
  );
  
};

export default App;

