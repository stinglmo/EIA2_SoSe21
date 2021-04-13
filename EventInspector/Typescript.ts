namespace Aufgabe02_1 {

// Load-Listener wird installiert und die Funktion handleLoad wird aufgerufen.
window.addEventListener("load", handleLoad);

// Funktion handleLoad mit den drei Event-Listener mousemove, click und keyup wird deklariert.
function handleLoad(_event: Event): void {

    let body: HTMLElement = <HTMLElement>document.querySelector("body");
    
    body.addEventListener("mousemove", setInfoBox);

    body.addEventListener("click", logInfo);

    body.addEventListener("keyup", logInfo);
}

// Funktion die beim Bewegen der Maus aufgerufen wird.
function setInfoBox(_event: MouseEvent): void {

// Cursorwert der auf das span-Element übergeben wird, damit es immer aktuell ist.
let x: number = _event.offsetX;
let y: number = _event.offsetY;

// <HTMLElement> kann auch Null sein, aber wenn wir wissen, dass es vorhanden ist - passt es!
let body: HTMLElement = <HTMLElement>_event.target;
let mouseCursorSpan: HTMLSpanElement = <HTMLElement>document.querySelector("span");

body.appendChild(mouseCursorSpan);

// Positionierung des Span-Elements
mouseCursorSpan.style.left = x + "px";
mouseCursorSpan.style.top = y + "px";

}

// Funktion, die beim Klicken der Maus und der Tastatur aufgerufen wird.
function logInfo(_event: Event): void {
    console.log("Event started: " + _event.type);
    console.log("Target: " + _event.target);
    console.log("CurrentTarget: " + _event.currentTarget);
    console.log("Event-Phase = " + _event.eventPhase);
    console.log("Path: " + _event.composedPath());
    }
}

