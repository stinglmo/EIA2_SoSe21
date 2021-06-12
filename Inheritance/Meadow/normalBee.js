"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Inheritance;
(function (Inheritance) {
    class NormalBee extends Inheritance.SuperclassBee {
        constructor(_x, _y) {
            super();
            console.log("Create normalBee");
            // this.setRandomStyle();
        }
    }
    Inheritance.NormalBee = NormalBee;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=normalBee.js.map