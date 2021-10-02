const ejecutar = () =>{
    terminar = true
    let opc = prompt("Buenos dias, por fabor indique si es un empleado o es un cliente \n porfavor indiquelo con la palabra exacta")
    //while(terminar == true){
        if(opc == "empleado"){
            let opc_2 = prompt("Desea saber su total de ventas o modificar el menú \n (1)Total (2)Modificar menú")
                if(opc_2 == 1){
                    let opc_3 = prompt("(1)Añadir (2)Eliminar")
                    if(opc_3 == 1){
                        comida = prompt("Ingrese el nobre de la comida")
                        precio= prompt("Ingrese el precio de la comida")
                        id= prompt("Ingrese el Id de la comida")
                        editar_añadir(comida, precio, id)
                    }else if(opc_3 == 2){
                        show_menu()
                        id = prompt("Ingrese el Id de la comida")
                        editar_eliminar(id)
                    }

                }else if(opc_2 == 2){

                }

        }else if(opc == "cliente"){
            terminar = false   
        }
        else{
            console.log("Opcion invalida ingresela nuevamente")
            
        }   
    //}

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
const show_menu = () =>{
    for(let comida of menu){
        console.log(`${comida.nombre} - precio ${comida.costo}- id ${comida.id}`)
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
}

const editar_eliminar = (id) =>{
    //El metodo splice remueve un elemento teniendo en cuenta el id del mismo y que el segundo atributo es la cantidad de elementos a remover /
    let remover = menu.splice(id,1)
    console.log(menu)
} 
