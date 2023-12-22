import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { selectCartItemsCount } from "../store/cart/cart.selectors";

function NavBar() {
	return (
		<nav className="bg-blue-900 flex items-center justify-between py-3 px-4 sticky top-0">
			<NavLink to="/" className="text-xl font-semibold text-white">
				Prodcuts
			</NavLink>
			<NavLink
				to="/cart"
				className="text-xl font-semibold text-white flex items-center gap-2"
			>
 				<IoIosCart className="text-3xl " /> {selectCartItemsCount ? selectCartItemsCount : 0}
			</NavLink>
		</nav>
	);
}

export default NavBar;
