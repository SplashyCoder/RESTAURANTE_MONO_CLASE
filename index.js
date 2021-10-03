const ejecutar = () =>{
    terminar = true
    let opc = prompt("Buenos dias, por fabor indique si es un empleado o es un cliente \n porfavor indiquelo con la palabra exacta")
        if(opc == "empleado"){
            let opc_2 = prompt("Desea saber su total de ventas o modificar el menú \n (1)Total (2)Modificar menú")
                if(opc_2 == 1){
                    ganancias()
                }else if(opc_2 == 2){
                    let opc_3 = prompt("(1)Añadir (2)Eliminar")
                    if(opc_3 == 1){
                        comida = prompt("Ingrese el nombre de la comida")
                        precio= prompt("Ingrese el precio de la comida")
                        editar_añadir(comida, precio)
                        return show_menu(menu ,1)
                    }else if(opc_3 == 2){
                        return show_menu(menu ,1)
                        id = prompt("Ingrese el Id de la comida")
                        editar_eliminar(id)
                    }
                }
        }else if(opc == "cliente"){
            askForProduct()
        }
        else{
            console.log("Opcion invalida ingresela nuevamente")
            
        }   
}
let menu= [ 
    {
        nombre: "Hamburgesa",
        costo: 10000,
        id: 1
    },
    {
        nombre: "Perro Caliente",
        costo: 8000,
        id: 2
    },
    {
        nombre: "Papas fritas",
        costo: 5000,
        id: 3
    },
    {
        nombre: "Gaseosa",
        costo: 2000,
        id: 4
    },
    {
        nombre: "Pizza",
        costo: 3500,
        id: 5
    }
]

// Arrow function para mostrar el menu o el pedido del usuario
//meus es para diferenciar si se va a mostrar el menu o el pedido y opc para el formato de impresion en consola
const show_menu = (menus, opc = 0) =>{
    for(let comida of menus){
        // menu
        if(opc == 1){
            console.log(`${comida.nombre} - precio ${comida.costo}- id ${comida.id}`)
        //pedido
        }else{
            console.log(`${comida.nombre} - precio ${comida.costo}`)
        }
    }
}
//Arrow function para añadir objetos al menu/
const editar_añadir = (nombre, costo) =>{
    //Toma el numero de objetos en el string para asi añadirlo al ultimo espacio y obtener el atributo id del objeto /
    let pocision = menu.length
    //Añade el objeto /
    menu.push({
        nombre:nombre,
        costo:costo,
        id:pocision+1
    })
    return show_menu(menu ,0)
}

const editar_eliminar = (id) =>{
    //El metodo splice remueve un elemento teniendo en cuenta el id del mismo y que el segundo atributo es la cantidad de elementos a remover /
    let remover = menu.splice(id--,1)
    return show_menu(menu ,0)
} 
// Array para guardar el pedido del usuario
const pedido = []
// Num para el precio final del pedido
let costo_pedido = 0

//Arrow function para poder elegir la comida del menu

//Valida por el id del producto si este existe en el menu y en caso de que si lo añade al pedido
const askForProduct = cod =>{
    //Valida que se use un id numerico
    if(!cod) return "Este es un codigo invalido"

    //Valida por el id del producto si este existe en el menu
    const find_product = menu.find( menu => menu.id === cod)
    if (!find_product) return "El producto no existe"


    pedido.push(find_product)
    console.log("El producto se ha agregado al pedido")
    return show_menu(pedido,0)
    let final = prompt("¿Desea termiar su pedido \n escriba si o no")
    if (final == "si")calcularCosto()
    //Envia los datos del pedido para que se sumen al total de platos ordenados en el dia
    ganancias(0,pedido)
}


const calcularCosto = () =>{
    let costo = 0
    // Recorre el Array pedido para sumar los costos de todos productos
    for(producto of pedido){
        costo += producto.costo
    }
    costo_pedido = costo
    return `El costo de su pedido es de ${costo_pedido}`
    // Envia los datos del costo para que se sumen el total de ganancias del dia
    ganancias(costo_pedido,0)
}

const ganancias = (total, producto) =>{
    let servido = []
    let ganado = 0
    //Ganacias totales
    ganado += producto
    // total de platos ordenados
    servido.push(producto)
    return `El total de comidas servidas es \n ${show_menu(servido,1)}`
    return `El total de las ganancias es de ${ganado}`

}


