class UberCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        let distanceCost = distance * this.costPerKilometer;
        let timeCost = time * this.costPerMinute;
        let totalCost = this.baseFare + distanceCost + timeCost;
        return totalCost;
    }
}


let uberXCalculator = new UberCalculator(5, 1.5, 0.2);

let distanceTraveled = 20; // in kilometers
let timeTaken = 15; // in minutes

let totalPrice = uberXCalculator.calculatePrice(distanceTraveled, timeTaken);

console.log(`Uber Price: $${totalPrice.toFixed(2)}`);
