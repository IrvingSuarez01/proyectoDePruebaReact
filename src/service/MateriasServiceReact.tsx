import axios from 'axios';
import type { InterfaceMateria} from '../model/InterfaceMateria';

const API_URL = "http://localhost:8080/api/materias"

class MateriaServiceReact
{
  getAllMaterias()
  {
    return axios.get(API_URL);
  }
  
  
  getMateriaById(id:string) 
  {
    return axios.get(`${API_URL}/${id}`);
  }

  getMateriaByName(nombre:string) 
  {
    return axios.get(`${API_URL}/buquedaNombre/${nombre}`);
  }

  createMateria(materia: InterfaceMateria){
        return axios.post(`${API_URL}`, materia, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    updateMateria(materia: InterfaceMateria) {
        return axios.put(`${API_URL}/`, materia, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

}

export default new MateriaServiceReact();