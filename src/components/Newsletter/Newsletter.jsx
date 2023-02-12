import React from "react";
import NewsLetter from "../Newsletter/NewsLetter.css";
function Newsletter() {
  return (
    <section className="py-5" id="newsletter">
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="title text-center pt-3 pb-5">
            <h2 className="position-relative d-inline-block ms-4">
              Newsletter Subsciption
            </h2>
          </div>

          <p className="text-center text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, iure, repudiandae adipisci dicta cum autem saepe maxime
            culpa excepturi deleniti totam earum ab temporibus delectus cumque.
            Fuga minus perferendis beatae.
          </p>
          <div className="input-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email..."
            />
            <button className="btn bg">Subscript</button>
          </div>
        </div>
      </div>
    </section>
  );
}
// 10313
export default Newsletter;
