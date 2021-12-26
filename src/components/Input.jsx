import React from "react";

function Input(props){
return(
      <input  onChange={props.onChange} type={props.type} placeholder={props.placeholder} value={props.value}/>
);
}

function Button(props){
  return(
    <button className={props.class}  onClick={props.click} type={props.type}><span className="text">{props.buttonText}</span></button>
  );
}

export {Input , Button};
