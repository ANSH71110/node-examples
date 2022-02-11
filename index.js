const rectangle = require('./rectangle');
var rect=require('./rectangle');/*{
    perimeter:(x,y)=> (2*(x+y)),
    area:(x,y)=> (x*y)
};*/

function solveRect(l,b) {
    console.log("\nSolving for rectangle with l="+l+" b="+b);
    rect(l,b,(err,rectangle)=>{
        if(err){
             console.log("ERROR: ",err.message);
        }
        else{
            console.log("Area of Rectangle="+rectangle.area(l,b));
            console.log("Perimeter of Rectangle="+rectangle.perimeter(l,b));
        }
    });
    console.log("This statement is after the call to Rectangle");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-1,-1);