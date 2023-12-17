import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
	const dispatch = useDispatch();
	const cartItemsData = useSelector((state) => state.cart);
	const navigate = useNavigate();

	// REMOVE FROM CART
	const removeFromCart = (product) => {
		dispatch(remove(product));
	};

	// MAPPING CART ITEMS
	const cartItems = cartItemsData.map((product, index) => (
		<div
			className="border rounded p-5 flex flex-col  justify-evenly gap-3"
			key={index}
		>
			<img
				src={product.image}
				alt=""
				className="h-[150px] object-contain"
			/>
			<h2 className="font-bold">{product.title.slice(0, 30)}</h2>
			<p>{product.description.slice(0, 60)}</p>
			<div className="flex justify-between items-center">
				<h2 className="text-lg font-bold"> $ {product.price}</h2>
				<button
					className="px-4 py-2 rounded text-white font-semi bold bg-red-500 active:bg-blue-800"
					onClick={() => removeFromCart(product.id)}
				>
					Remove
				</button>
			</div>
		</div>
	));

	return (
		<section className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
				{cartItems.length > 0 ? (
					cartItems
				) : (
					<p className="text-4xl font-semibold">No Items</p>
				)}
			</div>
		</section>
	);
}

export default Cart;
