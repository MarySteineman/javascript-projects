//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores, averages) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
        this.averages = averages;
    }
    addScore(newScore) {
        this.scores.push(newScore);
        return newScore;
    }
    average() {
        this.averages = 0;
        for (i = 0; i < this.scores.length; i++) {
            this.averages += this.scores[i];
        }
        this.averages = math.round((this.averages / this.scores.length) * 10)/10;
        // Math.round(number*10)/10
        return this.averages;
    } 
}
//Let’s multiply 1.23 by 10 (1.23*10 = 12.3) and then apply the method. Math.round(12.3) returns 12. Why do this? Well, if we divide 12 by 10 (12/10 = 1.2) we get the result of rounding 1.23 to one decimal place.

// Combining these steps gives us Math.round(1.23*10)/10, which returns the value 1.2.
const candidateOne = new CrewCandidate("Bubba Bear", "135 kg", [88, 85, 90]);
const candidateTwo = new CrewCandidate("Merry Maltese", "1.5 kg", [93, 88, 97]);
const candidateThree = new CrewCandidate("Glad Gator", "225 kg", [75, 78, 62]);

console.log(candidateOne);
console.log(candidateTwo);
console.log(candidateThree);
candidateOne.addScore(83);
console.log(candidateOne.scores);
candidateOne.average();
console.log(candidateTwo.average)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.