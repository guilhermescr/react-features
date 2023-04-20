export default function CounterContainer({ children, classStyles }) {
  return (
    <div className={`gap-4 ${classStyles ? classStyles : ''}`.trim()}>
      {children}
    </div>
  );
}
