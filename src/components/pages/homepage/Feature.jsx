import { Link } from "react-router-dom";

export default function Feature({ routeTo, routeTxt }) {
  return (
    <Link to={routeTo}>
      <button className="bg-white px-5 py-2 rounded-md hover:bg-gray-200 active:opacity-90">{routeTxt}</button>
    </Link>
  );
}
