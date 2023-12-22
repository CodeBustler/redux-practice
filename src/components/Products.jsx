
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../store/cart/cart.selectors';

import { ProductCards } from '../components/ProductCard';

import { addItem } from '../store/cart/cart.actions';

function Products() {
	const [products, setProducts] = useState([]);
 
    const dispatch = useDispatch();
  	const cartItems = useSelector(selectCartItems);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((data) => data.json())
			.then((result) => setProducts(result));
		//console.log(products);
	}, []);

	const CardProduct =	products.map((product, index) => (
				<ProductCards product={product} />
			));

	return(
		<div className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
			
				{CardProduct}
			
			</div>
		</div>
	)}

	const mapDispatchToProps = dispatch => ({
		addItem: item => dispatch(addItem(item))
	})
	export default connect(null, mapDispatchToProps)(Products)
//export default Products;
//export default Products;
