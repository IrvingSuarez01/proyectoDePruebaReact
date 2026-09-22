import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero.png'

export const HeaderComponent = () => {
  return (
    <div>
        <header>
             <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div className='d-flex align-items-center'>
                     <img src={heroImg} className="base" width="40" height="29" alt="" />  
                    <Link to="/" className="navbar-brand ms-2">Inicio</Link>
                </div>
            </nav>
        </header>
    </div>

  )
}

export default HeaderComponent;