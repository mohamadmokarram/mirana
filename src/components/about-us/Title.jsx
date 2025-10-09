export default function Title({ title }) {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-3 items-center md:justify-around px-3 my-5">
      <div className="col-span-1 h-full flex items-center justify-end lg:px-10">
        <div className="relative w-1/2 md:w-2/3 bg-slate-700 h-[1px] flex items-center">
          {/* circle */}
          <div className="w-[5px] h-[5px] absolute bg-slate-700 rounded-full right-0 "></div>
        </div>
      </div>

      {/* title */}
      <div className="col-span-2 lg:col-span-1 flex justify-center">
        <h2 className="col-span-2 self-center text-4xl font-poppins-bold text-white capitalize text-center md:w-1/2 lg:w-full md:text-[50px] lg:text-7xl">
          {title}
        </h2>
      </div>

      <div className="col-span-1 h-full flex items-center justify-start lg:px-10">
        <div className="col-span-1 w-1/2 md:w-2/3 relative bg-slate-700 h-[1px] flex items-center ">
          {/* circle */}
          <div className="w-[5px] h-[5px] absolute bg-slate-700 rounded-full left-0"></div>
        </div>
      </div>
    </div>
  );
}
