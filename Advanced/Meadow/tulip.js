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
    class Tulip extends Advanced.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Tulip");
            this.drawTulip();
        }
        //Methode "drawTulip"   
        drawTulip() {
            //Stiel
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#556B2F";
            Advanced.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            Advanced.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            Advanced.crc2.fill();
            //Blüte
            Advanced.crc2.beginPath();
            Advanced.crc2.fillStyle = "#FF1493";
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