import LoginForm from '../features/auth/LoginForm';

function Login() {
  return (
    <>
      <div className="mb-10">
        <h4 className="mb-2 text-md font-bold text-grey-dark md:text-heading">
          Login
        </h4>
        <p>Add your details below to get back into the app</p>
      </div>
      <LoginForm />
      <div className="mt-6 justify-center gap-1 text-center md:flex">
        <p>Don&apos;t have an account?</p>
        <a href="/" className="text-purple">
          Create account
        </a>
      </div>
    </>
  );
}

export default Login;
