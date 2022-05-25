import Builder from "./Builder";
import Product1 from "./Product1";

export default class ConcreteBuilder implements Builder {
    private product!: Product1;

    constructor() {
        this.reset();
    }

    public reset() : void {
        this.product = new Product1();
    }

    producePartA(): void {
        this.product.parts.push('PartA1');
    }
    producePartB(): void {
        this.product.parts.push('PartB1');
    }
    producePartC(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct() : Product1 {
        const result = this.product;
        this.reset();
        return result;
    }

}