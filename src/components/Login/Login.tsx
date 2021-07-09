import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button, TextField, FormControlLabel, Checkbox, Typography, Container } from "@material-ui/core";

interface LoginProps {
  setPage: Function;
}

const Login: React.SFC<LoginProps> = ({ setPage }) => {
  const autch = useContext(AuthContext);
  
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Войти
      </Typography>
      <form noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Запомнить меня"
        />
        <Button
          onClick={() => {
            autch.login()
            setPage("Profile")
          }}
          type="button"
          fullWidth
          variant="contained"
          color="primary"
        >
          Войти
        </Button>
      </form>
    </Container>
  );
};

export default Login;
