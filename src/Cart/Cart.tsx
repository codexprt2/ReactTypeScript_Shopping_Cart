import CartItem from "../CartItem/CartItem";
// Styles
import { Wrapper } from "./Cart.styles";
// Types
import { CartItemType } from "../App";
import Item from "../Item/Item";

type Props = {
	cartItems: CartItemType[];
	addTocart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addTocart, removeFromCart }) => {
	const calculateTotal = (items: CartItemType[]) =>
		items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

	return (
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : null}
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					addTocart={addTocart}
					removeFromCart={removeFromCart}
				/>
			))}
			<h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
		</Wrapper>
	);
};

export default Cart;
