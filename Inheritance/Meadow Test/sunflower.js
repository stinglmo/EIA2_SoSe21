"use strict";
var TestM;
(function (TestM) {
    class Sunflower extends TestM.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Tulpe");
            this.drawSunflower();
        }
        //Methode drawSunflower
        drawSunflower() {
            //Stiel
            TestM.crc2.beginPath();
            TestM.crc2.strokeStyle = "#556B2F";
            TestM.crc2.fillStyle = "#556B2F";
            TestM.crc2.fillRect(this.x + 68, this.y + 30, 3, 55);
            //Blätter
            TestM.crc2.lineTo(this.x + 70, this.y + 50); // am Stiel direkt
            TestM.crc2.lineTo(this.x + 60, this.y + 50);
            TestM.crc2.lineTo(this.x + 70, this.y + 70);
            TestM.crc2.stroke();
            TestM.crc2.fill();
            //Blüten
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "#FFD700";
            TestM.crc2.moveTo(this.x + 62, this.y + 24);
            TestM.crc2.lineTo(this.x + 50, this.y + 15);
            TestM.crc2.lineTo(this.x + 60, this.y + 28);
            TestM.crc2.lineTo(this.x + 45, this.y + 25);
            TestM.crc2.lineTo(this.x + 58, this.y + 33);
            TestM.crc2.lineTo(this.x + 48, this.y + 40);
            TestM.crc2.lineTo(this.x + 61, this.y + 37);
            TestM.crc2.lineTo(this.x + 55, this.y + 50);
            TestM.crc2.lineTo(this.x + 65, this.y + 38);
            TestM.crc2.lineTo(this.x + 66, this.y + 52);
            TestM.crc2.lineTo(this.x + 70, this.y + 39);
            TestM.crc2.lineTo(this.x + 76, this.y + 50);
            TestM.crc2.lineTo(this.x + 75, this.y + 37);
            TestM.crc2.lineTo(this.x + 85, this.y + 45);
            TestM.crc2.lineTo(this.x + 78, this.y + 33);
            TestM.crc2.lineTo(this.x + 90, this.y + 36);
            TestM.crc2.lineTo(this.x + 79, this.y + 28);
            TestM.crc2.lineTo(this.x + 92, this.y + 24);
            TestM.crc2.lineTo(this.x + 78, this.y + 23);
            TestM.crc2.lineTo(this.x + 88, this.y + 14);
            TestM.crc2.lineTo(this.x + 75, this.y + 20);
            TestM.crc2.lineTo(this.x + 78, this.y + 8);
            TestM.crc2.lineTo(this.x + 70, this.y + 20);
            TestM.crc2.lineTo(this.x + 69, this.y + 5);
            TestM.crc2.lineTo(this.x + 65, this.y + 20);
            TestM.crc2.lineTo(this.x + 58, this.y + 8);
            TestM.crc2.lineTo(this.x + 62, this.y + 24);
            TestM.crc2.fill();
            //Blütenmitte
            TestM.crc2.beginPath();
            TestM.crc2.fillStyle = "#8B4500";
            TestM.crc2.arc(this.x + 70, this.y + 30, 5, 0, 2 * Math.PI);
            TestM.crc2.closePath();
            TestM.crc2.fill();
        }
    }
    TestM.Sunflower = Sunflower;
})(TestM || (TestM = {}));
//# sourceMappingURL=sunflower.js.map