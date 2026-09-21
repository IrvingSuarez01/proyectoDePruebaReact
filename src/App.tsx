import './App.css'
import ListMateriasComponent from './components/ListaMaterias';
import { Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './components/PaginaPrincipal'
import AddMateriaComponent from './components/AddMateriaComponent';
import EditMateriaComponent from './components/EditMateriaComponent';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PaginaPrincipal/>}></Route>
        <Route path='/materias' element={<ListMateriasComponent />}></Route>
        <Route path='/addMateria' element={<AddMateriaComponent />}></Route>
        <Route path='/editMateria/:id' element={<EditMateriaComponent />}></Route>
      </Routes>
           
    </>
  )
}
export default App