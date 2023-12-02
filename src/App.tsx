import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/common/Dashboard";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
