import React from 'react';

import './MovieItem.css';

//Individual MovieItem
//Expects in props: image, altImage, title, year, genres
const MovieItem = props => {

	return(
		<div className="movie-item">
			<div className="movie-item__image">
				<img src={props.image} alt={props.altImage}/>
			</div>
			<button className="movie-item__button"/>

			<div className="movie-item__info">
				<h3>{props.title} - {props.year}</h3>
				<h4>{props.genres}</h4>
			</div>
		</div>
	);
};

export default MovieItem;