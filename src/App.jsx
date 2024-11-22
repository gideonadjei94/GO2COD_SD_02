import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [value, setValue] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (val) => {
    if (operator) {
      setNum2(num2 + val);
    } else {
      setNum1(num1 + val);
    }

    setValue(value + val);
  };

  const handleOperator = (op) => {
    if (value) {
      setNum1(value);
      setOperator(op);
      setValue("");
    }
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };
  console.log(value);
  console.log(result);

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Error: Please enter valid numbers.");
      return;
    }

    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "%":
        setResult(number1 / 100);
        break;
      case "/":
        if (number2 === 0) {
          setResult("Math error");
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setResult("Math error");
    }
  };

  const clearInputs = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
    setValue("");
  };
  return (
    <div className="h-screen flex items-center justify-center bg-blue-50/10">
      <div className="p-8 shadow bg-white/80 rounded-md">
        {/* Screen */}
        <div className="w-[340px] h-36 shadow mb-3 rounded flex items-end justify-end">
          {result !== "" ? (
            <div className="text-7xl">{result}</div>
          ) : operator ? (
            <div className="text-7xl">{value}</div>
          ) : (
            <div className="text-7xl">{num1}</div>
          )}
        </div>

        {/* Buttons Row 1 */}
        <div className="flex justify-evenly gap-2 mb-2">
          <button
            type="button"
            onClick={clearInputs}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold bg-orange-300"
          >
            {" "}
            AC
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold bg-red-300"
          >
            {" "}
            DEL
          </button>

          <button
            type="button"
            onClick={() => handleOperator("%")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            %
          </button>

          <button
            type="button"
            onClick={() => handleOperator("/")}
            className="size-20  flex items-center justify-center rounded-lg shadow bg-blue-100 font-semibold"
          >
            {" "}
            /
          </button>
        </div>

        {/* Buttons Row 2 */}
        <div className="flex justify-evenly gap-2 mb-2">
          <button
            type="button"
            onClick={() => handleInput("7")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            7
          </button>

          <button
            type="button"
            onClick={() => handleInput("8")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            8
          </button>

          <button
            type="button"
            onClick={() => handleInput("9")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            9
          </button>

          <button
            type="button"
            onClick={() => handleOperator("*")}
            className="size-20  flex items-center justify-center rounded-lg shadow bg-blue-100 font-semibold"
          >
            {" "}
            x
          </button>
        </div>

        {/* Buttons Row 3 */}
        <div className="flex justify-evenly gap-2 mb-2">
          <button
            type="button"
            onClick={() => handleInput("4")}
            className="size-20 shadow flex items-center justify-center rounded-lg font-semibold"
          >
            {" "}
            4
          </button>

          <button
            type="button"
            onClick={() => handleInput("5")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            5
          </button>

          <button
            type="button"
            onClick={() => handleInput("6")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            6
          </button>

          <button
            type="button"
            onClick={() => handleOperator("-")}
            className="size-20  flex items-center justify-center rounded-lg shadow bg-blue-100 font-bold"
          >
            {" "}
            -
          </button>
        </div>

        {/* Buttons Row 4 */}
        <div className="flex justify-evenly gap-2 mb-2">
          <button
            type="button"
            onClick={() => handleInput("1")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            1
          </button>

          <button
            type="button"
            onClick={() => handleInput("2")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            2
          </button>

          <button
            type="button"
            onClick={() => handleInput("3")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            3
          </button>

          <button
            type="button"
            onClick={() => handleOperator("+")}
            className="size-20 flex items-center justify-center rounded-lg shadow bg-blue-100 font-bold"
          >
            {" "}
            +
          </button>
        </div>

        {/* Buttons Row 5 */}
        <div className="flex justify-evenly gap-2">
          <button
            type="button"
            onClick={() => handleInput("0")}
            className="h-20 w-[164px]  flex items-center justify-center rounded-lg shadow font-semibold bg-orange-300"
          >
            {" "}
            0
          </button>

          <button
            type="button"
            onClick={() => handleInput(".")}
            className="size-20  flex items-center justify-center rounded-lg shadow font-semibold"
          >
            {" "}
            .
          </button>

          <button
            type="button"
            onClick={calculate}
            className="size-20 flex items-center justify-center rounded-lg shadow bg-blue-100 font-bold"
          >
            {" "}
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
