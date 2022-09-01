import React from 'react';
import {Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags"><Tags/></Route>
                <Route path="/money"><Money/></Route>
                <Route path="/Statistics"><Statistics/></Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*"><NoMatch/></Route>
            </Switch>
        </Router>
    );
}

function Statistics() {
    return (
        <Layout><h2>Statistics</h2></Layout>
    );
}

function Tags() {
    return (
        <Layout><h2>tag</h2></Layout>
    );
}

function Money() {
    return (
        <Layout><h2>money</h2></Layout>
    );
}

function NoMatch() {
    return <h2>404</h2>;
}

export default App;
