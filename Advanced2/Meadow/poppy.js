"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 17.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced2;
(function (Advanced2) {
    class Poppy extends Advanced2.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            // console.log("Create Poppy");
            this.draw();
        }
        //Methode "drawPoppy"
        draw() {
            //Stiel
            Advanced2.crc2.beginPath();
            Advanced2.crc2.strokeStyle = "#556B2F";
            Advanced2.crc2.fillStyle = "#556B2F";
            Advanced2.crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge
            //Blätter 
            Advanced2.crc2.moveTo(this.x, this.y + 30);
            Advanced2.crc2.lineTo(this.x + 10, this.y + 15);
            Advanced2.crc2.moveTo(this.x, this.y + 40);
            Advanced2.crc2.lineTo(this.x - 10, this.y + 20);
            Advanced2.crc2.moveTo(this.x, this.y + 55);
            Advanced2.crc2.lineTo(this.x + 12, this.y + 35);
            Advanced2.crc2.stroke();
            Advanced2.crc2.fill();
            //Blüten
            Advanced2.crc2.beginPath();
            Advanced2.crc2.fillStyle = "#DB2511";
            Advanced2.crc2.moveTo(this.x, this.y);
            Advanced2.crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            Advanced2.crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            Advanced2.crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            Advanced2.crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            Advanced2.crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            Advanced2.crc2.fill();
            //Blütenmitte
            Advanced2.crc2.beginPath();
            // Nectar
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 8) {
                Advanced2.crc2.fillStyle = "#2d1c0b";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9) {
                Advanced2.crc2.fillStyle = "#543415";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8) {
                Advanced2.crc2.fillStyle = "#7b4c1f";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7) {
                Advanced2.crc2.fillStyle = "#a1642a";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6) {
                Advanced2.crc2.fillStyle = "#c87c34";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5) {
                Advanced2.crc2.fillStyle = "#d49559";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4) {
                Advanced2.crc2.fillStyle = "#deae80";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3) {
                Advanced2.crc2.fillStyle = "#e8c7a7";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2) {
                Advanced2.crc2.fillStyle = "#f2dfce";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1) {
                Advanced2.crc2.fillStyle = "#fcf8f5";
            }
            Advanced2.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Advanced2.crc2.closePath();
            Advanced2.crc2.fill();
        }
    }
    Advanced2.Poppy = Poppy;
})(Advanced2 || (Advanced2 = {}));
//# sourceMappingURL=poppy.js.map