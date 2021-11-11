import React, { Component } from 'react'
import showLoginPage from './Login'
import showBoardPage from './Board'
import fixedPage from './FixedPage'

class App extends Component {
  state = {
    id: null,
    inBoardPage: null,
    inLoginPage: null
  };

  gotoLoginPage = () => {
    let state = this.state;
    state.inLoginPage = { loginFailedCount: 0 };
    this.setState(state);
  };

  gotoBoardPage = () => {
    let state = this.state;
    state.inBoardPage = { page: 1 };
    this.setState(state);
  };

  notLoggedIn = () => { return (<>Please login.</>) };

  loggedIn = () => { return <>Hello, {this.state.id}!</>};

  render() {
    console.log(`inLoginPage = ${this.state.inLoginPage}, inBoardPage = ${this.state.inBoardPage}`);
    if(this.state.inLoginPage !== null && this.state.inBoardPage !== null) {
      return (
        <div className="App">
          { fixedPage(500) }
        </div>
      );
    }
    if(this.state.inLoginPage === null && this.state.inBoardPage === null) {
      return (
        <div className="App">
          <div className="MainPageTitle">
            <h1>Welcome to the main page.</h1>
          </div>
          <div className="IDShower">{this.state.id === null ? this.notLoggedIn() : this.loggedIn()}</div>
          <div className="MainPageGoto">
            <button onClick={this.gotoLoginPage}>Login</button>
            <button onClick={this.gotoBoardPage}>Board</button>
          </div>
        </div>
      );
    }
    if(this.state.inLoginPage !== null) {
      return (
        <div className="App">
          { showLoginPage(this.state) }
        </div>
      );
    }
    return (
      <div className="App">
        { showBoardPage(this.state) }
      </div>
    );
  }
}

export default App;