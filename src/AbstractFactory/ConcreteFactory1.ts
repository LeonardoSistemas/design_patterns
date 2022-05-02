import AbstractFactory from "./AbstractFactory";
import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";
import ConcreteProductA1 from "./ConcreteProductA1";
import ConcreteProductB1 from "./ConcreteProductB1";

export default class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA{
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB{
        return new ConcreteProductB1();
    }
}