import React from 'react';
import './app.css';
import { Login, Header, BookList } from '../index';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="container">
      {user.token && <Header />}
      <Switch>
        <Route
          path="/"
          render={() => !user.token && <Redirect to="/login" />}
          exact
        />
        <Route path="/login" component={Login} />
        <Route path="/catalog" component={BookList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
