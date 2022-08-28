import React from "react";
const SlotM= (props) =>{
    let x =props.x;
    let y =props.y;
    let z =props.z;
  
  if((props.x=== props.y) && (props.y===props.z))
    {
      return(
      <>
      <div className ="slot_inner">
        <h1>
         {x} {y} {z}
        </h1>
        <h3>this is matching.</h3>
        <hr/>
      </div>
      </>     
      );
    }
    else{
      return(
        <>
        <div className ="slot_inner">
          <h1>
           {x} {y} {z}
          </h1>
          <h3>this is not matching.</h3>
          <hr/>
        </div>
        </>     
        );
    }
  }
  export default  SlotM; 