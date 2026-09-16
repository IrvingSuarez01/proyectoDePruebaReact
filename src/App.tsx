import './App.css'
import ListMateriasComponent from './components/ListaMaterias';
import { Route, Routes } from 'react-router-dom';
import PaguinaPrincipal from './components/PaguinaPrincipal'


function App() {

  return (
    <>

        <Routes>
          <Route path='/materias' element={<ListMateriasComponent />}></Route>
          <Route path='/' element={<PaguinaPrincipal/>}></Route>
        </Routes>

     
    </>
  )
}

export default App
