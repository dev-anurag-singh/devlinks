import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-heading">
        The page you are looking for could not be found 🏴‍☠️
      </h1>
      <Link to="/" className="text-lg text-purple underline">
        Homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
