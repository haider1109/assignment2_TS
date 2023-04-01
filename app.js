var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = /** @class */ (function () {
    function vehicle(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    vehicle.prototype.getMake = function () {
        return this.make;
    };
    vehicle.prototype.getModel = function () {
        return this.model;
    };
    vehicle.prototype.getYear = function () {
        return this.year;
    };
    vehicle.prototype.isRented = function () {
        return this.rented;
    };
    vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    vehicle.prototype.rent = function () {
        if (this.isRented()) {
            console.log("vehicle is already rented.");
        }
        else {
            this.setRented(true);
            console.log("vehicle is rented.");
        }
    };
    vehicle.prototype.returnvehicle = function () {
        if (this.isRented()) {
            this.setRented(false);
            console.log("vehicle is returned.");
        }
        else {
            console.log("vehicle is not rented.");
        }
    };
    return vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, door, check_ac) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.door = door;
        _this.check_ac = check_ac;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 30;
    };
    Car.prototype.hasAirConditioning = function () {
        return this.check_ac;
    };
    Car.prototype.getdoor = function () {
        return this.door;
    };
    return Car;
}(vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, num_wheels, pay_load_capacity) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.num_wheels = num_wheels;
        _this.pay_load_capacity = pay_load_capacity;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 80;
    };
    Truck.prototype.getnum_wheels = function () {
        return this.num_wheels;
    };
    Truck.prototype.getpay_load_capacity = function () {
        return this.pay_load_capacity;
    };
    return Truck;
}(vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, engine_size, check_helmet) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.engine_size = engine_size;
        _this.check_helmet = check_helmet;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 30;
    };
    Motorcycle.prototype.getengine_size = function () {
        return this.engine_size;
    };
    Motorcycle.prototype.hasHelmet = function () {
        return this.check_helmet;
    };
    return Motorcycle;
}(vehicle));
var my_car = new Car("Toyota", "Fortuner", 2021, false, 4, true);
my_car.rent();
my_car.returnvehicle();
