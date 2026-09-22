import './App.css'
import ListMateriasComponent from './components/materia/ListaMaterias';
import { Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './components/common/PaginaPrincipal'
import AddMateriaComponent from './components/materia/AddMateriaComponent';
import EditMateriaComponent from './components/materia/EditMateriaComponent';


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