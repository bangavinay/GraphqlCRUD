import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloSetup';
import Header from './Header';
import Home from './Home';
import List from './List';
import Edit from './Edit';


function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/edit/:id" component={Edit} />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
