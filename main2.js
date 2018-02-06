(function () {
    "use strict";
    const K = 735.499; // p(W)
    const S = 100; // spacing, km/h
    const G = 9.8; // acceleration of gravity
    const KF = 55; // correction factor

    class Car {
        constructor(carWeight, tankVolume, enginePower) {
            this.carWeight = carWeight;
            this.tankVolume = tankVolume;
            this.enginePower = enginePower;
        }

        get carSpeedUp() {
            return (S * this.carWeight * G) / (this.enginePower * K);
        }
        get fuelConsumption() {
            return (this.enginePower * this.carWeight / (this.carSpeedUp * G * S));
        }

        get maxSpeed() {
            return (this.enginePower * this.tankVolume * KF) / (this.carWeight);
        }


        race(dist) {
            let v = (this.carSpeedUp * S) / G;
            let time = new Date((dist / v) * 60 * 60 * 1000);
            return Math.floor(dist / v) + ":" + time.getUTCMinutes() + ":" + time.getUTCSeconds() + "." + time.getUTCMilliseconds();
        }

    }

    let car = new Car(1050, 40, 105);
    console.log(car);
    console.log(car.race(200));


}());
