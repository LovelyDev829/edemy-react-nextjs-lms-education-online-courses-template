import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PartnerStyleTwo = () => {
	return (
		<div className="partner-area bg-f0f2f5 ptb-70">
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
								src="/images/partner/partner1.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner2.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner3.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner4.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner5.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner6.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<img
								src="/images/partner/partner4.png"
								alt="image"
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default PartnerStyleTwo;
