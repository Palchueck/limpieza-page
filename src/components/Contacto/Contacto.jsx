import "./Contacto.css"

const Contacto = ({language}) => {
  return (
    <footer className="Contacto">
      <div className="Contacto-container">
        <div className="Contacto-grid">

          <div className="contacto-container">
            <h2 className="contacto-titulo">Envíanos un mensaje</h2>
            <form className="contacto-form">
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="tu@email.com" />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input type="tel" placeholder="+52 123 456 7890" />
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="contacto-btn">Enviar mensaje</button>
            </form>
          </div>


          <div className="Contacto-info">
            <h3>Contacto</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Av. Principal #123, Ciudad
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +52 123 456 7890
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              info@gracecleaning.com
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="Contacto-horario">
            <h3>Horario de atención</h3>
            <div className="horario-item">
              <span>Lunes a Viernes:</span>
              <span>8:00 - 18:00</span>
            </div>
            <div className="horario-item">
              <span>Sábado:</span>
              <span>9:00 - 14:00</span>
            </div>
            <div className="horario-item">
              <span>Domingo:</span>
              <span>Cerrado</span>
            </div>
          </div>
        </div>

        <div className="Contacto-bottom">
          <p>
            © 2026 Diaz Cleaning LLC Service. Todos los derechos reservados. | 
            <a href="#"> Aviso de privacidad</a> | 
            <a href="#"> Términos y condiciones</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;