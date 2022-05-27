import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>About us Page!</h1>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default AboutUs;
