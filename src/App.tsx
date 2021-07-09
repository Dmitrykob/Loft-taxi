import React, { useState, useEffect, createRef } from "react";
import "./App.css";
import { Nav, Login, Map, Profile, Signup } from "./components";
import { Container } from "@material-ui/core";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  const [page, setPage] = useState("");

  const handleSetPage: Function = (value: string) => {
    setPage(value);
  };
  const mapRef = createRef<Map>();
  useEffect(() => console.log(mapRef), []);

  const pages: Function = (page: string): JSX.Element => {
    switch (page) {
      case "Map":
        return (
          <>
            <Nav setPage={handleSetPage} />
            <Map ref={mapRef} />
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
            <Login setPage={handleSetPage} />
          </>
        );
    }
  };

  return (
    <div className="App">
      <AuthProvider>
        <Container>{pages(page)}</Container>
      </AuthProvider>
    </div>
  );
};

export default App;
