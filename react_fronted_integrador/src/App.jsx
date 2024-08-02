import React from 'react'
import {PI} from "./funciones"

console.log (PI)

const App = () => {
return(
    <div>
        <h1>Pagina Principal</h1>
        <QuienesSomos/>
    </div>
    )
}

const QuienesSomos = () => {
    return(
    <>
        <div>
            <h2>Porque Literatura Ambulante...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium incidunt quis sint eum natus quam tempore itaque dolore tenetur commodi nemo tempora cupiditate libero placeat magnam vel, architecto voluptatibus?</p>
            <button>Me gusta</button>
        </div>
        <div>
            <button>Continuar</button>
        </div> 
    </>
    )
}


export default App
