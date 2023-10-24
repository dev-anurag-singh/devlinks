import Button from '../../ui/Button';
import LinksForm from './LinksForm';
import { useLink } from './LinksContext';

function Links() {
  const { disabled } = useLink();

  return (
    <>
      <div className="p-6 pb-0 md:p-10 md:pb-0">
        <div className="flex flex-col gap-2 ">
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
      <div className="flex flex-col border-t border-grey-border p-5 md:items-end">
        <Button type="submit" form="links-form" disabled={disabled}>
          Save
        </Button>
      </div>
    </>
  );
}

export default Links;
