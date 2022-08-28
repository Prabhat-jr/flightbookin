import React, { useEffect } from "react";

const Statewise = ()=> {
   const getCovidData = async() =>{
   const res = await fetch("https://api.covid19india.org/data.json");
   const actualData = await res.json();
   console.log(actualData);
    }
    useEffect(() =>{
        getCovidData();
    },[])
  return(
      <>
      <h1>INDIA COVID-19 Dashboard</h1>
      <div className ="container-fluid mt -5">
          <div className ="main-heading">
          <h1 classname ="mb-5"><span className ="font-weight">INDIA</span>COVID-19 Dashboard</h1>
          </div>
          <div className="table-responsive">
            <table className="table  table-hover">
              <thead className ="thead-dark">
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>recovered</th>
                    <th>deaths</th>
                    <th>active</th>
                    <th>updates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <th>State</th>
                    <th>Confirmed</th>
                    <th>recovered</th>
                    <th>deaths</th>
                    <th>active</th>
                    <th>updates</th>
                </tr>
                <tr>
                <th>State</th>
                    <th>Confirmed</th>
                    <th>recovered</th>
                    <th>deaths</th>
                    <th>active</th>
                    <th>updates</th>
                </tr>
                <tr>
                <th>State</th>
                    <th>Confirmed</th>
                    <th>recovered</th>
                    <th>deaths</th>
                    <th>active</th>
                    <th>updates</th>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      </>
  )
}
export default Statewise;