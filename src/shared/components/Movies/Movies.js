import React, { useState, useCallback } from 'react';
import MovieList from './MovieList';
import Input from '../Input';

import './Movies.css';
import moviesdata from '../../../assets/moviedata.json';

//Displays the list of movies and a search bar
const Movies = props => {
	const [search, setSearch] = useState('');
	/*
	const [movies, setMovies] = useState([]);

	const search = useCallback((id, value) => {
		console.log(value === '', '-value: ', value);

		setMovies(prevMovies => value === '' ?
			(
				[...moviesdata]
			) : (
				moviesdata.filter(m => {
					return m.title.toLowerCase().includes(value.toLowerCase());
				})
			)
		);
		setMovies(prevMovies => prevMovies.slice(0, 50));

		console.log(movies)
	}, []);*/

	const movies = search === '' ?
		(
			[...moviesdata].slice(0, 50)
		) : (
			moviesdata.filter(m => {
				let temp = m.title.toLowerCase().normalize()
				let s = search.toLowerCase().normalize()
				return temp.includes(s) || (m.info.genres &&
					m.info.genres.map(g => g.toLowerCase().normalize()).includes(s))
			})
				.slice(0, 100)
		)

	return (
		<div className="movies">
			<div className="movies-header">
				<h2>Movies</h2>
				<Input
					id="name"
					type="text"
					placeholder="Search a title or genre..."
					//onInput={search}
					onInput={(id, value) => setSearch(value)}
				/>
			</div>

			<MovieList items={movies} />
		</div>
	);
};

export default Movies;