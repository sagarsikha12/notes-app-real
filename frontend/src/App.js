import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import Editnow from './components/editnow';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact>
        <Home />
      </Route >
      <Route path="/notes">
        <Notes />
      </Route>
      <Route path="/create">
        <CreateNote />
      </Route>
      <Route path="/:id/editnow">
        <Editnow />
      </Route>
   

    </Router>
  );
}

export default App;
