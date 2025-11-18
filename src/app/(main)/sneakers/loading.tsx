export default function Loading() {
  return (
    <div className="flex-1 lg:flex lg:justify-center lg:items-center">
      <main className="lg:grid lg:gap-x-[7.5rem] lg:grid-cols-2 lg:w-3/4 lg:items-center">
        <div>
          <div className="h-[15rem] w-full lg:h-[25rem] lg:rounded-3xl animate-pulse ease-linear bg-[#f7f8fdff]" />
          <picture className="hidden lg:flex justify-between mt-6">
            {[0, 1, 2, 3].map((x) => {
              return <div key={x} className="w-21.5 h-21.5 box-border rounded-xl animate-pulse ease-linear bg-[#f7f8fdff]" />;
            })}
          </picture>
        </div>
        <div className="px-4 pt-6 pb-2 flex flex-col gap-y-3 lg:pt-0 lg:pb-0 lg:gap-y-7">
          <p className="w-20 h-3 lg:h-4 animate-pulse ease-linear bg-[#f7f8fdff]" />
          <h1 className="w-56 h-8 lg:h-10 -mt-2 lg:-mt-4 animate-pulse ease-linear bg-[#f7f8fdff]" />
          <p className="w-full h-12 lg:h-20 animate-pulse ease-linear bg-[#f7f8fdff]" />
          <div className="flex justify-between items-center lg:flex-col lg:justify-start lg:items-start lg:-mt-2 lg:gap-y-2">
            <div className="flex gap-x-4 items-center">
              <span className="h-6 w-28 lg:h-8 lg:w-36 animate-pulse ease-linear bg-[#f7f8fdff]" />
              <span className="w-8 h-4 lg:w-12 lg:h-7 rounded-md animate-pulse ease-linear bg-[#f7f8fdff]" />
            </div>
            <output className="w-16 h-3 lg:w-24 lg:h-4 animate-pulse ease-linear bg-[#f7f8fdff]" />
          </div>
          <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-2">
            <div className="rounded-md w-full lg:w-2/4 py-5 lg:py-6 animate-pulse ease-linear bg-[#f7f8fdff]" />
            <div className="py-5 lg:py-6 rounded-md w-full animate-pulse ease-linear bg-[#f7f8fdff]" />
          </div>
        </div>
      </main>
    </div>
  );
}
