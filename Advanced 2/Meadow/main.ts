
/*
Aufgabe: Meadow 
Name: Mona Stingl
Matrikel: 267315
Datum: 17.06.21
Quellen: W3School, MDN und Unterrichtsmaterial
*/


namespace Advanced2 {

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    export let n: number = 10; //Anzahl NormaleBienen
    export let u: number = 5; //Anzahl HonigBienen
    export let allBees: SuperclassBee[] = [];
    export let allFlowers: SuperclassFlower[] = [];
    export let allClouds: SuperclassCloud[] = []; // noch füllen
    export let fullFlower: SuperclassFlower[] = []; // Für Blumen mit vollem Nektar

    // Start
    function handleLoad(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        //Hintergund mittels einer Klasse erstellen
        let bG: Background = new Background;
        console.log(bG); // nicht notwendig, aber der Linter spinnt sonst rum.

        //Speichern des Canvas als Bild (natürlich nachdem das Hintergrundbild gemalt wurde)
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Blumenwiese:

        // Blumen werden von hinten nach vorne gemalt
        for (var height: number = 450; height < 630; height += 4) { // 3er Schritt
            let width: number = Math.floor((Math.random() * 1100) - 10);

            let t: SuperclassFlower = new Tulip(width, height);
            t.nectarLevel = 0; // sind leer am Anfang
            allFlowers.push(t);

            let p: SuperclassFlower = new Poppy(width, height);
            p.nectarLevel = 0;
            allFlowers.push(p); // wird in das Array gepusht damit daraus später davon random Blumen (+Positionen) für die Bienen genommen werden können

            let s: SuperclassFlower = new Sunflower(width, height);
            s.nectarLevel = 0;
            allFlowers.push(s);

        }

         // Nectarlevel
        window.setInterval(
            function (): void {
                for (let flower of allFlowers) {
                    flower.update();
                }
        },  3000); // immer gleiche Höhe wie function

        //Erscheinen der 10 Bienen am Ausgang des Bienenstocks (beim Laden)
        for (let i: number = 0; i < n; i++) {
            
            let b: SuperclassBee = new NormalBee(1175, 505); // Neue Biene mit neuer Klasse
            allBees.push(b);
        }
        for (let i: number = 0; i < u; i++) {
                   
            let h: HoneyBee = new HoneyBee(1175, 505); // Neue Biene mit neuer Klasse
            allBees.push(h); 
            // console.log(allBees);
                  
        }

        // Große Wolken platzieren:
        for (let i: number = 0; i < 10; i++) {
            let oneBigCloud: SuperclassCloud = new BigCloud(100, 250);
            oneBigCloud.x = Math.random() * crc2.canvas.width;
            oneBigCloud.y = Math.random() * crc2.canvas.height - 550; // Obere Hälfte
            oneBigCloud.speed = (Math.random() + 1) * 0.3;
            allClouds.push(oneBigCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }

        // Kleine Wolken platzieren
        for (let i: number = 0; i < 10; i++) {
            let oneSmallCloud: SuperclassCloud = new SmallCloud(50, 100);
            oneSmallCloud.x = Math.random() * crc2.canvas.width;
            oneSmallCloud.y = Math.random() * crc2.canvas.height - 550; // Obere Hälfte
            oneSmallCloud.speed = (Math.random() + 1) * 0.2;
            allClouds.push(oneSmallCloud); // Wolke wird ins Array gepusht um beim animieren auf sie zugreifen zu können.
        }

        window.setTimeout(animate, 10);

    } // close load-function


    // ANIMATIONEN:

    // Funktion um die Bienen und Wolken zu animieren.
    function animate(): void {

        crc2.putImageData(imgData, 0, 0); // Bedeutung: das gespeicherte Bild wiederverwenden
        // crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        //Bei Klick / Touch auf den Canvas erscheint eine neue Biene am Ausgang des Bienenstocks.       
        canvas.addEventListener("pointerup", moreBees); // pointerup --> egal ob Touch/Click etc.

        // alle Blumen malen
        for (let flower of allFlowers) {
            flower.draw();
        }
        // Große und kleine Wolken werden gemalt und animiert
        for (let i: number = 0; i < allClouds.length; i++) {


            for (let bigClouds of allClouds) { // Array durchgehen mit Hilfe der Variable bigClouds: und große Wolken nacheinander rausholen
                if (bigClouds instanceof BigCloud) { // wenn es eine große Wolke ist, dann bewege dich mit moveForward.
                    bigClouds.moveForward();
                    bigClouds.drawCloud1();
                }
            }

            for (let smallClouds of allClouds) {
                if (smallClouds instanceof SmallCloud) {
                    smallClouds.moveForward2();
                    smallClouds.drawCloud2();
                }
            }

            //Damit die Wolken wieder ins Bild kommen, sobald sie aus dem Bild geflogen sind.
            if (allClouds[i].x > + 1300) {
                allClouds[i].x = canvas.width - 2000;
            }

        }

        // drawClouds();

        // Biene - erst hier, damit sie nicht hinter den Wolken fliegen
        for (let i: number = 0; i < allBees.length; i++) {

            let b: SuperclassBee = allBees[i]; // Jede Biene im Array bekommt die Klasse 
            // und wird geupdatet, also an eine neue Position gebracht
            b.update();
        }

        window.setTimeout(animate, 10);

    } //animate zu

    // Funktion um bei Klick eine neue Biene erscheinen zu lassen
    function moreBees(_event: PointerEvent): void {

        let randomBee: number = Math.floor(Math.random() * 2);
        let xpos: number = _event.clientX + 190;
        let ypos: number = _event.clientY;

        switch (randomBee) {

            case 0:
                let b: SuperclassBee = new NormalBee(xpos, ypos); // Neue Biene mit neuer Klasse
                allBees.push(b);
                break;
            case 1:
                let h: SuperclassBee = new HoneyBee(xpos, ypos); // Neue Biene mit neuer Klasse
                allBees.push(h);
                break;
        }
    }


} // close namespace