"use strict";
var TestM;
(function (TestM) {
    class Poppy extends TestM.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Poppy");
            this.drawPoppy();
        }
        //Methode "drawPoppy"
        drawPoppy() {
            //Stiel
            TestM.crc2.beginPath();
            TestM.crc2.strokeStyle = "#556B2F";
            TestM.crc2.fillStyle = "#556B2F";
            TestM.crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge
            //Blätter 
            TestM.crc2.moveTo(this.x, this.y + 30);
            TestM.crc2.lineTo(this.x + 10, this.y + 15);
            TestM.crc2.moveTo(this.x, this.y + 40);
            TestM.crc2.lineTo(this.x - 10, this.y + 20);
            TestM.crc2.moveTo(this.x, this.y + 55);
            TestM.crc2.lineTo(this.x + 12, this.y + 35);
            TestM.crc2.stroke();
            TestM.crc2.fill();
            //Blüten
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "#DB2511";
            TestM.crc2.moveTo(this.x, this.y);
            TestM.crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            TestM.crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            TestM.crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            TestM.crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            TestM.crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            TestM.crc2.fill();
            //Blütenmitte
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "#3B170B";
            TestM.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            TestM.crc2.closePath();
            TestM.crc2.fill();
        }
    }
    TestM.Poppy = Poppy;
})(TestM || (TestM = {}));
//# sourceMappingURL=poppy.js.map