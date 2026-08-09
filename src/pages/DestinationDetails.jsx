import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountries } from "../services/api";

const DestinationDetails = () => {

  const { name } = useParams();

  const [country, setCountry] = useState(null);


  useEffect(() => {

    const fetchCountry = async () => {

      try {

        const data = await getCountries();

        const selectedCountry = data.find(
          (country) => country.name === name
        );

        setCountry(selectedCountry);

      } catch (error) {

        console.log("Error:", error);

      }

    };


    fetchCountry();

  }, [name]);


  if (!country) {

    return (
      <div className="text-center mt-5">

        <div className="spinner-border text-primary"></div>

        <h4 className="mt-3">
          Loading destination...
        </h4>

      </div>
    );

  }


  return (

    <div className="container my-5">

      <Link
        to="/destinations"
        className="btn btn-primary mb-4"
      >
        ← Back to Destinations
      </Link>


      <div className="card shadow border-0 p-4">

        <div className="row align-items-center">


          <div className="col-md-5 text-center">

            <img
              src={
                country.flags?.png ||
                country.flags?.svg ||
                country.flag
              }
              alt={country.name}
              className="img-fluid"
              style={{
                maxHeight:"250px"
              }}
            />

          </div>


          <div className="col-md-7">

            <h1 className="fw-bold">
              {country.name}
            </h1>


            <p>
              <strong>Capital:</strong>{" "}
              {country.capital || "N/A"}
            </p>


            <p>
              <strong>Region:</strong>{" "}
              {country.region || "N/A"}
            </p>


            <p>
              <strong>Population:</strong>{" "}
              {country.population
              ? country.population.toLocaleString()
              : "N/A"}
            </p>


          </div>


        </div>

      </div>

    </div>

  );

};


export default DestinationDetails;