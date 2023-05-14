import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeTemplates from './Templates/HomeTemplates';
import Home from './Props/Home';
import Login from './Props/Login';
import ReactForm from './ReactForm/ReactForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>

		<BrowserRouter>
			<Routes>
				{/* <Route path='' element={<Home />}></Route>
			<Route path='home' element={<Home />}></Route>
			<Route path='cart' element={<ProductDetail />}></Route> */}

				<Route path='' element={<HomeTemplates />}>
					<Route index element={<Home />}></Route>
					<Route path='login' element={<Login />}></Route>
					<Route path='student-info' element={<ReactForm />}></Route>
					<Route path='*' element={<Navigate to={'/'} />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>

	</div>
);

