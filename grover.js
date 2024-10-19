// Exercicios para aprender JavaScript, por Grover Vásquez en su curso de Udemy

// USO DE VARIABLES
/* console.log("Hola a todos");
console.log(5 + 5);

var nombre = "Grover";
console.log(nombre);
console.log(typeof(nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);
puestoDeTrabajo = null;
console.log(puestoDeTrabajo); */

// OPERADORES MATEMATICOS +, -, *, /

/* var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2024;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;
yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació Maria ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2); */ 

// OPERADORES LÓGICOS, UNARIOS Y DE ASIGNACIÓN

// Lógicos <, >, <=, >=, ==   ----- utilizados para hacer comparaciones

/* var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

// Unarios ++ Incremento, -- Decremento

edadAna++;
console.log(edadAna);

// Asignación +=, -=, *=, /=, %=
var a = 11;
var b = 5;
var c = a % 5;     //Residuo o resto de una división. 5*2 = 10. Me devuelve 1 de 11.
console.log(c);

a += b;            // a = a + b;
console.log(a); */

// SENTENCIAS Y ESTRUCTURAS DE CONTROL: if else, if anidados, switch, for, while, do while 

// If Else     if (contition) sentencia1 [else sentencia 2]

/* var nombre = "Grover";
var esCasado = false;

if (esCasado == true) {
    console.log(nombre + ' es casado ')
} else {
    console.log(nombre + ' es soltero')
}  */

// SENTENCIAS LÓGICAS   Not, And, Or

/* var nombre = "Grover";
var edad = 63;

// edad < 12 es un niño
// edad > 11 es < 18, es un adolescente
// edad > 17, es < 60, es un adulto
// edad > 60, es un anciano

if (edad < 12) {
    console.log(nombre + ' es un niño ');
} else if((edad > 11) && (edad < 18)) {
    console.log(nombre +  ' es un adolescente ');
} else if((edad > 17) && (edad < 60)) {
console.log(nombre + ' es un adulto ')
} else {
    console.log(nombre + ' es un anciano')
} */ 

// SENTENCIA SWITCH 



