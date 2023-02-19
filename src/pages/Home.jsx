import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      Welcome
      <Link to="/about">go about</Link>
    </>
  );
}
