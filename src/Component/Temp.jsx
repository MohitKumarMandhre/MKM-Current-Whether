import React, { useState, useEffect } from 'react' ; 
import './CSS/Style.css' ;



const Temp = () => {
    const [city, setCity] = useState(null);
    const [se, setSe ] = useState("durg");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ se }&appid=ad676bdb861c23e93360201d351b0662`;
            const res = await fetch(url);
            // console.log( res.whether) ;
            const resJson = await res.json();
            setCity( resJson.main );
            // console.log(resJson);
        }
        fetchApi();
    },[se]);

    const Store =(event) => {
        setSe(event.target.value);
    }
    return(
        <>
        <div className="box">
            <div className="inputData">
                <input 
                    type='search' 
                    className="inputField"
                    defaultValue=""
                    onChange={ Store }
                    value={ se }
                />
            </div>
        
        {
            !city ? ( <p className="temp" > No Data Found!</p>) : 
            <div>
            <div className="info">
            <h2 className="lo"> 
                <h3 className="text fas fa-street-view"> { se }</h3>
            </h2>
            <h1 className="temp">{ city.temp }</h1>
            <h3 className="tempmin_max temp2">Humidity : { city.humidity } , Pressure : { city.pressure } </h3>
            <h3 className="tempmin_max temp2"> Min temp : { city.temp_min } , Max temp : { city.temp_max }</h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>

        }

        </div>
        </>
    );
}

export default Temp ;