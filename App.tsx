import React from "react";
import "./App.css"; // Importamos el archivo CSS

const App: React.FC = () => {
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
      </header>

      <main>
        <article>
          <h2>Artículo Principal</h2>
          <p>
            Este es el contenido principal de la página. Aquí puedes escribir
            información importante sobre tu sitio o empresa.
          </p>
          <p>
            El diseño se ajustará automáticamente a diferentes tamaños de
            pantalla gracias al CSS responsivo.
          </p>
        </article>

        <article>
          <h2>Segundo Artículo</h2>
          <p>
            Este es otro artículo en la página principal. Puedes usar esto para
            destacar diferentes aspectos de tu contenido.
          </p>
          <p>
            Los artículos se reorganizarán en pantallas más pequeñas para una
            mejor legibilidad.
          </p>
        </article>

        <aside>
          <h3>Barra Lateral</h3>
          <p>
            Aquí puedes incluir información adicional, enlaces relacionados o
            widgets.
          </p>
          <p>
            En dispositivos móviles, esta barra lateral se moverá arriba de los
            artículos principales.
          </p>
        </aside>
      </main>

      <footer>
        <p>
          &copy; {new Date().getFullYear()} Mi Sitio Web Responsivo. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
