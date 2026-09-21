import { useState, useEffect } from 'react';
import MateriaService from '../service/MateriasServiceReact';
import { Link, useNavigate, useParams} from 'react-router-dom';


export const EditMateriaComponent = () => {
    const [nombre, setCNombre] = useState("");
    const [creditosNecesarios, setCCreditosNecesarios] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();
    const idMateria = Number(id);
    

    useEffect(() => {

    if (id) {

        MateriaService.getMateriaById(id)
            .then((response) => {

                setCNombre(response.data.nombre);
                setCCreditosNecesarios(
                    response.data.creditosNecesarios
                );

            })
            .catch(error => {
                console.log(error);
            });
    }

}, [id]);


    const updateMateria = (e: React.FormEvent) =>
    {

        e.preventDefault();
        const materia = {
            idMateria,  
            nombre,
            creditosNecesarios};          
    
            MateriaService.updateMateria(idMateria, materia).then((response) => {
                console.log(response);
                navigate("/Materias");
            }).catch(error => {
                console.log(error);
            });
    }   
    

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>Actualizar Materia</h2>
                        <div className='card-body'>
                            <form onSubmit={updateMateria}>

                                <div className='row mb-2'>
                                    <label className='col-md-3' >Nombre</label>
                                    <div className='col-md-9'>
                                    <input type='text' className='form-control ' placeholder='Ingrese el nombre de la materia'
                                         value={nombre} onChange={(e) => setCNombre(e.target.value)} />
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <label className='col-md-3'>Créditos</label>
                                    <div className='col-md-9'>
                                        <input type='text' placeholder='Ingrese número de créditos necesarios'
                                            className='form-control' value={creditosNecesarios}
                                            onChange={(e) => setCCreditosNecesarios(Number(e.target.value))}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button className="btn btn-primary me-3">Guardar</button>
                                    <Link to="/Materias" className='btn btn-danger'>Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditMateriaComponent;