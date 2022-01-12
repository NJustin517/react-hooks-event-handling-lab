function EyesOnMe() {
  function handleEyesOn() {
    console.log("Good!");
  }

  function handleEyesOff() {
    console.log("Hey! Eyes on me!");
  }
  return (
    <button onFocus={handleEyesOn} onBlur={handleEyesOff}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
