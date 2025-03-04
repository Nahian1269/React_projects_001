import { useEffect, useState } from "react";
import Nation from "../Nations/Nation";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [desh, setDash] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCounty = (country) => {
    console.log(country);
    // console.log('add this to your visited country');
    // desh.push(country);___ can't use push pop on react

    const newCountry = [...desh, country];
    {
        setDash(newCountry)
        
        // if (desh === country) {
        //     console.log('duplicate');
            
        // }
        
    }
    
  };
  return (
    <div>
      <div className="items">
        <h3>Countries: {countries.length}</h3>
      </div>
      <div className="dash-board">
      <div>
      <h2 className="title">Visited Countries: {desh.length} </h2>
      </div>
        <div className="container">
        {
          <ul>
            {desh.map(country => (
              <li key={country.cca3}><img className="img_flag" src={country.flags.png}></img></li>
            ))}
          </ul>
        }
        </div>
        
      </div>

      <div className="maping">
        {countries.map((country) => (
          <Nation
            key={country.cca3}
            country={country}
            handleVisitedCounty={handleVisitedCounty}
          ></Nation>
        ))}
      </div>
    </div>
  );
};

export default Countries;
