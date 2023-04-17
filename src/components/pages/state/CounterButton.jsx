export default function CounterButton({ children, htmlfor, onclick }) {
  return (
    <button
      className="bg-white mx-4 py-3 px-5 rounded-full hover:bg-gray-100 active:bg-gray-300"
      onClick={onclick}
      id={htmlfor}
      name={htmlfor}
    >
      {children}
    </button>
  );
}
