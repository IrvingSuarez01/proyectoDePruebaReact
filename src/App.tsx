import './App.css'
import ListMateriasComponent from './components/ListaMaterias';
import { Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal'


function App() {

  return (
    <>
      <Routes>
        <Route path='/materias' element={<ListMateriasComponent />}></Route>
        <Route path='/' element={<PaginaPrincipal/>}></Route>
      </Routes>
           
    </>
  )
}
export default App