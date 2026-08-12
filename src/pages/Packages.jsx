import { useNavigate } from "react-router-dom";
function Packages() {
  const navigate = useNavigate();
  const packages = [
    {
      id: 1,
      name: "Goa Beach Escape",
      duration: "4 Days / 3 Nights",
      price: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      description:
        "Enjoy beautiful beaches, sunsets, water activities and the vibrant nightlife of Goa.",
    },
    {
      id: 2,
      name: "Manali Adventure",
      duration: "5 Days / 4 Nights",
      price: "₹15,999",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      description:
        "Explore the mountains, valleys and adventure activities of beautiful Manali.",
    },
    {
      id: 3,
      name: "Kashmir Paradise",
      duration: "6 Days / 5 Nights",
      price: "₹22,999",
      image:
  "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
      description:
        "Experience the stunning valleys, lakes and snow-covered mountains of Kashmir.",
    },
    {
      id: 4,
      name: "Kerala Experience",
      duration: "5 Days / 4 Nights",
      price: "₹17,999",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      description:
        "Discover Kerala's peaceful backwaters, beaches, greenery and traditional culture.",
    },
    {
      id: 5,
      name: "Rajasthan Heritage",
      duration: "6 Days / 5 Nights",
      price: "₹19,999",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      description:
        "Explore magnificent forts, palaces, deserts and the royal heritage of Rajasthan.",
    },
    {
      id: 6,
      name: "Hyderabad City Tour",
      duration: "3 Days / 2 Nights",
      price: "₹8,999",
      image:
        "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=800&q=80",
      description:
        "Visit Charminar, Golconda Fort, Hussain Sagar and enjoy the famous cuisine of Hyderabad.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Travel Packages</h1>
        <p className="text-muted">
          Explore our exciting travel packages and plan your perfect trip.
        </p>
      </div>

      <div className="row g-4">
        {packages.map((pkg) => (
          <div className="col-md-6 col-lg-4" key={pkg.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={pkg.image}
                className="card-img-top"
                alt={pkg.name}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{pkg.name}</h4>

                <p className="text-muted mb-2">
                  🕒 {pkg.duration}
                </p>

                <p className="card-text">{pkg.description}</p>

                <div className="mt-auto">
                  <h5 className="fw-bold">{pkg.price}</h5>

                  <button
  className="btn btn-primary w-100 mt-2"
  onClick={() => navigate(`/plan-trip?destination=${encodeURIComponent(pkg.name)}`)}
>
  Book Now
</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;