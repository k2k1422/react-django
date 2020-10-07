import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import Tooltip from "@material-ui/core/Tooltip"
import HomeIcon from "@material-ui/icons/Home"
import InputIcon from "@material-ui/icons/Input"
import PersonIcon from "@material-ui/icons/Person"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import MenuTree from "../MenuTree"
import { getCurrentView } from "../../../../selectors"
import HelpIcon from "@material-ui/icons/Help"
import { getLogoutStatus } from "../../../../selectors"
import { getPersistStatus } from "../../../../selectors/persist"
import { logout } from "../../../../actions/auth"
import { routes } from "../../../../urls"

const drawerWidth = 330

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.navbar_color,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // marginLeft: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    backgroundColor: theme.palette.navbar_color,
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 0),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  iconButton: {},
  helpButton: {},
  signOutButton: {
    marginLeft: theme.spacing(2),
  },
}))

const Navbar = (props) => {
  const { logoutUser, logoutStatus, currentView, persistStatus } = props

  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [signout, setSignout] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleSignOut = () => {
    logoutUser()
  }

  useEffect(() => {
    if (logoutStatus && persistStatus) {
      setSignout(true)
    } else if (logoutStatus === undefined && persistStatus) {
      setSignout(true)
    }
  }, [logoutStatus, persistStatus])

  if (signout) {
    return <Redirect to={routes.LOGIN} />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Tooltip title="Menu">
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Home">
            <IconButton
              className={classes.iconButton}
              component={Link}
              color="inherit"
              edge="start"
              to={routes.DATA_MAPPING}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton
              className={classes.iconButton}
              component={Link}
              color="inherit"
              to={routes.PROFILE_MANAGEMENT}
            >
              <PersonIcon />
            </IconButton>
          </Tooltip>

          {/* <Typography variant="h6" noWrap data-testid="page-heading">
            {currentView}
          </Typography> */}

          <img
            src="https://cdn-images-1.medium.com/max/724/1*W0KmVjbf_2-o44AQcI-vgg@2x.png"
            height="6%"
            width="11%"
            style={{ float: "right", alignSelf: "center", marginLeft: "auto" }}
            alt="Aptus Data Labs"
          />
          <Tooltip title="Sign out">
            <IconButton
              className={classes.signOutButton}
              color="inherit"
              onClick={handleSignOut}
              data-testid="signout-button"
            >
              <InputIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Help">
            <IconButton
              className={classes.helpButton}
              component={Link}
              color="inherit"
              to={routes.HELP}
            >
              <HelpIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={handleDrawerClose}
      >
        <div className={classes.drawerHeader} style={{ alignSelf: "left" }}>
          <Typography
            align="left"
            variant="h6"
            style={{ paddingRight: "9em", color: "white" }}
          >
            Menu
          </Typography>
          <IconButton
            onClick={handleDrawerClose}
            style={{ color: "white", marginRight: "1em" }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <MenuTree handleDrawerClose={handleDrawerClose} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  )
}

const mapStateToProps = (state) => ({
  logoutStatus: getLogoutStatus(state),
  // currentView: getCurrentView(state),
  persistStatus: getPersistStatus(state),
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logout())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
