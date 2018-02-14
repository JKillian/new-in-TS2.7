// instructions: switch between TS2.6 and 2.7 while viewing this file

type Car =   { gasInTank: number; maxSpeed: number}
type Truck = { gasInTank: number; maxSpeed: number, totalCargo: number}
type Train = { maxSpeed: number; totalCargo: number}
type Vehicle = Car | Truck | Train;

function buyGasIfNeeded (vehicle: Vehicle, amount: number) {
    if ("gasInTank" in vehicle) {
        vehicle.gasInTank += amount;
    } else {
        throw new Error("Your vehicle is sooo green!");
    }
}
