"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    class Moveable {
        constructor(_position) {
            // console.log("Moveable constructor");
            this.expendable = false; // wenn true --> Projectile ist verzichtbar, kann also gelöscht werden
            if (_position) // hast du die Position bekommen, nimm sie,
                // this.position = new Vector(_position.x, _position.y);  
                this.position = _position.copy(); // von _position die Kopie aufrufen --> neuer Vektor, jeder der kleinen Asteroiden bekommt eine Kopie (Kopie kann unabhängig verändert werden)
            // Man kann Objekte nicht gleichsetzen. Kleine Asteroiden (?) hält die Referenz auf ein Speicherobjekt welches etwas enthält
            // Referenzieren gleichen Positionsvektor?
            // POSITION IST REFERENZ AUF EIN OBJEKT, damit sie sich unabhängig voneinander verändern können...
            else // ansonsten nehme die Position 0,0
                this.position = new L10_Asteroids.Vector(0, 0); // Position ist ein neuer Vektor
            this.velocity = new L10_Asteroids.Vector(0, 0);
        }
        move(_timeslice) {
            // console.log("Asteroid move");
            let offset = this.velocity.copy(); // das Stückchen Weg was er gehen soll = neuer Vektor
            offset.scale(_timeslice);
            this.position.add(offset);
            // Wenn die Position den Canvas verlässt:
            if (this.position.x < 0)
                this.position.x += L10_Asteroids.crc2.canvas.width; // wenn kleiner als 0, dann auf Position x die Canvas-Breite draufrechnen!
            if (this.position.y < 0)
                this.position.y += L10_Asteroids.crc2.canvas.height;
            // ansonsten abziehen:
            if (this.position.x > L10_Asteroids.crc2.canvas.width)
                this.position.x -= L10_Asteroids.crc2.canvas.width;
            if (this.position.y > L10_Asteroids.crc2.canvas.height)
                this.position.y -= L10_Asteroids.crc2.canvas.height;
        }
    }
    L10_Asteroids.Moveable = Moveable;
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Moveable.js.map