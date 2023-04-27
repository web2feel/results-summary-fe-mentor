import data from "../data.json";
import SummaryItem from "./SummaryItem";
const Summary = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Summary</h2>
      <div className="flex flex-col gap-4 my-6">
        {data.map((item) => (
          <SummaryItem key={item.category} item={item} />
        ))}
      </div>
      <div className="h-14 flex items-center justify-center bg-[--dark-grey-blue] rounded-full mt-10 hover:bg-gradient-to-b hover:from-[--light-slate-blue] hover:to-[--light-royal-blue] cursor-pointer transition-colors duration-200">
        <span className="text-white"> Continue</span>
      </div>

    </div>
  );
};

export default Summary;
