import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "../../context/AuthContext";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

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

const Nav: React.FC<NavProps> = ({setPage}) => {
  const classes = useStyles();
  const autch = useContext(AuthContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Loft Taxi
          </Typography>
          <Button onClick={() => autch.isLoggedIn() ? setPage("Map") : setPage("Login")} color="inherit">Карта</Button>
          <Button onClick={() => autch.isLoggedIn() ? setPage("Profile") : setPage("Login")} color="inherit">Профиль</Button>
          <Button onClick={() => setPage("Login")} color="inherit">Войти</Button>
          <Button onClick={() => setPage("Signup")} color="inherit">Регистрация</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
