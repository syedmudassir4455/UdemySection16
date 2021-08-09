import React, { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
 if(action.type === 'INPUT'){
    return {value: action.value, isTouched :state.isTouched}
 }

 if(action.type === 'BLUR'){
  return {value:action.value, isTouched : true, value :state.value}
 }

 if(action.type === 'RESET'){
  return {isTouched :false, value : ''}
 }

  return inputStateReducer;
};
const useInput = (validateValue) => {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const valueIsValid = validateValue(enteredValue);
  // const hasError = !valueIsValid && isTouched;

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  // const valueChangeHandler = (event) => {
  //   setEnteredValue(event.target.value);
  // };

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  // const inputBlurHandler = (event) => {
  //   setIsTouched(true);
  // };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR", value: event.target.value });
  };

  // const reset = () => {
  //   setEnteredValue("");
  //   setIsTouched(false);
  // };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  // return {
  //   value: enteredValue,
  //   isValid: valueIsValid,
  //   hasError,
  //   valueChangeHandler,
  //   inputBlurHandler,
  //   reset,
  // };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
