import AbstractProductA from "./AbstractProductA";
import AbstractProductB from "./AbstractProductB";

export default class ConcreteProductB1 implements AbstractProductB {
    usefulFunctionB(): string {
        return 'The result of the prodcut B1'
    }
    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborationg with the (${result})`;
    }

}