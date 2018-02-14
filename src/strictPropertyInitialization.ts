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