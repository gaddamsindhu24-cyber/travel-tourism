import { Link } from "react-router-dom";

function About() {
  return (
    <div>

      {/* Hero Section */}

      <section
        className="text-white d-flex align-items-center text-center"
        style={{
          height: "60vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="container">

          <h1 className="display-2 fw-bold">
            About TravelGo 🌍
          </h1>

          <p className="lead fs-4">
            Making world exploration simple, smart and memorable.
          </p>

        </div>

      </section>




      {/* Our Story */}

      <section className="container my-5">

        <div className="row align-items-center">


          <div className="col-md-6">

            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
              className="img-fluid rounded-4 shadow"
              alt="travel"
            />

          </div>


          <div className="col-md-6 mt-4">


            <h2 className="fw-bold">
              Discover The World With Confidence
            </h2>


            <p className="text-muted">

              TravelGo is a modern travel and tourism
              platform designed to help users explore
              countries across the globe.

            </p>


            <p className="text-muted">

              Our platform provides destination
              information including country details,
              flags, regions, population and other
              useful travel insights through API
              integration.

            </p>


            <Link
              to="/destinations"
              className="btn btn-primary"
            >
              Explore Destinations
            </Link>


          </div>


        </div>

      </section>





      {/* Mission Vision */}

      <section className="bg-light py-5">

        <div className="container">

          <div className="row">


            <div className="col-md-6 mb-4">

              <div className="card shadow border-0 p-4 h-100">


                <h3>
                  🎯 Our Mission
                </h3>


                <p>
                  To make travel planning easier by
                  providing simple access to worldwide
                  destination information.
                </p>


              </div>

            </div>




            <div className="col-md-6 mb-4">

              <div className="card shadow border-0 p-4 h-100">


                <h3>
                  🚀 Our Vision
                </h3>


                <p>
                  To create a smart travel platform
                  where everyone can discover new
                  places effortlessly.
                </p>


              </div>

            </div>


          </div>

        </div>

      </section>





      {/* Features */}

      <section className="container my-5">


        <h2 className="text-center fw-bold mb-5">
          Why Choose TravelGo?
        </h2>



        <div className="row">


          <div className="col-md-4">

            <div className="card shadow border-0 text-center p-4">

              <h1>
                🌎
              </h1>

              <h5>
                Worldwide Information
              </h5>

              <p>
                Explore countries and destinations
                from different regions.
              </p>

            </div>

          </div>



          <div className="col-md-4">

            <div className="card shadow border-0 text-center p-4">

              <h1>
                ⚡
              </h1>

              <h5>
                Fast Search
              </h5>

              <p>
                Quickly find destinations using
                smart search.
              </p>

            </div>

          </div>



          <div className="col-md-4">

            <div className="card shadow border-0 text-center p-4">

              <h1>
                📱
              </h1>

              <h5>
                Responsive Design
              </h5>

              <p>
                Smooth experience on desktop and
                mobile devices.
              </p>

            </div>

          </div>


        </div>


      </section>





      {/* Technology */}

      <section className="bg-primary text-white py-5">


        <div className="container text-center">


          <h2 className="mb-4">
            Built With Modern Technologies
          </h2>


          <div className="row">


            <div className="col-md-3">
              <h5>⚛ React.js</h5>
            </div>


            <div className="col-md-3">
              <h5>⚡ Vite</h5>
            </div>


            <div className="col-md-3">
              <h5>🎨 Bootstrap 5</h5>
            </div>


            <div className="col-md-3">
              <h5>🌐 REST API</h5>
            </div>


          </div>


        </div>


      </section>





      {/* Call To Action */}

      <section className="container text-center my-5">


        <h2>
          Ready To Explore?
        </h2>


        <p>
          Start your journey and discover amazing
          destinations around the world.
        </p>


        <Link
          to="/destinations"
          className="btn btn-warning btn-lg"
        >
          Start Exploring 🌍
        </Link>


      </section>



    </div>
  );
}

export default About;