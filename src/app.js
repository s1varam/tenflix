import React from 'react';
import { JumbotronContainer } from './containers/jumbotron';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FooterContainer from './containers/footer';
import { AccordionContainer } from './containers/accordion';
import { GetStartedContainer } from './containers/get-started';
import * as ROUTES from './constants/routes'
import Homepage from './pages/homepage';
import Browse from './pages/browse';
import Signin from './pages/signin';
import Signup from './pages/signup';

export default function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Homepage />
        </Route>
        <Route exact path='/signin'>
          <Signin />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/browse'>
          <Browse />
        </Route>
      </Router>
    </>
  );
}

