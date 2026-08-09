import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://images.unsplash.com/photo-1488646953014-85cb44e25828)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="container text-center">

          <h1 className="display-2 fw-bold">
            Explore The World 🌍
          </h1>

          <p className="fs-4 mt-3">
            Discover amazing destinations and create unforgettable memories.
          </p>


          {/* Search Box */}
          <div className="bg-white p-3 rounded shadow mt-5 mx-auto"
            style={{maxWidth:"600px"}}>

            <div className="input-group">

              <input
                type="text"
                className="form-control"
                placeholder="Search destination..."
              />

              <button className="btn btn-primary">
                🔍 Search
              </button>

            </div>

          </div>


          <Link
            to="/destinations"
            className="btn btn-warning btn-lg mt-4"
          >
            Explore Destinations
          </Link>


        </div>

      </section>



      {/* Statistics */}

      <section className="container my-5">

        <div className="row text-center">


          <div className="col-md-3">
            <h2 className="fw-bold text-primary">
              150+
            </h2>
            <p>Countries</p>
          </div>


          <div className="col-md-3">
            <h2 className="fw-bold text-primary">
              500+
            </h2>
            <p>Destinations</p>
          </div>


          <div className="col-md-3">
            <h2 className="fw-bold text-primary">
              10K+
            </h2>
            <p>Travelers</p>
          </div>


          <div className="col-md-3">
            <h2 className="fw-bold text-primary">
              24/7
            </h2>
            <p>Support</p>
          </div>


        </div>

      </section>




      {/* Popular Destinations */}

      <section className="container my-5">


        <h2 className="text-center mb-4">
          Popular Destinations
        </h2>


        <div className="row">


          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                className="card-img-top"
                height="250"
                alt="Paris"
              />


              <div className="card-body text-center">

                <h4>
                  Paris 🇫🇷
                </h4>

                <p>
                  Experience art, culture and beautiful architecture.
                </p>

              </div>

            </div>

          </div>



          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">


              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
                className="card-img-top"
                height="250"
                alt="Japan"
              />


              <div className="card-body text-center">

                <h4>
                  Japan 🇯🇵
                </h4>

                <p>
                  Explore technology, tradition and nature.
                </p>

              </div>

            </div>

          </div>




          <div className="col-md-4 mb-4">

            <div className="card shadow h-100">


              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090"
                className="card-img-top"
                height="250"
                alt="Dubai"
              />


              <div className="card-body text-center">

                <h4>
                  Dubai 🇦🇪
                </h4>

                <p>
                  Discover luxury and adventure.
                </p>

              </div>

            </div>

          </div>


        </div>

      </section>




      {/* Categories */}

      <section className="bg-light py-5">

        <div className="container">


          <h2 className="text-center mb-4">
            Explore Categories
          </h2>


          <div className="row text-center">


            <div className="col-md-3">
              <div className="card p-4 shadow">
                🏖️
                <h5 className="mt-3">
                  Beaches
                </h5>
              </div>
            </div>


            <div className="col-md-3">
              <div className="card p-4 shadow">
                🏔️
                <h5 className="mt-3">
                  Mountains
                </h5>
              </div>
            </div>


            <div className="col-md-3">
              <div className="card p-4 shadow">
                🏛️
                <h5 className="mt-3">
                  Historical
                </h5>
              </div>
            </div>


            <div className="col-md-3">
              <div className="card p-4 shadow">
                🌲
                <h5 className="mt-3">
                  Nature
                </h5>
              </div>
            </div>


          </div>

        </div>

      </section>




      {/* Why Choose */}

      <section className="container my-5">


        <h2 className="text-center mb-4">
          Why Choose TravelGo?
        </h2>


        <div className="row">


          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              🌎
              <h4>
                Global Destinations
              </h4>
              <p>
                Explore countries around the world.
              </p>
            </div>
          </div>



          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              🔍
              <h4>
                Easy Search
              </h4>
              <p>
                Find destinations quickly.
              </p>
            </div>
          </div>



          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              ✈️
              <h4>
                Plan Trips
              </h4>
              <p>
                Get useful travel information.
              </p>
            </div>
          </div>


        </div>

      </section>




      {/* CTA */}

      <section className="bg-primary text-white text-center p-5">

        <h2>
          Ready For Your Next Adventure?
        </h2>

        <p>
          Start exploring beautiful destinations today.
        </p>


        <Link
          to="/destinations"
          className="btn btn-light btn-lg"
        >
          Start Exploring
        </Link>


      </section>


    </div>
  );
}

export default Home;