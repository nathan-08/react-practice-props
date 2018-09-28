import React, { Component } from "react";
import "./App.css";
import PokeDisplay from "./components/pokeDisplay/PokeDisplay";
import UserInput from "./components/userInput/UserInput";

export default class App extends Component { 
  constructor() {
    super();
    this.state = {
      nameInput: '', 
      imageInput: '', 
      pokemon: []
    }
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
    this.createPokemon = this.createPokemon.bind(this);
  }
  createPokemon () {
    const { nameInput: name, imageInput: image } = this.state;
    const newPokemon = { name, image };

    this.setState({ pokemon: [...this.state.pokemon, newPokemon] });
  }
  handleNameInput(event) {
    this.setState({ 
      nameInput: event.target.value
     })
  }
  handleImageInput(event) {
    this.setState({
      imageInput: event.target.value
    })
  }

  render ( ) {
    console.log(this.state) 
    let pokemon = this.state.pokemon.map( poke => {
      return <PokeDisplay name={poke.name} image={poke.image} />
    })
    return (
      <div className="app--component">
        <h3> Pokemon Catch 'em All </h3>
        <UserInput 
        handleNameInput={this.handleNameInput} 
        handleImageInput={this.handleImageInput}
        createPokemon={this.createPokemon}
        />
        <section className="users--container">
          {/* ---pokemon will go here--- */}
          { pokemon }
        </section>
      </div>
    );
  }
}
