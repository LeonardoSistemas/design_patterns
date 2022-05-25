import AbstractProductA from "./AbstractProductA";

export default class ConcreteProductA1 implements AbstractProductA {
    usefulFunctionA(): string {
        return 'The result of the product A1';
    }

}