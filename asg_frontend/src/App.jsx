import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/navbar";
import FitnessList from "./components/fitnessList";
import EditFitness from "./components/editFitness";
import CreateFitness from "./components/createFitness";
import CreateUser from "./components/createUser";

function App() {
  return (
    <Router>
     <Navbar />
     <br />
      <Routes>
        <Route path="/" element={<FitnessList />} exact />
        <Route path="/edit/:id" element={<EditFitness />} />
        <Route path="/create" element={<CreateFitness />} />
        <Route path="/user" element={<CreateUser />} />
        {/* react router helps map specific url path for different components */}
      </Routes> 
    </Router>
  );
}

export default App;
