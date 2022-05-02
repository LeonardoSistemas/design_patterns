import AbstractFactory from "./AbstractFactory/AbstractFactory";
import ConcreteFactory1 from "./AbstractFactory/ConcreteFactory1";
import ConcreteCreator1 from "./FactoryMethod/ConcreteCreator1";
import Creator from "./FactoryMethod/Creator";

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

function clientAbstractFactory(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

clientCode(new ConcreteCreator1());
clientAbstractFactory(new ConcreteFactory1());
