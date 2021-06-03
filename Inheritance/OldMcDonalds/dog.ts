namespace OMD {

    export class Dog extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string, _specialAction: string) { // Gibt Sachen weiter

            super(_name, _food, _foodAmount, _sound, _specialAction); //Platzhalter für Superklasse - pendant zu this
            this.catchingSticks();
        }

        catchingSticks(): void {
            console.log("The dog is catching sticks");
            
        }

    }
}