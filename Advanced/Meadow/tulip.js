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
    class Tulip extends Advanced.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            // console.log("Create Tulip");
            this.draw();
        }
        //Methode "drawTulip"   
        draw() {
            //Stiel
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#556B2F";
            Advanced.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            Advanced.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            //Blüte
            Advanced.crc2.beginPath();
            // Nactar
            if (this.nectarLevel >= 0.9 && this.nectarLevel <= 1) {
                Advanced.crc2.fillStyle = "#FF1493ff";
            }
            else if (this.nectarLevel >= 0.8 && this.nectarLevel < 0.9) {
                Advanced.crc2.fillStyle = "#FF1493dd";
            }
            else if (this.nectarLevel >= 0.7 && this.nectarLevel < 0.8) {
                Advanced.crc2.fillStyle = "#FF1493cc";
            }
            else if (this.nectarLevel >= 0.6 && this.nectarLevel < 0.7) {
                Advanced.crc2.fillStyle = "#FF1493aa";
            }
            else if (this.nectarLevel >= 0.5 && this.nectarLevel < 0.6) {
                Advanced.crc2.fillStyle = "#FF149399";
            }
            else if (this.nectarLevel >= 0.4 && this.nectarLevel < 0.5) {
                Advanced.crc2.fillStyle = "#FF149377";
            }
            else if (this.nectarLevel >= 0.3 && this.nectarLevel < 0.4) {
                Advanced.crc2.fillStyle = "#FF149366";
            }
            else if (this.nectarLevel >= 0.2 && this.nectarLevel < 0.3) {
                Advanced.crc2.fillStyle = "#FF149355";
            }
            else if (this.nectarLevel >= 0.1 && this.nectarLevel < 0.2) {
                Advanced.crc2.fillStyle = "#FF149333";
            }
            else if (this.nectarLevel >= 0 && this.nectarLevel < 0.1) {
                Advanced.crc2.fillStyle = "#FF149333";
            }
            //crc2.fillStyle = "#FF1493";
            Advanced.crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            Advanced.crc2.moveTo(this.x, this.y + 22);
            Advanced.crc2.lineTo(this.x, this.y + 7);
            Advanced.crc2.lineTo(this.x + 6, this.y + 14);
            Advanced.crc2.lineTo(this.x + 10.5, this.y + 4);
            Advanced.crc2.lineTo(this.x + 15, this.y + 14);
            Advanced.crc2.lineTo(this.x + 20, this.y + 7);
            Advanced.crc2.lineTo(this.x + 20, this.y + 21);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
        }
    }
    Advanced.Tulip = Tulip;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=tulip.js.map