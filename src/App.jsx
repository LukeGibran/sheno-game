import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import MyTheme from '../theme';
const theme = extendTheme({ ...MyTheme });

import HomePage from './pages/HomePage';
import Login from './pages/Login';

function App({ Component, pageProps }) {
  return (
    <div className='App'>
      <ChakraProvider resetCSS={true} theme={theme}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </ChakraProvider>
    </div>
  );
}

export default App;
