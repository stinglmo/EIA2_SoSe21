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
    class SmallCloud extends Inheritance.SuperclassCloud {
        constructor(x, y) {
            super(x, y);
            this.moveForward2();
            this.drawCloud1();
        }
        // Methode drawCloud 1
        drawCloud1() {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#FFFFFF";
            Inheritance.crc2.arc(this.x + 10, this.y + 30, 25, 0, 2 * Math.PI);
            Inheritance.crc2.arc(this.x + 50, this.y + 25, 40, 0, 2 * Math.PI);
            Inheritance.crc2.arc(this.x + 90, this.y + 20, 35, 0, 2 * Math.PI);
            Inheritance.crc2.arc(this.x + 130, this.y + 20, 25, 0, 2 * Math.PI);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            // Klick beim Vogel
            Inheritance.crc2.font = "18px Helvetica";
            Inheritance.crc2.fillStyle = "#3B170B";
            Inheritance.crc2.fillText("click", 1066, 333);
        }
        moveForward2() {
            this.x += this.speed * (+0.05); // - nach links und + nach rechts           
        }
    }
    Inheritance.SmallCloud = SmallCloud;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=smallCloud.js.map