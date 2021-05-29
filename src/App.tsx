import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './views/HomePage'

const App:FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
