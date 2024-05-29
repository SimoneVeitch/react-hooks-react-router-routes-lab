import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { directors, actors, movies } from "../data";

function App() {
  return <div>
      <NavBar />
      <Switch>
        <Route exact path="/movies">
          <Movies movies={movies} />
        </Route>
        <Route exact path="/directors">
          <Directors directors={directors} />
        </Route>
        <Route exact path="/actors">
          <Actors actors={actors}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

  </div>;
}

export default App;
