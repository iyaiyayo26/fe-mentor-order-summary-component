import "./App.css";

function App() {
  return (
    <>
      <div className="container w-80 mx-auto bg-white rounded-xl overflow-hidden">
        {/* bagian gambar */}
        <div className="bg-cover">
          <img src=".\images\illustration-hero.svg" alt="hero image" />
        </div>
        {/* bagian bawah */}
        <div className="text-center font-red-hat-display py-8 px-4">
          <h2 className="font-bold text-lg">Order Summary</h2>
          <p className="text-base text-desaturated-blue my-5 mx-3">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          {/* section bagian annual price */}
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
          <div className=" mx-5 rounded-lg py-3 mt-5 mb-8 bg-bright-blue shadow-xl shadow-indigo-300 hover:cursor-pointer hover:bg-opacity-75">
            <button className="text-white font-semibold">Proceed to Payment</button>
          </div>
          <p className="text-desaturated-blue font-semibold hover:cursor-pointer hover:text-black">Cancel Order</p>
        </div>
      </div>
    </>
  );
}

export default App;
