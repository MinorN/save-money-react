import React from 'react';
import {Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import Tags from './views/Tags';
import Money from './views/Money';
import Data from './views/Data';
import NoMatch from './views/NoMatch';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags"><Tags/></Route>
                <Route path="/money"><Money/></Route>
                <Route path="/Statistics"><Data/></Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*"><NoMatch /></Route>
            </Switch>
        </Router>
    );
}
export default App;
