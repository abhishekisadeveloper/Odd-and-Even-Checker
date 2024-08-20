function checkEvenOrOdd() {
  let output = document.querySelector("#result");
  const number = document.querySelector("#numberInput").value;
  const result = (number % 2 === 0 ) ? "Even" : "Odd";
  output.textContent = `your number ${number} is ${result}`; 
}
