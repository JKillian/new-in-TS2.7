// instructions: switch between TS2.6 and 2.7 while viewing this file

class RollerCoaster {
    numLoops!: number;

    constructor() {
        this.rideManyTimesToFigureOutThings();
    }

    public rideManyTimesToFigureOutThings() {
       this.numLoops = 23;
    }

    private doubleLoops() {
        this.numLoops *= 2;
    }
}