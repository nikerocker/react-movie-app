import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import SelectedMovie from "./components/Selected";
import ReactPaginate from "react-paginate";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selected, setSelectedMovie] = useState({
    Title: "Kindly Selected A Movie to Get More Info",
  });
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setpageCount] = useState(0);
  const [color, setColor] = useState("");
  const [active, setActive] = useState(false);
  let limit = 10;

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=9f439b8a&page=${page}`;

    const response = await fetch(url);
    const responseJson = await response.json();
    const total = responseJson.totalResults;
    setpageCount(Math.ceil(total / limit));
    console.log("total", total);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue, page);
  }, [searchValue, page]);

  const selectedMovie = (movie, event) => {
    console.log(event, "event");
    if (movie) {
      setSelectedMovie(movie);
    }
  };

  const handlePageClick = (data) => {
    console.log(data.selected);
    setPage(data.selected);
  };

  return (
    <div>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="row">
        <MovieList
          movies={movies}
          color={color}
          active={active}
          handleSelected={selectedMovie}
        />
        <SelectedMovie movie={selected} />
      </div>
      <div className="row">
        <div className="col-sm-4">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
