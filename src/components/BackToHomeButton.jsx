import { Link } from 'react-router-dom';

export default function BackToHomeButton() {
  return (
    <Link className="self-end" to="/">
      <button className="block bg-teal-300 p-2 rounded-md border border-1 border-black mt-4 ml-auto hover:bg-teal-400">
        Return &#x1F3E0;
      </button>
    </Link>
  );
}
