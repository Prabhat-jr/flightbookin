import React from "react";
import "./featuredProperties.css";
import { gustDataApi } from "../featured/featuredData";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      {gustDataApi.map((data) => (
        <div className="fpItem">
          <img src={data.url} alt="" className="fpImg" />
          <span className="fpName">{data.platformlocation}</span>
          <span className="fpCity">{data.place}</span>
          <span className="fpPrice">{data.price}</span>
          <div className="fpRating">
            <button>{data.rating}</button>
            <span>{data.review}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
