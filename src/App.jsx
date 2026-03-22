import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from "./components/Navbar/navbar";
import Servicios from "./components/Servicios/Servicios";
import Contacto from "./components/Contacto/Contacto";
import React, {useState} from 'react'; 

function App() {
  const [language, setLanguage] = useState("en");


  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Servicios language={language} />
      <Contacto language={language} />
    </div>
  )
}

export default App
