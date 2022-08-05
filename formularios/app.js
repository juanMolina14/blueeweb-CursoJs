// const userName = document.querySelector("input[name='userName']");
// const userEmail = document.querySelector("input[name='userEmail']");


const formulario = document.querySelector("#formulario");
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')
const alertSuccess = document.getElementById('alertSuccess')
const alertName = document.getElementById('alertName')
const alertEmail = document.getElementById('alertEmail')


const regUserName = /([ ]{2,})|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

const pintarMensajeExito = () =>{
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje Enviado con exito";
}

const pintarMensajeError = (errores) => {
    console.log("funciona pintarErores")
    errores.forEach(element => {
        element.tipo.classList.remove("d-none");
        element.tipo.textContent = element.msg;
        // element.tipo.classList.add("is-invalid")
    });
}

formulario.addEventListener('submit', e =>{
    e.preventDefault();

    alertSuccess.classList.add("d-none");
    const errores = []

    //esto devuelve true si existen espacios ->
    //console.log(!userName.value.trim())


    if(!regUserName.test(userName.value) || !userName.value.trim()){
        userName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg : "Formato no valido en el campo nombre, solo letras"
        })
             
    }else{
        alertName.classList.add("d-none")
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
    }

 

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg : "Escriba un mail valido"
        }) 
    }else{
        alertEmail.classList.add("d-none")
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
    }

    if(errores.length !== 0){
        pintarMensajeError(errores);
        return;
    }
 
    pintarMensajeExito();

})