import LinksForm from '../features/links/LinksForm';

function Home() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2 p-6 pb-0 md:p-10 md:pb-0">
        <h2 className="text-md font-bold text-grey-dark md:text-heading">
          Customize your links
        </h2>
        <p className="">
          Add/edit & remove links below and then share all your profiles with
          the world!
        </p>
      </div>
      <LinksForm />
    </div>
  );
}

export default Home;
