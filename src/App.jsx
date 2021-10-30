import React from "react";

import { Switch, Route } from "react-router-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import MyTheme from "../theme";
const theme = extendTheme({ ...MyTheme });

// Pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Scene from "./pages/Scene";
import FinalScene from "./pages/FinalScene";

import PrivateRouting from "./routing/PrivateRouting";

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <ChakraProvider resetCSS={true} theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <PrivateRouting exact path="/scene" component={Scene} />
          <PrivateRouting exact path="/final" component={FinalScene} />
        </Switch>
      </ChakraProvider>
    </div>
  );
}

export default App;
