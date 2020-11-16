import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import SinglePageNote from "./pages/SingleNotePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
      {/* <SinglePageNote> */}
      <Footer />
    </>
  );
}

export default App;
