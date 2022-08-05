// localStorage.setItem("sandia", "🍉");
// localStorage.setItem("banana", "🍌");

// if (localStorage.getItem("banana")) {
//     const banana = localStorage.getItem("banana")
//     console.log(banana);
    
// }

//localStorage.removeItem("banana")
// localStorage.clear();


// const frutas = [
//     {
//         nombre: "🍌",
//         color: "amarillo"
//     },
//     {
//         nombre: "🍎",
//         color: "rojo"
//     },
//     {
//         nombre: "🍐",
//         color: "amarillo"
//     }
// ]

// localStorage.setItem("frutas", JSON.stringify(frutas))


// if (localStorage.getItem("frutas")) {
//     const frutasLocal = JSON.parse(localStorage.getItem("frutas"))
//     console.log(frutasLocal)
    
// }

//----------------practica------------------------------
const alert = document.querySelector(".alert");
const formulario = document.querySelector("#formulario");
const pintarTodo = document.querySelector("#pintarTodo"); 
const templateToDo = document.querySelector("#templateToDo").content;

let todos = [];



const agregarTodo = todo =>{
    const objetoTodo ={
        nombre: todo,
        id: `${Date.now()}`
    }
    todos.push(objetoTodo);
}

const pintarTodos = () =>{

    localStorage.setItem('todos', JSON.stringify(todos))
    pintarTodo.textContent = "";
    const fragment = document.createDocumentFragment();

    todos.forEach(item =>{
        const clone = templateToDo.cloneNode(true);
        clone.querySelector('.lead').textContent = item.nombre;
        clone.querySelector('.btn').dataset.id = item.id;
       
        fragment.appendChild(clone);
    })

    pintarTodo.appendChild(fragment);
}

document.addEventListener("click", e=>{
    // console.log(e.target.dataset.id)
    // console.log(e.target.matches(".btn-danger"))
    if (e.target.matches(".btn-danger")) {
        // console.log("diste click a eliminar con id "+ e.target.dataset.id)
        todos = todos.filter(item => item.id !== e.target.dataset.id); 
        pintarTodos();
    }
});

formulario.addEventListener("submit", e =>{
    e.preventDefault();
    alert.classList.add('d-none');
   
 
    const data = new FormData(formulario);
    const [todo] = data.values();

    if(!todo.trim()){
        
        alert.classList.remove('d-none');
        return;
    }

    agregarTodo(todo);
    pintarTodos();
   
});

document.addEventListener('DOMContentLoaded', e =>{
    
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
        pintarTodos();
    }
})