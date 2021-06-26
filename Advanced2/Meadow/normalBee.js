"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 24.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced2;
(function (Advanced2) {
    class NormalBee extends Advanced2.SuperclassBee {
        constructor(_x, _y) {
            super(_x, _y);
            // console.log("Create normalBee");
            // this.setRandomStyle();
        }
        // Methode draw
        draw() {
            // Biene
            // Körper
            Advanced2.crc2.beginPath();
            Advanced2.crc2.strokeStyle = "#000000";
            Advanced2.crc2.fillStyle = "#000000";
            Advanced2.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI); // Body
            Advanced2.crc2.arc(this.x - 10, this.y - 3, 5, 0, 2 * Math.PI); // Kopf
            Advanced2.crc2.fill();
            // Auge
            Advanced2.crc2.beginPath();
            Advanced2.crc2.fillStyle = "white";
            Advanced2.crc2.arc(this.x - 11, this.y - 4, 1.2, 0, 2 * Math.PI);
            Advanced2.crc2.fill();
            // Fühler 1
            Advanced2.crc2.beginPath();
            Advanced2.crc2.moveTo(this.x - 5, this.y);
            Advanced2.crc2.strokeStyle = "#000000";
            Advanced2.crc2.lineWidth = 0.9;
            Advanced2.crc2.lineTo(this.x - 10, this.y - 13);
            Advanced2.crc2.closePath();
            Advanced2.crc2.stroke();
            // Fühler 2
            Advanced2.crc2.beginPath();
            Advanced2.crc2.moveTo(this.x - 3, this.y - 5);
            Advanced2.crc2.strokeStyle = "#000000";
            Advanced2.crc2.lineWidth = 0.5;
            Advanced2.crc2.lineTo(this.x - 15, this.y - 12);
            Advanced2.crc2.closePath();
            Advanced2.crc2.stroke();
            if (this.sting == true) {
                Advanced2.crc2.moveTo(this.x, this.y);
                Advanced2.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else {
                console.log();
            }
            Advanced2.crc2.stroke();
            Advanced2.crc2.fill();
            //Streifen
            Advanced2.crc2.beginPath();
            Advanced2.crc2.fillStyle = this.color;
            Advanced2.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            Advanced2.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            Advanced2.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            Advanced2.crc2.stroke();
            Advanced2.crc2.fill();
            //Flügel
            Advanced2.crc2.beginPath();
            Advanced2.crc2.fillStyle = "#aFEEEE";
            Advanced2.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            Advanced2.crc2.moveTo(this.x, this.y);
            Advanced2.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            Advanced2.crc2.closePath();
            Advanced2.crc2.fill();
        }
    }
    Advanced2.NormalBee = NormalBee;
})(Advanced2 || (Advanced2 = {}));
//# sourceMappingURL=normalBee.js.map