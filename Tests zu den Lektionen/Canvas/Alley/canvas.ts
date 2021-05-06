namespace Virus {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62; // Für den goldenen Schnitt

    function handleload(_event: Event): void { // Alle Funktionen werden in handleLoad nacheinander aufgerufen (von hinten nach vorne)
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden; // Wird dann als Horizonhöhe verwendet

        // Warum folgende 9 Zeilen für Allee?
        let streetWidthBack: number = 100;
        let streetWidthFront: number = 600;
        let treesOffsetBack: number = 15;
        let treesOffsetFront: number = 100;

        let posMountains: Vector = { x: 0, y: horizon };
        let posStreet: Vector = { x: crc2.canvas.width / 2, y: horizon };
        let posTreesStart: Vector = { x: posStreet.x - streetWidthBack / 2 - treesOffsetBack, y: horizon };
        let posTreesEnd: Vector = { x: crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, y: crc2.canvas.height };



        drawBackground();
        drawSun({ x: 100, y: 75 }); // Vektorobjekt für die Position
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 }); // Zwei Vektorobjekte für Position und Größe
        drawStreet(posStreet, streetWidthBack, streetWidthFront);
        drawMountains(posMountains, 75, 200, "grey", "white"); // Erste Bergkette (ist höher)
        drawMountains(posMountains, 50, 150, "grey", "lightgrey"); // Zweite Bergkette --> 50 für minimale Pixelhöhe und 150 für maximale Pixelhöhe

        // Für Allee:
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        posTreesStart.x = posStreet.x + streetWidthBack / 2 + treesOffsetBack;
        posTreesEnd.x = posTreesEnd.x + streetWidthFront + 2 * treesOffsetFront;
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
    }

    // Warum Bäume als erstes?
    function drawTrees(_nTrees: number, _posStart: Vector, _posEnd: Vector, _minScale: number, _stepPos: number, _stepScale: number): void {
        console.log("Trees", _posStart, _posEnd);
        let transform: DOMMatrix = crc2.getTransform();
        let step: Vector = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };

        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);

        do {
            drawTree();

            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);

        } while (--_nTrees > 0);

        crc2.setTransform(transform);
    }

    function drawTree(): void {
        console.log("Tree");
        let nBranches: number = 50;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);

        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);

        crc2.save();
        crc2.translate(0, -120);

        do {
            let y: number = Math.random() * 350;
            let size: number = 1 - y / 700;
            let x: number = (Math.random() - 0.5) * 2 * maxRadius;

            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);

            let colorAngle: number = 120 - Math.random() * 60;
            let color: string = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";

            crc2.fillStyle = color;
            crc2.fill(branch);

            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }

    // Hintergrund als erstes. 
    function drawBackground(): void {
        console.log("Background");

        // Für den Verlauf brauchen wir einen Gradienten. Linear um dass der Farbverlauf von oben nach unten geht
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height); // Letzter Wert sagt aus, dass von oben nach unten
        gradient.addColorStop(0, "lightblue"); // 0 für den Start
        gradient.addColorStop(golden, "white"); // golden --> heißt bei 0.62, weil ich das in der Variablen schon festgelegt habe.
        gradient.addColorStop(1, "HSL(100, 80%, 30%)"); // 1 für das Ende --> grün

        // Verlauf wird also von blau - grün gehen

        crc2.fillStyle = gradient; // Damit es überhaupt gefüllt wird --> fillStyle 
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); // Gradient wird genutzt
    }

    // Sonne
    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2); // Radialer Gradient wird gebaut, damit es kreisförmig zur Sonne passt.

    // Sonne wird um den Punkt 0, 0 verlaufen, weil wir das KO-System dann beliebig verschieben können

        // Farbverlauf für die Sonne:
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1"); // Haltepunkt --> Bei r1 soll das Gelb am hellsten sein.
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0"); // 0 --> Volltransparent, 50% maximal hell bei maximaler Sättigung

        crc2.save(); // erst saven
        crc2.translate(_position.x, _position.y); // Translation zur Position --> Sonne wird verschoben. Da es ein Vektor ist, kann man die Komponenten einzeln betrachten
        crc2.fillStyle = gradient; // FillStyle verwenden
        crc2.arc(0, 0, r2, 0, 2 * Math.PI); // Es soll ein Bogen gezeichnet werden. 2x damit es kein Halbkreis ist, sondern ein Kreis
        crc2.fill();
        crc2.restore(); // man könnte auch auf die Standarttransformation zurückgehen, aber wenn die Sonne mal in einer Verschachtelung ist, lieber nur den save() aufrufen. 
    }

    // Wolke (mit Parametern für die Position und Größe)
    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 20; // Anzahl der Partikel
        let radiusParticle: number = 50; // Radius für die einzelnen Partikel
        let particle: Path2D = new Path2D(); // Damit der Rechner nicht immer wieder durch das arc-Kommando laufen muss, berechnet man den Pfad nur einmal und merkt sich den!
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        // Pfadbefehl
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); // Partikel: 0, 0 --> um den Ursprung herum mit dem Radius eines Partikels 
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)"); // Bei 0 wollen wir ihn Transparent haben. Sättigung und Helligkeit von 100%, Die 0.5 stehen für Halbdurchlässigkeit
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)"); // Letzte 0 --> Vollkommen durchlässig

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        // Damit genügend Partikel gezeichnet werden, for-Schleife: 19
        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            
            crc2.save(); // Jeden Partikel speichern. Save ist total wichtig!

            // Zufallszahlen, um die Partikel zufällig anordnen zu können
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);

            // Die einzelnen Koordinatensystem verschieben, damit die Partikel nicht alle auf einer Stelle sind
            crc2.translate(x, y);
            crc2.fill(particle); // Ein Partikel

            crc2.restore(); // Damit die Wolken nicht nach jedem Partikel immer mehr verschwinden
        }
        crc2.restore();
    }

    // Straße:
    function drawStreet(_position: Vector, _widthBack: number, _widthFront: number): void {
        console.log("Street", _position, _widthBack, _widthFront);
        
        crc2.beginPath();
        crc2.moveTo(_position.x + _widthBack / 2, _position.y);
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(_position.x - _widthBack / 2, _position.y);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkgrey"); // Gradient von schwarz zu grau
        gradient.addColorStop(0.6, "black");

        crc2.fillStyle = gradient;
        crc2.fill();

    }


    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50; // Minimale Schrittweite --> Horizontaler Abstand zwischen Bergen und Tälern
        let stepMax: number = 150;
        let x: number = 0; // wandert langsam von links nach rechts

        crc2.save();
        crc2.translate(_position.x, _position.y); // Translate zu der Position, in x- und y-Richtung

        // Pfad wird gebaut --> einmalig
        crc2.beginPath();
        crc2.moveTo(0, 0); // bezieht sich auf _position.x und _position.y --> Koordinatensystem ist verschoeben
        crc2.lineTo(0, -_max); // Negativ, weil die Berge nach oben gehen

        // Fußgesteuerte Schleife (unten wird erst entschieden, ob es weiter geht)
        do { 
            x += stepMin + Math.random() * (stepMax - stepMin); // x wird um eine Zufallszahl erhöhrt werden (mind. stepMin) und Anteil zwischen Bereich stepMin und stepMax
            let y: number = - _min - Math.random() * (_max - _min);

            crc2.lineTo(x, y); // Linienzug wird fortgeführt
        } while ( x < crc2.canvas.width);

        crc2.lineTo(x, 0); // Wieder auf Höhe 0
        crc2.closePath(); // Vor allem für Füllung wichtig

        let gradient: CanvasGradient =  crc2.createLinearGradient( 0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow); // Farbhaltepunkt
        gradient.addColorStop(0.7, _colorHigh); // Farbhaltepunkt --> Nicht 1, weil manche Spitzen nicht so hoch gehen

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

}
