/* import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import BulkDelete from './BulkDelete';
import CreateTask from './CreateTask';
import ListTask from './ListTask';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>List</Link>
        </li>
        <li>
          <Link to='/about'>Create</Link>
        </li>
        <li>
          <Link to='/contect'>Bulk Delete</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <ListTask />
        </Route>
        <Route path='/about'>
          <CreateTask />
        </Route>
        <Route path='/contect'>
          <BulkDelete />
        </Route>
      </Switch>
    </Router>
  );
}

export default App; */

import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Menu from './Menu';

// Pages
const ListTask = React.lazy(() => import('./ListTask'));
const CreateTask = React.lazy(() => import('./CreateTask'));
const BulkDelete = React.lazy(() => import('./BulkDelete'));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={'loading'}>
          <Switch>
            <Route
              exact
              path='/'
              name='List Task'
              // render={(props) => <ListTask {...props} />}
            >
              <Redirect to="/list-task" />
              </Route>
            <Route
              exact
              path='/list-task'
              name='List Task'
              render={(props) => <ListTask {...props} />}
            />
            <Route
              exact
              path='/create-task'
              name='Create Task'
              render={(props) => <CreateTask {...props} />}
            />
            <Route
              exact
              path='/bulk-delete'
              name='Bulk Delete'
              render={(props) => <BulkDelete {...props} />}
            />
            {/* <SecureRoutes path='/' name='Home' component={TheLayout} /> */}
            {/* <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
