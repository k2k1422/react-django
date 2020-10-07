import React from "react"
import PropTypes from "prop-types"
import makeStyles from "@material-ui/core/styles/makeStyles"
import TreeView from "@material-ui/lab/TreeView"
import TreeItem from "@material-ui/lab/TreeItem"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MapIcon from '@material-ui/icons/Map';
import { routes, menuRouteLabels } from "../../../../urls"

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&:focus > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey})`,
      color: "var(--tree-view-color)",
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    marginRight: 10,
  },
  button: {
    width: "100%",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  label: {
    fontWeight: "inherit",
    color: "inherit",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}))

function StyledTreeItem(props) {
  const classes = useTreeItemStyles()
  const {
    labelText,
    labelIcon: LabelIcon,
    color,
    bgColor,
    variant,
    link,
    noAccess,
    handleDrawerClose,
    ...other
  } = props


  let label = (
    <>
      <LabelIcon color="inherit" className={classes.labelIcon} />
      <Typography variant={variant} className={classes.labelText}>
        <Button
          component={Link}
          to={link}
          className={classes.button}
          fullWidth
          style={{ textTransform: "none" }}
          disableRipple
          onClick={() => {
            handleDrawerClose && handleDrawerClose()
          }}
        >
          {labelText}
        </Button>
      </Typography>
    </>
  )

  return (
    <>
      <TreeItem
        label={<div className={classes.labelRoot}>{label}</div>}
        style={{
          paddingTop: "3%",
          "--tree-view-color": color || "#1a73e8",
          "--tree-view-bg-color": bgColor || "e8f0fe",
        }}
        classes={{
          root: classes.root,
          content: classes.content,
          expanded: classes.expanded,
          group: classes.group,
          label: classes.label,
        }}
        {...other}
      />
    </>
  )
}
StyledTreeItem.defaultProps = {
  variant: "body1",
  link: "#",
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
}

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
})

const MenuTree = ({ handleDrawerClose }) => {
  const classes = useStyles()
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      defaultExpanded={["5"]}
    >

      <StyledTreeItem
        nodeId="1"
        labelText={menuRouteLabels.MANAGE_CONNECTION}
        variant="h6"
        labelIcon={AccountTreeIcon}
        link={routes.MANAGE_CONNECTION}
        handleDrawerClose={handleDrawerClose}
        noAccess={true}
      />

      <StyledTreeItem
        nodeId="1"
        labelText={menuRouteLabels.DATA_MAPPING}
        variant="h6"
        labelIcon={MapIcon}
        link={routes.DATA_MAPPING}
        handleDrawerClose={handleDrawerClose}
        noAccess={true}
      />
      <StyledTreeItem
        nodeId="1"
        labelText={menuRouteLabels.DATA_MAPPING_LIST}
        variant="h6"
        labelIcon={MapIcon}
        link={routes.DATA_MAPPING_LIST}
        handleDrawerClose={handleDrawerClose}
        noAccess={true}
      />

    </TreeView>
  )
}

export default MenuTree
