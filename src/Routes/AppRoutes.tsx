import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import { PublicRoute } from "./PublicRoutes";
import { Un_authorize } from "../Pages";

export const AppRouter = () => {
	return (
			<Routes>
				<Route path="/unAuthorize" element={
					<PublicRoute>
						<Un_authorize />
					</PublicRoute>
				} />
 
				<Route path="/*" element={
					<PrivateRoute>
						<DashboardRoutes />
					</PrivateRoute>
				} />
			</Routes>
	)
}
