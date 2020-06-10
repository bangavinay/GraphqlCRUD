import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloSetup';
import { Header, Home, List, Edit } from './components';
import {IHeader} from './types/IHeader';

const headerProps :IHeader = {
  headerText : 'Welcome to Post App',
  addPostText : 'Add Post',
  listPostText : 'List Post'
}

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
      <div className="App">
        <Header {...headerProps}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/edit/:id" component={Edit} />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
