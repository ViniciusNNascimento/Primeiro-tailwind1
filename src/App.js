import logo from "./logo.svg";
import "./App.css";
import { NavbarDefault } from "./components/Navbar";
import Hero from "./components/Hero";
import { CardDefault, PricingCard } from "./components/Produto";
import { FooterWithLogo } from "./components/Footer";



function App() {
  return (
    <div>
      <NavbarDefault />
      <Hero />
      <CardDefault />

      <FooterWithLogo />    
    </div>
  );
}

export default App;
