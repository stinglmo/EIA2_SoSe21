"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 22.05.21
Quellen: W3School und MDN
*/
var Inheritance;
(function (Inheritance) {
    class Cloud extends SuperclassClouds {
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
            Inheritance.crc2.font = "18px Helvetica";
            Inheritance.crc2.fillStyle = "#3B170B";
            Inheritance.crc2.fillText("click", 1066, 333);
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
            this.x += this.speed * (+0.5); // - nach links und + nach rechts           
        }
    } // close class
    Inheritance.Cloud = Cloud;
})(Inheritance || (Inheritance = {})); // close namespace
//# sourceMappingURL=cloud.js.map