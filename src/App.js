import React, { Component } from 'react';
import Content from "./components/layout/Content";
import Auth from "./components/app/Auth";
import Main from "./components/app/Main";
import Home from "./components/app/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Content>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/auth/login" component={Auth}/>
                    <Route path="/auth/register" component={Auth}/>
                    <Route path="/app" component={Main}/>
                </Switch>
            </Content>
        </BrowserRouter>
    );
  }
}

export default App;
