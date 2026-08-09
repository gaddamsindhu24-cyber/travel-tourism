import React, { useState } from "react";

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };


  return (

    <div className="container my-5">


      {/* Header */}

      <div className="text-center mb-5">

        <h1 className="fw-bold text-primary">
          Contact Us 📩
        </h1>

        <p className="lead text-muted">
          Have questions or need more information?
          Feel free to contact us.
        </p>

      </div>




      <div className="row g-4">


        {/* Contact Information */}

        <div className="col-md-5">

          <div 
            className="card shadow border-0 h-100 p-4 text-white"
            style={{
              background:
              "linear-gradient(135deg,#667eea,#764ba2)"
            }}
          >

            <h3 className="fw-bold mb-4">
              🌍 Get In Touch
            </h3>


            <p>
              📧 <strong>Email</strong>
              <br />
              travel.explorer@gmail.com
            </p>


            <p>
              📍 <strong>Location</strong>
              <br />
              India
            </p>


            <p>
              🌐 <strong>Website</strong>
              <br />
              Travel Explorer
            </p>


            <hr />


            <p>
              ✈️ We help you explore destinations
              and discover amazing places around
              the world.
            </p>


          </div>

        </div>





        {/* Contact Form */}

        <div className="col-md-7">


          <div 
            className="card shadow border-0 p-4"
            style={{
              background:"#f8f9fa"
            }}
          >


            <h3 className="fw-bold text-success mb-4">
              ✉️ Send Message
            </h3>



            {
              submitted &&

              <div className="alert alert-success">
                Message sent successfully! ✅
              </div>

            }



            <form onSubmit={handleSubmit}>


              <div className="mb-3">

                <label className="form-label fw-bold">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />

              </div>





              <div className="mb-3">

                <label className="form-label fw-bold">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />

              </div>





              <div className="mb-3">

                <label className="form-label fw-bold">
                  Message
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                  required
                ></textarea>

              </div>





              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                🚀 Send Message
              </button>



            </form>


          </div>


        </div>


      </div>


    </div>

  );

};


export default Contact;