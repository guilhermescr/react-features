export default function Prop({ num1, num2 }) {
  return (
    <div className="bg-gray-200 rounded-md max-w-md mx-auto p-4">
      <h3>Calculation with numbers that came from props</h3>
      <p>Num 1: {num1}</p>
      <p>Num 2: {num2}</p>

      <h4 className="font-bold text-2xl text-center">Results</h4>
      <p>
        Sum Result: <strong>{num1 + num2}</strong>
      </p>
      <p>
        Subtraction Result: <strong>{num1 - num2}</strong>
      </p>
      <p>
        Multiplication Result: <strong>{num1 * num2}</strong>
      </p>
      <p>
        Division Result: <strong>{num1 / num2}</strong>
      </p>
    </div>
  );
}
