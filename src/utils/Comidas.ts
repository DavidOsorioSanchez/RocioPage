export const comidas= [
    {
        id: 0,
        modalAbierto: false,
        bgImage: "curry.webp",
        title: "Pollo al curry",
        price: 25,
        descripcion: "Trae una porcion de pollo al curry, acompañado de una porcion de garbanzos guisados y una porcion de arroz con fideos. Opcional con picante.", 
        imagenes: ["curry.webp"],
        picante: true,
        categoria: ['Indu'],
        porciones: 1,
        gramos: 300,
        URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20un%20curry🍛.",
        Funcion: "Cena"
    },
    {
        id: 1,
        modalAbierto: false,
        bgImage: "pasta.webp",
        title: "pasta boloñesa",
        price: 20,
        descripcion: "Trae una porcion de pasta, acompañado de una salsa boloñesa, con carne molida y especias. ademas de una porcion de pan de ajo.",
        imagenes: ["pasta.webp"],
        picante: false,
        categoria: ['Italiana', "Cena"],
        porciones: 1,
        gramos: 400,
        URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20una%20Pasta%20boloñesa🍝.",
        Funcion: "Cena"
    },
    {
        id: 2,
        modalAbierto: false,
        bgImage: "burritos.jpeg",
        title: "Burritos",
        price: 15,
        descripcion: "Trae tortilla de harina, carne en fajitas, frijoles refritos, queso rallado, guacamole y crema agria. Opcional se puede incluir salsa picante sin costo extra.",
        imagenes: ["burritos.jpeg"],
        picante: true,
        categoria: ['Mexicano'],
        porciones: 1,
        gramos: 400,
        URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20un%20burrito🌯.",
        Funcion: "Cena"
    },
    {
        id: 3,
        modalAbierto: false,
        bgImage: "rolloCarne.webp",
        title: "Rollo de carne",
        price: 50,
        descripcion: "Envuelto en tocineta, 1 kilo de carne molida, relleno con jamon, queso y huevo.",
        imagenes: ["rolloCarne.webp"],
        picante: false,
        categoria: ['Colombiano'],
        porciones: 8,
        gramos: 1000,
        URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20un%20rollo%20de%20carne🍖.",
        Funcion: "Cena"
    },
    {
        id: 4,
        modalAbierto: false,
        bgImage: "sopon.jpeg",
        title: "Sopon Marinero",
        price: 35,
        descripcion: "Trae una variedad de mariscos, camarones, pescado y calamares, todo esto en leche de coco. Adicionalmente, trae una porcion de arroz con coco y una porcion de patacones. Opcional con picante.",
        imagenes: ["sopon.jpeg", "sopon2.jpeg"],
        picante: true,
        categoria: ['Costa pacifico'],
        porciones: 1,
        gramos: 350,
        URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20un%20sopon%20marinero🍲.",
        Funcion: "Cena"
    },
    {
        id: 5,
        modalAbierto: false,
        bgImage: "apple.webp",
        title: "Pastel de manzana",
        price: 20,
        descripcion: "Deliciosa torta de manzanas frescas caramelizadas con canela y pasta hojaldrada.",
        imagenes: ["apple.webp" , "pieSlide.webp"],
        picante: false,
        categoria: ['Postre', 'Americano'],
        porciones: 10,
        gramos: 1000,
        URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20una%20pie%20de%20manzana🥧.",
        Funcion: "Postre"
    },
    // {
    //     id: 5,
    //     modalAbierto: false,
    //     bgImage: "yogurt.jpeg",
    //     title: "Yogurt",
    //     price: 20,
    //     descripcion: "El yogurt es una receta de origen Turcos 🇹🇷. Adicionado de frutas, es un postre delicioso y rico en nutrientes.",
    //     imagenes: ["yogurt.jpeg"],
    //     picante: false,
    //     categoria: ['Postre', 'Desayuno', 'Bebida'],
    //     URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20un%20litro%20de%20yogurt🥛."
    // },
    {
        id: 6,
        modalAbierto: false,
        bgImage: "ArrozLeche.webp",
        title: "Arroz con leche",
        price: 5,
        descripcion: "Cremoso arroz con leche, es un postre tradicional de la cocina colombiana. Se elabora con arroz, leche, crema de leche, canela y azucar.",
        imagenes: ["ArrozLeche.webp"],
        picante: false,
        categoria: ['Postre', 'Desayuno', 'Colombiano'],
        porciones: 1,
        gramos: 250,
        URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20arroz%20con%20leche🍚.",
        Funcion: "Postre"
    },
    {
        id: 7,
        modalAbierto: false,
        bgImage: "Kefir.jpeg",
        title: "Kefir",
        price: 20,
        descripcion: "El kefir es una receta de origen Rusos 🇷🇺. Una bebida deliciosa y rica en probioticos.",
        imagenes: ["Kefir.jpeg"],
        picante: false,
        categoria: ['Postre', 'Bebida'],
        porciones: 1,
        gramos: 250,
        URL: "https://wa.me/573104745978?text=¡Hola!%20Quiero%20Ordenar%20un%20litro%20de%20kefir🥛.",
        Funcion: "Bebida"
    }
]

export const PlatoFuerte = comidas.filter((comida) => comida.Funcion.toLowerCase() === 'cena' || comida.Funcion.toLowerCase() === 'almuerzo');

export const Desayuno = comidas.filter((comida) => comida.Funcion.toLowerCase() === 'desayuno');

export const Postre = comidas.filter((comida) => comida.Funcion.toLowerCase() === 'postre');

export const Bebida = comidas.filter((comida) => comida.Funcion.toLowerCase() === 'bebida');