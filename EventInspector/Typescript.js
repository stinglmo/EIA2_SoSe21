"use strict";
var Aufgabe02_1;
(function (Aufgabe02_1) {
    // Load-Listener wird installiert und die Funktion handleLoad wird aufgerufen.
    window.addEventListener("load", handleLoad);
    // Funktion handleLoad mit den drei Event-Listener mousemove, click und keyup wird deklariert.
    function handleLoad(_event) {
        let body = document.querySelector("body");
        body.addEventListener("mousemove", setInfoBox);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
    }
    // Funktion die beim Bewegen der Maus aufgerufen wird.
    function setInfoBox(_event) {
        // Cursorwert der auf das span-Element übergeben wird, damit es immer aktuell ist.
        let x = _event.offsetX;
        let y = _event.offsetY;
        // <HTMLElement> kann auch Null sein, aber wenn wir wissen, dass es vorhanden ist - passt es!
        let body = _event.target;
        let mouseCursorSpan = document.querySelector("span");
        body.appendChild(mouseCursorSpan);
        // Positionierung des Span-Elements
        mouseCursorSpan.style.left = x + "px";
        mouseCursorSpan.style.top = y + "px";
    }
    // Funktion, die beim Klicken der Maus und der Tastatur aufgerufen wird.
    function logInfo(_event) {
        console.log("Event started: " + _event.type);
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Event-Phase = " + _event.eventPhase);
        console.log("Path: " + _event.composedPath());
    }
})(Aufgabe02_1 || (Aufgabe02_1 = {}));
//# sourceMappingURL=Typescript.js.map