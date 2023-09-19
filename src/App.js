import logo from "./logo.svg";
import "./App.css";
import { NavbarDefault } from "./components/Navbar";
import Hero from "./components/Hero";
import { PricingCard } from "./components/Produto";
import { FooterWithLogo } from "./components/Footer";

function App() {
  return (
    <div>
      <NavbarDefault />
      <Hero />
      <PricingCard />
      <FooterWithLogo />
    </div>
  );
}


export default App;
