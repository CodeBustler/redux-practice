import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../redux/store";

function RootLayout() {
	return (
		<>
			<Provider store={store}>
				<NavBar />
				<main className="m-5">
					<Outlet />
				</main>
			</Provider>
		</>
	);
}

export default RootLayout;
