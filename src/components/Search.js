import Hero from "./Hero";
import { Link } from "react-router-dom";
import Fallback from "../images/fallback-poster.jpeg";

// TMDB API KEY = a6c43d035930987d2f1e9005812fdb4a
// Example link for searches = https://api.themoviedb.org/3/search/movie?api_key=a6c43d035930987d2f1e9005812fdb4a&language=en-US&query=Star%20wars&page=1&include_adult=false

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movie/${movie.id}`
   
    return(
        <div className="col-lg-3 col-md-3 col-2 my-5">
            <div className="card" style={{width: '18rem'}}>
                {movie.poster_path == null ? (
                    <img src={Fallback} className="card-img-top" alt={movie.original_title} />
                ) : (
                    <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                )}
                
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">More info</Link>
                </div>
            </div>
        </div>
    )
}

const Search = ({ keyword, searchResults}) => {    
    const title = `You are searching for ${keyword}`
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i}/>
    })

    return(
        <>  
            {keyword ? <Hero text={title} /> : <Hero text="Search for a movie" />}

            {resultsHtml && keyword ? (
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            ) : (
                <></>
            )}

            {resultsHtml.length === 0 && keyword ? (
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1">
                            <p className="lead text-center my-5">
                                No results found for: <strong>{keyword}</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}

        </>
    );
}

export default Search;