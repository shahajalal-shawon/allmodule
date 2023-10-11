import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    // console.log(country);
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisites = () =>{
        setVisited(!visited);
    };

    

    return (
        <div className={`Country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'red' : 'black'}}>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={() =>handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisites}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have Visited this countey' : 'I want to visite'}
        </div>
    );
};

export default Country;