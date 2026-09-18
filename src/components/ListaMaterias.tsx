import {useEffect, useState} from 'react';
import MateriasServiceReact from '../service/MateriasServiceReact';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';


//http://localhost:5173/materias
//http://localhost:8080/api/materias

const ListMateriasComponent = () => {

    const [cMaterias, setCMateias] = useState<InterfaceMateria[]>([]);
    const [searchId, setSearchId] = useState('');
    const [searchNombre, setSearchNombre] = useState('');


    interface InterfaceMateria {
        id: number;
        nombre: string;
        creditosNecesarios: number;
    }

    useEffect(() => {

        listarMaterias();            
        //const intervalo = setInterval(() => { listarMaterias(); }, 5000);
        //return () => clearInterval(intervalo);
    }, []);


   const listarMaterias = () =>{
        MateriasServiceReact.getAllMaterias()
        .then(response => {setCMateias(response.data) /*console.log(cMaterias);*/ })
        .catch(error => {
            console.error('Error fetching materias:', error);
        });
    }

    
        
    const handleSearch = () => {
        debugger;
        if (searchId === '') {
            listarMaterias();
            return;
        }
        MateriasServiceReact.getMateriaById(searchId)
            .then(response => {
              setCMateias([response.data])
            })
            .catch(error => {               
                if (error.response?.status === 404) {
                setCMateias([]);
            }
            else {       
                console.error('Error fetching materias:', error);
                alert('Error al buscar la materia');
            }
            });
        };

        const handleSearchNombre = () => {
        debugger;
        if (searchNombre === '') {
            listarMaterias();
            return;
        }
        MateriasServiceReact.getMateriaByName(searchNombre)
            .then(response => {
              setCMateias(response.data)
            })
            .catch(error => {               
                if (error.response?.status === 404) {
                setCMateias([]);
            }
            else {       
                console.error('Error fetching materias:', error);
                alert('Error al buscar la materia');
            }
            });
        };

    return(
         
        <div>
            <div className='text-end'>
                {/*<Link to="/" className="btn btn-secondary">Volver a la página principal</Link>*/}
            </div>
            <div className='container'>
            <h2 className='text-center'>Materias</h2>
             <p>Lista de materias encontradas...</p>

                <div className='row mb-3'>
                    <div className='col-md-4'>
                        <input type='text' className='form-control'  placeholder='Buscar materia por ID' value={searchId}
                            onChange={(e) =>{setSearchId(e.target.value.replace(/[^0-9]/g, ''))}}/>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={handleSearch}>Buscar</button>
                    </div>
                </div>

                <div className='row mb-3'>
                    <div className='col-md-4'>
                        <input type='text' className='form-control'  placeholder='Buscar materia por nombre' value={searchNombre}
                            onChange={(e) =>{setSearchNombre(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}}/>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={handleSearchNombre}>Buscar</button>
                    </div>
                </div>


                <table className='table table-sm table-bordered  table-hover'>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Materia</th> 
                            <th>Creditos necesarios</th>                         
                        </tr>
                    </thead>
                    <tbody>
                        {cMaterias.map(cMaterias => (
                            <tr className='bg-success' key={cMaterias.id}>
                                <td>{cMaterias.id}</td>
                                <td>{cMaterias.nombre}</td>   
                                <td>{cMaterias.creditosNecesarios}</td>                              
                            </tr>                            
                        ))}
                    </tbody>
                </table>
                <h3>Total materias: {cMaterias.length}</h3>
                <Link to="/addMateria" className='btn btn-secondary mb-2'>Agregar Materia</Link>
                <br/>
            </div>
        </div>
                 
    );
};

export default ListMateriasComponent;