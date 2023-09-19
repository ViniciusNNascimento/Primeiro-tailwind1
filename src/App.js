import logo from "./logo.svg";
import "./App.css";
import { NavbarDefault } from "./components/Navbar";
import { CarouselDefault, CarouselTransition } from "./components/Hero";
import { PricingCard } from "./components/Produto";

function App() {
  return (
    <div>
      <NavbarDefault/>
      <CarouselDefault/>
      <PricingCard/>

    </div>
  );
}

export default App;
