import './App.css';
import React, {useState } from 'react'


///////////////////////
const HeaderNav = (props) => {
  const headname = "Learning React"

  return(
    <>
      <h3 id={props.idProp}>{headname}</h3>
      <hr/>
    </>
  )
}

///////////////////////
const Input = (props) =>{
  return(
    <>
      <label for={props.name}>{props.label}</label>
      <input type= "text" name="fname"/>
      <br/>
    </>
  )
}

///////////////////////
const Register = (props) => {
  return (
    <>
      <form id={props.idProp} action= "/somthing">
        <Input label="First Name" name="fname"/>
        <Input label="Last Name" name="lname"/>
        <Input label="Email Name" name="email"/>
        <input type="submit"/>
      </form>
      <hr/>
    </>
  )
}


///////////////////////

///////////////////////
const ClickAction = () => {

  const [clicked, setClicked] = useState(0);

  const onCountUpdate = () =>{
    console.log("Counting", clicked);
    setClicked(clicked + 1);
  }

  if (clicked > 10){
    setClicked(0);
    alert("Reset click to 0")
  }

  return(
    <>
      <h4>Click Menu</h4>
      <p>{clicked}</p>
      <button onClick={onCountUpdate}>Click me</button>
      <hr/>
    </>
  )
}

///////////////////////
///////////////////////
const ScoreValue = () => {
 
  const [scoreIn, setScoreIn] = useState(null);
  const [showGPA, setShowGPA] = useState(false); 
  const [gradeGPA, setGradeGPA] = useState("Enter your score");



  const handleClick = () =>{
    setShowGPA(true)
  }

  const getData = (val) =>{

    setScoreIn(val.target.value);
    setShowGPA(false);
    console.log(val.target.value);
    console.log(scoreIn);

    if((scoreIn * 10) >= 90){
      setGradeGPA("A");
    }
    else if ( 80 <= (scoreIn * 10) && (scoreIn * 10) < 90 ){
      setGradeGPA("B");
    }
    else if(70 <= (scoreIn * 10) && (scoreIn * 10) < 80 ){
      setGradeGPA("C");
    }
    else if( 60 <= (scoreIn * 10) && (scoreIn * 10) <70 ){
      setGradeGPA("D");
    }
    else if( 0 <= (scoreIn * 10) && (scoreIn * 10) <60 ){
      setGradeGPA("F");
    }
    else{
      setGradeGPA("Enter your correct score");
    }
  }

  const clearGPA = () => {
    setScoreIn(null);
  }


  return(
    <>
    <div>
       {showGPA? <h5>{scoreIn}</h5>: "Input score"} 
       <h3>Your GPA is {gradeGPA}</h3>
       <input type="text" onChange={getData}/>
       <button  onClick={handleClick}>Submit Score</button>
       <button onClick={clearGPA}>Clear</button>
    </div>
    <hr/>
    </>
  )
}

/////////////////////

function App() {

  return (
    <>
    <div className="App">
      <HeaderNav idProp="header-title"/>
      <Register idProp="register-user"/>
      <ClickAction/>
      <ScoreValue/>
    </div>
    </>
  );
}

export default App;
