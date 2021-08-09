import useInput from "./hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: EMailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);



  let formValid = false;
  if (firstNameIsValid && lastNameIsValid && EMailIsValid) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    console.log("Submitted");
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
  ? "form-control invalid"
  : "form-control";

const lastNameClasses = lastNameHasError
  ? "form-control invalid"
  : "form-control";

const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        {firstNameHasError && (
          <p className={"error-text"}>Please enter a vaild firstName</p>
        )}
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
        {lastNameHasError && (
          <p className={"error-text"}>Please enter a vaild lastName</p>
        )}
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className={"error-text"}>Please enter a vaild email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
