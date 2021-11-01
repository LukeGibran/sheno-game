import React, { lazy, Suspense } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux Selectors
import {
  soundNum,
  soundEffect,
} from "./redux/user/user.selector";

import { Switch, Route } from "react-router-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import MyTheme from "../theme";
const theme = extendTheme({ ...MyTheme });

const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));
const Scene = lazy(() => import("./pages/Scene"));
const FinalScene = lazy(() => import("./pages/FinalScene"));

import PrivateRouting from "./routing/PrivateRouting";

const SoundLoader = lazy(() => import("./components/utils/SoundLoader"));

import Loader from "./components/utils/Loader";

function App({ soundEffect, soundNum }) {
  return (
    <div className="App">
      <Suspense fallback={<Loader message="Loading Game" image={false} />}>
        <SoundLoader num={soundNum} playMusic={soundEffect} />
        <ChakraProvider resetCSS={true} theme={theme}>
          <Switch>
            <PrivateRouting exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <PrivateRouting exact path="/scene" component={Scene} />
            <PrivateRouting exact path="/final" component={FinalScene} />
          </Switch>
        </ChakraProvider>
      </Suspense>
    </div>
  );
}

const mapStateToDispatch = createStructuredSelector({
  soundEffect,
  soundNum,
});

export default connect(mapStateToDispatch)(App);
