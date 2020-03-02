import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Checklists from './components/pages/Checklists';
import CheckoutChecklist from './components/pages/checklist-pages/CheckoutChecklist';
import CheckinChecklist from './components/pages/checklist-pages/CheckinChecklist';
import InspectionChecklist from './components/pages/checklist-pages/InspectionChecklist';
import Documents from './components/pages/Documents';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import 'materialize-css/dist/css/materialize.min.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute
                    exact
                    path='/checklists'
                    component={Checklists}
                  />
                  <PrivateRoute
                    exact
                    path='/checklists/checkout'
                    component={CheckoutChecklist}
                  />
                  <PrivateRoute
                    exact
                    path='/checklists/checkin'
                    component={CheckinChecklist}
                  />
                  <PrivateRoute
                    exact
                    path='/checklists/inspection'
                    component={InspectionChecklist}
                  />
                  <PrivateRoute exact path='/documents' component={Documents} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
