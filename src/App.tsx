import React, { useState } from "react";
import "./App.css";
import { Nav, Login, Map, Profile, Signup } from "./components";
import { Container } from "@material-ui/core";

const App: React.FC = () => {
  const [page, setPage] = useState("");

  const handleSetPage: Function = (value: string) => {
    setPage(value);
  };
  const pages: Function = (page: string): JSX.Element => {
    switch (page) {
      case "Map":
        return (
          <>
            <Nav setPage={handleSetPage} />
            <Map />
          </>
        );
      case "Profile":
        return (
          <>
            <Nav setPage={handleSetPage} />
            <Profile />
          </>
        );
      case "Signup":
        return (
          <>
            <Nav setPage={handleSetPage} />
            <Signup />
          </>
        );

      default:
        return (
          <>
            <Nav setPage={handleSetPage} />
            <Login setPage={handleSetPage}/>
          </>
        );
    }
  };

  return (
    <div className="App">
      <Container>{pages(page)}</Container>
    </div>
  );
};

export default App;
