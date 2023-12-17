import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { useSelector } from "react-redux";

function NavBar() {
	const cartItemCount = useSelector((state) => state.cart.length);
	return (
		<nav className="bg-blue-900 flex items-center justify-between py-3 px-4 sticky top-0">
			<NavLink to="/" className="text-xl font-semibold text-white">
				Prodcuts
			</NavLink>
			<NavLink
				to="/cart"
				className="text-xl font-semibold text-white flex items-center gap-2"
			>
				<IoIosCart className="text-3xl " /> {cartItemCount}
			</NavLink>
		</nav>
	);
}

export default NavBar;
