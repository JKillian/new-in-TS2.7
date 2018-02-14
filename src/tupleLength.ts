type OldSATScore = [number, number]; /* Math, Reading */
type NewSATScore = [number, number, number]; /* Math, Reading, Writing */

let myScore: OldSATScore = [240, 300];
let girlfriendScore: NewSATScore = [800, 800, 800];

// let's give me a little help...
myScore = girlfriendScore;