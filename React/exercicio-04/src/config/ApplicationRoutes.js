import { Route, Routes } from "react-router-dom";
import { About } from "../views/About";
import { Detail } from "../views/Detail";
import { Home } from "../views/Home";

// Router definition
export const ApplicationRoutes = () => (
	<Routes>
		<Route path="/" exact element={<Home />} />
		<Route path="/about" exact element={<About />} />
		<Route path="/movies/detail/:id" exact element={<Detail />} />
	</Routes>
)