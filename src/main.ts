import ConcreteCreator1 from "./Criacionais/FactoryMethod/ConcreteCreator1";
import Creator from "./Criacionais/FactoryMethod/Creator";
import AbstractFactory from "./Criacionais/AbstractFactory/AbstractFactory";
import ConcreteFactory1 from "./Criacionais/AbstractFactory/ConcreteFactory1";
import Director from "./Criacionais/Builder/Director";
import ConcreteBuilder from "./Criacionais/Builder/ConcreteBuilder1";
import Prototype from "./Criacionais/Prototype/Prototype";
import ComponetWithBackReference from "./Criacionais/Prototype/ComponentWithBackReference";
import Singleton from "./Criacionais/Singleton/Singleton";
import Target from "./Estruturais/Adapter/Target";
import Adaptee from "./Estruturais/Adapter/Adaptee";
import Adapter from "./Estruturais/Adapter/Adapter";
import Abstraction from "./Estruturais/Bridge/Abstraction";
import ConcreteImplementationA from "./Estruturais/Bridge/ConcreteImplementationA";
import Component from "./Estruturais/Composite/Component";
import Leaf from "./Estruturais/Composite/Leaf";
import Composite from "./Estruturais/Composite/Composite";

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

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

function clientAdapter(target: Target) {
    console.log(target.request());
}

function clienteBridge(abstraction: Abstraction) {
    console.log(abstraction.operation());
}

function clientComposite(component: Component) {
    console.log(`RESULT: ${component.operation()}`);
}

function clientCompositeBranch() {
    const tree = new Composite();
    const branch1 = new Composite();
    branch1.add(new Leaf());
    branch1.add(new Leaf());
    const branch2 = new Composite();
    branch2.add(new Leaf());
    tree.add(branch1);
    tree.add(branch2);
    console.log('Client: Now I\'ve got a composite tree:');
    return tree;
}

clientCode(new ConcreteCreator1());
clientAbstractFactory(new ConcreteFactory1());
clientBuilder(new Director);
clientPrototype();
clientSingleton();
clientAdapter(new Target);
clientAdapter(new Adapter(new Adaptee));
clienteBridge(new Abstraction(new ConcreteImplementationA()));
clientComposite(new Leaf);
clientComposite(clientCompositeBranch());