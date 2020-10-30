db.inventory.find() //muestra todos los documentos de la base de datos
db.inventory.find({"item":"planner"}) //muestra un documento/s con el requisito concretado(item:planner)
db.inventory.find({"status":"A","qty":{$gte:45}}) //muestra los documentos cuyo status es A y la cantidad superior a 45 mediante un and impícito
db.inventory.find( { $and: [ { "status": { $ne:"A"  } }, { "h": {$gte:20} }, { "w": {$gte:15} } ] } )
