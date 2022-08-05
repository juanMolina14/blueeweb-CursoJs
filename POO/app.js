const formulario = document.getElementById('formulario');
const cardEstudiantes = document.getElementById('cardEstudiantes');
const cardProfesores = document.getElementById('cardProfesores');
const templateEstudiantes = document.getElementById('templateEstudiantes').content;
const templateProfesores = document.getElementById('templateProfesores').content;
const alert = document.querySelector('.alert');


const estudiantes = [];
const profesores = [];
 document.addEventListener("click", e =>{
    //console.log(e.target.dataset.nombre)
    if(e.target.dataset.uid){
        if(e.target.matches(".btn-success")){
            estudiantes.map(item =>{
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = true;
                  
                }
                console.log(item)
                return item;
            });
          

           

        }
        if(e.target.matches(".btn-danger")){
            estudiantes.map(item =>{
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = false;
                  
                }
                console.log(item)
                return item;
            });
      

           

        }
        Persona.pintarPersonaUI(estudiantes, "Estudiante");

    }
});

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        this.uid = `${Date.now()}`;
    }

    static pintarPersonaUI(personas, tipo){
        if(tipo === "Estudiante"){
            cardEstudiantes.textContent = "";
            const fragment =  document.createDocumentFragment();

            personas.forEach(item =>{
                fragment.appendChild(item.agregarNuevoEstudiante())
            })

            cardEstudiantes.appendChild(fragment);
        }
        if(tipo === "Profesor"){
            cardProfesores.textContent = "";
            const fragment =  document.createDocumentFragment();

            personas.forEach(item =>{
                fragment.appendChild(item.agregarNuevoProfesor());
            })

            cardProfesores.appendChild(fragment);
        }
    }
}

class Estudiante extends Persona{
    #estado = false;
    #estudiante = "Estudiante";

    set setEstado(estado){
        this.#estado = estado;
    }
    get getEstudiante(){
        return this.#estudiante
    }

    agregarNuevoEstudiante(){
        const clone = templateEstudiantes.cloneNode(true);
        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.getEstudiante;
        clone.querySelector('.lead').textContent = this.edad;

        if(this.#estado){
            clone.querySelector('.badge').className = "badge bg-success";
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;
        }else{
            clone.querySelector('.badge').className = "badge bg-danger";
            clone.querySelector('.btn-danger').disabled = true;
            clone.querySelector('.btn-success').disabled = false;
        }

        clone.querySelector('.badge').textContent = this.#estado ? "Aprobado" : "Reprobado";

        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;


        return clone;
    }
}

class Profesor extends Persona{
    #profesor = "profesor";
    agregarNuevoProfesor(){
        const clone = templateProfesores.cloneNode(true);
        clone.querySelector('h5').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.#profesor;
        clone.querySelector(".lead").textContent = this.edad;
        return clone;
    }
}

formulario.addEventListener("submit", e=> {
    e.preventDefault();
    alert.classList.add('d-none');
    const datos = new FormData(formulario);
    //datos.forEach(item => console.log(item))
    const [nombre,edad,opcion] = [...datos.values()]

    if (!nombre.trim() || !edad.trim() || !opcion.trim()) {
        alert.classList.remove('d-none');
        return
    }
    
    if(opcion === "Estudiante"){
        const estudiante = new Estudiante(nombre,edad)
        estudiantes.push(estudiante);
        Persona.pintarPersonaUI(estudiantes, opcion)
    }

    if(opcion === "Profesor"){
        const profesor = new Profesor(nombre,edad);
        profesores.push(profesor);
        Persona.pintarPersonaUI(profesores, opcion);
    }
    
})







// //funcion constructora

// function Persona (nombre){
//     this.nombre = nombre;
//     this.saludar = function(){
//         return `${this.nombre} dice hola`; 
//     };

//     // this.saludarIngles = function(){
//     //     return `${this.nombre} say hi!`
//     // }
// }

// Persona.prototype.saludarIngles = function(){
//          return `${this.nombre} say hi!`
//      };

// const juanito = new Persona("juanito");
// console.log(juanito.saludar())
// console.log(juanito.saludarIngles())
// console.log(juanito)

// class Persona {
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     get getNombre(){
//         return this.nombre;
//     }
//     set setNombre(nombre){
//         this.nombre = nombre;
//     }
//     saludar(){
//         return `${this.nombre} dice hola`;
//     }

//     static probarSaludo(nombre){
//         return `${nombre} probando saludo`
//     }
// }

// // const juanita = new Persona("juanita")
// // const pedrito = new Persona("pedrito")
// // juanita.setNombre = "juanito"
// // console.log(juanita.getNombre)
// // console.log(pedrito.saludar())

// // console.log(Persona.probarSaludo("pablo"))

// class Estudiante extends Persona{
    
//     #notas = []
//     // constructor(nombre, edad, notas = []){
//     //     super(nombre,edad);
//     //     this.notas = notas;
//     // }

//     set setNotas(nota){
//         this.#notas.push(nota);
//     }

//     get getNotas(){
//         return this.#notas;
//     }

//     saludar(){
//         return `${this.nombre} dice hola desde estudiante`;
//     }
// }

// const juanito = new Estudiante ("juani",15);
// juanito.setNotas = 7;
// juanito.setNotas = 5;
// juanito.setNotas = 1;

// console.log(juanito.getNotas)