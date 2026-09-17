import axios from 'axios';

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
}

export default new MateriaServiceReact();