import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ExploreMap() {
  const navigate = useNavigate();

  const destinations = [
    {
      id: 1,
      name: "Kashmir",
      city: "Srinagar",
      position: [34.0837, 74.7973],
      description: "Paradise of India with beautiful valleys and lakes.",
      package: "Kashmir Paradise",
    },
    {
      id: 2,
      name: "Manali",
      city: "Himachal Pradesh",
      position: [32.2432, 77.1892],
      description: "Beautiful mountains, snow and exciting adventures.",
      package: "Manali Adventure",
    },
    {
      id: 3,
      name: "Rajasthan",
      city: "Jaipur",
      position: [26.9124, 75.7873],
      description: "Explore royal palaces, forts and rich heritage.",
      package: "Rajasthan Heritage",
    },
    {
      id: 4,
      name: "Goa",
      city: "Goa",
      position: [15.2993, 74.124],
      description: "Relax on beautiful beaches and enjoy the nightlife.",
      package: "Goa Beach Escape",
    },
    {
      id: 5,
      name: "Kerala",
      city: "Kerala",
      position: [10.8505, 76.2711],
      description: "Experience peaceful backwaters and lush greenery.",
      package: "Kerala Experience",
    },
    {
      id: 6,
      name: "Hyderabad",
      city: "Telangana",
      position: [17.385, 78.4867],
      description: "Discover Charminar, Golconda Fort and local cuisine.",
      package: "Hyderabad City Tour",
    },
  ];

  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0d6efd, #084298)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "800",
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          🗺️ Explore India
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "650px",
            margin: "auto",
          }}
        >
          Discover beautiful destinations across India and
          find your next unforgettable journey.
        </p>
      </div>

      {/* Map */}
      <div className="container mt-5">
        <div
          className="card border-0 shadow-lg overflow-hidden"
          style={{
            borderRadius: "18px",
          }}
        >
          <MapContainer
            center={[22.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={true}
            style={{
              height: "600px",
              width: "100%",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {destinations.map((destination) => (
              <Marker
                key={destination.id}
                position={destination.position}
              >
                <Popup>
                  <div style={{ minWidth: "220px" }}>
                    <h5
                      style={{
                        fontWeight: "700",
                        marginBottom: "5px",
                      }}
                    >
                      📍 {destination.name}
                    </h5>

                    <p
                      style={{
                        color: "#6b7280",
                        marginBottom: "8px",
                      }}
                    >
                      {destination.city}
                    </p>

                    <p>{destination.description}</p>

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        navigate(
                          `/packages`
                        )
                      }
                    >
                      View Packages
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 style={{ fontWeight: "800" }}>
            Popular Destinations
          </h2>

          <p className="text-muted">
            Click a destination on the map or explore below.
          </p>
        </div>

        <div className="row g-4">
          {destinations.map((destination) => (
            <div
              className="col-md-6 col-lg-4"
              key={destination.id}
            >
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "15px",
                  transition: "0.3s",
                }}
              >
                <div className="card-body p-4">
                  <h4 style={{ fontWeight: "700" }}>
                    📍 {destination.name}
                  </h4>

                  <p className="text-primary mb-2">
                    {destination.city}
                  </p>

                  <p className="text-muted">
                    {destination.description}
                  </p>

                  <button
                    className="btn btn-primary w-100"
                    onClick={() =>
                      navigate("/packages")
                    }
                  >
                    Explore Package →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mt-5">
        <div
          className="text-center p-5"
          style={{
            background: "#111827",
            color: "white",
            borderRadius: "18px",
          }}
        >
          <h2 style={{ fontWeight: "800" }}>
            Where Will You Go Next?
          </h2>

          <p style={{ color: "#d1d5db" }}>
            Explore our destinations and start planning
            your perfect trip.
          </p>

          <button
            className="btn btn-warning px-4 mt-2"
            onClick={() => navigate("/packages")}
          >
            View All Packages
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreMap;
