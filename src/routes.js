import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import App from './App';
import bill from './bill';
const Routes = () => (
    <Router>
            <Route exact path="/" component={App} />
            <Route path="/bill" component={bill} />
    </Router>
);

export default Routes;