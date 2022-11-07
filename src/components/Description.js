import AnnualPrice from "./AnnualPrice";

export default function Description() {
  return (
    <div className="text-center font-red-hat-display py-8 px-4">
      <h2 className="font-bold text-lg">Order Summary</h2>
      <p className="text-base text-desaturated-blue my-5 mx-3">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
      {/* section bagian annual price */}
      <AnnualPrice />
      <div className=" mx-5 rounded-lg py-3 mt-5 mb-8 bg-bright-blue shadow-xl shadow-indigo-300 hover:cursor-pointer hover:bg-opacity-75">
        <button className="text-white font-semibold">Proceed to Payment</button>
      </div>
      <p className="text-desaturated-blue font-semibold hover:cursor-pointer hover:text-black">Cancel Order</p>
    </div>
  );
}
