import React from "react";
import "./hotel.css";
import Navbar from "../../Components/navbar/Navbar";
import Header from "../../Components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: " https://cf.bstatic.com/xdata/images/hotel/square200/132797704.webp?k=17bcd6d119c53adfff930f809965ccdeda9d6069a7f56dc59f724622d189db82&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/20575757.webp?k=7cbe9880e54289f3fb63afb62419b7225ac803729786458ec02b653c7eed2544&o=&s=1 ",
    },
    {
      src: " https://cf.bstatic.com/xdata/images/hotel/square200/359554412.webp?k=a3d9a6d2c7739a73a595d18766225ca026e50ba081f804dfdfe42140f37b0b1a&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/320773337.webp?k=d92ed33ec5de350c399e259dbd2cfcb3fd5de8c744f27e7047ccc4a9ff59b4db&o=&s=1 ",
    },
    {
      src: " https://cf.bstatic.com/xdata/images/hotel/square200/319428538.webp?k=4ebd2fd1bc5142994f45184e920ec024a23b26bc970ac414d66275c36dcb2806&o=&s=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Delhi St 125 India</span>
          </div>
          <span className="hotelDistance">
            Excellent location + 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $115 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Located right on Montaza Beach, this 5 star combines an
                impressive range of features and facilities. It features a
                private beach, 2 pools, a kids' pool and club. Jaz Belvedere is
                6 KM away from SOHO Square and 13 KM away from the International
                Congress Center. Styled with touches of traditional
                Arabian-Moroccan design, the hotel is one of the finest in Sharm
                El Sheikh. At Belvedere, you can enjoy something very special:
                warm, individual service, entertainment programs, and diving.
                Activities can be enjoyed at the resort that includes beach
                tennis, volleyball court and a multi-purpose court. Guests can
                enjoy water sport facilities, windsurfing, diving, snorkeling,
                and canoeing with an added charge.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                Excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reverse or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
