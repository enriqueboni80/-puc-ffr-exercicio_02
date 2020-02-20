import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import MenuLateral from './components/menu/lateral'
import Home from './components/home'
import Users from './components/users'
import UsersDetalhes from './components/users/detalhes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div id="layoutSidenav">
          <MenuLateral />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:nome" component={UsersDetalhes} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
