import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Redux Selector
import { isLoggedIn } from "../redux/user/user.selector";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
