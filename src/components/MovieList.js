import React from "react";
const MovieList = (props) => {
  return (
    <>
      <div className="col-sm-4">
        <div className="leaderboard">
          <div className="body">
            <ul>
              {props.movies.map((movie, index) => (
                <li
                  key={index}
                  onClick={(e) =>
                    props.handleSelected(
                      movie,
                      (e.currentTarget.style.backgroundColor = "green")
                    )
                  }
                >
                  <mark>{movie.Title}</mark>
                  <small>{movie.Year}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
