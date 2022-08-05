// (function(){
//     const fruta = "🍌";
//     console.log(fruta)
// })()

// export const sandia = "🍉";
// export function pintarBanana(){
//     console.log("🍌");
// }
// export const pintarFrutilla = ()=>{
//     console.log("🍓");
// }

// export class Fruta{
//     constructor(nombre){
//         this.nombre = nombre;
//     }
// }

// const sandia = "🍉";
// export default sandia;


// function pintarBanana(){
//     console.log("🍌");
// }

export default function () {
    console.log("🍌🍉");
}
const pintarFrutilla = ()=>{
    console.log("🍓");
}

class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
}

export{
    pintarFrutilla, Fruta
}