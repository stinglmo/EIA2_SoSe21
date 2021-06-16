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
    class NormalBee extends Advanced.SuperclassBee {
        constructor(_x, _y) {
            super();
            // console.log("Create normalBee");
            // this.setRandomStyle();
        }
    }
    Advanced.NormalBee = NormalBee;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=normalBee.js.map