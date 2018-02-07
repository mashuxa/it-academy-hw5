(function () {
    "use strict";
    const K = 735.499; // p(W)
    const S = 100; // spacing, km/h
    const G = 9.8; // acceleration of gravity
    const KF = 55; // correction factor
    let protoCar = {
        race: function (dist) {
            let v = (this.carSpeedUp * S) / G;
            let time = new Date((dist / v) * 60 * 60 * 1000);
            return Math.floor(dist / v) + ":" + time.getUTCMinutes() + ":" + time.getUTCSeconds() + "." + time.getUTCMilliseconds();
        }
    };

    function Car(carWeight, tankVolume, enginePower) {
        this.carWeight = carWeight;
        this.tankVolume = tankVolume;
        this.enginePower = enginePower;
        Object.defineProperties(this, {
            carSpeedUp: {
                get: function () {
                    return (S * this.carWeight * G) / (this.enginePower * K);
                }
            }
            , fuelConsumption: {
                get: function () {
                    return (this.enginePower * this.tankVolume * KF) / (this.carWeight);
                }
            }
            , maxSpeed: {
                get: function () {
                    return (this.enginePower * this.tankVolume * KF) / (this.carWeight);
                }
            }
        });
    }
    Car.prototype = protoCar;
    let car = new Car(1050, 40, 105);
    console.log("result from prototype+constructor.js");
    console.log(car);
    console.log(car.race(200));
    console.log("*******");
}());