import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="feedback-area bg-fffaf3 ptb-100">
        <div className="container">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            className="feedback-slides-two"
          >
            <SwiperSlide>
              <div className="single-feedback-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed tempor incididunt ut labore
                  et dolore.
                </p>
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/user1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>John Smith</h3>
                    <span>Python Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed tempor incididunt ut labore
                  et dolore.
                </p>
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/user2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>Sarah Taylor</h3>
                    <span>PHP Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed tempor incididunt ut labore
                  et dolore.
                </p>
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/user1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>David Warner</h3>
                    <span>QA Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="divider2"></div>
        <div className="divider3"></div>
        <div className="shape2">
          <img src="/images/shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/shape4.png" alt="image" />
        </div>
        <div className="shape9">
          <img src="/images/shape8.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
