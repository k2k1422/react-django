import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "70vh",
  },
 
}));

const SelectTable = (props) => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      Welocme
    </div>
  );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTable);
