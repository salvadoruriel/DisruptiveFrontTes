import React from 'react';
import MovieItem from './MovieItem';

import './MovieList.css';

//the list of movies
//expects items
const MovieList = props => {
	if (!props.items || props.items.length === 0) {
		return (
			<div className="center">
				<h2>No se encontraron peliculas.</h2>
			</div>
		);
	}

	return (
		<div className="movie-list">
			{props.items.map(movie => (
				<MovieItem
					key={movie.title + '-' + movie.year}
					image={movie.info.image_url}
					altImage={movie.title + '-' + movie.year}
					title={movie.title}
					year={movie.year}
					genres={movie.info.genres && movie.info.genres.join(', ')}
				/>
			))}
		</div>
	);
};

export default MovieList;