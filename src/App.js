import logo from "./logo.svg";
import "./App.css";
import { NavbarDefault } from "./components/Navbar";
import Hero from "./components/Hero";
import { PricingCard } from "./components/Produto";

function App() {
  return (
    <div>
      <NavbarDefault />
      <Hero />
      <PricingCard />

    </div>
  );
}

export default App;
