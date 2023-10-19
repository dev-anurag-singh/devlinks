import PreviewItem from './PreviewItem';

function Preview({ links }) {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-center">
        <div className="bg-grey-medium mb-6 h-24 w-24 rounded-full"></div>
        <span className="bg-grey-medium mb-3 inline-block h-4 w-40 rounded-full"></span>
        <span className="bg-grey-medium inline-block h-2 w-20 rounded-full"></span>
      </div>
      <div className="no-scrollbar flex h-[300px] flex-col gap-5 overflow-y-scroll">
        {!links.length ? (
          <>
            <div className="bg-grey-medium h-[44px] rounded-lg"></div>
            <div className="bg-grey-medium h-[44px] rounded-lg"></div>
            <div className="bg-grey-medium h-[44px] rounded-lg"></div>
            <div className="bg-grey-medium h-[44px] rounded-lg"></div>
            <div className="bg-grey-medium h-[44px] rounded-lg"></div>
          </>
        ) : (
          links.map((link) => <PreviewItem link={link} key={link.id} />)
        )}
      </div>
    </div>
  );
}

export default Preview;
