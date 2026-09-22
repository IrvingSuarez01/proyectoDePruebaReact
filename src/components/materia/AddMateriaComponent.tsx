import { useState } from 'react';
import MateriaService from '../../service/MateriasServiceReact';
import { Link, useNavigate} from 'react-router-dom';


export const AddMateriaComponent = () => {
    const idMateria = 0;
    const [nombre, setCNombre] = useState("");
    const [creditosNecesarios, setCCreditosNecesarios] = useState(0);
    const navigate = useNavigate();


    const saveMateria = (e: React.FormEvent) =>
    {
        e.preventDefault();
        const materia = {
            idMateria,  
            nombre,
            creditosNecesarios};          

            MateriaService.createMateria(materia).then((response) => {
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
                        <h2 className='text-center'>Crear Materia</h2>
                        <div className='card-body'>
                            <form onSubmit={saveMateria}>

                                <div className='row mb-2'>
                                    <label className='col-md-3' >Nombre</label>
                                    <div className='col-md-9'>
                                    <input type='text' className='form-control ' placeholder='Ingrese el nombre de la materia' required
                                        onChange={(e) => setCNombre(e.target.value)} />
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <label className='col-md-3'>Créditos</label>
                                    <div className='col-md-9'>
                                        <input type='text' placeholder='Ingrese número de créditos necesarios' required
                                            className='form-control'
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

export default AddMateriaComponent;