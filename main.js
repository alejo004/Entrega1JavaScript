let pizzas = [
{
    id: 1,
    nombre: `Fugazzeta`,
    ingredientes: [
        "muzarella",
        "cebolla",
        "masa",
        "oregano",
        "pimienta",
        ],
    precio: 1200,
},
{
    id: 2,
    nombre: `Muzarella`,
    ingredientes: [
        "muzarella",
        "salsa",
        "masa",
        ],
    precio: 900,
},
{
     id: 3,
    nombre: `Tropical`,
    ingredientes: [
        "anana",
        "pera",
        "jamon",
        "queso",
        "guindas",
        ],
    precio: 1600,
},
{   
     id: 4,
    nombre: `Palmitos`,
    ingredientes: [
        "palmitos",
        "tomate frito",
        "jamon",
        "aceitunas negras",
        "oregano",
        ],
    precio: 1550,
},
{
     id: 5,
    nombre: `Napolitana`,
    ingredientes: [
        "muzarella",
        "tomates frescos",
        "ajo",
        "perejil",
        "aceite de oliva",
        ],
    precio: 1260,
},
{
     id: 6,
    nombre: `Hawaiana`,
    ingredientes: [
        "miel",
        "jitomates",
        "anana en cubos",
        "jamon en cubos",
        "queso machengo",
        ],
    precio: 1730,
},
]

// actividad a, pizzas con id impar

console.log("Las pizzas con id impar son:");
console.log(" ");

let pizzasImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);

pizzasImpar.forEach(pizza => console.log(`La pizza ${pizza.nombre} tiene id impar`));

console.log(" ");
// actividad b, pizzas que valgan menos de $600
console.log("¿Alguna pizza vale menos de $600?");

const pizzasMenosDe600 = pizzas.some(pizza => pizza.precio < 600);
console.log(`Ninguna vale menos de $600`);

console.log(" ");
// actividad c, cada pizza con su nombre

console.log("Estas son las pizzas que nos quedan y sus precios:");
console.log(" ");
pizzas.forEach(pizza => console.log(`${pizza.nombre}, vale $${pizza.precio}`));

console.log(" ");
// actividad d, sus ingredientes

console.log("Todos los ingredientes de cada pizza son:");
console.log(" ");
pizzas.forEach(pizza => {
    console.log(`Los ingredientes de la pizza ${pizza.nombre} son:`);
    pizza.ingredientes.forEach(ingrediente => console.log(ingrediente));
    console.log(" ");
});