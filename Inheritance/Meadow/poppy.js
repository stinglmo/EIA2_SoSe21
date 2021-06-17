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
            // console.log("Create Poppy");
            this.draw();
        }
        //Methode "drawPoppy"
        draw() {
            //Stiel
            Inheritance.crc2.beginPath();
            Inheritance.crc2.strokeStyle = "#556B2F";
            Inheritance.crc2.fillStyle = "#556B2F";
            Inheritance.crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breiter Stiel, vierter Wert = Länge
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
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 1) {
                Inheritance.crc2.fillStyle = "#3B170Bff";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9) {
                Inheritance.crc2.fillStyle = "#3B170Bdd";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8) {
                Inheritance.crc2.fillStyle = "#3B170Bcc";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7) {
                Inheritance.crc2.fillStyle = "#3B170Baa";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6) {
                Inheritance.crc2.fillStyle = "#3B170B99";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5) {
                Inheritance.crc2.fillStyle = "#3B170B77";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4) {
                Inheritance.crc2.fillStyle = "#3B170B66";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3) {
                Inheritance.crc2.fillStyle = "#3B170B55";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2) {
                Inheritance.crc2.fillStyle = "#3B170B33";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1) {
                Inheritance.crc2.fillStyle = "#3B170B33";
            }
            Inheritance.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
        }
    }
    Inheritance.Poppy = Poppy;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=poppy.js.map