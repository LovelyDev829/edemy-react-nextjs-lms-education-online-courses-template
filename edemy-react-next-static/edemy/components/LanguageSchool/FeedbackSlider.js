import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="feedback-with-bg-image ptb-100 jarallax">
        <div className="container">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
            modules={[Pagination, Autoplay]}
            className="feedback-slides feedback-slides-style-two"
          >
            <SwiperSlide>
              <div className="single-feedback-item-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore.
                </p>

                <div className="client-info d-flex align-items-center">
                  <img src="/images/user1.jpg" alt="image" />
                  <div className="title">
                    <h3>John Smith</h3>
                    <span>Python Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore.
                </p>

                <div className="client-info d-flex align-items-center">
                  <img src="/images/user2.jpg" alt="image" />
                  <div className="title">
                    <h3>David Warner</h3>
                    <span>Java Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore.
                </p>

                <div className="client-info d-flex align-items-center">
                  <img src="/images/user3.jpg" alt="image" />
                  <div className="title">
                    <h3>Sarah Taylor</h3>
                    <span>PHP Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
