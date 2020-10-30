db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);

 db.inventory.insertMany([
    { item: "pen", qty: 35, size: { h: 3.5, w: 6, uom: "cm" }, status: "A" },
    { item: "pencil", qty: 125, size: { h: 1, w: 10, uom: "in" }, status: "A" },
    { item: "marker", qty: 58, size: { h: 3, w: 8, uom: "in" }, status: "A" },
    { item: "bag", qty: 50, size: { h: 20.5, w: 21, uom: "cm" }, status: "D" },
    { item: "flag", qty: 6, size: { h: 30, w: 10.5, uom: "cm" }, status: "D" },
    { item: "case", qty: 25, size: { h: 5, w: 15, uom: "in" }, status: "A" },
    { item: "ruler", qty: 13, size: { h: 30, w: 5, uom: "cm" }, status: "A" },
    
 ])