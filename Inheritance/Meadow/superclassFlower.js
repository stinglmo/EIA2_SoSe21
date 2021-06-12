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
    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    class SuperclassFlower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    } // close class
    Inheritance.SuperclassFlower = SuperclassFlower;
})(Inheritance || (Inheritance = {})); // close namespace
//# sourceMappingURL=superclassFlower.js.map