"use strict";
var RandomPoem;
(function (RandomPoem) {
    // Drei Arrays mit den jeweiligen Subjektiven, Verben und Objektiven
    let subjects = ["Paul", "Lisa", "Max", "Sophie", "Tom", "Die Putzfrau"];
    let verbs = ["tötet", "liebt", "putzt", "kocht", "heiratet", "verbrennt"];
    let objects = ["Fliegen", "einen Freund", "eine Giraffe", "das Haus", "die Sekretärin", "die Polizei"];
    debugger;
    // While-Schleife, die so lange ausgeführt wird, solange sich noch Subjektive im jeweiligen Array befinden.
    // Mit document.write manipuliere ich den Dom und bereite ihn auf die Verse des Gedichts vor.
    while (0 < subjects.length) {
        let verse = getVerse();
        console.log(verse);
        document.write("<p>" + verse + "</p>");
    }
    // Funktion die das Gedicht mit den zufälligen Versen ausführt.
    function getVerse() {
        return popRandomElement(subjects) + " " + popRandomElement(verbs) + " " + popRandomElement(objects);
    }
    // Funktion, die durch Math.random eine Zufallszahl generiert, die dann als Index für alle drei Arrays verwendet wird.
    // Mit Splice cutte ich das Wort weg, welches schon verwendet wurde, damit es nicht doppelt vorkommen kann.
    function popRandomElement(_array) {
        let index = Math.floor(Math.random() * _array.length);
        return _array.splice(index, 1).toString();
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=TypeScript.js.map