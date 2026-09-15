import {useState} from 'react'

interface User 
{
    name:String,
    age:number
}


function App3(){

    const [dataUser, setContador] = useState<User | null> (null)
    
    return <>
    <h1>Hello, World on APP2</h1>
    <h1>Bienvenido: {dataUser?.name} </h1>
    <h2>Edad: {dataUser?.age}</h2> 
    <button  onClick = { () => setContador({name:'Pedro', age:10}) }> Click </button>  
    </>
}

export default App3