import IconIllustrationEmpty from '../../assets/icons/illustration-empty.svg?react';
function LinksEmpty() {
  return (
    <div className="mb-6 flex flex-col items-center gap-6 rounded-xl bg-purple-light px-5 py-12 text-center">
      <IconIllustrationEmpty className="h-20 w-32 md:h-40 md:w-[15.6rem]" />
      <h4 className="text-md font-bold text-grey-dark md:mt-4 md:text-heading">
        Let&apos;s get you started
      </h4>
      <p className="max-w-lg">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We&apos;re here to help you
        share your profiles with everyone!
      </p>
    </div>
  );
}

export default LinksEmpty;
