// import React, { useState, useRef, useEffect } from "react";
import useInput from "./hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  //const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  //const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [formIsValid,setFormIsValid] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const nameInputRef = useRef();

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Name input is Valid");
  //   }
  // }, [enteredNameIsValid]);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  // useEffect(()=>{
  //   if(enteredNameIsValid){
  //     setFormIsValid(true)
  //   }else{
  //     setFormIsValid(false)
  //   }

  // }, [enteredNameIsValid])

  //either useState use or below code

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  //   // if(enteredName.trim()  !== ''){
  //   //   setEnteredNameIsValid(true)
  //   // }
  // };

  // const enteredEmailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  //   // if (enteredName.trim() === "") {
  //   //   setEnteredNameIsValid(false);

  //   // }
  // };

  // const emailInputBlurHandler = () => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    // if (enteredName.trim() === "") {
    //   return setEnteredNameIsValid(false);
    // }

    if (!enteredNameIsValid && enteredEmailIsValid) {
      return;
    }
    // setEnteredNameIsValid(true);

    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // setEnteredName("");
    // setEnteredNameTouched(false);

    resetNameInput();
    resetEmailInput();

    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className={"error-text"}>Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={"error-text"}>Please enter a vaild email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
