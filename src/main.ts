import ConcreteCreator1 from "./FactoryMethod/ConcreteCreator1";
import Creator from "./FactoryMethod/Creator";

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

clientCode(new ConcreteCreator1());
