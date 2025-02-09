import React from 'react'

const ImageContainer = ({ movie }) => {
    const { poster_path, backdrop_path } = movie
    return (
        <div className="Image-container">
            <div className="backdrop">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt="movie-backdrop"
                    className="backdrop-img"
                />
            </div>
            <div className="poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt="movie-poster"
                    className="poster-img"
                />
            </div>
        </div>
    )
}

export default ImageContainer
