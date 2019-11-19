import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container, Typography, Button } from "@material-ui/core";

const Profile: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
      <Container>
        <Typography variant="h6">Профиль</Typography>
        <Typography variant="h6">
          LogedIn: {auth.isLoggedIn() ? "True" : "False"}
        </Typography>
        <Button onClick={() => auth.logout()}>Выйти</Button>
      </Container>
  );
};

export default Profile;
