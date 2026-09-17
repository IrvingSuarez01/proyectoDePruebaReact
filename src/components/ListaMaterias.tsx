import {useEffect, useState} from 'react';
import MateriasServiceReact from '../service/MateriasServiceReact';
//import { Link } from 'react-router-dom';


//http://localhost:5173/materias
//http://localhost:8080/api/materias

const ListMateriasComponent = () => {

    const [cMaterias, setCMateias] = useState<InterfaceMateria[]>([]);
    const currentMaterias = cMaterias.slice(1, 100);
    const [searchId, setSearchId] = useState('');


    interface InterfaceMateria {
        id: number;
        nombre: string;
        creditosNecesarios: number;
    }

    useEffect(() => {
           console.log("UseEffect nuevo valor:", cMaterias);
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

    
        
    const handleSearch = () => {
        debugger;
        if (searchId === '') {
            alert('Por favor ingresa un ID de materia');
            return;
        }
        MateriasServiceReact.getMateriaById(searchId)
            .then(response => {
                const materiaList = response.data;
                console.log("response.data =", response.data);
                //SALIDA EN CONSOLA response.data = Object { id: 1, nombre: "ciencias naturales", creditosNecesarios: 100 }
                console.log("Array:", [response.data]);               
                // SALIDA EN LA CONSLA Array: Array [ {…} ]

                if (materiaList) {
                    setCMateias([response.data])
                    console.log('Valor de cMaterias en debugger'+ cMaterias);
                    //SALIDA EN LA CONSOLA Valor de cMaterias en debugger[object Object],[object Object],[object Object],[object Object],[object Object]
                    
                } else {
                    alert('Materia no encontrada');
                }
            })
            .catch(error => {
                console.error('Error fetching materias:', error);
                alert('Error al buscar la materia');
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
                            onChange={(e) => setSearchId(e.target.value)}
                        />
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={handleSearch}>Buscar</button>
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
                        {currentMaterias.map(cMaterias => (
                            <tr className='bg-success' key={cMaterias.id}>
                                <td>{cMaterias.id}</td>
                                <td>{cMaterias.nombre}</td>   
                                <td>{cMaterias.creditosNecesarios}</td>                              
                            </tr>                            
                        ))}
                    </tbody>
                </table>
                <h3>Total materias: {cMaterias.length}</h3>
                <br/>
            </div>
        </div>
                 
    );
};

export default ListMateriasComponent;