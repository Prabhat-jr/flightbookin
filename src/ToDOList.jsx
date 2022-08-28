import React from "react";

const ToDoLists =(props)=>
{
    <>
    <div className ="todo_style">
        {/* <i class ="fa fa-times" aria-hidden="true"/> */}
        
        <li>{props.text}</li>
  </div>
  </>
}
export default ToDoLists;