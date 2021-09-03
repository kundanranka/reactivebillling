import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import App from './App';
import DetailsForm from './DetailsForm';
import bill from './bill';
const Routes = () => (
    <Router>
            <Route exact path="/" component={App} />
            <Route path="/bill" component={bill} />
    </Router>
);

export default Routes;