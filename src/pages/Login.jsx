import LoginForm from '../features/auth/LoginForm';
import LogoFull from '../ui/LogoFull';

function Login() {
  return (
    <div className="md:flex md:min-h-screen md:items-center md:justify-center md:bg-grey-light">
      <main className="flex flex-col gap-16 p-8 md:items-center ">
        <LogoFull />
        <div className="md:w-[30rem] md:bg-white md:p-8">
          <div className="mb-10">
            <h4 className="text-md mb-2 font-bold text-grey-dark md:text-heading">Login</h4>
            <p>Add your details below to get back into the app</p>
          </div>
          <LoginForm />
          <div className="mt-6 justify-center gap-1 text-center md:flex">
            <p>Don&apos;t have an account?</p>
            <a href="/" className="text-purple">
              Create account
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
