import logo from "./logo.svg";
import "./App.css";
import { NavbarDefault } from "./components/Navbar";
import { CarouselDefault, CarouselTransition } from "./components/Hero";


function App() {
  return (
    <div>
      <NavbarDefault/>
      <CarouselDefault/>

    </div>
  );
}

export default App;
