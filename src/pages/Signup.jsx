import { Link } from 'react-router-dom';
import SignupForm from '../features/auth/SignupForm';

function Signup() {
  return (
    <>
      <div className="mb-10">
        <h4 className="mb-2 text-md font-bold text-grey-dark md:text-heading">
          Create Account
        </h4>
        <p>Let&apos;s get you started sharing your links!</p>
      </div>
      <SignupForm />
      <div className="mt-6 justify-center gap-1 text-center md:flex">
        <p>Already have an account?</p>
        <Link to="/auth/login" className="text-purple">
          Login
        </Link>
      </div>
    </>
  );
}

export default Signup;
