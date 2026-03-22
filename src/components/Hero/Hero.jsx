import "./Hero.css";

  2
  
import Servicios from "../Servicios/Servicios";

const Hero = ({language}) => {
  return (
    <div className="Hero">
      <div className="Hero-superior">
        <div className="Text-hero">
          
          <h1 className="Texto-principal">
            {language === "es" ? (
              <>
                <span style={{ fontWeight: 300 }}>Servicios profecional de limpieza </span>
                <span style={{ fontWeight: 900 }}>en todo EE. UU.</span>
              </>
            ) : (
              <>
                <span style={{ fontWeight: 300 }}>Professional Cleaning Services </span>
                <span style={{ fontWeight: 800 }}>Across the U.S.</span>
              </>
            )}
          </h1>

          <p className="Informacion-principal">
            {language === "es"
              ? "Más de N años de experiencia en limpieza industrial, comercial y residencial."
              : "Over N years of experience in industrial, commercial, and residential cleaning."}
          </p>
        </div>

        <div className="Hero-image" >
          <img src="https://i.ibb.co/XZxQPHtk/Whats-App-Image-2026-03-14-at-11-16-00-PM.jpg" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
