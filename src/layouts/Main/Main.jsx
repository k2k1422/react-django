import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { Navbar } from "./components1"
import { makeStyles } from "@material-ui/styles"
import AlertStack from "../../components/AlertStack"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  content: {
    height: "100%",
    overflow: "auto",
    padding: theme.spacing(2)
  },
}))

const Main = (props) => {
  const { children } = props
  const classes = useStyles()

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Navbar />
      <AlertStack />
      <main className={classes.content}>{children}</main>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export default Main
