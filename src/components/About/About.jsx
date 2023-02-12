import React from "react";
import ab from "../../assets/img/about.jpg";
function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row gy-lg-5 align-items-center">
          <div className="col-lg-6 order-lg-1 text-center text-lg-start">
            <div className="title pt-3 pb-5">
              <h2 className="position-relative d-inline-block ms-4">
                About Us
              </h2>
            </div>
            <p className="lead text-muted">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              atque veniam nesciunt et unde sapiente quidem sed labore
              consequatur placeat tempora quia, eos minima! Praesentium non
              voluptatibus amet reprehenderit dolorem.
            </p>
          </div>
          <div className="col-lg-6 order-lg-0">
            <img className="img-fluid" src={ab} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
