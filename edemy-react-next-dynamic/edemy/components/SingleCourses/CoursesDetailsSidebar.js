import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"));
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

const CoursesDetailsSidebar = ({
	id,
	price,
	user,
	profilePhoto,
	lessons,
	duration,
	title,
	loggedInUser,
}) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [display, setDisplay] = useState(false);
	const dispatch = useDispatch();
	const [add, setAdd] = useState(false);
	const [alreadyBuy, setAlreadyBuy] = useState(false);

	const addToCart = (courseId, title, price, lessons, duration, image) => {
		let courseObj = {};
		courseObj["id"] = courseId;
		courseObj["title"] = title;
		courseObj["price"] = price;
		courseObj["lessons"] = lessons;
		courseObj["duration"] = duration;
		courseObj["image"] = image;
		courseObj["quantity"] = 1;
		dispatch({
			type: "ADD_TO_CART",
			data: courseObj,
		});
	};

	useEffect(() => {
		const courseExist = cartItems.find((cart) => {
			return id === cart.id;
		});
		courseExist && setAdd(true);
		if (loggedInUser && id) {
			const payload = {
				params: { userId: loggedInUser.id, courseId: id },
			};
			const url = `${baseUrl}/api/v1/courses/course/exist`;
			axios.get(url, payload).then((result) => {
				setAlreadyBuy(result.data.enroll);
			});
		}
	}, [cartItems, id]);

	useEffect(() => {
		setDisplay(true);
	}, []);
	// console.log(loggedInUser)
	const { enroled_courses } = loggedInUser ? loggedInUser : "";
	const router = useRouter();
	// Popup Video
	const [enrolled, setEnrolled] = React.useState(0);
	const [isOpen, setIsOpen] = React.useState(true);
	const openModal = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const countEnrolled = async () => {
			const url = `${baseUrl}/api/v1/courses/enrolled/${id}`;
			const response = await axios.get(url);
			setEnrolled(response.data);
		};
		// setEnrolled(response.data.enrolled)
		countEnrolled();
	}, []);

	const checkBoughtAlready = () => {
		return (
			enroled_courses.filter(function (val) {
				return val.courseId === id;
			}).length > 0
		);
	};

	return (
		<>
			{/* If you want to change the video need to update videoID */}
			{display ? (
				<ModalVideo
					channel="youtube"
					isOpen={!isOpen}
					videoId="bk7McNUjWgw"
					onClose={() => setIsOpen(!isOpen)}
				/>
			) : (
				""
			)}

			<div className="courses-details-info">
				<div className="image">
					<img src={profilePhoto} alt={title} />

					<div
						onClick={(e) => {
							e.preventDefault();
							openModal();
						}}
						className="link-btn popup-youtube"
					></div>

					<div className="content">
						<i className="flaticon-play"></i>
						<span>Course Preview</span>
					</div>
				</div>

				<ul className="info">
					<li className="price">
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-tag"></i> Price
							</span>
							${price}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-teacher"></i> Instructor
							</span>
							{user.name}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-time"></i> Duration
							</span>
							{duration}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-distance-learning"></i>{" "}
								Lessons
							</span>
							{parseInt(lessons)}
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-web"></i> Enrolled
							</span>
							{enrolled} students
						</div>
					</li>
					<li>
						<div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-lock"></i> Access
							</span>
							Lifetime
						</div>
					</li>
				</ul>

				<div className="btn-box">
					{alreadyBuy ? (
						<button
							onClick={() => router.push("/my-courses")}
							className="default-btn"
						>
							<i className="flaticon-shopping-cart"></i> View My
							Courses
							<span></span>
						</button>
					) : (
						<>
							{add ? (
								<button
									className="default-btn"
									onClick={() => router.push("/cart")}
								>
									<i className="flaticon-tag"></i> View Cart{" "}
									<span></span>
								</button>
							) : (
								<button
									className="default-btn"
									onClick={() =>
										addToCart(
											id,
											title,
											price,
											lessons,
											duration,
											profilePhoto
										)
									}
								>
									<i className="flaticon-tag"></i> Add to cart{" "}
									<span></span>
								</button>
							)}
						</>
					)}
				</div>

				<div className="courses-share">
					<div className="share-info">
						<span>
							Share This Course <i className="flaticon-share"></i>
						</span>

						<ul className="social-link">
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-facebook"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-instagram"></i>
								</a>
							</li>
							<li>
								<a href="#" className="d-block" target="_blank">
									<i className="bx bxl-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesDetailsSidebar;
