import React from "react";
const Selected = (props) => {
  return (
    <>
      <div className="col-sm-8">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-muted mt-4">
              {props.movie.Title}
              <br />
            </h2>
            <hr className="text-light" />
            <p className="text-muted">{props.movie.Year}</p>
          </div>
          <div className="col-sm-6">
            <img src={props.movie.Poster} alt="movie"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selected;
