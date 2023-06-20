import React from "react";
import StripeCheckout from "react-stripe-checkout";
import catchErrors from "@/utils/catchErrors";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";

const CheckoutBtn = ({ user, price, cartItems, onClearCart }) => {
	const stripeTotal = Number((price * 100).toFixed(2));
	// console.log(stripeTotal)
	const router = useRouter();

	const handleCheckout = async () => {
		try {
			const payload = {
				cartItems,
				userId: user.id,
				buyer_email: user.email,
			};
			const url = `${baseUrl}/api/v1/courses/checkout`;
			const response = await axios.post(url, payload);
			toast.success(response.data);
			onClearCart();
			router.push("/");
		} catch (error) {
			catchErrors(error, window.alert);
			console.log(error.message);
		}
	};

	return (
		<div>
			<StripeCheckout
				name="eDemy Online Course"
				amount={stripeTotal}
				currency="USD"
				stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
				token={handleCheckout}
				triggerEvent="onClick"
			>
				<div className="payment-box">
					<button className="default-btn">
						<i className="flaticon-shopping-cart"></i> Make Payment{" "}
						<span></span>
					</button>
				</div>
			</StripeCheckout>
		</div>
	);
};

export default CheckoutBtn;
