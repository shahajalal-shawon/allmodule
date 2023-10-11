import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {

     const [countries, setCountrise] = useState([]);
     const [visitedCountries, setVisitedCountrise] = useState([]);
     const [visitedFlags, setVisitedFlags] = useState([]);

     useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then( data => setCountrise(data))
     }, [])


    const handleVisitedCountries = country =>{
        console.log('add this to your visited country');
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountrise(newVisitedCountry);
    }

    const handleVisitedFlag = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countrise: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                {
                    visitedCountries.map( country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </div>

            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx}  src={flag}></img>)
                }
            </div>

           <div className="country-container">
           {
                countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag = {handleVisitedFlag} country={country}></Country>)
            }
           </div>

        </div>
    );
};

export default Countries;
