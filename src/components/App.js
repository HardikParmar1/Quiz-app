import React from "react";
import Form from "./Form";
import QnA from "./QnA";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App(){
  return (<Router>
        <Routes>
          <Route exact path="/quiz-app" element={<Form />} ></Route>
          <Route exact path="/QnA" element={<QnA />} ></Route>
        </Routes>

    </Router>);

}


export default App;
