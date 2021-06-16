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
    class Poppy extends Advanced.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Poppy");
            this.drawPoppy();
        }
        //Methode "drawPoppy"
        drawPoppy() {
            //Stiel
            Advanced.crc2.beginPath();
            Advanced.crc2.strokeStyle = "#556B2F";
            Advanced.crc2.fillStyle = "#556B2F";
            Advanced.crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge
            //Blätter 
            Advanced.crc2.moveTo(this.x, this.y + 30);
            Advanced.crc2.lineTo(this.x + 10, this.y + 15);
            Advanced.crc2.moveTo(this.x, this.y + 40);
            Advanced.crc2.lineTo(this.x - 10, this.y + 20);
            Advanced.crc2.moveTo(this.x, this.y + 55);
            Advanced.crc2.lineTo(this.x + 12, this.y + 35);
            Advanced.crc2.stroke();
            Advanced.crc2.fill();
            //Blüten
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#DB2511";
            Advanced.crc2.moveTo(this.x, this.y);
            Advanced.crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            Advanced.crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            Advanced.crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            Advanced.crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            Advanced.crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            Advanced.crc2.fill();
            //Blütenmitte
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#3B170B";
            Advanced.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
        }
    }
    Advanced.Poppy = Poppy;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=poppy.js.map