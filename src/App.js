import React, { Component } from "react";
import "./App.css";
import PokeDisplay from "./components/pokeDisplay/PokeDisplay";
import UserInput from "./components/userInput/UserInput";

export default class App extends Component { 
  render ( ) {
    return (
      <div className="app--component">
        <h3> Pokemon Catch 'em All </h3>
        <UserInput/>
        <section className="users--container">
          {/* ---pokemon will go here--- */}
          <PokeDisplay/>
        </section>
      </div>
    );
  }
}
