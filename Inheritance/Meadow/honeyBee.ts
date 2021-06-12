/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 07.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Inheritance {

    export class HoneyBee extends SuperclassBee {

        xTarget: number;
        yTarget: number;
        speed: number;


        constructor(_x: number, _y: number) {

            super(); // Konstruktionen für abgeleitete Klassen müssen einen Aufruf super() enthalten!
            // console.log("Create Honeybee");
            // this.setRandomStyle();
            this.speed = 0.005;
            this.setRandomFlowerPosition();
            this.setStartPosition();
        }

        // Methode "setStartPosition"
        setStartPosition(): void {

            this.x = 1175; // Ausgang des Bienenstocks
            this.y = 505;
        }

        // Zufällige Position x,y aus dem Blumenarray 
        setRandomFlowerPosition(): void {

            let i: number = Math.round(Math.random() * (allFlowers.length - 1));
            this.xTarget = allFlowers[i].x;
            this.yTarget = allFlowers[i].y;
            console.log(allFlowers[i].constructor.name);
            

        }

        // Honigbiene zu dieser Position x,y bewegen 
        move(): void {

            let xDiff: number = this.xTarget - this.x + 5; // Blumenmitte
            let yDiff: number = this.yTarget - this.y;

            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
}