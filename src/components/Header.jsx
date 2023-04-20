export default function Header({ classObj, page }) {
  return (
    <header
      className={`bg-white py-4 w-full ${classObj ? classObj : ''}`.trim()}
    >
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#55B8FF] to-[#BD34FE] text-center text-4xl font-['Pacifico']">
        React Features - {page}
      </h1>
    </header>
  );
}
