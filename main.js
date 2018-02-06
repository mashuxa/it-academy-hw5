(function () {
    "use strict";

    const K = 735.499; // p(W)
    const S = 100; // spacing, km/h
    const G = 9.8; // acceleration of gravity
    const KF = 55; // correction factor


    function Car(carWeight, tankVolume, enginePower) {
        this.carWeight = carWeight;
        this.tankVolume = tankVolume;
        this.enginePower = enginePower;

        this.carSpeedUp = function (obj) {
            return (S * obj.carWeight * G) / (obj.enginePower * K);
        }(this);
        this.fuelConsumption = function (obj) {
            return (obj.enginePower * obj.carWeight / (obj.carSpeedUp * G * S));
        }(this);
        this.maxSpeed = function (obj) {
            return (obj.enginePower * obj.tankVolume * KF) / (obj.carWeight);
        }(this);

        this.race = function (dist) {
            let v = (this.carSpeedUp * S) / G;
            let time = new Date((dist / v) * 60 * 60 * 1000);
            return Math.floor(dist / v) + ":" + time.getUTCMinutes() + ":" + time.getUTCSeconds() + "." + time.getUTCMilliseconds();




        };
    }
    //    let car = new Car (1050, 40, 105);
    //    console.log(car.race(200));


}());
