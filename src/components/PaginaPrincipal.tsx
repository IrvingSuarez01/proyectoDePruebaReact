import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import { Link } from 'react-router-dom'


function PaginaPrincipal () {

    const [count, setCount] = useState(0)


    return(
        <>
        <section id="center">
          <div className='d-flex align-items-center'>
            <div>
              <img src={heroImg} className="base" width="50" height="59" alt="" />            
            </div>
            <div className ='ms-3'>
              <h1>SCA</h1>
            </div>
          </div>
          <p>Sistema de carga académica </p>
          </section>      
        <div className="ticks"></div>



        <section id="next-steps">
          <div id="panel_maestros">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#settings-icon"></use>
              {/*bluesky-icon   discord-icon    documentation-icon    github-icon   social-icon   x-icon  home-icon user-icon  search-icon add-icon edit-icon delete-icon settings-icon*/}
            </svg>
            <h2>Maestros</h2>
            <p>Aqui se encuentra la administracion de modulos y materias para maestros..</p>
            <ul>
               <li>
                  <Link to="/materias" className="button-icon">
                    <img src={reactLogo} alt="React"  className="button-icon" /> Gestionar materias
                  </Link>
              </li>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  <img className="logo" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a  target="_blank">
                  <img className="button-icon" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>             
            </ul>
          </div>


          <div id="panel_alumnos">
            <svg className="icon">
              <use href="/icons.svg#user-icon"></use>              
            </svg>
            <h2>Alumnos</h2>
            <p>Aqui puede encontrar las herramientas para asignar materias.</p>
            <ul>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank">
                  <svg className="button-icon" >
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  <svg className="button-icon">
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  <svg
                    className="button-icon">
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
            </ul>
          </div>


          <div id='panel_otras_herramientas'>
            <svg className="icon">
              <use href="/icons.svg#documentation-icon"></use>              
            </svg>
            <h3> Otras herramientas</h3>
            <p>Explore mas herramientas del portal</p>
            <ul>
              
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  <svg
                    className="button-icon">
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg
                    className="button-icon">
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>                 
              </li>

               <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg className="button-icon">
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  bsky
                </a>                                   
              </li>
            </ul>
            <ul>
              <li>
                  <button type="button" className="btn " onClick={() => setCount((count) => count + 1)}> Count click is {count} </button>
              </li>
            </ul>                 
          </div>
        </section>

      <section id="spacer"></section>
      </>
    );
};

export default PaginaPrincipal;