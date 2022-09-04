import React from 'react';
import {Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import Tags from './views/Tags';
import Money from './views/Money';
import Data from './views/Data';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
  color: #333
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/tags" exact={true}><Tags/></Route>
                    <Route path="/tags/:tag" exact={true}><Tag/></Route>
                    <Route path="/money" exact={true}><Money/></Route>
                    <Route path="/Statistics" exact={true}><Data/></Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*"><NoMatch/></Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;
