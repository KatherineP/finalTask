import React from 'react';
import './app.css';
import { Login, Header, BookList, BookInfo, Cart } from '../index';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="container">
      {user.token && <Header />}
      <Switch>
        <Route
          path="/finalTask"
          render={() => !user.token && <Redirect to="/login" />}
          exact
        />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route
          path="/catalog/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <BookInfo itemId={id} />;
          }}
        />
        <Route exact path="/catalog" component={BookList} />
        <Redirect to="/finalTask" />
      </Switch>
    </div>
  );
};

export default App;
