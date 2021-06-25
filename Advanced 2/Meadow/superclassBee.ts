/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 24.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/

namespace Advanced2 {

    export abstract class SuperclassBee {

        protected x: number;
        protected y: number;
        protected size: number;
        protected color: string;
        protected sting: boolean;

        protected xspeed: number;
        protected yspeed: number;

        protected xmin: number = -2.5;
        protected xmax: number = 1.5;
        protected ymin: number = -0.5;
        protected ymax: number = 0.5;


        constructor(_x: number, _y: number) { //Parameter _x: number, _y: number gelöscht
            this.setRandomSpeed();
            this.x = _x; // Ausgang des Bienenstocks
            this.y = _y;
            this.draw();
            this.setRandomStyle();
        }

        // Methode draw
        abstract draw(): void;


        //Methode "update" - Biene an neuer Position malen 
        public update(): void {

            this.move();
            this.draw();
        }


        //Methode "move" - Biene bewegen
        public move(): void {

            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;

            // let direction: number = 

            // if (this.direction < 0) {
            //     crc2.scale(-1, 1);
            // }

            // damit die Bienen wieder erscheinen, sobald sie aus dem Bild geflogen sind.
            for (let i: number = 0; i < 15; i++) {

                if (this.x < 0) { // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
                    this.x = crc2.canvas.width;
                }
                if (this.y < 0) { // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
                    this.y = crc2.canvas.height;
                }
                if (this.y >= crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }

        protected setRandomSpeed(): void {
            this.xspeed = Math.random() * (this.xmax - this.xmin) + this.xmin; //Speed in x-Richtung 
            this.yspeed = Math.random() * (this.ymax - this.ymin) + this.ymin; //Speed in y-Richtung   
        }

        //Methode "setRandomStyle" - Zufällige Farbe und (k)ein Stachel 
        protected setRandomStyle(): void {

            let randomColor: string = "hsl(" + Math.random() * 60 + ", 100%, 50%)"; // Zwischen gelb und rot.
            let randomSting: boolean = Boolean(Math.round(Math.random()));

            this.color = randomColor;
            this.sting = randomSting;
        }

        


    } // close class

} // close namespace