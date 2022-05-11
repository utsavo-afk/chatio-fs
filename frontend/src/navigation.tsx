import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Login, NotFound, Signup } from './views';

export const Navigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
