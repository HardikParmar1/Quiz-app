import React,{useState} from "react";
import {Link} from "react-router-dom";
import {Input,Button} from "./Input";

let uname;
function Form(){

    const [userName , setUserName] = useState("");
    function handleChange(event){
      const name=event.target.value;
      setUserName(name);
    }
    function handleClick(){
      uname=userName.charAt(0).toUpperCase() + userName.slice(1);
      if(userName==="") {
        let label=document.querySelector(".label");
        label.style.color="#F60000";
        label.style.animation="shake 0.8s";
      }
    }

    return (
      <div className="container">
        <div className="box">
          <form>
          <p>Welcome to the Quiz!</p>
          <label className='label'>Please Enter your name</label>
          <Input
            key="1"
            type="text"
            onChange= {handleChange}
            placeholder="Your Name"
            value={userName}
           />
          <Link to={userName?"/QnA":"/quiz-app"}>
          <Button
            class="button"
            click={handleClick}
            type="submit"
            buttonText="Start"
          />
          </Link>
          </form>
        </div>
      </div>
    );

}


export default  Form;
export {uname};
