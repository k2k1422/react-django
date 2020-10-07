import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "40%",
  },
  dialogpaper: {
    margin: "auto",
    padding: theme.spacing(2),
  },
  topDiv: {
    paddingTop: "20px",
  },
  paper: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  content: {
    paddingTop: theme.spacing(1),
    // width: "120vh"
  },
  textFeild: {
    width: "100%",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
  dialogHead: {
    backgroundColor: theme.palette.blue,
    color: theme.palette.white,
  },
  dialogCloseButton: {
    float: "right",
    padding: theme.spacing(0, 0, 0, 0),
    color: "white",
  },
}));

const ApiCredential = (props) => {
  const classes = useStyles();
  const {
    open,
    update,
    handleClose,
    databaseTypeList,
    state,
    handleChange,
    handleSave,
    handleTest,
    handleUpdate
  } = props;

  return (
    <Dialog open={open}>
      <DialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        className={classes.dialogHead}
      >
        <Typography variant="inherit">Create Connection</Typography>
        <IconButton className={classes.dialogCloseButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.dialogpaper}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <TextField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.data_connection_name}
                onChange={handleChange("data_connection_name")}
                variant="outlined"
                label="Connection Name"
                className={classes.textFeild}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <TextField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.db_type}
                onChange={handleChange("db_type")}
                select
                variant="outlined"
                label="Type"
                className={classes.textFeild}
              >
                {databaseTypeList.map((obj, index) => {
                  return (
                    <MenuItem value={obj.database_type}>
                      {obj.database_type}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <TextField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.host}
                onChange={handleChange("host")}
                variant="outlined"
                label="Host"
                className={classes.textFeild}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <TextField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.port}
                onChange={handleChange("port")}
                variant="outlined"
                label="Port"
                className={classes.textFeild}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.uri}
                onChange={handleChange("uri")}
                variant="outlined"
                label="URI"
                className={classes.textFeild}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <TextField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.username}
                onChange={handleChange("username")}
                variant="outlined"
                label="Username"
                className={classes.textFeild}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <TextField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.password}
                onChange={handleChange("password")}
                variant="outlined"
                label="Password"
                type="password"
                className={classes.textFeild}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <TextField
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={state.database_name}
                onChange={handleChange("database_name")}
                variant="outlined"
                label="Database Name"
                className={classes.textFeild}
              />
            </Grid>
          </Grid>
        </div>
      </DialogContent>
      <DialogActions>
        {update ? (
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            update
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSave}>
            save
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleTest}
          // disabled={apiSelected === ""}
        >
          test
        </Button>
        <Button variant="contained" color="primary" onClick={handleClose}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApiCredential;
