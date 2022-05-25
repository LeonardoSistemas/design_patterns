import Builder from "./Builder";

export default class Director {
    private builder : Builder | undefined;

    public setBuilder(builder: Builder) : void{
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder?.producePartA();
    }

    public buildFullFeatureProduct() : void {
        this.builder?.producePartA();
        this.builder?.producePartB();
        this.builder?.producePartC();
    }
}