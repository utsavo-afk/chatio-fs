import React from 'react';

import { ToggleThemeBtn } from './components';
import { Navigation } from './navigation';

const App = () => {
	return (
		<div className="app">
			<ToggleThemeBtn />
			<Navigation />
		</div>
	);
};

export default App;
