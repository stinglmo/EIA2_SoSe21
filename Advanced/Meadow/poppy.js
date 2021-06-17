"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 17.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced;
(function (Advanced) {
    class Poppy extends Advanced.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            // console.log("Create Poppy");
            this.draw();
        }
        //Methode "drawPoppy"
        draw() {
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
            // Nectar
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 1) {
                Advanced.crc2.fillStyle = "#3B170Bff";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9) {
                Advanced.crc2.fillStyle = "#3B170Bdd";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8) {
                Advanced.crc2.fillStyle = "#3B170Bcc";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7) {
                Advanced.crc2.fillStyle = "#3B170Baa";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6) {
                Advanced.crc2.fillStyle = "#3B170B99";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5) {
                Advanced.crc2.fillStyle = "#3B170B77";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4) {
                Advanced.crc2.fillStyle = "#3B170B66";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3) {
                Advanced.crc2.fillStyle = "#3B170B55";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2) {
                Advanced.crc2.fillStyle = "#3B170B33";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1) {
                Advanced.crc2.fillStyle = "#3B170B33";
            }
            Advanced.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
        }
    }
    Advanced.Poppy = Poppy;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=poppy.js.map