import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const baseurl = "https://dashboard-be-gh5e.onrender.com/";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(baseurl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "red",
          borderColor: "black",
          borderWidth: "2px",
          borderStyle: "solid",
        }}
      >
        Error: {error.message}
      </div>
    );
  }
  // console.log(data);
  if (data === null) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "green",
        }}
      >
        Loading...
      </div>
    );
  }
  if (typeof data !== "object" || Object.keys(data).length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "red",
        }}
      >
        <header className="fixed-header">
          <h1 style={{ margin: 0 }}>Codeforge Dashboard</h1>
        </header>
        <h2 style={{ marginTop: "100px" }}>
          Fetching Limit exceeded! Please try again later!
        </h2>
        <footer className="fixed-footer">
          <h1 style={{ margin: 0 }}>&copy;OpenLake</h1>
        </footer>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="fixed-header">
        <h1 style={{ margin: 0 }}>Codeforge Dashboard</h1>
      </header>
      <div className="temp">
        <table className="leaderboard">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([username, details]) => (
              <tr key={username}>
                <td>{username}</td>
                <td>{details.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="fixed-footer">
        <h1 style={{ margin: 0 }}>&copy;OpenLake</h1>
      </footer>
    </div>
  );
};

export default App;
