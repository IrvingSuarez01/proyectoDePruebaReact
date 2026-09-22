import { useState, useEffect } from 'react';
import MateriaService from '../../service/MateriasServiceReact';
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
    
        const deleteMateria = (idMateria: number) => {

            if (window.confirm("¿Deseas eliminar esta materia?")) {                
                MateriaService.deleteMateriaById(idMateria)
                .then(() => {navigate("/Materias");
                })
                .catch(error => {
                    console.log(error);
                });
            }          
        }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>Actualizar Materia</h2>
                        <div className ='row'>
                        <button className="btn btn-danger col-md-1 offset-md-10" onClick={() => deleteMateria(idMateria)}>
                                        <i className="bi bi-trash3"></i> 
                                    </button>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={updateMateria}>

                                <div className='row mb-2'>
                                    <label className='col-md-3' >Nombre</label>
                                    <div className='col-md-9'>
                                    <input type='text' className='form-control ' placeholder='Ingrese el nombre de la materia' required
                                         value={nombre} onChange={(e) => setCNombre(e.target.value)} />
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <label className='col-md-3'>Créditos</label>
                                    <div className='col-md-9'>
                                        <input type='text' placeholder='Ingrese número de créditos necesarios' required
                                            className='form-control' value={creditosNecesarios}
                                            onChange={(e) => setCCreditosNecesarios(Number(e.target.value))}
                                        />
                                    </div>
                                </div>

                                <div>                                    
                                    <Link to="/Materias" className='btn btn-secondary me-3'>Cancelar</Link>                                    
                                    <button className="btn btn-primary me-3">Guardar</button>
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