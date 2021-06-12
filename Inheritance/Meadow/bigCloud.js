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
    class BigCloud extends Inheritance.SuperclassCloud {
        constructor(x, y) {
            super(x, y);
            this.moveForward();
            this.drawCloud2();
        }
        // Methode drawCloud 2
        drawCloud2() {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            Inheritance.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            Inheritance.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            Inheritance.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            Inheritance.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fillStyle = "#FFFFFF";
            Inheritance.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * (+0.04); // - nach links und + nach rechts           
        }
    } // close class
    Inheritance.BigCloud = BigCloud;
})(Inheritance || (Inheritance = {})); // close namespace
//# sourceMappingURL=bigCloud.js.map