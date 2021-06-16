namespace L10_Asteroids {
    export class Ufo extends Moveable {
        private static speed: number = 50;

        constructor() {
            super();
            this.position = new Vector(0, Math.random() * crc2.canvas.height);

            this.velocity = new Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
            // this.hitRadius = 25;
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.translate(-30, -17);
            crc2.stroke(ufoPath);
            crc2.restore();
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        }

            private shoot(): void {
            console.log("Ufo shoots");
            // Neues Event bauen, was man dann verschicken kann (der Canvas soll das verschicken) Der RenderingContext referenziert Canvaselement
            let event: CustomEvent = new CustomEvent("ufoShoots", {detail: {ufo: this}}); // Objekt mitliefern, in dem man mit detail was reinbaut
            crc2.canvas.dispatchEvent(event);
        }
    }
}