import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";

export default class ConcreteProductB2 implements AbstractProductB{
    usefulFunctionB(): string {
        return 'The result of the product B2'
    }
    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The resul of the B2 collaborationg with the (${result})`;
    }

}