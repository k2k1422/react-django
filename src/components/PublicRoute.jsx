import React, { useEffect } from "react"
import { Route, Redirect } from "react-router"
import { connect } from "react-redux"
import {
  isUserAuthenticated,
  getAuthErrors,
  getAccessToken,
} from "../selectors"
import { validateToken, logout } from "../actions/auth"
import { getPersistStatus } from "../selectors/persist"

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  authErrors,
  access_token,
  persistStatus,
  logoutUser,
  ...rest
}) => {
  useEffect(() => {
    if (persistStatus && !isAuthenticated) {
      logoutUser()
    }
  }, [persistStatus, isAuthenticated, logoutUser])

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/demoPage",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: isUserAuthenticated(state),
  authErrors: getAuthErrors(state),
  access_token: getAccessToken(state),
  persistStatus: getPersistStatus(state),
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logout())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)
