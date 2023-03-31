import { bgcolor } from "@mui/system"

// const colores = [
//     {
//         nombre:'Rosa principal',
//         color:'#f160ad'
//     },
//     {
//         nombre:'rosa claro',
//         color:'#f16c6c'
//     },
//     {
//         nombre:'naranja claro',
//         color:'#f1a86c'
//     },
//     {
//         nombre:'amarillo claro',
//         color:'#e6f16c'
//     },
//     //opuesto
//     {
//         nombre:'verde claro',
//         color:'#60f17d'
//     },
//     //pasteles
//     {
//         nombre:'lila claro',
//         color:'#d2a8d8'
//     },
//     {
//         nombre:'verde azulado claro',
//         color:'#9ac2c9'
//     },
//     {
//         nombre:'rosa pálido',
//         color:'#f8d3e3'
//     }
// ]


const colores = [  
    {
      nombre: "Lila claro",
      color: "#d2a8d8"
    },
    {
      nombre: "Verde azulado claro",
      color: "#9ac2c9"
    },
    {
      nombre: "Rosa pálido",
      color: "#f8d3e3"
    },
    {
      nombre: "Rosa oscuro",
      color: "#db7093"
    },
    {
      nombre: "Azul verdoso claro",
      color: "#70dbbc"
    },
    {
      nombre: "Marrón claro",
      color: "#b88676"
    },
    {
      nombre: "Amarillo verdoso claro",
      color: "#c9d17e"
    },
    {
      nombre: "Amarillo marrón claro",
      color: "#c2b280"
    },
    {
      nombre: "Café oscuro",
      color: "#8b7355"
    }
  ];

const Paleta = () => { 

   return(
    <div style={{width: "10rem", position: "absolute", right: 0}}>
        {colores.map(c => 
        <div style={{backgroundColor:`${c.color}`, height:"3rem"}} key={c.nombre}>
                {c.nombre}
        </div>
        )}
    </div>
   ) 
}

export default Paleta