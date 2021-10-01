import React from 'react';
import MainHeader from './shared/Navigation/MainHeader';
import Movies from './shared/components/Movies/Movies';

const App = () => {

	return (
		<React.Fragment>
			<MainHeader />
			<main>
				<Movies/>
			</main>
		</React.Fragment>
	);
}

export default App;
