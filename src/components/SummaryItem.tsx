type ItemProps = {
  item: {
    category: string;
    score: number;
    icon: string;
    color: string;
  };
};
const SummaryItem = (props: ItemProps) => {
  const { category, score, icon, color } = props.item;
  const colorVals = {
    red: `bg-light-red text-light-red`,
    yellow: `bg-orangy-yellow text-orangy-yellow`,
    green: `bg-green-teal text-green-teal`,
    blue: `bg-cobalt-blue text-cobalt-blue`,
  };

  return (
    <div
      className={` rounded-xl  ${colorVals[color]} relative before:block before:absolute before:-inset-0 before:bg-white/[0.95] z-0 `}
    >
      <div className=" h-14 flex items-center px-4 gap-3 text-lg z-10 relative">
        <img src={`./images/${icon}`} alt={icon} />
        <p className={`font-medium `}>{category}</p>
        <div className="ml-auto font-bold text-[--dark-grey-blue]">
          <span className="mr-1">{score}</span>{" "}
          <span className="opacity-50">/ 100 </span>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
