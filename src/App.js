import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Fabrics from './components/Posts/Posts';
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';

import 'normalize.css';
import styles from './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className={styles.container}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/fabrics" component={Fabrics} />
          <Route path="/post/:slug" render={(props) => <PostDetail {...props} />}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
