"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced;
(function (Advanced) {
    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    class SuperclassFlower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    } // close class
    Advanced.SuperclassFlower = SuperclassFlower;
})(Advanced || (Advanced = {})); // close namespace
//# sourceMappingURL=superclassFlower.js.map