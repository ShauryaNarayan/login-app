import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/welcome" component={Welcome} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;