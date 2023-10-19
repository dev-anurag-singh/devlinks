import { useLinkForm } from '../features/links/useLinkForm';
import Preview from './Preview';

function Mockup() {
  const { fields } = useLinkForm();

  return (
    <div className="hidden items-center justify-center rounded-xl bg-white p-10 xl:flex">
      <div className="h-[632px] w-[308px] bg-[url('/mobile-mockup.svg')] px-9 py-14 pt-16">
        <Preview links={fields} />
      </div>
    </div>
  );
}

export default Mockup;
