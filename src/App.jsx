import React, { lazy, Suspense } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux Selectors
import {
  soundNum,
  musicNum,
  musicEffect,
  soundEffect,
} from "./redux/user/user.selector";

import { Switch, Route } from "react-router-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import MyTheme from "../theme";
const theme = extendTheme({ ...MyTheme });

// Pages
// import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import Scene from "./pages/Scene";
// import FinalScene from "./pages/FinalScene";

const HomePage = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/Login"));
const Scene = lazy(() => import("./pages/Scene"));
const FinalScene = lazy(() => import("./pages/FinalScene"));

import PrivateRouting from "./routing/PrivateRouting";

// Audios
// import SoundLoader from "./components/utils/SoundLoader";
// import MusicLoader from "./components/utils/MusicLoader";

const SoundLoader = lazy(() => import("./components/utils/SoundLoader"));
const MusicLoader = lazy(() => import("./components/utils/MusicLoader"));
import Loader from "./components/utils/Loader";

function App({ musicEffect, soundEffect, musicNum, soundNum }) {
  return (
    <div className="App">
      <Suspense fallback={<Loader message="Loading Game" image={false} />}>
        <SoundLoader num={soundNum} playMusic={soundEffect} />
        <MusicLoader num={musicNum} playMusic={musicEffect} />
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
  musicEffect,
  soundEffect,
  musicNum,
  soundNum,
});

export default connect(mapStateToDispatch)(App);
