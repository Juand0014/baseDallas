import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}: any) => {
	const [isAuth, setIsAuth] = useState(true)

	return isAuth 
		? children
		: <Navigate to="/unAuthorize" />
}