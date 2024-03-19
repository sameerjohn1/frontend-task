import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Excellent from "./components/Excellent";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Featured/>
      <Excellent/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
