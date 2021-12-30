import Hero from "./Hero"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Get movie details https://api.themoviedb.org/3/movie/5?api_key=a6c43d035930987d2f1e9005812fdb4a&language=en-US

const Movie = () => {
    const { id } = useParams()

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a6c43d035930987d2f1e9005812fdb4a&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails() {
        if(isLoading){
            <Hero text="Loading..." />
        }
        if(movieDetails){
            const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterUrl} alt={movieDetails.poster_path} className="img-fluid shodow rounded" />
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">{movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetails()
}

export default Movie;