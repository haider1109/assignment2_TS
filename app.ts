abstract class vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;

    constructor(make: string, model: string, year: number, rented: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }

    getMake(): string {
        return this.make;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    isRented(): boolean {
        return this.rented;
    }

    setRented(rented: boolean): void {
        this.rented = rented;
    }

    abstract rentalRate(): number;

    rent(): void {
        if (this.isRented()) {
            console.log("vehicle is already rented.");
        } else {
            this.setRented(true);
            console.log("vehicle is rented.");
        }
    }

    returnvehicle(): void {
        if (this.isRented()) {
            this.setRented(false);
            console.log("vehicle is returned.");
        } else {
            console.log("vehicle is not rented.");
        }
    }
}

 class Car extends vehicle {
    private door: number;
    private check_ac: boolean;
  
    constructor(
      make: string,
      model: string,
      year: number,
      rented: boolean,
      door: number,
      check_ac: boolean
    ) {
      super(make, model, year, rented);
      this.door = door;
      this.check_ac = check_ac;
    }
  
    rentalRate(): number {
      return 30; 
    }
  
    hasAirConditioning(): boolean {
      return this.check_ac;
    }
  
    getdoor(): number {
      return this.door;
    }
  }
  
  class Truck extends vehicle {
    private num_wheels: number;
    private pay_load_capacity: number;
  
    constructor(
      make: string,
      model: string,
      year: number,
      rented: boolean,
      num_wheels: number,
      pay_load_capacity: number
    ) {
      super(make, model, year, rented);
      this.num_wheels = num_wheels;
      this.pay_load_capacity = pay_load_capacity;
    }
  
    rentalRate(): number {
      return 80; 
    }
  
    getnum_wheels(): number {
      return this.num_wheels;
    }
  
    getpay_load_capacity(): number {
      return this.pay_load_capacity;
    }
  }
  
  class Motorcycle extends vehicle {
    private engine_size: number;
    private check_helmet: boolean;
  
    constructor(
      make: string,
      model: string,
      year: number,
      rented: boolean,
      engine_size: number,
      check_helmet: boolean
    ) {
      super(make, model, year, rented);
      this.engine_size = engine_size;
      this.check_helmet = check_helmet;
    }
  
    rentalRate(): number {
      return 30; 
    }
  
    getengine_size(): number {
      return this.engine_size;
    }
  
    hasHelmet(): boolean {
      return this.check_helmet;
    }
  }
  

  const my_car = new Car("Toyota", "Fortuner", 2021, false, 4, true);
  my_car.rent(); 
  my_car.returnvehicle(); 
  