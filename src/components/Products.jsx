
import { useEffect, useState } from "react";

import { ProductCards } from '../components/ProductCard';

function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
					.then((data) => data.json())
					.then((result) => setProducts(result) );
	}, []);

	const CardProduct =	products.map((product, index) => 
			<ProductCards props={{ product:product, index:index }} />
		);

	return(
		<div className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
			
				{ CardProduct }
			
			</div>
		</div>
	)}

	export default Products;

