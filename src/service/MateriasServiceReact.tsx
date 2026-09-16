import axios from 'axios';

const API_URL = "http://localhost:8080/api/materias"

class MateriaServiceReact
{
  getAllMaterias()
  {
    return axios.get(API_URL);
  }  
}

export default new MateriaServiceReact();