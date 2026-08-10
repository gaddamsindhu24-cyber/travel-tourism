
import { useState } from "react";
import { useLocation } from "react-router-dom";

function PlanTrip() {
  const location = useLocation();

  const destination = location.state?.destination || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: destination,
    travelDate: "",
    travelers: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      destination: destination,
      travelDate: "",
      travelers: "",
      message: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7">

          <div className="card shadow p-4">
            <h2 className="text-center mb-2">
              Plan Your Trip
            </h2>

            <p className="text-center text-muted mb-4">
              Send us your travel enquiry
            </p>

            {success && (
              <div className="alert alert-success text-center">
                ✅ Your enquiry has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Destination
                </label>

                <input
                  type="text"
                  name="destination"
                  className="form-control"
                  placeholder="Enter destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Travel Date
                </label>

                <input
                  type="date"
                  name="travelDate"
                  className="form-control"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Number of Travelers
                </label>

                <input
                  type="number"
                  name="travelers"
                  className="form-control"
                  placeholder="Number of travelers"
                  min="1"
                  value={formData.travelers}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>

                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Tell us about your travel requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Send Enquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PlanTrip;

