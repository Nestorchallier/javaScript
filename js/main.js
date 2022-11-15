// array de objetos de pizza

const Pizzas = [
    {
        id: 1,
        nombre: "Pizza de Muzzarella",
        precio: 500,
        ingredientes:["Maza: (harina, huevos, aceite), salsa, muzzarella, aceitunas"],

    },
    {
        id: 2,
        nombre: "Pizza Napolitana",
        precio: 850,
        ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, tomate, ajo, aceitunas"],

    },    {
        id: 3,
        nombre: "Pizza Calabresa",
        precio: 450,
        ingredientes: ["Maza: (harina, huevos, aceite), salsa, longaniza,  aceitunas"],

    },    {
        id: 4,
        nombre: "Pizza Fugazeta",
        precio: 700,
        ingredientes: ["Maza: (harina, huevos, aceite), muzzarella, cebolla, aceitunas "],

    },    {
        id: 5,
        nombre: ["Pizza Fiesta"],
        precio: 600,
        ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, anana, aceitunas"],

    },    {
        id: 6,
        nombre: "Pizza party",
        precio: 900,
        ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, ajo y perejil, chorrizo colorado, aceitunas"],

    },    {
        id: 7,
        nombre: "Pizza zapi",
        precio: 680,
        ingredientes: ["Maza: (harina, huevos, aceite), salsa, muzzarella, roquefort, provolone, aceitunas"],

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

const hayPizzasConPrecioMenorA = (precio) => {
    return Pizzas.some((Pizza) => {
        return Pizza.precio > precio;
    })
        ? console.log(`Hay pizzas con precio menor a $${precio}`)
        : console.log(`No hay pizzas con precio mayor a $${precio}`);
};

hayPizzasConPrecioMenorA(600)

// El nombre de cada pizza con su respectivo precio Ejercicio C

const NombresDeLasPizzas = Pizzas.filter((Pizzas) => {
    return Pizzas.nombre && Pizzas.precio;
}
);

NombresDeLasPizzas.forEach((Pizzas) => {
    console.log(
        `las pizzas que tenemos son, ${Pizzas.nombre} y vale $${Pizzas.precio}.`
    );
});

// ingredientes de cada pizza Ejercicio D

const ingredientesDeLasPizzas = Pizzas.filter((Pizzas) => {
    return Pizzas.nombre && Pizzas.ingredientes;
}
);

ingredientesDeLasPizzas.forEach((Pizzas) => {
    console.log(
        `Tenemos: ${Pizzas.nombre} los ingredientes son ${Pizzas.ingredientes}.`
    );
});
