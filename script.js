console.log("Esto es JS en otro fuente ");

const h1 = document.querySelector('h1');

const p1 = document.querySelector('p');      //selecciona el primero que encuentra
const p2 = document.querySelectorAll('p');   //selecciona varios

const pclass1 = document.querySelector('.pclass');  //si uso selector tengo que indcar . para una clase 
const pclass2 = document.getElementsByClassName('pclass');

const pid1 = document.querySelector('#pid');        //si uso selector tengo que indcar # para un id
const pid2 = document.getElementById('pid');

const input = document.querySelector('input');

console.log({
    h1,
    p1,
    p2,
    pclass1,
    pclass2,
    pid1,
    pid2,
    input
});

console.log(h1.innerText);

h1.innerHTML= 'Con innerHTML <br> me toma el salto de linea';      //innerHTML hace que interprete codigo HTML 
p1.innerText = 'con innertext <br> no es interpretado';            //no interpreta el <br> 


console.log(h1.getAttribute('pepe'));
h1.setAttribute('pepe', 'rojo');

p1.classList.add('efg');


//insertar imagen 
const img = document.createElement('img');  //creo elemento html
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');  //asigno valor a la propiedad src
console.log(img);   //muestra por consola el codigo, no la imagen

pid1.innerHTML = "";     //borro el contenido actual de esa cajita
pid1.appendChild(img);   //asingo nuevo valor a esa cajita


//interactuando con el usuario:
const input1 = document.querySelector('#var1');
const input2 = document.querySelector('#var2');
const boton1 = document.querySelector('#btn1');
const boton2 = document.querySelector('#btn2');
const boton3 = document.querySelector('#btn3');
const res1 = document.querySelector('#res1');
const res2 = document.querySelector('#res2');
const form1 = document.querySelector('#formito');

//boton3.addEventListener('click', btnClick)    //se le indica ('evento', funcion a llamar sin parentesis)
form1.addEventListener('submit', btnClick)

//function btnClick() {
function btnclick(event) {              //cuando lo llamo por eventListner del form, puedo tomar el evento 
    //console.log('apretó boton2');

    event.preventDefault();             //evito que ejecute la acion x defaul, que como asume que el evento es submit, recarga y no quiero

    const total1 = input1.value + input2.value;
    const total2 = parseInt(input1.value) + parseInt(input2.value) ;

    res1.innerText = "Contatena: " + total1;
    res2.innerText = "Suma: " + total2;
}

