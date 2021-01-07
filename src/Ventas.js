db.ventas.insertMany([
{_id: "1", 
articulo: "vestido", 
PVP: 15, 
unidades: 76, 
Fechaventa: new Date("2020-03-17"), 
PVE: 100, 
cliente: "Santiago", 
vendedor: "Alejandro" },
{_id: "2", articulo: "chaqueta", PVP: 29, unidades: 45, Fechaventa: new Date("2020-02-17"), PVE: 521, cliente: "María", vendedor: "Alejandro" },
{_id: "3", articulo: "camisa", PVP: 10, unidades: 83, Fechaventa: new Date("2020-04-17"), PVE: 1000, cliente: "Fernando", vendedor: "Leonor" },
{_id: "4", articulo: "camiseta", PVP: 14, unidades: 165, Fechaventa: new Date("2020-03-17"), PVE: 5000, cliente: "María", vendedor: "Manuela" },
{_id: "5", articulo: "camisón", PVP: 20, unidades: 42, Fechaventa: new Date("2020-01-17"), PVE: 50, cliente: "Manuel", vendedor: "Pepe" },
{_id: "6", articulo: "vaquero", PVP: 25, unidades: 12, Fechaventa: new Date("2020-02-17"), PVE: 999, cliente: "María", vendedor: "Alejandro" },
{_id: "7", articulo: "falda", PVP: 25, unidades: 16, Fechaventa: new Date("2020-04-17"), PVE: 1000, cliente: "Elena", vendedor: "Pepe" },
{_id: "8", articulo: "blusa", PVP: 19, unidades: 43, Fechaventa: new Date("2020-05-17"), PVE: 165, cliente: "Elena", vendedor: "Manuela" },
{_id: "9", articulo: "jersey", PVP: 45, unidades: 23, Fechaventa: new Date("2020-03-17"), PVE: 278, cliente: "Santiago", vendedor: "Manuela" },
{_id: "10", articulo: "bolso", PVP: 76, unidades: 14, Fechaventa: new Date("2020-02-17"), PVE: 231, cliente: "Elena", vendedor: "Alejandro" },
{_id: "11", articulo: "maquillaje", PVP: 34, unidades: 3, Fechaventa: new Date("2020-07-17"), PVE: 532, cliente: "Santiago", vendedor: "Alejandro" },
{_id: "12", articulo: "perfume", PVP: 34, unidades: 4, Fechaventa: new Date("2020-03-17"), PVE: 765, cliente: "María", vendedor: "Leonor" },
{_id: "13", articulo: "colonia", PVP: 35, unidades: 2, Fechaventa: new Date("2020-04-17"), PVE: 213, cliente: "Santiago", vendedor: "Pepe" },
{_id: "14", articulo: "cojín", PVP: 64, unidades: 54, Fechaventa: new Date("2020-05-17"), PVE: 121, cliente: "Elena", vendedor: "Manuela" },
{_id: "15", articulo: "manta", PVP: 29, unidades: 46, Fechaventa: new Date("2020-01-17"), PVE: 213, cliente: "Manuel", vendedor: "Leonor" },
{_id: "16", articulo: "sábana", PVP: 39, unidades: 4, Fechaventa: new Date("2020-02-17"), PVE: 876, cliente: "Santiago", vendedor: "Alejandro" }])

//Mostrar los beneficios totales de todas las ventas

db.ventas.aggregate([
    {$group:
    {_id: null, Beneficios: {$sum: {$multiply: [ "$PVP", "$unidades" ] } }}}
    ])

//Mostrar la media entre el PVP y el PVE del maquillaje

db.ventas.aggregate([
    {$match: {articulo: "maquillaje"}},
    {$group: {_id : null, MediaMaquillaje: {$sum: {$avg: ["$PVE", "$PVP"]}}}}])

//Mostrar el importe total de los bolsos al cliente

db.ventas.aggregate([
    {$match: {articulo: "bolso"}},
    {$group: {_id : null, Importe_total: {$sum: {$multiply: ["$PVP", "$unidades"]}}}}])

//Mostrar el máximo de unidades de un producto 

db.ventas.aggregate([
    {$group:
    {_id: null, Max_unidades: {$max: "$unidades"}}}
    ])