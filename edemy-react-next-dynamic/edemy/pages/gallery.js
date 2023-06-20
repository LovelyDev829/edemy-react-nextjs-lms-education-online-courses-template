import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";
import SubscribeForm from "../components/Common/SubscribeForm";
import Lightbox from "react-18-image-lightbox";

const images = [
  "images/courses/courses1.jpg",
  "images/courses/courses2.jpg",
  "images/courses/courses3.jpg",
  "images/courses/courses4.jpg",
  "images/courses/courses5.jpg",
  "images/courses/courses6.jpg",
  "images/courses/courses7.jpg",
  "images/courses/courses8.jpg",
  "images/courses/courses9.jpg",
];

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <>
        <PageBanner
          pageTitle="Gallery"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Gallery"
        />

        <div className="gallery-area pt-100 pb-70">
          {/* Lightbox */}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 0 })
                    }
                  >
                    <img src="/images/courses/courses1.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 1 })
                    }
                  >
                    <img src="/images/courses/courses2.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 2 })
                    }
                  >
                    <img src="/images/courses/courses3.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 3 })
                    }
                  >
                    <img src="/images/courses/courses4.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 4 })
                    }
                  >
                    <img src="/images/courses/courses5.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 5 })
                    }
                  >
                    <img src="/images/courses/courses6.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 6 })
                    }
                  >
                    <img src="/images/courses/courses7.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 7 })
                    }
                  >
                    <img src="/images/courses/courses8.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                  <div
                    className="popup-btn"
                    onClick={() =>
                      this.setState({ isOpen: true, photoIndex: 8 })
                    }
                  >
                    <img src="/images/courses/courses9.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SubscribeForm />
      </>
    );
  }
}
