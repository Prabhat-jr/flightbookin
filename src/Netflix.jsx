import React from "react";
import Sdata  from "./Sdata";
import Card from "./Cards";

const Netflix = () =>
{
  return(
    <>
    {Sdata.map((data)=>(

      <Card
      key ={data.id}
      imgsrc ={data.imgsrc}
      title={data.title}
      sname={data?.sname?data.sname :"ji"}
      link={data.links}
      />
      ))}
      </>
  );
}
export default Netflix;