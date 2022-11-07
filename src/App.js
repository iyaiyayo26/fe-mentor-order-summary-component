import "./App.css";
import Description from "./components/Description";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="container w-80 mx-auto bg-white rounded-xl overflow-hidden">
        {/* bagian gambar */}
        <Hero />
        {/* bagian bawah */}
        <Description />
      </div>
    </>
  );
}

export default App;
