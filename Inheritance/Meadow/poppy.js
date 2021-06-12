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
    class Poppy extends Inheritance.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Poppy");
            this.drawPoppy();
        }
        //Methode "drawPoppy"
        drawPoppy() {
            //Stiel
            Inheritance.crc2.beginPath();
            Inheritance.crc2.strokeStyle = "#556B2F";
            Inheritance.crc2.fillStyle = "#556B2F";
            Inheritance.crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge
            //Blätter 
            Inheritance.crc2.moveTo(this.x, this.y + 30);
            Inheritance.crc2.lineTo(this.x + 10, this.y + 15);
            Inheritance.crc2.moveTo(this.x, this.y + 40);
            Inheritance.crc2.lineTo(this.x - 10, this.y + 20);
            Inheritance.crc2.moveTo(this.x, this.y + 55);
            Inheritance.crc2.lineTo(this.x + 12, this.y + 35);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            //Blüten
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#DB2511";
            Inheritance.crc2.moveTo(this.x, this.y);
            Inheritance.crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            Inheritance.crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            Inheritance.crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            Inheritance.crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            Inheritance.crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            Inheritance.crc2.fill();
            //Blütenmitte
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#3B170B";
            Inheritance.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
        }
    }
    Inheritance.Poppy = Poppy;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=poppy.js.map