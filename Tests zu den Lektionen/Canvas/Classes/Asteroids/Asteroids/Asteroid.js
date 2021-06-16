"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Asteroid extends L10_Asteroids.Moveable {
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            super(_position); // Subklasse referenziert Superklasse
            this.velocity = L10_Asteroids.Vector.getRandom(100, 200); // zufälliger Vector mit zufälliger Richtung
            this.type = Math.floor(Math.random() * 4); // Einer von vier Typen (Pfade im Array --> mit index drauf zugreifen)
            this.size = _size;
        }
        draw() {
            // console.log("Asteroid draw");
            L10_Asteroids.crc2.save(); // Aktuelle Transformation
            L10_Asteroids.crc2.translate(this.position.x, this.position.y);
            L10_Asteroids.crc2.scale(this.size, this.size); // in die Horizontale und Verticale --> Koordinatensystem wird kleiner gemacht
            L10_Asteroids.crc2.translate(-50, -50); // Koordinatenverschiebung, damit der Asteroid von außerhalb kommt
            L10_Asteroids.crc2.lineWidth = L10_Asteroids.linewidth / this.size; // Linienstärke wird angepasst!!!
            L10_Asteroids.crc2.stroke(L10_Asteroids.asteroidPaths[this.type]); // An den Pfad rankommen --> in der path-Datei
            L10_Asteroids.crc2.restore();
        }
        // "Gehirnzellen" --> Prüfe über einen Hotspot
        // Methode soll immer eine Aktivität beschreiben und wenn es eine Prüfung ist, ist es geschickt, wenn es mit "is" anfängt
        isHit(_hotspot) {
            let hitsize = 50 * this.size; // wird kleiner, je kleiner der Asteroid ist 
            // Trefferkasten: Mitte des Asteroids und Kasten um Asteroid... Frage: Überschreitet die Differenz eine bestimmte Größe?
            let difference = new L10_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize); // Betrag (negative nicht beachten) --> abs = absolute Wert, ohne Vorzeichen
            // --> sowohl vertikale als auch horizontale Differenz
        }
    }
    L10_Asteroids.Asteroid = Asteroid;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map