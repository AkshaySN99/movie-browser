import Hero from "./Hero";

const Home = () => {
  console.log("Home page");
  return (
    <>
      <Hero text="Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
              A simple application that uses the TMDB (The Movie Database) API to fetch movie details and display details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
