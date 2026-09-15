import {useState} from 'react'


function App2(){

    const [contador, setContador] = useState(200)
    
    return <>
    <h1>Hello, World on APP2</h1>
    <h1>Contador: {contador} </h1> 
    <button  onClick = { () => setContador(contador +100) } > contador </button>  
    </>
}

export default App2