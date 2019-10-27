import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

interface LoginProps {
  setPage: Function;
}

const Login: React.SFC<LoginProps> = ({ setPage }) => {
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
          onClick={() => setPage("Profile")}
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
