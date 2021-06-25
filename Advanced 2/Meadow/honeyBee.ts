/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Advanced2 {

    enum TASK {
        IDLE, 
        FLY_TO_FLOWER,
        ABSORB_NECTAR,
        FLY_TO_BEHIVE,
        EJECT_NECTAR
    }

    export class HoneyBee extends SuperclassBee {

        private xTarget: number;
        private yTarget: number;
        private speed: number;
        private nectar: number;
        private direction: boolean;
        private task: TASK = TASK.IDLE; // Leerlauf - Anfangszustand



        constructor(_x: number, _y: number) {

            super(_x, _y); // Konstruktionen für abgeleitete Klassen müssen einen Aufruf super() enthalten!
            
            this.setRandomSize();
            this.speed = 0.005;
            this.nectar = 0;
            this.setRandomFlowerPosition();

            // TASK ENUMERATION
            this.update(); 
            
        }

        public draw(): void {

            console.log("will gemalt werden");

            let xpos: number = this.x;

            crc2.save(); // saven

            if (this.direction == true) { // Wenn die Biene rückwärts fliegt
                crc2.scale(-1, 1);
                xpos = - this.x;

            } else {
                crc2.scale(1, 1);
            }

            // Nectar
            crc2.beginPath();
            crc2.arc(xpos, this.y + 10, this.size, 0, 2 * Math.PI); // wenn sie nicht gescalet wird x pos, wenn sie gescalet wurde - xpos!
            crc2.closePath();
            crc2.fillStyle = "orange";
            crc2.fill();

            // Biene
            // Körper
            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.arc(xpos, this.y, 7, 0, 2 * Math.PI); // Body
            crc2.arc(xpos - 10, this.y - 3, 5, 0, 2 * Math.PI); // Kopf
            crc2.fill();

            // Auge
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(xpos - 11, this.y - 4, 1.2, 0, 2 * Math.PI);
            crc2.fill();

            // Fühler 1
            crc2.beginPath();
            crc2.moveTo(xpos - 5, this.y);
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 0.9;
            crc2.lineTo(xpos - 10, this.y - 13);
            crc2.closePath();
            crc2.stroke();

            // Fühler 2
            crc2.beginPath();
            crc2.moveTo(xpos - 3, this.y - 5);
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 0.5;
            crc2.lineTo(xpos - 15, this.y - 12);
            crc2.closePath();
            crc2.stroke();

            if (this.sting == true) { // Mit Stachel

                crc2.moveTo(xpos, this.y);
                crc2.lineTo(xpos + 13, this.y + 3);
            }

            else {
                console.log();
            }

            crc2.stroke();
            crc2.fill();

            //Streifen
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.rect(xpos - 6, this.y - 4, 2.5, 9);
            crc2.rect(xpos - 2, this.y - 6, 2.5, 13);
            crc2.rect(xpos + 2, this.y - 4, 2.5, 10);

            crc2.stroke();
            crc2.fill();

            //Flügel
            crc2.beginPath();
            crc2.fillStyle = "#aFEEEE";
            crc2.arc(xpos - 4, this.y - 15, 10, 0, 1.5);
            crc2.moveTo(xpos, this.y);
            crc2.arc(xpos - 1, this.y - 10, 10, 0, 1.5);

            crc2.closePath();
            crc2.fill();

            crc2.restore(); // wiederherstellen

        }

        public setRandomSize(): void { // Public weil Main drauf zugreift
            this.size = Math.random() * 20 + 10; //Größe
        }


        public update(): void {
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
                    } else { // wenn Blume leer --> IDLE, solange bis Nectar >2 ist
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
        private flyToFlower(): void {
            this.getNectar();
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;

            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1 && this.nectar) {
                this.setRandomFlowerPosition();
                // this.absorbNectar();
            } else {
                this.x += xDiff * this.speed; 
                this.y += yDiff * this.speed;
            }
            
        }

        private getNectar(): void {

            let xDiff: number = this.xTarget - this.x; // Größe vom Nektar
            let yDiff: number = this.yTarget - this.y;

            if (this.nectar < 10 && Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) {
                this.nectar = this.nectar + 1;
            }

            this.size = this.nectar * 2;
        }

        private ejectNectar(): void {

            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;

            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1) { // Ziel erreicht
                if (this.nectar > 0 && this.x > 1188) { // Beim Bienenstock wird Nektar kleiner
                    this.nectar = this.nectar - 1;
                } 
                this.size = this.nectar * 2;
            }
        }

        private absorbNectar(): void {

           // target Flower nectarLevel -= 0.5;
            
        }

        // Methode "setStartPosition"
        private setTargetBeehive(): void {

            this.direction = true;
            // Hier bringen sie den Nektar hin
            this.xTarget = 1190;
            this.yTarget = 505;
        }

        // Zufällige Position x,y aus dem Blumenarray 
        private setRandomFlowerPosition(): void {

            if (fullFlower.length > 0) { // wegen dem Anfang
                let x: number = Math.round(Math.random() * (fullFlower.length - 1));

                this.xTarget = fullFlower[x].x + 10; // an der Blume
                this.yTarget = fullFlower[x].y;
                console.log(fullFlower);

            } else {
                //
            }
        }
               


        
        

       


    }
}