import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);

interface NavProps {
  setPage: Function
}

const Nav: React.SFC<NavProps> = ({setPage}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Loft Taxi
          </Typography>
          <Button onClick={() => setPage("Map")} color="inherit">Карта</Button>
          <Button onClick={() => setPage("Profile")} color="inherit">Профиль</Button>
          <Button onClick={() => setPage("Login")} color="inherit">Войти</Button>
          <Button onClick={() => setPage("Signup")} color="inherit">Регистрация</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
