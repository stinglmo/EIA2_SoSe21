"use strict";
var L10_Asteroids;
(function (L10_Asteroids) {
    window.addEventListener("load", handleLoad);
    L10_Asteroids.linewidth = 2; // --> durch export können andere Dateien auch darauf zugreifen
    let moveables = []; // Zugänglich fürs Hauptprogramm --> allen Moveable sagen: bewegt euch, zeichnet euch
    function handleLoad(_event) {
        console.log("Asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_Asteroids.crc2 = canvas.getContext("2d");
        L10_Asteroids.crc2.fillStyle = "black";
        L10_Asteroids.crc2.strokeStyle = "white";
        L10_Asteroids.crc2.lineWidth = 2;
        L10_Asteroids.createPaths(); // steckt in Datei Path
        console.log("Asteroids paths: ", L10_Asteroids.asteroidPaths);
        createAsteroids(5);
        // createShip();
        canvas.addEventListener("ufoShoots", handleUfoShot); // Ufos schießen
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20); // set-Intervall weil man den timeslice steuern kann --> alle 20 ms
    }
    function handleUfoShot(_event) {
        let ufo = _event.detail.ufo;
        shootProjectile(ufo.position);
    }
    function shootProjectile(_origin) {
        console.log("Shoot projectile");
        let velocity = L10_Asteroids.Vector.getRandom(100, 100); // Vectorklasse wird nach einem neuen selbstgebauten random Vector gefragt
        let projectile = new L10_Asteroids.Projectile(_origin, velocity); // mit Ursprung und Geschwindigkeit
        moveables.push(projectile);
    }
    function shootLaser(_event) {
        console.log("Shoot laser");
        // Hotspot wird angelegt: Punkt der Zerstörung ist ein Vektor und wir nutzen dafür die Mausposition
        // Mausposition ist bezogen auf eine bestimmte Stelle --> das Canvas --> clientX und clientY! Dafür wird offsetLeft und offsetTop abgezogen um Hotspot Position auf dem Canvas zu haben!!!
        let hotspot = new L10_Asteroids.Vector(_event.clientX - L10_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L10_Asteroids.crc2.canvas.offsetTop);
        // Gutes Beispiel dafür, dass das Konzept wichtig ist. Damit man nicht an allen Stellen gleichzeitig arbeiten muss, getAsteroidHit verwenden, weil man weiß man kümmert sich später darum.
        let asteroidHit = getAsteroidHit(hotspot); // null = Verweis auf nichts (wenn nichts gefunden wurde) Asteroidhit soll den Hotspot entgegennehmen.
        console.log(asteroidHit);
        if (asteroidHit) // Wenn wirklich getroffen
            breakAsteroid(asteroidHit);
    }
    // Hauptprogramm kennt nur Größe, Position und Form des Asteroiden, deshalb soll Asteroid selbst prüfen, ob er getroffen wurde
    function getAsteroidHit(_hotspot) {
        for (let moveable of moveables) { // Array durchgehen mit Hilfe der Variable moveable: und Asteroiden nacheinander rausholen
            if (moveable instanceof L10_Asteroids.Asteroid && moveable.isHit(_hotspot)) // Frage: Bist du eine Instanz von Asteroid?
                // Prüfe, ob Asteroid getroffen wurde: Gebe den Asteroiden Position auf dem Bildschirm und prüfe ob er an der Position getroffen wurdest (das weiß das Hauptprogramm nicht, müsste Infos erst sammeln)
                return moveable; // Übergib dich zurück an das aufrufende Programm
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) { // wenn Asteroid groß ist, dann soll er zerlegt werden
            for (let i = 0; i < 2; i++) { // es werden zwei Neue gemacht:
                let fragment = new L10_Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position); // halbe Größe vom Getroffenen und bekommt die Position des Getroffenen 
                fragment.velocity.add(_asteroid.velocity); // Geschwindigkeit dazuaddieren, damit der getroffenen Asteroid noch schneller wird
                moveables.push(fragment); // neue Asteroiden in das Asteroid Array hinzufügen
            }
        }
        _asteroid.expendable = true; // der gekommene Asteroid is verzichtbar
    }
    function createAsteroids(_nAsteroids) {
        console.log("Create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            let asteroid = new L10_Asteroids.Asteroid(1.0); // Neuer Asteroid
            moveables.push(asteroid); // wird ins Asteroids Array gepusht (5 Stück)
        }
    }
    function update() {
        console.log("Update");
        L10_Asteroids.crc2.fillRect(0, 0, L10_Asteroids.crc2.canvas.width, L10_Asteroids.crc2.canvas.height); // clear Background
        // damit man was sieht, wird das Asteroi Array durchgegangen und die einzelnen Asteroiden werden rausgeholt
        for (let moveable of moveables) { // Es wird über alle Elemente drüber gegangen
            moveable.move(1 / 50); // 20 ms --> 50 mal die Sekunde
            moveable.draw(); // Asteroid wird gezeichnet
        }
        deleteExpandables();
        // ship.draw();
        // handleCollisions();
        console.log("Moveable lenght", moveables.length);
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) { // Von hinten löschen, damit die Elemente nicht nachrücken. Es wird immer das letzte betrachtete
            if (moveables[i].expendable) {
                moveables.splice(i, 1);
            }
        }
    }
})(L10_Asteroids || (L10_Asteroids = {}));
//# sourceMappingURL=Main.js.map