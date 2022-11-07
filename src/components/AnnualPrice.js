export default function AnnualPrice() {
  return (
    <section className="border border-very-pale-blue mx-5 rounded-lg flex flex-row justify-center space-x-8 py-5 my-5 bg-very-pale-blue px-2">
      <div className="my-auto rounded-full bg-pale-blue w-8 h-8">
        <img src=".\images\icon-music.svg" alt="music icon" />
      </div>
      <div className="flex flex-col ">
        <p className="font-bold text-xs -ml-5">Annual Plan</p>
        <p className="text-xs text-desaturated-blue -ml-5">$59.99/year</p>
      </div>
      <div className="my-auto text-xs text-bright-blue hover:cursor-pointer hover:text-opacity-75 underline hover:no-underline font-semibold">change</div>
    </section>
  );
}
