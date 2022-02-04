function Keypad() {
  function handlePassword() {
    console.log("Entering password...");
  }

  return <input type="password" onChange={handlePassword} />;
}

export default Keypad;
