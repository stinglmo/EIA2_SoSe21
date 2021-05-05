namespace testL08 {

// L08 Test zu CanvasRenderingKontext
// Schwierigkeiten: Konnte nicht so wie in der Lektion vorgegeben verwendet werden, 
// da das Ergebnis hätte auch null sein können. Deshalb musste ich es so schreiben und prüfen ob es auch wirklich ein canvas Element gibt!

let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
let crc2: CanvasRenderingContext2D;
if (canvas)
crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

// oder ich sage, es soll wie ein CanvasElement behandelt werden:

// let canvas1: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
// let crc3: CanvasRenderingContext2D;
// crc3 = <CanvasRenderingContext2D>canvas1.getContext("2d");

// oder ich sage, es darf auf keinen Fall das Ergebnis null bekommen:

let canvas2: HTMLCanvasElement | null = document.querySelector("canvas");
crc2 = <CanvasRenderingContext2D>canvas2!.getContext("2d");

// crc2.beginPath
// crc2.drawFocusIfNeeded
// Fragen: Bedeutung von drawFocusIfNeeded --> 

// fillRect() und fillStyle()

crc2.fillStyle = "#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
// --> 1. Wert = Abstand zum linken Rand. Die Koordinate auf der x-Achse als horizontaler Startpunkt des Rechtecks.
// --> 2. Wert = Abstand vom oberen Rand. Die Koordinate auf der y-Achse als vertikaler Startpunkt des Rechtecks.
// --> Eigentlich (x, y, width, height)

// Test zu Arc:

crc2.beginPath();
crc2.arc(100, 100, 20, 0, 1.5 * Math.PI); // Kreis
crc2.closePath(); // Es wird ein Pfad vom aktuellen Punkt zum Startpunkt gelegt.
crc2.stroke(); // Pfad wird gemalt (Linie)

// Bedeutung von arc: Kreis
// Linienfarbe kann man ändern, indem man strokeStyle verwendet
// Wenn die Anwendung closePath nicht ausgeführt wird, wird der Kreis nicht vollendet

// Ellipse:

crc2.beginPath();
crc2.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI); // x und y Koordinate, x und y Radius, Rotation, startWinkel und Endwinkel
crc2.stroke();

// Linienzüge

// Beispiel Dreieck (in eine Funktion schreiben): es is noch gar nicht gezeichnet

crc2.beginPath();
crc2.moveTo(100, 100); // Startpunkt
crc2.lineTo(100, 300); // nach unten
crc2.lineTo(300, 300); // nach rechts
crc2.closePath(); // zum Startpunkt zurück
// Jetzt wird gezeichnet mit:
crc2.stroke();
// Ein neues Dreieck erschaffen ud Verschieben mit translate:
crc2.translate(400, 100);
// Funktion natürlich nochmal aufrufen

// Fragen: Selbst entscheiden ob im oder gegen den Uhrzeigersinn? --> Ja

// Kurven:

// Können wir die Dateien nochmal durchgehen?

// Linear Gradient:

let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

gradient.addColorStop(0, "black");
gradient.addColorStop(.5, "red");
gradient.addColorStop(1, "gold");

// Haltepunkte von 0 (Beginn) bis 1 (Ende)

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, 200, 100); // 200 breit und 100 hoch

// Ergebnis: Schwarz, rot, gold Flagge mit verschwommenen Kanten




}
