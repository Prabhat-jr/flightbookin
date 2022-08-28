import React from "react";
import "./propertyList.css";
import { hotelDataApi } from "../featured/featuredData";
const PropertyList = () => {
  return (
    <div className="pList">
      {hotelDataApi.map((data) => (
        <div className="pListItem">
          <img src={data.url} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>{data.hotelName}</h1>
            <h2>{data.hotelNum}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
