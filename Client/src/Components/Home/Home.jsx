import { React } from 'react'


let colores = ['#f160ad','#f67cc4','#fc98dc','#ffabeb','#fcc7f4']

const Home = () => {


    return(
        <div>           
           soy la Home 
           {colores.map(
            c => 
                <div style={{backgroundColor: `${c}`, height: "50px"}}>{c}</div>             
           )}
        </div>
    )
}


export default Home