"use strict";
var TestM;
(function (TestM) {
    class HoneyBee extends TestM.SuperclassBee {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.02;
            this.setTargetPosition();
            this.nectar = 0;
            this.getNectar();
            //  this.setTargetBienenstock();
        }
        draw() {
            TestM.crc2.beginPath();
            TestM.crc2.arc(this.x + 8, this.y + 25, this.size, 0, 2 * Math.PI);
            TestM.crc2.closePath();
            TestM.crc2.fillStyle = "orange";
            TestM.crc2.fill();
            var img = document.getElementById("HonigBiene");
            // crc2.drawImage(img, this.x, this.y, this.size, this.size); Unterschiedliche Bienengröße
            TestM.crc2.drawImage(img, this.x, this.y, 25, 25);
        }
        setTargetPosition() {
            let x = Math.round(Math.random() * (TestM.allFlowers.length - 1));
            this.xTarget = TestM.allFlowers[x].x - 10;
            this.yTarget = TestM.allFlowers[x].y - 55;
        }
        setTargetBienenstock() {
            this.xTarget = 720;
            this.yTarget = 280;
        }
        getNectar() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (this.nectar > 0 && this.x > 718 && this.y < 290) {
                this.nectar = this.nectar - 1;
            }
            if (this.nectar < 10 && Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.nectar = this.nectar + 1;
            }
            this.size = this.nectar * 2;
        }
        move() {
            this.getNectar();
            let state = true;
            if (state == true) {
                let xDiff = this.xTarget - this.x;
                let yDiff = this.yTarget - this.y;
                // console.log(state);
                console.log(this.nectar);
                // console.log(this.x);  
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                    state = false;
                    if (this.nectar > 2) {
                        state = false;
                        this.setTargetBienenstock();
                    }
                }
                else {
                    this.x += xDiff * this.speed;
                    this.y += yDiff * this.speed;
                }
            }
            if (state == false) {
                let xDiff = this.xTarget - this.x;
                let yDiff = this.yTarget - this.y;
                if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1 && this.nectar) {
                    state = true;
                    this.setTargetPosition();
                }
                else {
                    this.x += xDiff * this.speed;
                    this.y += yDiff * this.speed;
                }
            }
        }
    }
    TestM.HoneyBee = HoneyBee;
})(TestM || (TestM = {}));
//# sourceMappingURL=honeyBee.js.map