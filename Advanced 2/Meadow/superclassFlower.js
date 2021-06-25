"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced2;
(function (Advanced2) {
    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    class SuperclassFlower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        updateNectarLevel() {
            if (this.nectarLevel < 1) {
                this.fillNectarLevel();
            }
        }
        // Nectarlevel
        fillNectarLevel() {
            this.nectarLevel += 0.05;
            // if (this.nectarLevel >= 1 && this.nectarLevel <= 1.4) {
            //     fullFlower.push(flower);
            // }
            // }
        }
    } // close class
    Advanced2.SuperclassFlower = SuperclassFlower;
})(Advanced2 || (Advanced2 = {})); // close namespace
//# sourceMappingURL=superclassFlower.js.map