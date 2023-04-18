import "./App.css";
import imageRickMorty from "./img/morty-rick.png";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const restapi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterapi = await api.json();
    setCharacters(characterapi.results);
  };

  return (
    <div id="Contenedor">
      <div id="Navegacion">
        <main class="Navegador">
          <section class="Logo_Pagina">
            <div class="Logo_Pagina_img">
              <img src={imageRickMorty} alt=""></img>
            </div>
          </section>

          <section class="Nombre_Pagina">
          <div class="Nombre_Pagina_Text_Defualt">
              Aplicación React
            </div>
          </section>

          <section class="Opciones_Rutas">
            <div class="Nombre_Pagina_Text_Defualt">
              Api sobre Rick And Morty Series!
            </div>
          </section>

          <section class="Cuenta">
            
          </section>
        </main>
      </div>

      <div id="Informacion_Docente">
        <main class="Contenedor">
          <article class="Contenedor_Tarjeta">
            <section>
              <div class="Card_Docente">
                <div class="Informacion">
                  <div class="image">
                    <img
                      src="Logo_Pagina.jpeg"
                      alt=""
                      width="80"
                      height="80"
                    ></img>
                  </div>

                  <div class="actions">
                    <div class="btn hvr-underline-from-center name">
                      Oziel Navarro Alejandres{" "}
                    </div>
                    <div class="btn hvr-underline-from-center info">
                      Ingeniería de Software, 602
                    </div>
                  </div>

                  <div class="actions">
                    <div class="btn hvr-underline-from-center info">
                      Matricula{" "}
                      <span class="Info_Span"> S20006758 </span>
                    </div>
                    <div class="btn hvr-underline-from-center info">
                      Experiencia:{" "}
                      <span class="Info_Span">
                        {" "}
                        Base de Datos No Relacionales 602
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>

      <div id="Pantalla_Informacion">
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <button onClick={restapi} className="btn-search">
              Buscar Personajes 1
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
