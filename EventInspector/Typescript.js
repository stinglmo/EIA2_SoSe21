"use strict";
var Aufgabe02_1;
(function (Aufgabe02_1) {
    // Load-Listener wird installiert und die Funktion handleLoad wird aufgerufen.
    window.addEventListener("load", handleLoad);
    // Funktion handleLoad mit den drei Event-Listener mousemove, click und keyup wird deklariert.
    function handleLoad(_event) {
        let body = document.querySelector("body");
        let button = document.querySelector("button");
        document.addEventListener("mousemove", setInfoBox);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        document.addEventListener("riseup", buttonOutput);
        button.addEventListener("click", bubbleFunction);
    }
    // Funktion die beim Bewegen der Maus aufgerufen wird.
    function setInfoBox(_event) {
        // Cursorwert der auf das span-Element übergeben wird, damit es immer aktuell ist.
        let x = _event.pageX + 10;
        let y = _event.pageY + 10;
        // <HTMLElement> kann auch Null sein, aber wenn wir wissen, dass es vorhanden ist - passt es!
        let mouseCursorSpan = document.querySelector("span");
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
        console.log(_event);
    }
    // Zusatzaufgabe:
    let buttonCustomEvent = new CustomEvent("riseup", { detail: null });
    function bubbleFunction(_event) {
        document.dispatchEvent(buttonCustomEvent);
    }
    function buttonOutput(_event) {
        console.log(_event);
    }
})(Aufgabe02_1 || (Aufgabe02_1 = {}));
//# sourceMappingURL=Typescript.js.map