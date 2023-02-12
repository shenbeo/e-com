import React from "react";
import Blogs from "../Blog/Blogs.css";
function Blog() {
  return (
    <section id="offers" className="py-5">
      <div className="container">
        <div className="row d-flex align-items-center text-center justify-content-lg-start text-lg-start">
          <div className="offers-content">
            <span className="">Discount Up To 50%</span>
            <h2 className="mt-2 mb-2 ">Grand Sale Offer!</h2>
            <a className="btn" href="">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
