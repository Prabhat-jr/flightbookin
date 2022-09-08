import React from "react";
import "./searchItem.css";
import {Link} from "react-router-dom"
const SearchItem = () => {
  return (
    <div className="searchItem">
      <Link to={"/hotels/1"}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/11648619.webp?k=1c93539e116f80c70a3b98f39579ef5cb192ce4e2e4f4bb71834f0f9625bc502&o=&s=1"
        alt=""
        className="siImg"
      />
      </Link>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio . 1 bathroom . 21m2 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          you can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailstexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
      <Link to={"/hotels/1"}>

          <button className="siCheckButton">See availability</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
