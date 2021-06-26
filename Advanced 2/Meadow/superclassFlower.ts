/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 26.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/

namespace Advanced2 {

    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    export abstract class SuperclassFlower {

        public x: number;
        public y: number;
        public nectarLevel: number;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
        }

        // Methode draw
        abstract draw(): void;

        public spendNectar(): number {
            let nectar: number = this.nectarLevel -= 0.5;
            return nectar;
        } // erst wenn Nectar 0, wird sie aus dem Array rausgelöscht

        public update(): void {
            
            this.fillNectarLevel();
        
        }

        // Nectarlevel
        protected fillNectarLevel(): void {

            if (this.nectarLevel < 1) {
                this.nectarLevel += 0.05;
            } else {
                this.nectarLevel = 1;

                if (fullFlower.indexOf(this) < 0) { // wenn die Blume noch nicht im Array ist
                    fullFlower.push(this);
                } else if (this.nectarLevel == 0) {
                    fullFlower.splice(fullFlower.indexOf(this)); // wieder aus dem Array raus
                }

            }
        }

    } // close class

} // close namespace