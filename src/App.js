import logo from "./logo.svg";
import "./App.css";
import Content from "./Components/Content";
import Item from "./store/Item.js";
import Textbox from "./Components/Textbox.js";
import Postdis from "./Components/Postdis.js";
import Persona from "./Components/Persona.js";
import Home from "./Components/Home.js";
import Service from "./Components/Service.js";
import Work from "./Components/Work.js";
import Door from "./Components/Door.js";
import Finds from "./Components/Finds.js";
import Start from "./Components/Start.js";

function App() {
  return (
    <>
      <Home></Home>
      <Service></Service>
      <Work></Work>
      <Door></Door>
      <Finds></Finds>

      {/*  <Start></Start>*/}
    </>
  );
}

export default App;
