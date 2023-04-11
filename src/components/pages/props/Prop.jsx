export default function Prop({ num1, num2 }) {
  return (
    <>
      <h3>Calculation with numbers that came from props</h3>
      <p>Num 1: {num1}</p>
      <p>Num 2: {num2}</p>

      <h4>Results</h4>
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
    </>
  );
}
