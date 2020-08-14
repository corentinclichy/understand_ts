function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let anotherVariable: number;
anotherVariable = 5;

let number1 = 5;
const number2 = 3.5;

const printResult = true;
let resultPhrase = "Result is: ";
// resultPhrase = 0 -> return an error because understand that resultPhrase is a String and now a number

const result = add(number1, number2, printResult, resultPhrase);

console.log(result);
