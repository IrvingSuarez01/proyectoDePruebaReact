import { useState, useEffect } from 'react';
import MateriaService from '../service/MateriasServiceReact';
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

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Materia</label>
                                    <input type='text' placeholder='Ingrese nombre de materia'
                                        name='nombre' className='form-control'
                                        onChange={(e) => setCNombre(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Créditos Necesarios</label>
                                    <input type='text' placeholder='Ingrese número de créditos necesarios'
                                        name='creditosNecesarios' className='form-control'
                                        onChange={(e) => setCCreditosNecesarios(Number(e.target.value))}
                                    />
                                </div>

                                <div className='botones'>
                                    <button /*type="submit" onClick={(e) => saveMateria(e)}*/  className="btn btn-primary mb-2">Guardar{/*id ? 'Actualizar' : 'Registrar'*/}</button>
                                    <Link to="/Materias" className='btn btn-danger mb-2'>Cancelar</Link>
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