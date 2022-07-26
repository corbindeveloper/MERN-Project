import './App.css';

import {Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import AllPets from './components/AllPets';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);


  return (
    <div className="App">
      <Routes>

        <Route exact path="/" element={<AllPets />} />
        <Route exact path="/pets/new" element={<CreatePet formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />} />
        <Route exact path="/pets/:_id/edit" element={<EditPet formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}/>} />
        <Route exact path="/pets/:_id" element={<OnePet formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />} />

      </Routes>
    </div>
  );
}

export default App;
