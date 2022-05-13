import ConcreteCreator1 from "./FactoryMethod/ConcreteCreator1";
import Creator from "./FactoryMethod/Creator";
import AbstractFactory from "./AbstractFactory/AbstractFactory";
import ConcreteFactory1 from "./AbstractFactory/ConcreteFactory1";
import Director from "./Builder/Director";
import ConcreteBuilder from "./Builder/ConcreteBuilder1";

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

function clientBuilder(director: Director){
    const builder = new ConcreteBuilder();
    director.setBuilder(builder);
    console.log('Standard full featured product');
    director.buildFullFeatureProduct();
    builder.getProduct().listParts();
    console.log('Custom product');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

clientCode(new ConcreteCreator1());
clientAbstractFactory(new ConcreteFactory1());
clientBuilder(new Director);
