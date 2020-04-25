import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

import SavingsInfo from './components/forms/SavingsInfo';
import SavingsPercentage from './components/forms/SavingsPercentage';
import Term from './components/forms/Term';
import InvestOptions from './components/forms/InvestOptions';
import InvestValue from './components/forms/InvestValue';
import RiskLevel from './components/forms/RiskLevel';
import Recommender from './components/recommender/Recommender';
import LoadingAnalysis from './components/analysis/LoadingAnalysis';

import FormState from './context/forms/formState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/auth/authState';
import authToken from './config/token';
import PrivateRoute from './components/routes/privateRoute';
import HighRisk from './components/recommender/HighRisk';
import MediumRisk from './components/recommender/MediumRisk';
import LowRisk from './components/recommender/LowRisk';


//Revisar si tenemos token 
const token = localStorage.getItem('token');
if(token) {
  authToken(token);
}

function App() {
  return (
    <FormState>
      <AlertState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
              <PrivateRoute exact path="/savings-info" component={SavingsInfo} />
              <PrivateRoute exact path="/savings-percentage" component={SavingsPercentage} />
              <PrivateRoute exact path="/term" component={Term} /> 
              <PrivateRoute exact path="/invest-options" component={InvestOptions} />
              <PrivateRoute exact path="/invest-value" component={InvestValue} />
              <PrivateRoute exact path="/risk-level" component={RiskLevel} />
              <PrivateRoute exact path="/loading-analysis" component={LoadingAnalysis} />
              <PrivateRoute exact path="/recommender-results" component={Recommender} />
              <PrivateRoute exact path="/high-risk-result" component={HighRisk} />
              <PrivateRoute exact path="/medium-risk-result" component={MediumRisk} />
              <PrivateRoute exact path="/low-risk-result" component={LowRisk} />

            </Switch>
          </Router>
        </AuthState>
      </AlertState>
    </FormState>
  );
}

export default App;
