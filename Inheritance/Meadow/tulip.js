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
    class Tulip extends Inheritance.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Tulip");
            this.drawTulip();
        }
        //Methode "drawTulip"   
        drawTulip() {
            //Stiel
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#556B2F";
            Inheritance.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            Inheritance.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            Inheritance.crc2.fill();
            //Blüte
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#FF1493";
            Inheritance.crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            Inheritance.crc2.moveTo(this.x, this.y + 22);
            Inheritance.crc2.lineTo(this.x, this.y + 7);
            Inheritance.crc2.lineTo(this.x + 6, this.y + 14);
            Inheritance.crc2.lineTo(this.x + 10.5, this.y + 4);
            Inheritance.crc2.lineTo(this.x + 15, this.y + 14);
            Inheritance.crc2.lineTo(this.x + 20, this.y + 7);
            Inheritance.crc2.lineTo(this.x + 20, this.y + 21);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
        }
    }
    Inheritance.Tulip = Tulip;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=tulip.js.map