import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import UserEvents from './events/pages/UserEvent';
import NewEvent from './events/pages/NewEvent';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
    return (
      <Router>
        <MainNavigation/>
      <main>
        <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
        <Route path = "/:userId/events" exact>
          <UserEvents/>
        </Route>
        <Route path="/events/new" exact>
          <NewEvent/>
        </Route>

        <Redirect to="/" />
        </Switch>
      </main>
      </Router>
    ) ;
};

export default App;
