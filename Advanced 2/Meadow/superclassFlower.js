"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 26.06.21
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
        spendNectar() {
            let nectar = this.nectarLevel -= 0.5;
            return nectar;
        } // erst wenn Nectar 0, wird sie aus dem Array rausgelöscht
        update() {
            this.fillNectarLevel();
        }
        // Nectarlevel
        fillNectarLevel() {
            if (this.nectarLevel < 1) {
                this.nectarLevel += 0.05;
            }
            else {
                this.nectarLevel = 1;
                if (Advanced2.fullFlower.indexOf(this) < 0) { // wenn die Blume noch nicht im Array ist
                    Advanced2.fullFlower.push(this);
                }
                else if (this.nectarLevel == 0) {
                    Advanced2.fullFlower.splice(Advanced2.fullFlower.indexOf(this)); // wieder aus dem Array raus
                }
            }
        }
    } // close class
    Advanced2.SuperclassFlower = SuperclassFlower;
})(Advanced2 || (Advanced2 = {})); // close namespace
//# sourceMappingURL=superclassFlower.js.map