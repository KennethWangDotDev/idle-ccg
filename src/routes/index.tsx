import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from 'layout/NavBar';
import Home from '../views/DiceView';
import Hello from '../views/Hello';

const routes = (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
        </Switch>
    </div>
);

export default routes;
