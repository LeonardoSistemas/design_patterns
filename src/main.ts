import ConcreteCreator1 from "./FactoryMethod/ConcreteCreator1";
import Creator from "./FactoryMethod/Creator";
import AbstractFactory from "./AbstractFactory/AbstractFactory";
import ConcreteFactory1 from "./AbstractFactory/ConcreteFactory1";
import Director from "./Builder/Director";
import ConcreteBuilder from "./Builder/ConcreteBuilder1";
import Prototype from "./Prototype/Prototype";
import ComponetWithBackReference from "./Prototype/ComponentWithBackReference";
import Singleton from "./Singleton/Singleton";

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

function clientBuilder(director: Director) {
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

function clientPrototype() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponetWithBackReference(p1);

    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('Primitive field values have been carried over to a clone. Yay!');
    } else {
        console.log('Primitive field values have not been copied. Booo!');
    }
    if (p1.component === p2.component) {
        console.log('Simple component has not been cloned. Booo!');
    } else {
        console.log('Simple component has been cloned. Yay!');
    }

    if (p1.circularReference === p2.circularReference) {
        console.log('Component with back reference has not been cloned. Booo!');
    } else {
        console.log('Component with back reference has been cloned. Yay!');
    }

    if (p1.circularReference.prototype === p2.circularReference.prototype) {
        console.log('Component with back reference is linked to original object. Booo!');
    } else {
        console.log('Component with back reference is linked to the clone. Yay!');
    }

}

function clientSingleton() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if(s1 === s2){
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode(new ConcreteCreator1());
clientAbstractFactory(new ConcreteFactory1());
clientBuilder(new Director);
clientPrototype();
clientSingleton();
