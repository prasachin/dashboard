import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/Openlake/GitStartedWithUs/pulls/1`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Open Lake : Dashboard</h1>
      <div>The user: {JSON.stringify(data.user.login, null, 2)}</div>
      <div>The merge: {JSON.stringify(data.merged, null, 2)}</div>
      <div>Closed or open: {JSON.stringify(data.state, null, 2)}</div>
    </div>
  );
};

export default App;
