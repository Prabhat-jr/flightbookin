import React from "react";
import { useParams } from "react-router-dom";

const SingleMoives = () =>
{
  const { id } = useParams();
  return(
  <>
  <div>Our Single Moive {id}</div>
  </>
  )
}
export default SingleMoives;