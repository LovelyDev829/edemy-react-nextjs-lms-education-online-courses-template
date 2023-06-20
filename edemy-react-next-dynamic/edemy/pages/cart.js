import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import PageBanner from "../components/Common/PageBanner";
import { calculateCartTotal } from "@/utils/calculateCartTotal";
import CartItems from "@/components/Cart/CartItems";

const Cart = ({ user }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const [cartAmout, setCartAmaount] = useState(0);

	useEffect(() => {
		const { cartTotal } = calculateCartTotal(cartItems);
		setCartAmaount(cartTotal);
	}, [cartItems]);

	const handleRemove = async (cartId) => {
		// console.log(cartId);
		dispatch({
			type: "REMOVE_CART",
			id: cartId,
		});
	};

	return (
		<>
			<PageBanner
				pageTitle="Cart"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Cart"
			/>

			<div className="cart-area ptb-100">
				<div className="container">
					<form>
						<div className="cart-table table-responsive">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th scope="col">Product</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">Action</th>
									</tr>
								</thead>

								<tbody>
									{cartItems.length > 0 ? (
										cartItems.map((cart) => (
											<CartItems
												key={cart.id}
												{...cart}
												onRemove={() =>
													handleRemove(cart.id)
												}
											/>
										))
									) : (
										<tr >
											<td colSpan="4" className="text-center py-5">Empty</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>

						<div className="cart-totals">
							<h3>Cart Totals</h3>

							<ul>
								<li>
									Total <span>${cartAmout}</span>
								</li>
							</ul>

							<Link href="/checkout">
								<a className="default-btn">
									<i className="flaticon-shopping-cart"></i>{" "}
									Proceed to Checkout <span></span>
								</a>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Cart;
