import PreviewItem from './PreviewItem';

function Preview({ links, firstName, lastName, email, imageUrl }) {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <div className="mb-6 h-24 w-24 rounded-full bg-grey-medium">
          {imageUrl && (
            <img
              className="h-full w-full rounded-full object-cover"
              src={imageUrl}
              alt="avatar"
            />
          )}
        </div>
        {firstName ? (
          <span className="mb-2 text-lg font-semibold text-grey-dark">
            {firstName} {lastName}
          </span>
        ) : (
          <span className="mb-3 inline-block h-4 w-40 rounded-full bg-grey-medium"></span>
        )}
        {email ? (
          <span className="text-sm">{email}</span>
        ) : (
          <span className="inline-block h-2 w-20 rounded-full bg-grey-medium"></span>
        )}
      </div>
      <div className="no-scrollbar flex h-[300px] flex-col gap-5 overflow-y-scroll">
        {!links.length ? (
          <>
            <div className="h-[44px] rounded-lg bg-grey-medium"></div>
            <div className="h-[44px] rounded-lg bg-grey-medium"></div>
            <div className="h-[44px] rounded-lg bg-grey-medium"></div>
            <div className="h-[44px] rounded-lg bg-grey-medium"></div>
            <div className="h-[44px] rounded-lg bg-grey-medium"></div>
          </>
        ) : (
          links.map((link) => <PreviewItem link={link} key={link.id} />)
        )}
      </div>
    </div>
  );
}

export default Preview;
