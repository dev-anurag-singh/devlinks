import { useRouteError } from 'react-router-dom';
import Button from './Button';

function ErrorFallBack() {
  let error = useRouteError();

  return (
    <div role="alert" className="grid h-[100dvh] place-items-center">
      <div className="max-w-[21rem] space-y-6 text-center">
        <p className="text-muted-foreground text-lg capitalize">
          {error.message}
        </p>
        <Button onClick={() => location.reload()}> Try again</Button>
      </div>
    </div>
  );
}

export default ErrorFallBack;
