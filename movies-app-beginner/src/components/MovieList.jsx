import React from 'react';

const MovieList = (props) => {
    return (
        <div className='row'>
            {props.movies.map((movie, index) => (
                <div className='col-md-2 mb-3' key={index}>
                    <div className='image-container d-flex justify-content-start'>
                        <img src={movie.Poster} alt='movie' className="img-fluid" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
