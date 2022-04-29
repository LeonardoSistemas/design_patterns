import Product from "./Product";

export default abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: the same creators code has just worked with ${product.operation()}`;
    }
}