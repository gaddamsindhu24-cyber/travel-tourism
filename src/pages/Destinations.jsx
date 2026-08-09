import { useEffect, useState } from "react";
import { getCountries } from "../services/api";
import CountryCard from "../components/CountryCard";

function Destinations() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();

        console.log("Countries:", data);

        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching countries:", error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>

        <h4 className="mt-3">
          Loading destinations...
        </h4>
      </div>
    );
  }

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name || "";

    const searchMatch = countryName
      .toLowerCase()
      .includes(search.toLowerCase());

    const regionMatch =
      region === "All" ||
      country.region === region;

    return searchMatch && regionMatch;
  });

  return (
    <div
     className="container my-5"
     style={{
     background: "linear-gradient(135deg, #eaf6ff, #ffffff, #dff3ff)",
     minHeight: "100vh"
   }}
  >
    <div className="container"></div>
      {/* Page Title */}
      <h1 className="text-center mb-4 fw-bold">
        Explore Destinations 🌍
      </h1>

      <p className="text-center text-muted mb-5">
        Discover countries, cultures and destinations around the world.
      </p>


      {/* Search & Filter */}
      <div className="row mb-5 justify-content-center g-3">

        {/* Search */}
        <div className="col-md-6">
          <input
            type="text"
            className="form-control form-control-lg shadow-sm border-primary"
            placeholder="🔍 Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>


        {/* Region Filter */}
        <div className="col-md-3">
          <select
            className="form-select form-select-lg shadow-sm border-primary"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="All">
              All Regions
            </option>

            <option value="Asia">
              Asia
            </option>

            <option value="Europe">
              Europe
            </option>

            <option value="Africa">
              Africa
            </option>

            <option value="Americas">
              Americas
            </option>

            <option value="Oceania">
              Oceania
            </option>
          </select>
        </div>

      </div>


      {/* Result Count */}
      <div className="mb-4">
        <h5 className="text-muted">
          Showing {filteredCountries.length} destinations
        </h5>
      </div>


      {/* Country Cards */}
      <div className="row">

        {filteredCountries.length > 0 ? (

          filteredCountries
            .slice(0, 30)
            .map((country) => (

              <CountryCard
                key={country.name || country.country}
                country={country}
              />

            ))

        ) : (

          <div className="text-center py-5">

            <h3>
              😔 No destinations found
            </h3>

            <p className="text-muted">
              Try searching for another country or region.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Destinations;