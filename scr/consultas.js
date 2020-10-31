db.inventory.find()
 //muestra todos los documentos de la base de datos

db.inventory.find({"item":"planner"}).pretty()
 //muestra un documento/s con el requisito concretado(item:planner)

db.inventory.find({"status":"A","qty":{ $gte:45 } } ).pretty()
//muestra los documentos cuyo status es A y la cantidad igual o superior a 45 mediante un and impícito

db.inventory.find({ "size": { $in: [{h: 1, w: 10, uom: "in"}, {h: 30, w: 10.5, uom: "cm"} ] } } ).pretty()
//muestra los documentos con dos medidas concretas

db.inventory.find( { qty: { $not: { $gte: 30 } }, "status":"D" } )
//muestra el documento cuya cantidad NO sea mayor o igual a 30 y que tenga el estado D

db.inventory.find( { $and: [{status: "D",  qty: { $gte: 30 } } ] } ).pretty()
//devuelve documentos cuyo status tenga D con una cantidad igual o superior a 30 con un and exlpícito

db.inventory.find( {$and:[{status: "A",  size: {h: 1, w: 10, uom: "in" }}]}).pretty()
//devuelve el documento cuyo status sea A con unas medidas concretas con un and explícito


db.inventory.find( { $and: [
        { $or: [ { qty: { $lt : 10 } }, { qty : { $gt: 50 } } ] },
        { $or: [ { "status":"D" }, { size: {h: 1, w: 10, uom: "in" } }] }
    ]} ).pretty()
//Devuelve los documentos cuya cantidad NO esté entre 10 y 50 Y que cuyo estado sea D o con unas medidas en concreto, mediante un and explícito y el or

db.inventory.find({ $or: [
    {$and:[{status:"A", qty:{$gt:50}}]},
    {$and:[{status:"D", qty:{$lt:15}}]},
]}).pretty()
//devuelve documentos que sean A y con mucha cantidad, o que sean D con muy poca cantida, mediante un and explícito y el or

db.inventory.find( { offer: { $exists: true, $gte: 40 } } ).pretty()
//devuelve los documentos que tengan el dato "oferta" y que sea superior del 40%, mediante una validación del exists

db.inventory.find({offer: {$exists:false}, "qty": {$gte:50} } ).pretty()
//muestra los productos que no estén en oferta y estén amontonándose(una cantidad mayor a 50), con and implícito







