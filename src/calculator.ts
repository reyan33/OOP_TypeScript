export {};

function calculateResult(a: number, b: number, sign: string) {
  let result;
  switch (sign) {
    case "":
      result = "Choose an operation";
      break;
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (a !== 0 && b == 0) {
        result = "Can't divide by 0";
      } else {
        result = a / b;
        break;
      }
  }
  return result;
}

const number1Input: HTMLInputElement = document.getElementById(
  "number1",
) as HTMLInputElement;

const number2Input: HTMLInputElement = document.getElementById(
  "number2",
) as HTMLInputElement;

const operationSelect: HTMLSelectElement = document.getElementById(
  "operation",
) as HTMLSelectElement;

const calculateButton: HTMLButtonElement = document.getElementById(
  "calculate",
) as HTMLButtonElement;

const resultElement: HTMLElement = document.getElementById(
  "result",
) as HTMLElement;

calculateButton.addEventListener("click", function (): void {
  const firstNumber: number = Number(number1Input.value);
  const secondNumber: number = Number(number2Input.value);
  const operation: string = operationSelect.value;

  const answer = calculateResult(firstNumber, secondNumber, operation) as
    | number
    | string;
  resultElement.innerHTML = "Result: " + answer.toString();
});
