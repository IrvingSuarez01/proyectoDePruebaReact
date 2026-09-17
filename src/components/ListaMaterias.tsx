import {useEffect, useState} from 'react';
import MateriasServiceReact from '../service/MateriasServiceReact';
import { Link } from 'react-router-dom';


//http://localhost:5173/materias
//http://localhost:8080/api/materias

const ListMateriasComponent = () => {

    const [cMaterias, setCMateias] = useState<InterfaceMateria[]>([]);
    const currentMaterias = cMaterias.slice(1, 100);

    interface InterfaceMateria {
        id: number;
        nombre: string;
        creditosNecesarios: number;
    }

    useEffect(() => {
        listarMaterias();
        //const intervalo = setInterval(() => { listarMaterias(); }, 10000);
        //return () => clearInterval(intervalo);
    }, []);


   const listarMaterias = () =>{
        MateriasServiceReact.getAllMaterias()
        .then(response => {setCMateias(response.data) /*console.log(cMaterias);*/ })
        .catch(error => {
            console.error('Error fetching materias:', error);
        });
    }



    return(
         
        <div>
            <div className='text-end'>
                <Link to="/" className="btn btn-secondary">Volver a la página principal</Link>
            </div>
            <div className='container'>
            <h2 className='text-center'>Materias</h2>
             <p>Lista de materias encontradas...</p>
                <table className='table table-sm table-bordered  table-hover'>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Materia</th> 
                            <th>Creditos necesarios</th>                         
                        </tr>
                    </thead>
                    <tbody>
                        {currentMaterias.map(cMaterias => (
                            <tr className='bg-success' key={cMaterias.id}>
                                <td>{cMaterias.id}</td>
                                <td>{cMaterias.nombre}</td>   
                                <td>{cMaterias.creditosNecesarios}</td>                              
                            </tr>                            
                        ))}
                    </tbody>
                </table>
                <br/>
            </div>
        </div>
                 
    );
};

export default ListMateriasComponent;