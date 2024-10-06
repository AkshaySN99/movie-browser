import Hero from "./Hero";
import MovieCard from "./MovieCard";

//API key = 3f26a3875d6858c59103ca2c6617d08e

//example link for searching movies = https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for "${keyword}"`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  const NoResults = () => {
    return (
        <div>
            <h1>No Search Results...</h1>
        </div>
    )
  }

  return (
    <div>
      <Hero text={title} />
      {
      searchResults.length === 0 ?
        <NoResults />
        : 
        <div className="container">
            <div className="row">
                {resultsHtml}
            </div>
        </div>
      } 
    </div>
  );
};

export default SearchView;
