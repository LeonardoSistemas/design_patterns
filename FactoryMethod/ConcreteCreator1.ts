import ConcreteProduct1 from "./ConcreteProduct1";
import Creator from "./Creator";
import Product from "./Product";

export default class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}