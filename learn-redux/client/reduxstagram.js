// let's go!
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import {Provider} from 'react-redux';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//  Import Css
import css from './styles/style.styl';

//  Import store
import store, {history} from './store'

const router = (
  <Provider store={store}>
    
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
  </Provider>
);

render(router, document.getElementById('root'));
