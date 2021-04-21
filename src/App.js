import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from './pages';
import { Header } from './layout';

import './App.css';

function App(){

    return(
        <>
        <Header />
        <Switch>
            <Route exact path='/' component={Pages.Home} />
            <Route path='/user' component={Pages.User} />
        </Switch>
        </>
    );

};

export default App;