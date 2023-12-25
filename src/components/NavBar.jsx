import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { selectCartCount } from "../store/cart/cart.selectors";

function NavBar() {

	const itemCount = useSelector(selectCartCount);

	return (
		<nav className="bg-blue-900 flex items-center justify-between py-3 px-4 sticky top-0">
			<NavLink to="/" className="text-xl font-semibold text-white">
				Prodcuts
			</NavLink>
			<NavLink
				to="/cart"
				className="text-xl font-semibold text-white flex items-center gap-2"
			>
			<IoIosCart className="text-3xl " /> { itemCount ? itemCount : 0 }
			</NavLink>
		</nav>
	);
}

export default NavBar;
