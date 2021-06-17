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
            this.draw();
        }
        //Methode "drawTulip"   
        draw() {
            //Stiel
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#556B2F";
            Inheritance.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            Inheritance.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            Inheritance.crc2.fill();
            //Blüte
            Inheritance.crc2.beginPath();
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 1) {
                Inheritance.crc2.fillStyle = "#FF1493ff";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9) {
                Inheritance.crc2.fillStyle = "#FF1493ee";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8) {
                Inheritance.crc2.fillStyle = "#FF1493dd";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7) {
                Inheritance.crc2.fillStyle = "#FF1493cc";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6) {
                Inheritance.crc2.fillStyle = "#FF1493bb";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5) {
                Inheritance.crc2.fillStyle = "#FF1493aa";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4) {
                Inheritance.crc2.fillStyle = "#FF149399";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3) {
                Inheritance.crc2.fillStyle = "#FF149388";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2) {
                Inheritance.crc2.fillStyle = "#FF149377";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1) {
                Inheritance.crc2.fillStyle = "#FF149366";
            }
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