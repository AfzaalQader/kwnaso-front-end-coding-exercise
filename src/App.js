import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

// Pages
const ListTask = React.lazy(() => import('./ListTask'));
const CreateTask = React.lazy(() => import('./CreateTask'));
const BulkDelete = React.lazy(() => import('./BulkDelete'));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={'loading'}>
          <Container>
            <Navbar bg="light" expand="lg">
              <Container>
                
                <Navbar.Collapse>
                  <Nav className="me-auto">
                    <Nav.Link ><Route><Link to="/">List Task</Link></Route></Nav.Link>
                    <Nav.Link ><Route><Link to="/create-task">Create List</Link></Route></Nav.Link>
                    <Nav.Link ><Route><Link to="/bulk-delete">Bulk Delete</Link></Route></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

          </Container>
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
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
