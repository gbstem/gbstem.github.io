import React from "react";

function HomeIntro() {

  return (
    <div className="container mb-5">
      <p>
        The Greater Boston STEM Program (gbSTEM) delivers free introductory computer science, math,
        engineering, and science enrichment to elementary and middle school students. The gbSTEM fall 2023
        semester registration is now open and will close September 20th! High School and College students can 
        apply to teach, with applications due September 15th. The fall semester will run from September 24th to December 23rd.
        To register, go to this <a
          href="https://portal.gbstem.org/signup"
          target="_blank" rel="noopener noreferrer"
        >link</a>.
      </p>
      <div className="row">
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>Parents and K-8 Students </strong>
          </p>
          <a className="btn btn-primary" href="https://portal.gbstem.org/signup" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>High School and College Students </strong>
          </p>
          <a className="btn btn-primary" href="https://portal.gbstem.org/signup" target="_blank" rel="noopener noreferrer">
            Apply to teach
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeIntro;

