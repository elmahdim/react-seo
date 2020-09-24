import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Posts from './Posts';
import Post from './Post';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    </Router>
  )
}

export default App;
