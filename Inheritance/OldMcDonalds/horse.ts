namespace OMD {

    export class Horse extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string, _specialAction: string) {

            super(_name, _food, _foodAmount, _sound, _specialAction);
            this.springingHigh();
        }

        springingHigh(): void {
            console.log("The Horse can spring high");
            
        }

    }
}