const Result = () => {
  return (
    <div className="bg-gradient-to-b from-[--light-slate-blue] to-[--light-royal-blue] rounded-bl-[32px] rounded-br-[32px] sm:rounded-[32px] text-center py-10 flex flex-col items-center">
      <h2 className="text-2xl font-medium text-[--light-lavendar] -ml-[6px]">
        Your Result
      </h2>
      <div className="w-[200px] h-[200px] bg-gradient-to-b from-[--violet-blue] to-[--persian-blue] rounded-full mt-[30px] mb-[23px]">
        <h1 className="text-[72px] leading-[72px] font-extrabold text-white mt-14">
          76
        </h1>
        <h3 className="text-[--light-lavendar] opacity-50 mt-1">of 100</h3>
      </div>
      <h2 className="text-[32px] text-white font-bold mt-1 -ml-1">Great</h2>
      <p className="text-[--light-lavendar] pt-3 px-14 pb-3 leading-tight">
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </div>
  );
};

export default Result;
