var matLib = require("./myMath");


function init() {
    console.log("Travis")

    residue = 15 % 2;
    var result = 15/2;
    console.log(result, residue);

    var res = matLib.smaller(2, 9);
    console.log(res);

    var res2 = matLib.smaller(543543, 543678564328564329);
    console.log(res2);

    var res3 = matLib.greater(334, 432324324);
    console.log(res3);

    var res4 = matLib.division(54432, 5);
    console.log(res4);

    var res5 = matLib.division(5, 0);
    console.log(res5);

    var res6 = matLib.toUpper("upper case");
    console.log(res6);
    
    var res7 = matLib.smaller(1,2);
    console.log(res7);

    var res8 = matLib.isEven(2);
    console.log(res8)

    var res9 = matLib.isEven(1);
    console.log(res9)

    var res10 = matLib.printEvents(1000);
    console.log(res10);
}
init();