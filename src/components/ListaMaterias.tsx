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
         <div className='container'>
            <h2 className='text-center'>Lista de Materias</h2>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Materia</th> 
                            <th>Creditos necesarios</th>                         
                        </tr>
                    </thead>
                    <tbody>
                        {currentMaterias.map(cMaterias => (
                            <tr key={cMaterias.id}>
                                <td>{cMaterias.id}</td>
                                <td>{cMaterias.nombre}</td>   
                                <td>{cMaterias.creditosNecesarios}</td>                              
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            <Link to="/" className="btn btn-info">Volver a la página principal</Link>
        </div>           
    );
};

export default ListMateriasComponent;