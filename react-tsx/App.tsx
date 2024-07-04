import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.body.className = isDarkTheme ? "dark-theme" : "";
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="container">
      <header>
        <h1>Mi Sitio Web Responsivo</h1>
        <nav>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#acerca">Acerca de</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <button id="theme-toggle" onClick={toggleTheme}>
          Cambiar Tema
        </button>
      </header>

      <main>
        <article>
          <h2>Artículo Principal</h2>
          <p>
            Este es el contenido principal de la página. Aquí puedes ver cómo se
            aplica la fuente Arial para el texto del cuerpo. Es fácil de leer en
            diferentes tamaños de pantalla.
          </p>
          <p>
            El diseño se ajustará automáticamente a diferentes tamaños de
            pantalla gracias al CSS responsivo. Observa cómo cambian los tamaños
            y disposiciones al redimensionar la ventana.
          </p>
        </article>

        <article>
          <h2>Segundo Artículo</h2>
          <p>
            Este es otro artículo en la página principal. Puedes notar que los
            encabezados H2 utilizan la fuente Verdana, que contrasta bien con el
            texto del cuerpo.
          </p>
          <p>
            Los artículos se reorganizarán en pantallas más pequeñas para una
            mejor legibilidad. Intenta reducir el tamaño de la ventana para ver
            cómo se adapta el diseño.
          </p>
        </article>

        <aside>
          <h3>Barra Lateral</h3>
          <p>
            Aquí puedes ver cómo se aplica la fuente Cambria a la barra lateral.
            Este texto tiene un aspecto ligeramente diferente al del cuerpo
            principal, creando una distinción visual.
          </p>
          <p>
            En dispositivos móviles, esta barra lateral se moverá arriba de los
            artículos principales para una mejor experiencia de usuario en
            pantallas pequeñas.
          </p>
        </aside>
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Mi Sitio Web Responsivo. Todos los
          derechos reservados. Nota cómo el pie de página utiliza la fuente
          Courier New para un aspecto distintivo.
        </p>
      </footer>
    </div>
  );
};

export default App;
