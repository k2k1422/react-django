import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import postgres from "./icons/postgres.png";
import mysql from "./icons/mysql.png";
import sqlserver from "./icons/sqlserver.png";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  typography1: {
    fontWeight: "bold",
    color: "#777777",
  },
  iconButton: {
    backgroundColor: "#DDDDDD",
    fontSize: theme.spacing(2),
  },
  icon: {
    fontSize: theme.spacing(2),
    color: "#777777",
  },
  icon1: {
    color: "#777777",
  },
  cardActionArea: {
    backgroundColor: "#DDDDDD",
    padding: theme.spacing(1),
  },
  cardContent: {
    padding: theme.spacing(1),
    height: "20vh",
  },
}));

export default function SimpleCard(props) {
  const { connection, handleDelete, onClickUpdate, testConnection } = props;

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const getImgObj = (databaseType) => {
    if (databaseType === "postgres") {
      return postgres;
    } else if (databaseType === "mysql") {
      return mysql;
    } else if (databaseType === "sqlserver"){
      return sqlserver
    }
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <img
              src={getImgObj(connection.db_type)}
              alt="my-img"
              height="50"
              width="80"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={classes.typography1}
                >
                  {connection.data_connection_name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="subtitle2" component="h2">
                  {connection.host}:{connection.port}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <IconButton
                  className={classes.iconButton}
                  onClick={onClickUpdate(connection)}
                >
                  <EditIcon className={classes.icon} />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <IconButton
                  className={classes.iconButton}
                  onClick={handleDelete(connection.id)}
                >
                  <DeleteIcon className={classes.icon} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActionArea className={classes.cardActionArea} onClick={event=> {testConnection(connection)}}>
        <Grid container>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <SettingsInputHdmiIcon className={classes.icon1} />
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
            <Typography
              variant="subtitle1"
              component="h2"
              className={classes.typography1}
            >
              Test
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
