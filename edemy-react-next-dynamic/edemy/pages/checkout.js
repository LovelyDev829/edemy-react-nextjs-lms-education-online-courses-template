import React, { useState, useEffect } from "react";
import CheckoutBtn from "@/components/CheckoutButton/CheckoutBtn";
import { useSelector, useDispatch } from "react-redux";
import PageBanner from "../components/Common/PageBanner";
import { calculateCartTotal } from "@/utils/calculateCartTotal";

const Checkout = ({ user }) => {
	// console.log(user);
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [cartAmout, setCartAmaount] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		const { cartTotal } = calculateCartTotal(cartItems);
		setCartAmaount(cartTotal);
	}, [cartItems]);

	const onClearCart = () => {
		dispatch({
			type: "RESET_CART",
		});
	};
	return (
		<>
			<PageBanner
				pageTitle="Checkout"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Checkout"
			/>

			<div className="checkout-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="order-details">
								<h3 className="title">Your Order</h3>

								<div className="order-table table-responsive">
									<table className="table table-bordered">
										<thead>
											<tr>
												<th scope="col">
													Product Name
												</th>
												<th scope="col">Total</th>
											</tr>
										</thead>

										<tbody>
											{cartItems.map((cart) => (
												<tr key={cart.id}>
													<td className="product-name">
														<a href="#">
															{cart.title}
														</a>
													</td>

													<td className="product-total">
														<span className="subtotal-amount">
															${cart.price}
														</span>
													</td>
												</tr>
											))}

											<tr>
												<td className="total-price">
													<span>Order Total</span>
												</td>

												<td className="product-subtotal">
													<span className="subtotal-amount">
														${cartAmout}
													</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<CheckoutBtn
									price={cartAmout}
									cartItems={cartItems}
									user={user}
									onClearCart={() => onClearCart()}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
