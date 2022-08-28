import React from "react";
import "./featured.css";
import { featureDataApi } from "./featuredData";
const Featured = () => {
  return (
    <div className="featured">
      {featureDataApi.map((val) => (
        <div className="feauturedItem">
          <img
            src={val.url}
            //   src="https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
            alt=""
            //   className="featuredImg"
          />
          <div className="featuredTitles">
            <h1> {val.name}</h1>
            <h3>{val.properties}</h3>
          </div>
        </div>
      ))}
      {/* <div className="feauturedItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
          alt=""
          //   className="featuredImg"
        />
        <div className="featuredTitles">
          <h1> Bangalore</h1>
          <h3>2,912 properties</h3>
        </div>
      </div>
      <div className="feauturedItem">
        <img
          src="https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
          alt=""
          //   className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Goa</h1>
          <h3>5,243 properties</h3>
        </div>
      </div>
      <div className="feauturedItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          //   className="featuredImg"/
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h3>2,912 properties</h3>
        </div>
      </div>
      <div className="feauturedItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
          //   className="featuredImg"/
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h3>1,652 properties</h3>
        </div>
      </div>
      <div className="feauturedItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
          alt=""
          //   className="featuredImg"/
        />
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h3>1,558 properties</h3>
        </div>
      </div>
   */}
    </div>
  );
};

export default Featured;
