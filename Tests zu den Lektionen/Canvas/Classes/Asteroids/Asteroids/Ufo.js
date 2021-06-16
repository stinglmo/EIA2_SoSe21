"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Ufo extends L10_Asteroids.Moveable {
        constructor() {
            super();
            this.position = new L10_Asteroids.Vector(0, Math.random() * L10_Asteroids.crc2.canvas.height);
            this.velocity = new L10_Asteroids.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
            // this.hitRadius = 25;
        }
        draw() {
            L10_Asteroids.crc2.save();
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.translate(-30, -17);
            L10_Asteroids.crc2.stroke(L10_Asteroids.ufoPath);
            L10_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.03)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            console.log("Ufo shoots");
            // Neues Event bauen, was man dann verschicken kann (der Canvas soll das verschicken) Der RenderingContext referenziert Canvaselement
            let event = new CustomEvent("ufoShoots", { detail: { ufo: this } }); // Objekt mitliefern, in dem man mit detail was reinbaut
            L10_Asteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    Ufo.speed = 50;
    L10_Asteroids.Ufo = Ufo;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Ufo.js.map