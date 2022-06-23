import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from '@mui/material/Button';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;