import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Catalog from './views/Catalog';
import About from './views/About';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/discover" render={()=><Catalog messierActive={true} />}/>
                <Route path="/about" component={About} />
            </Switch>
        );
    }
}

export default App;
