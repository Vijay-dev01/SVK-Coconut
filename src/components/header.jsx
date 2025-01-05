import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay"></div>
        <iframe
          src="https://www.youtube.com/embed/hIjzJ-vRRCQ?autoplay=1&mute=1&loop=1&playlist=hIjzJ-vRRCQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="SVKCoconut Background Video"
        ></iframe>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
