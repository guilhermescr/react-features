import { Link } from "react-router-dom";

export default function Feature({ routeTo, routeTxt }) {
  return (
    <Link to={routeTo}>
      <button className="feature">{routeTxt}</button>
    </Link>
  );
}
