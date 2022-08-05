//para definir la expresion como objeto-->  const regExpObjeto = new RegExp("jDv","i")

//busca una expresion igual, la "i" es para no diferenciar may de min const regExp = /jDv/i
//busca los caracteres specificados--> const regExp = /[jv]/i
//busca una exp o la otra --> const regExp = /jDv|jDdv/i
//busca digitos de 0 a 9 --> const regExp = /[0-9/
//busca letras mayusculas de la A a la Z - Excluye ñ o letras ecentuadas --> const regExp = /[A-Z]/
//busca letras minusculas de la a a la z - Excluye ñ o letras ecentuadas --> const regExp = /[a-z]/
//solo numeros --> const regExp = /^\d+$/gi;
//solo letras sin tilde const regExp = /^[a-zA-Z ]*$/;
//solo letras con tilde const regExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
//solo emails const regExp = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/



const regExp =  /[A-Za-z0-9]/i;


console.log(regExp.test(" "))
