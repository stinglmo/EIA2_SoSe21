"use strict";
/*
Aufgabe: Meadow
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/
var Advanced2;
(function (Advanced2) {
    let TASK;
    (function (TASK) {
        TASK[TASK["IDLE"] = 0] = "IDLE";
        TASK[TASK["FLY_TO_FLOWER"] = 1] = "FLY_TO_FLOWER";
        TASK[TASK["ABSORB_NECTAR"] = 2] = "ABSORB_NECTAR";
        TASK[TASK["FLY_TO_BEHIVE"] = 3] = "FLY_TO_BEHIVE";
        TASK[TASK["EJECT_NECTAR"] = 4] = "EJECT_NECTAR";
    })(TASK || (TASK = {}));
    class HoneyBee extends Advanced2.SuperclassBee {
        constructor(_x, _y) {
            super(_x, _y); // Konstruktionen für abgeleitete Klassen müssen einen Aufruf super() enthalten!
            this.task = TASK.IDLE; // Leerlauf - Anfangszustand
            this.setRandomSize();
            this.speed = 0.005;
            this.nectar = 0;
            this.setRandomFlowerPosition();
            // TASK ENUMERATION
            this.update();
        }
        draw() {
            console.log("will gemalt werden");
            let xpos = this.x;
            Advanced2.crc2.save(); // saven
            if (this.direction == true) { // Wenn die Biene rückwärts fliegt
                Advanced2.crc2.scale(-1, 1);
                xpos = -this.x;
            }
            else {
                Advanced2.crc2.scale(1, 1);
            }
            // Nectar
            Advanced2.crc2.beginPath();
            Advanced2.crc2.arc(xpos, this.y + 10, this.size, 0, 2 * Math.PI); // wenn sie nicht gescalet wird x pos, wenn sie gescalet wurde - xpos!
            Advanced2.crc2.closePath();
            Advanced2.crc2.fillStyle = "orange";
            Advanced2.crc2.fill();
            // Biene
            // Körper
            Advanced2.crc2.beginPath();
            Advanced2.crc2.strokeStyle = "#000000";
            Advanced2.crc2.fillStyle = "#000000";
            Advanced2.crc2.arc(xpos, this.y, 7, 0, 2 * Math.PI); // Body
            Advanced2.crc2.arc(xpos - 10, this.y - 3, 5, 0, 2 * Math.PI); // Kopf
            Advanced2.crc2.fill();
            // Auge
            Advanced2.crc2.beginPath();
            Advanced2.crc2.fillStyle = "white";
            Advanced2.crc2.arc(xpos - 11, this.y - 4, 1.2, 0, 2 * Math.PI);
            Advanced2.crc2.fill();
            // Fühler 1
            Advanced2.crc2.beginPath();
            Advanced2.crc2.moveTo(xpos - 5, this.y);
            Advanced2.crc2.strokeStyle = "#000000";
            Advanced2.crc2.lineWidth = 0.9;
            Advanced2.crc2.lineTo(xpos - 10, this.y - 13);
            Advanced2.crc2.closePath();
            Advanced2.crc2.stroke();
            // Fühler 2
            Advanced2.crc2.beginPath();
            Advanced2.crc2.moveTo(xpos - 3, this.y - 5);
            Advanced2.crc2.strokeStyle = "#000000";
            Advanced2.crc2.lineWidth = 0.5;
            Advanced2.crc2.lineTo(xpos - 15, this.y - 12);
            Advanced2.crc2.closePath();
            Advanced2.crc2.stroke();
            if (this.sting == true) { // Mit Stachel
                Advanced2.crc2.moveTo(xpos, this.y);
                Advanced2.crc2.lineTo(xpos + 13, this.y + 3);
            }
            else {
                console.log();
            }
            Advanced2.crc2.stroke();
            Advanced2.crc2.fill();
            //Streifen
            Advanced2.crc2.beginPath();
            Advanced2.crc2.fillStyle = this.color;
            Advanced2.crc2.rect(xpos - 6, this.y - 4, 2.5, 9);
            Advanced2.crc2.rect(xpos - 2, this.y - 6, 2.5, 13);
            Advanced2.crc2.rect(xpos + 2, this.y - 4, 2.5, 10);
            Advanced2.crc2.stroke();
            Advanced2.crc2.fill();
            //Flügel
            Advanced2.crc2.beginPath();
            Advanced2.crc2.fillStyle = "#aFEEEE";
            Advanced2.crc2.arc(xpos - 4, this.y - 15, 10, 0, 1.5);
            Advanced2.crc2.moveTo(xpos, this.y);
            Advanced2.crc2.arc(xpos - 1, this.y - 10, 10, 0, 1.5);
            Advanced2.crc2.closePath();
            Advanced2.crc2.fill();
            Advanced2.crc2.restore(); // wiederherstellen
        }
        setRandomSize() {
            this.size = Math.random() * 20 + 10; //Größe
        }
        update() {
            switch (this.task) {
                case TASK.IDLE: // wenn du nichts zu tun hast
                    // suche volle Blume
                    // this.task = TASK.FLY_TO_FLOWER; // vlt erst bei Move wenn volle Blume gefunden wurde
                    break;
                case TASK.FLY_TO_FLOWER:
                    // Biene bewegt sich zur Blume
                    this.flyToFlower();
                    // wenn angekommen:
                    this.task = TASK.ABSORB_NECTAR;
                    break;
                case TASK.ABSORB_NECTAR:
                    // Nectar -= 0.5 --> Blume aussaugen
                    this.absorbNectar();
                    // wenn voll:
                    if (this.nectar > 2) { // wenn Nectar > 2 fliegt die Biene zum Bienenstock
                        this.task = TASK.FLY_TO_BEHIVE;
                    }
                    else { // wenn Blume leer --> IDLE, solange bis Nectar >2 ist
                        this.task = TASK.IDLE;
                    }
                    break;
                case TASK.FLY_TO_BEHIVE:
                    // Biene fliegt zum Bienenstock
                    this.setTargetBeehive();
                    // am Bienenkorb angekommen:
                    this.task = TASK.EJECT_NECTAR;
                    break;
                case TASK.EJECT_NECTAR:
                    // Wenn am Bienenkorb angekommen: Lässt Nektar fallen
                    this.ejectNectar();
                    // sobald fertig:
                    this.task = TASK.IDLE;
            }
        }
        // Honigbiene zu dieser Position x,y bewegen
        flyToFlower() {
            this.getNectar();
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1 && this.nectar) {
                this.setRandomFlowerPosition();
                // this.absorbNectar();
            }
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
        getNectar() {
            let xDiff = this.xTarget - this.x; // Größe vom Nektar
            let yDiff = this.yTarget - this.y;
            if (this.nectar < 10 && Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.nectar = this.nectar + 1;
            }
            this.size = this.nectar * 2;
        }
        ejectNectar() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) { // Ziel erreicht
                if (this.nectar > 0 && this.x > 1188) { // Beim Bienenstock wird Nektar kleiner
                    this.nectar = this.nectar - 1;
                }
                this.size = this.nectar * 2;
            }
        }
        absorbNectar() {
            // target Flower nectarLevel -= 0.5;
        }
        // Methode "setStartPosition"
        setTargetBeehive() {
            this.direction = true;
            // Hier bringen sie den Nektar hin
            this.xTarget = 1190;
            this.yTarget = 505;
        }
        // Zufällige Position x,y aus dem Blumenarray 
        setRandomFlowerPosition() {
            if (Advanced2.fullFlower.length > 0) { // wegen dem Anfang
                let x = Math.round(Math.random() * (Advanced2.fullFlower.length - 1));
                this.xTarget = Advanced2.fullFlower[x].x + 10; // an der Blume
                this.yTarget = Advanced2.fullFlower[x].y;
                console.log(Advanced2.fullFlower);
            }
            else {
                //
            }
        }
    }
    Advanced2.HoneyBee = HoneyBee;
})(Advanced2 || (Advanced2 = {}));
//# sourceMappingURL=honeyBee.js.map