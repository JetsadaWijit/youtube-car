// brand, model, year, price - string
// elite - boolean

export default class Car {
    constructor(brand, model, year, price, elite) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.elite = elite;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getYear() {
        return this.year;
    }

    getPrice() {
        return this.price;
    }

    isElite() {
        return this.elite;
    }
}