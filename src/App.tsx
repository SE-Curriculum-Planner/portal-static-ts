import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/common/Dashboard";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Proposal from "./pages/documents/Proposal";

function App() {
	return (
		<>
			<Routes>
				<Route path="portal-static-ts/" element={<Dashboard />}>
					<Route index element={<Home />} />
					<Route path="team" element={<Team />} />
					<Route path="documents/" element={<Outlet />}>
						<Route path="proposal" element={<Proposal />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
