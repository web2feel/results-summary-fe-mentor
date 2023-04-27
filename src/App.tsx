import Result from "./components/Result";
import Summary from "./components/Summary";
function App() {
  return (
    <>
      <div className="bg-white w-full min-h-screen grid place-items-center text-[18px]">
        <div className="bg-white sm:rounded-[32px] w-full max-w-[736px] min-h-[512px] grid sm:grid-cols-2 grid-cols-1 shadow-[0_30px_60px_rgba(61,108,236,0.15)] overflow-hidden">
          <Result />
          <Summary />
        </div>
      </div>
    </>
  );
}

export default App;
