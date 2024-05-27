import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");
  const [data, setdata] = useState([]);
  // const [rates, setRates] = useState({})
  // const [currency, setCurrency] = useState(null);

  useEffect(() => {
    // console.log('effect run, currency is now', currency)

    // skip if currency is not defined
    // if (currency) {
    // console.log('fetching exchange rates...')
    // axios
    //   .get(`https://restcountries.com/v3.1/all`)
    //   .then(response => {
    //     setCurrency(response.data)
    //   })
    axios
      .get(`https://api.github.com/repos/Openlake/GitStartedWithUs/pulls/1`)
      .then((response) => {
        setdata(response.data);
      });
    // }
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    // setCurrency(value)
    const filteredCountries = currency.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredCountries.length > 10) {
      console.log(filteredCountries);
      alert("Too many matches, please make your query more specific.");
    } else {
      // Handle the filtered countries, you might want to set them in state
      console.log(filteredCountries);
      setCurrency(filteredCountries);
    }
  };

  return (
    <div>
      {/* <form onSubmit={onSearch}> */}
        {/* Find Countries : <input value={value} onChange={handleChange} /> */}
        {/* <button type="submit">exchange rate</button> */}
      {/* </form> */}
      <div>The  user : {JSON.stringify(data.user.login)}</div>
      <div>The  merge : {JSON.stringify(data.merged)}</div>
      <div>closed or open: {JSON.stringify(data.state)}</div>
      {/* <div>The  merge : {JSON.stringify(data.merged)}</div> */}
      {/* <pre>{JSON.stringify(currency, null, 2)}</pre> */}
    </div>
  );
};

export default App;
