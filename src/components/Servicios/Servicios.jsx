import "./Servicios.css";
import { FaBroom, FaBuilding, FaHome, FaWindowRestore, FaIndustry, FaRegBuilding } from 'react-icons/fa';

const serviciosEspañol = [
  // CATEGORÍA: LIMPIEZA ESPECIALIZADA
  {
    titulo: 'Limpieza Profunda',
    descripcion: 'Limpieza exhaustiva de todos los espacios, incluyendo áreas de difícil acceso.',
    categoria: 'Especializada',
    icono: <FaBroom />,
    destacado: true
  },
  {
    titulo: 'Limpieza de Ventanas',
    descripcion: 'Limpieza profesional de ventanas interiores y exteriores.',
    categoria: 'Especializada',
    icono: <FaWindowRestore />
  },
  
  // CATEGORÍA: COMERCIAL
  {
    titulo: 'Limpieza de Oficinas',
    descripcion: 'Mantenimiento y limpieza profesional para espacios corporativos.',
    categoria: 'Comercial',
    icono: <FaBuilding />
  },
  {
    titulo: 'Limpieza Comercial',
    descripcion: 'Especializados en limpieza para negocios y espacios comerciales.',
    categoria: 'Comercial',
    icono: <FaIndustry />
  },
  {
    titulo: 'Limpieza de Locales',
    descripcion: 'Servicio completo para tiendas, restaurantes y comercios.',
    categoria: 'Comercial',
    icono: <FaRegBuilding />
  },
  
  // CATEGORÍA: RESIDENCIAL
  {
    titulo: 'Limpieza Estándar',
    descripcion: 'Servicio regular de limpieza para mantener tu espacio impecable.',
    categoria: 'Residencial',
    icono: <FaHome />
  },
  {
    titulo: 'Limpieza Residencial',
    descripcion: 'Cuidado y limpieza detallada para hogares y apartamentos.',
    categoria: 'Residencial',
    icono: <FaHome />
  },
  {
    titulo: 'Servicios para el Hogar',
    descripcion: 'Limpieza profesional adaptada a las necesidades de tu hogar.',
    categoria: 'Residencial',
    icono: <FaHome />
  },
  
  // CATEGORÍA: SERVICIOS GENERALES
  {
    titulo: 'Servicios de Limpieza',
    descripcion: 'Amplia gama de soluciones de limpieza para todo tipo de necesidades.',
    categoria: 'General',
    icono: <FaBroom />
  },
  {
    titulo: 'Limpieza General',
    descripcion: 'Limpieza completa y mantenimiento regular de instalaciones.',
    categoria: 'General',
    icono: <FaBroom />
  }
];

const serviciosEnglish = [
  // CATEGORY: SPECIALIZED CLEANING
  {
    titulo: 'Deep Cleaning',
    descripcion: 'Exhaustive cleaning of all spaces, including hard-to-reach areas.',
    categoria: 'Specialized',
    icono: <FaBroom />,
    destacado: true
  },
  {
    titulo: 'Window Cleaning',
    descripcion: 'Professional cleaning of interior and exterior windows.',
    categoria: 'Specialized',
    icono: <FaWindowRestore />
  },
  
  // CATEGORY: COMMERCIAL
  {
    titulo: 'Office Cleaning',
    descripcion: 'Professional maintenance and cleaning for corporate spaces.',
    categoria: 'Commercial',
    icono: <FaBuilding />
  },
  {
    titulo: 'Commercial Cleaning',
    descripcion: 'Specialized in cleaning for businesses and commercial spaces.',
    categoria: 'Commercial',
    icono: <FaIndustry />
  },
  {
    titulo: 'Store Cleaning',
    descripcion: 'Complete service for shops, restaurants and businesses.',
    categoria: 'Commercial',
    icono: <FaRegBuilding />
  },
  
  // CATEGORY: RESIDENTIAL
  {
    titulo: 'Standard Cleaning',
    descripcion: 'Regular cleaning service to keep your space spotless.',
    categoria: 'Residential',
    icono: <FaHome />
  },
  {
    titulo: 'Residential Cleaning',
    descripcion: 'Detailed care and cleaning for homes and apartments.',
    categoria: 'Residential',
    icono: <FaHome />
  },
  {
    titulo: 'Home Services',
    descripcion: 'Professional cleaning adapted to your home needs.',
    categoria: 'Residential',
    icono: <FaHome />
  },
  
  // CATEGORY: GENERAL SERVICES
  {
    titulo: 'Cleaning Services',
    descripcion: 'Wide range of cleaning solutions for all types of needs.',
    categoria: 'General',
    icono: <FaBroom />
  },
  {
    titulo: 'General Cleaning',
    descripcion: 'Complete cleaning and regular maintenance of facilities.',
    categoria: 'General',
    icono: <FaBroom />
  }
];

const Servicios = ({ language }) => {
  // Seleccionar el array según el idioma
  const servicios = language === "en" ? serviciosEnglish : serviciosEspañol;
  
  // Traducciones para títulos y categorías
  const translations = {
    es: {
      title: 'Servicios de Limpieza Profesional',
      subtitle: 'Ofrecemos soluciones personalizadas para cada necesidad',
      categories: {
        'Especializada': 'Limpieza Especializada',
        'Specialized': 'Limpieza Especializada',
        'Comercial': 'Limpieza Comercial',
        'Commercial': 'Limpieza Comercial',
        'Residencial': 'Limpieza Residencial',
        'Residential': 'Limpieza Residencial',
        'General': 'Servicios Generales'
      },
      button: 'Solicitar'
    },
    en: {
      title: 'Professional Cleaning Services',
      subtitle: 'We offer personalized solutions for every need',
      categories: {
        'Especializada': 'Specialized Cleaning',
        'Specialized': 'Specialized Cleaning',
        'Comercial': 'Commercial Cleaning',
        'Commercial': 'Commercial Cleaning',
        'Residencial': 'Residential Cleaning',
        'Residential': 'Residential Cleaning',
        'General': 'General Services'
      },
      button: 'Request'
    }
  };

  const t = translations[language] || translations.es;

  // Obtener categorías únicas del array actual
  const categorias = [...new Set(servicios.map(s => s.categoria))];

  return (
    <section className="servicios-section">
      <div className="servicios-header">
        <h2>{t.title}</h2>
        <p className="servicios-subtitle">
          {t.subtitle}
        </p>
      </div>

      {categorias.map((categoria, catIdx) => (
        <div key={catIdx} className="categoria-container">
          <h3 className="categoria-titulo">
            {t.categories[categoria] || categoria}
          </h3>
          <div className="servicios-grid">
            {servicios
              .filter(s => s.categoria === categoria)
              .map((servicio, idx) => (
                <div 
                  className={`servicio-card ${servicio.destacado ? 'destacado' : ''}`} 
                  key={idx}
                >
                  <div className="servicio-icono">
                    {servicio.icono}
                  </div>
                  <h4>{servicio.titulo}</h4>
                  <p>{servicio.descripcion}</p>
                  <a href="#contacto" className="servicio-btn">
                    {t.button}
                  </a>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Servicios;