import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let coaches: Coach[] = [];
coaches.push(myCricketCoach, myGolfCoach);

for (let coach of coaches) {
  console.log(coach.getDailyWorkout());
}
