import React,{useState} from "react"
import questions from "./data";
import {Link} from "react-router-dom";
import {Button} from "./Input";
import {uname} from "./Form";
function QnA(){

  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [score , setScore]= useState(0);
  const [showScore , setShowScore] = useState(false);
  const [message , setMessage] = useState("");
  function handleClick(isCorrect){
    if(isCorrect===true){
      setScore(score +1);
    }
    if(score===questions.length-1){
      setMessage("You Beauty! 👏👏");
    }else if(score===questions.length-2){
       setMessage("Great! You are almost there 😮");
    }else if(score===0){
      setMessage("Seems like you need to improve a bit🤭");
    }else if( score> Math.floor(questions.length/2) && score<=questions.length-2) {
        setMessage("You did well 😊👍");
    }else if(score < Math.floor(questions.length/2)){
      setMessage("Come on, you can do better than this! 🙄");
    }
    const nextQuestion =currentQuestion +1;
    if(nextQuestion <questions.length){
    setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true)
    }
  }

  function handleReset(){
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }


  return (
    <div className="container">
      <div className="QnA-box">
        {showScore? (
            <div className="score">
            <p>{message}</p>
            <h1>Hello {`${uname}!`} Your Score is {score} / {questions.length}</h1>
            <Link to="/QnA"> <Button class="button" click={handleReset} buttonText="Reset"/> </Link>
            <Link to="/quiz-app"> <Button class="button" click={handleReset} buttonText="Home"/> </Link>
            </div>):
          (<div className="quiz">
            <p>Question {currentQuestion+1}/{questions.length}</p>
          <div className="question-section"> {questions[currentQuestion].questionText}</div>
          <div className="answer-section">{questions[currentQuestion].answerOption.map((answerOption,index) => (
                <Button key={index} class="option" click={()=> handleClick(answerOption.isCorrect)} buttonText={answerOption.answerText}/>
                ))}
          </div>
        </div>
        )}

      </div>
    </div>
  );
}

export default QnA;
