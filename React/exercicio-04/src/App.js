import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { ApplicationRoutes } from "./config/ApplicationRoutes";
import { Container } from "react-bootstrap";

function App() {
	return (
		<>
			<Container>
				<Header />
				<ApplicationRoutes />
			</Container>
		</>
	);
}

export default App;
