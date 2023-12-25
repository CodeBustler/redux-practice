import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from '../store/cart/cart.actions';
import { selectCartItems } from '../store/cart/cart.selectors';


export const ProductCards = (props) => {
	
	const { product, index } = props.props;

	const dispatch = useDispatch();
  	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    
    return (
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
					onClick={ addProductToCart } 
				>
					Add to Cart
				</button>
			</div>
		</div>
    )}

//export default ProductCards;