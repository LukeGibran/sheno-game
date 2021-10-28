import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import MyTheme from '../theme';
const theme = extendTheme({ ...MyTheme });

// Pages
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Scene from './pages/Scene';

function App({ Component, pageProps }) {
  return (
    <div className='App'>
      <ChakraProvider resetCSS={true} theme={theme}>
        <Switch>
          <Route exact path='/play' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Scene}/>
        </Switch>
      </ChakraProvider>
    </div>
  );
}

export default App;
