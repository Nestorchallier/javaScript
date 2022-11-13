// array de objetos de pizza

const Pizzas = [
    {
        id: 1,
        nombre: "Piza de Muzzaerella",
        precio: 500,
        ingredientes:["Maza, salsa,muzzarella, aceitunas"],

    },
    {
        id: 2,
        nombre: "Pizza Napolitana",
        precio: 850,
        ingredientes: ["Maza, salsa, muzzarella, tomate, ajo, aceitunas"],

    },    {
        id: 2,
        nombre: "Pizza Calabresa",
        precio: 450,
        ingredientes: ["Maza, salsa, longaniza,  aceitunas"],

    },    {
        id: 3,
        nombre: "Pizza Fugazeta",
        precio: 700,
        ingredientes: ["Maza, muzzarella, cebolla, aceitunas "],

    },    {
        id: 4,
        nombre: ["Pizza Fiesta"],
        precio: 600,
        ingredientes: ["Maza, salsa, muzzarella, anana, aceitunas"],

    },    {
        id: 5,
        nombre: "Pizza party",
        precio: 900,
        ingredientes: ["Maza, salsa, muzzarella, ajo y perejil, chorrizo colorado, aceitunas"],

    },    {
        id: 6,
        nombre: "Pizza zapi",
        precio: 680,
        ingredientes: ["Maza, salsa, muzzarella, roquefort, provolone, aceitunas"],

    },
];

// Pizzas con idIMpar Ejercicio A

const idImpares = Pizzas.filter((Pizza) => {
    return Pizza.id % 2 === 0;
});
idImpares.forEach((Pizza) => {
    console.log(`las Pizzas ${Pizza.nombre} tiene id Impar`);
});

// Precio menor A Ejercicio B

const precioMenorA = (precio) => {
    const pizzasFiltradas = Pizzas.filter((Pizza) => {
        return Pizza.precio < precio;
    });
    return pizzasFiltradas;
};

console.log(precioMenorA(600));