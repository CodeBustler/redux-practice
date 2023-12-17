import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Products() {
	const [products, setProducts] = useState([]);
	const dispatch = useDispatch();

	// LOAD STORE DATA ON LOAD
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((data) => data.json())
			.then((result) => setProducts(result));
		console.log(products);
	}, []);

	// ADD CARTS
	const addToCart = (product) => {
		dispatch(add(product));
	};

	// MAPPING ITEM CARDS
	const productCards = products.map((product, index) => (
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
					className="px-4 py-2 rounded text-white font-semi bold bg-blue-500 active:bg-blue-800"
					onClick={() => addToCart(product)}
				>
					Add to Cart
				</button>
			</div>
		</div>
	));
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
				{/*CARDS*/}
				{productCards}
			</div>
		</div>
	);
}

export default Products;
