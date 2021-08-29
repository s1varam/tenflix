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
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    <>
      <Router>
        <Switch>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNIN}>
            <Signin />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGNUP}>
            <Signup />
          </IsUserRedirect>
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
            <Homepage />
          </IsUserRedirect>
        </Switch>
      </Router>
    </>
  );
}

