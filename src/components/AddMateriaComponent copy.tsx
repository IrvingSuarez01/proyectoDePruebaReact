import { useState, useEffect } from 'react';
import MateriaService from '../service/MateriasServiceReact';
import { Link, useNavigate/*, useParams*/ } from 'react-router-dom';


export const AddMateriaComponent = () => {
    //const [idMateria, setIdMateria] = useState(0);
    const idMateria = 0;
    const [nombre, setCNombre] = useState("");
    const [creditosNecesarios, setCCreditosNecesarios] = useState(0);
    //const [fecha_nacimiento, setFecha_Nacimiento] = useState("");
    //const [caracteristicas, setCaracteristicas] = useState("");
    //const [posicionId, setPosicionId] = useState("");
    //const [posiciones, setPosiciones] = useState([]);
    //const id  =  useParams();
    const navigate = useNavigate();


    
    useEffect(() => {
        /*if (id) {
                MateriaService.getMateriaById(id).then((response) => {
                const materia = response.data[0];  
                setIdMateria(materia.idMateria);
                setCNombre(materia.nombre);
                setCCreditosNecesarios(materia.creditosNecesarios);
                
                //setApellidos(materia.apellidos);
                //setFecha_Nacimiento(materia.fecha_nacimiento);
                //setCaracteristicas(materia.caracteristicas);
                //setPosicionId(materia.posicion ? materia.posicion.id : "");
            }).catch(error => {
                console.log("Error al obtener materia:", error);
            });
        }*/
    }, []);


    /*
    useEffect(() => {
        const fetchPosiciones = async () => {
            try {
                const response = await MateriaService.getAllPosiciones();
                setPosiciones(response.data);
            } catch (error) {
                console.error('Error al obtener las posiciones:', error);
            }
        };

        fetchPosiciones();
    }, []);


    const saveFutbolista = (e) => {
        e.preventDefault();
        const selectedPosicion = posiciones.find(pos => pos.id === parseInt(posicionId));
        const futbolista = {
            id: id ? parseInt(id) : null,  
            nombres,
            apellidos,
            fecha_nacimiento,
            caracteristicas,
            posicion: selectedPosicion ? { id: selectedPosicion.id, nombre: selectedPosicion.nombre } : null
        };*/

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

        
           /* if (id) {
                MateriaService.updateMateria(materia).then((response) => {
                    console.log(response);
                    alert("Se actualizó correctamente");
                }).catch(error => {
                    console.log(error);
                });
            } else {
                MateriaService.createMateria(materia).then((response) => {
                    console.log(response);
                    navigate("/ListaMaterias");
                }).catch(error => {
                    console.log(error);
                });
            }*/
        }
    
    
    

//const title = id ? 'Actualizar Materia' : 'Registro de Materia';

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>Crear Materia</h2>
                        <div className='card-body'>
                            <form onSubmit={saveMateria}>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Materia</label>
                                    <input
                                        type='text'
                                        placeholder='Ingrese nombre de materia'
                                        name='nombre'
                                        className='form-control'
                                        //value={nombre}
                                        onChange={(e) => setCNombre(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Créditos Necesarios</label>
                                    <input
                                        type='text'
                                        placeholder='Ingrese número de créditos necesarios'
                                        name='creditosNecesarios'
                                        className='form-control'
                                        //value={creditosNecesarios}
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
