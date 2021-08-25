import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth } from '../src/auth';

import Portfolio from './Portfolio/Portfolio';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login'
        }} />
  )} />
)

function App() {
  return (
    <div>
      <Route exact path="/" component={Portfolio}/>
    </div>
  );
}

export default App;
