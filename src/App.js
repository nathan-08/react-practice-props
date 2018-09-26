import React, { Component } from "react";
import "./App.css";
import UserDisplay from "./components/UserDisplay";
import UserInput from "./components/UserInput";

export default class App extends Component {
  constructor() {
    super();
    this.appName = "Pokemon Catch 'em All";
    this.state = {
      users: [
        {
          id: 1,
          name: "nate",
          img: "https://cdn.bulbagarden.net/upload/thumb/a/a2/069Bellsprout.png/250px-069Bellsprout.png"
        },
        {
          id: 2,
          name: "steve",
          img: "http://static.pokemonpets.com/images/monsters-images-300-300/2043-Shiny-Oddish.png"
        }
      ],
      nameInput: "",
      imgInput: "",
      id: 3
    };
    this.handleInput = this.handleInput.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removePoke = this.removePoke.bind(this);
  }
  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addUser() {
    const { users, nameInput: name, imgInput: img, id } = this.state;
    this.setState({
      users: [...users, { name, img, id }],
      id: id + 1
    });
  }
  removePoke(id) {
    const { users } = this.state;
    let tempArray = users.slice();
    let index = tempArray.findIndex(item => item.id === id);
    tempArray.splice(index, 1);
    this.setState({ users: tempArray });
  }
  render() {
    const users = this.state.users.map(user => (
      <UserDisplay name={user.name} img={user.img} removePoke={() => this.removePoke(user.id)} />
    ));
    return (
      <div className="app--component">
        <h3> {this.appName} </h3>{" "}
        <UserInput
          handleInput={this.handleInput}
          nameInput={this.state.nameInput}
          imgInput={this.state.imgInput}
          addUser={this.addUser}
        />
        <section className="users--container">{users}</section>
      </div>
    );
  }
}
