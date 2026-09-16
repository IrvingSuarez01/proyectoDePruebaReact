import  { useEffect, useState } from 'react';
import MateriasServiceReact from '../service/MateriasServiceReact';


//http://localhost:5173/materias
//http://localhost:8080/api/materias

const ListMateriasComponent = () => {
    //const [cMaterias, setCMateias] = useState([]);
    const [cMaterias, setCMateias] = useState<InterfaceMateria[]>([]);

    interface InterfaceMateria {
    id: number;
    nombre: string;
    creditosNecesarios: number;
}

   useEffect(() => {
        listarMaterias();
    }, []);


   const listarMaterias = () =>{
        MateriasServiceReact.getAllMaterias()
        .then(response => {
            // const nuevaMateriaEncontrada = response.data.map(materia => ({
            //   ...materia, 
            // materia: materia.nombre
            
            //const nuevaMateriaEncontrada = 
            //response.data.map((materia: InterfaceMateria) => ({ ...materia, materia: materia.nombre }));
            
            //setCMateias(nuevaMateriaEncontrada);
            setCMateias(response.data)
            console.log(response.data);
            console.log(cMaterias);
        })
        .catch(error => {
            console.error('Error fetching materias:', error);
        });
    }

    const currentMaterias = cMaterias.slice(1, 100);

    return(
            <div className='container'>
                <h2 className='text-center'>Lista de Materias</h2>

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombres</th> 
                            <th>Creditos</th>                         
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

                <button onClick={listarMaterias}>Ver materias</button>
            </div>
    );
};

export default ListMateriasComponent;