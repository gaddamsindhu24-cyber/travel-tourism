import { Link } from "react-router-dom";

function CountryCard({ country }) {

  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow rounded-4 h-100">

        <img
          src={
            country.name === "Afghanistan"
      ? "https://flagcdn.com/w320/af.png"
      : (
            country.flags?.png ||
            country.flags?.svg ||
            country.flag
      )
          }
          alt={country.name}
          className="card-img-top"
          style={{
            height: "160px",
            objectFit: "contain",
            padding: "10px"
          }}
        />


        <div className="card-body">


          <h5 className="text-primary fw-bold">
            {country.name}
          </h5>


          <p>
            <b>Capital:</b>{" "}
            {country.capital || "N/A"}
          </p>


          <p>
            <b>Region:</b>{" "}
            {country.region || "N/A"}
          </p>


          <p>
            <b>Population:</b>{" "}
            {
              country.population
              ? country.population.toLocaleString()
              : "N/A"
            }
          </p>



          <Link
            to={`/destination/${country.name}`}
            className="btn btn-primary w-100"
          >
            View Details
          </Link>


        </div>

      </div>

    </div>
  );
}


export default CountryCard;