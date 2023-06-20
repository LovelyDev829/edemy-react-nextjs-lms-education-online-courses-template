import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Partner = () => {
	return (
		<div className="partner-area bg-6ba292 ptb-70">
			<div className="container">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						567: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						992: {
							slidesPerView: 5,
						},
					}}
					className="partner-slides"
				>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner7.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner8.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner9.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner10.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner11.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner12.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner8.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Partner;
